"use client";

import VoteToggle from './VoteToggle';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { Vote } from '../lib/votes-store';

export type RankItem = {
  position: number;
  id: string;
  title?: string;
  name?: string;
  artists?: string[];
  members?: string[];
  origin?: string;
  isAiGenerated?: boolean;
  links?: { spotify?: string; youtube?: string; profile?: string };
  trend24h?: number;
  trend7d?: number;
  likes?: number;
  dislikes?: number;
  views?: number;
};

export type RankKind = 'musicas' | 'bandas' | 'djs' | 'ia';

function Trend({ value }: { value?: number }) {
  if (value === undefined || value === null) return <span className="trend">--</span>;
  const sign = value >= 0 ? '+' : '';
  const up = value > 0;
  const color = up ? '#15803d' : value < 0 ? '#b91c1c' : '#6b7280';
  const symbol = up ? '▲' : value < 0 ? '▼' : '•';
  return (
    <span className="trend" style={{ color }}>{symbol} {sign}{Math.round(value * 100)}%</span>
  );
}

function Subinfo({ kind, item }: { kind: RankKind; item: RankItem }) {
  if (kind === 'musicas') return <span className="artists">{item.artists?.join(', ')}</span>;
  if (kind === 'bandas') return <span className="artists">Banda{item.members?.length ? `: ${item.members.join(', ')}` : ''}</span>;
  if (kind === 'djs') return <span className="artists">DJ/Produtor{item.members?.length ? ` (aliases: ${item.members.join(', ')})` : ''}</span>;
  if (kind === 'ia') return <span className="artists">Origem: {item.origin ?? 'IA'}</span>;
  return null;
}

export default function RankCard({ kind, item }: { kind: RankKind; item: RankItem }) {
  const router = useRouter();
  const title = item.title ?? item.name ?? '?';
  const isMusic = kind === 'musicas' || kind === 'ia';
  const internalHref = isMusic ? `/tracks/${item.id}` : kind === 'bandas' ? `/bands/${item.id}` : kind === 'djs' ? `/djs/${item.id}` : '#';
  const externalProfile = item.links?.profile && (item.links.profile.startsWith('http') || item.links.profile.startsWith('www.'))
    ? (item.links.profile.startsWith('www.') ? `https://${item.links.profile}` : item.links.profile)
    : undefined;
  const detailHref = isMusic && externalProfile ? externalProfile : internalHref;

  const safeUrl = (u?: string) => {
    if (!u) return '#';
    if (u.startsWith('http:') && !u.startsWith('http://')) return u.replace(/^http:/, 'http://');
    if (u.startsWith('https:') && !u.startsWith('https://')) return u.replace(/^https:/, 'https://');
    if (u.startsWith('http://') || u.startsWith('https://') || u.startsWith('/')) return u;
    if (u.startsWith('www.')) return `https://${u}`;
    if (u.startsWith('_/')) return `/${u}`;
    return u.startsWith('/') ? u : `/${u}`;
  };

  const hasSpotify = !!item.links?.spotify;
  const hasYoutube = !!item.links?.youtube;
  const hasAudio = hasSpotify || hasYoutube;
  const listenHref = safeUrl(
    (hasSpotify && item.links?.spotify) || (hasYoutube && item.links?.youtube) || item.links?.profile || detailHref
  );

  const fmt = (n?: number) => {
    if (n === undefined) return '--';
    if (n >= 1_000_000) return `${(n/1_000_000).toFixed(1)}M`;
    if (n >= 1_000) return `${(n/1_000).toFixed(1)}k`;
    return `${n}`;
  };

  const [likes, setLikes] = useState<number>(item.likes ?? 0);
  const [dislikes, setDislikes] = useState<number>(item.dislikes ?? 0);
  const [vote, setVote] = useState<Vote>('neutral');
  const hasTrends = typeof item.trend24h === 'number' || typeof item.trend7d === 'number';
  const hasMetrics = typeof item.likes === 'number' || typeof item.dislikes === 'number' || typeof item.views === 'number';

  async function onVote(next: Vote) {
    const prev = vote;
    if (prev === 'like') setLikes((v) => Math.max(0, v - 1));
    if (prev === 'dislike') setDislikes((v) => Math.max(0, v - 1));
    if (next === 'like') setLikes((v) => v + 1);
    if (next === 'dislike') setDislikes((v) => v + 1);
    setVote(next);
    try {
      await fetch('/api/v1/votes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ entityType: kind, entityId: item.id, prev, next })
      });
    } catch (e) { /* ignore */ }
  }

  const isExternalDetail = detailHref.startsWith('http');

  return (
    <article
      className="card"
      onClick={() => {
        if (isExternalDetail) window.open(detailHref, '_blank', 'noopener,noreferrer');
        else router.push(detailHref);
      }}
      style={{ cursor: 'pointer' }}
    >
      <div className="pos">{item.position}</div>
      <div style={{ minWidth: 0, flex: 1 }}>
        <div className="title">{title}</div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <Subinfo kind={kind} item={item} />
          {item.isAiGenerated && (
            <span className="chip">IA{item.origin ? ` • ${item.origin}` : ''}</span>
          )}
        </div>
        {hasTrends && (
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <Trend value={item.trend24h} />
            <span className="sep">•</span>
            <Trend value={item.trend7d} />
          </div>
        )}
        {hasMetrics && (
          <div className="metrics">
            <span>Likes {fmt(likes)}</span>
            <span>Dislikes {fmt(dislikes)}</span>
            <span>Views {fmt(item.views)}</span>
          </div>
        )}
        <div onClick={(e) => e.stopPropagation()}>
          <VoteToggle initial={vote} onChange={onVote} />
        </div>
      </div>
      <div className="actions" aria-label="Ações" onClick={(e) => e.stopPropagation()}>
        {hasAudio ? (
          <a
            className="play-btn play-on"
            aria-label={`Tocar ${title}`}
            href={listenHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            ▶
          </a>
        ) : (
          <span className="play-btn play-off" aria-label={`Sem áudio para ${title}`}>▶</span>
        )}
      </div>
    </article>
  );
}


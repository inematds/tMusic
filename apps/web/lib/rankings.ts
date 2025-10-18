export type MusicItem = {
  position: number;
  id: string;
  title: string;
  artists: string[];
  isAiGenerated?: boolean;
  links?: { spotify?: string; youtube?: string };
  trend24h?: number;
  trend7d?: number;
  likes?: number;
  dislikes?: number;
  views?: number;
  origin?: string;
};

export type BandItem = {
  position: number;
  id: string;
  name: string;
  members?: string[];
  links?: { profile?: string };
  trend24h?: number;
  trend7d?: number;
  likes?: number;
  dislikes?: number;
  views?: number;
};

export type DjItem = {
  position: number;
  id: string;
  name: string;
  aliases?: string[];
  links?: { profile?: string };
  trend24h?: number;
  trend7d?: number;
  likes?: number;
  dislikes?: number;
  views?: number;
};

export const MUSICAS: MusicItem[] = [
  { position: 1, id: 'trk_1', title: 'Samba do Futuro', artists: ['DJ Aurora', 'MC Neo'], isAiGenerated: false, trend24h: 0.12, trend7d: 0.35, likes: 3200, dislikes: 120, views: 125000, links: { spotify: 'https://open.spotify.com/track/mock1' } },
  { position: 2, id: 'trk_2', title: 'Brega AI (Remix)', artists: ['SunoBot', 'DJ Recife'], isAiGenerated: true, origin: 'Suno', trend24h: 0.08, trend7d: 0.27, likes: 2800, dislikes: 340, views: 98000, links: { youtube: 'https://youtube.com/watch?v=mock2' } },
  { position: 3, id: 'trk_3', title: 'Funk Neon (GenAI Mix)', artists: ['MC Prisma'], isAiGenerated: true, origin: 'Riffusion', trend24h: 0.07, trend7d: 0.22, likes: 2400, dislikes: 90, views: 87000, links: { spotify: 'https://open.spotify.com/track/mock3' } },
  { position: 4, id: 'trk_4', title: 'Pagode 3000', artists: ['Grupo Aurora'], isAiGenerated: false, trend24h: 0.05, trend7d: 0.18, likes: 2100, dislikes: 80, views: 76000, links: { youtube: 'https://youtube.com/watch?v=mock4' } },
  { position: 5, id: 'trk_5', title: 'ForrÃ³ Cyborg', artists: ['DJ SertÃ£o'], isAiGenerated: false, trend24h: 0.04, trend7d: 0.16, likes: 1900, dislikes: 70, views: 72000, links: { spotify: 'https://open.spotify.com/track/mock5' } },
  { position: 6, id: 'trk_6', title: 'Trap da Aurora', artists: ['Auror4'], isAiGenerated: false, trend24h: 0.03, trend7d: 0.14, likes: 1600, dislikes: 60, views: 65000, links: { youtube: 'https://youtube.com/watch?v=mock6' } },
  { position: 7, id: 'trk_7', title: 'BregaWave', artists: ['MC ParÃ¡'], isAiGenerated: false, trend24h: 0.03, trend7d: 0.12, likes: 1500, dislikes: 55, views: 60000, links: { spotify: 'https://open.spotify.com/track/mock7' } },
  { position: 8, id: 'trk_8', title: 'AxÃ© Quantum (AI Edit)', artists: ['Bahia Beat'], isAiGenerated: true, origin: 'Custom', trend24h: 0.02, trend7d: 0.10, likes: 1300, dislikes: 50, views: 54000, links: { youtube: 'https://youtube.com/watch?v=mock8' } },
  { position: 9, id: 'trk_9', title: 'Drill AmazÃ´nia', artists: ['MC Norte'], isAiGenerated: false, trend24h: 0.02, trend7d: 0.09, likes: 1200, dislikes: 48, views: 52000, links: { spotify: 'https://open.spotify.com/track/mock9' } },
  { position: 10, id: 'trk_10', title: 'Sertanejo HologrÃ¡fico (AI Cover)', artists: ['Dupla 5G'], isAiGenerated: true, origin: 'Canto', trend24h: 0.01, trend7d: 0.08, likes: 1100, dislikes: 42, views: 50000, links: { youtube: 'https://youtube.com/watch?v=mock10' } },
];

export const BANDAS: BandItem[] = [
  { position: 1, id: 'bnd_1', name: 'Grupo Aurora', members: ['Ana', 'Leo', 'Vic'], trend24h: 0.08, trend7d: 0.25, likes: 2100, dislikes: 75, views: 64000, links: { profile: 'https://example.com/band/bnd_1' } },
  { position: 2, id: 'bnd_2', name: 'Bahia Beat', members: ['Bia', 'Davi'], trend24h: 0.06, trend7d: 0.20, likes: 1900, dislikes: 60, views: 58000, links: { profile: 'https://example.com/band/bnd_2' } },
  { position: 3, id: 'bnd_3', name: 'Dupla 5G', members: ['Gus', 'Gui'], trend24h: 0.05, trend7d: 0.18, likes: 1700, dislikes: 55, views: 52000, links: { profile: 'https://example.com/band/bnd_3' } },
  { position: 4, id: 'bnd_4', name: 'MCs do Norte', members: ['MC Norte', 'MC Manaus'], trend24h: 0.04, trend7d: 0.16, likes: 1600, dislikes: 52, views: 50000, links: { profile: 'https://example.com/band/bnd_4' } },
  { position: 5, id: 'bnd_5', name: 'Pagode 3000', members: ['P1', 'P2', 'P3'], trend24h: 0.04, trend7d: 0.14, likes: 1500, dislikes: 48, views: 47000, links: { profile: 'https://example.com/band/bnd_5' } },
  { position: 6, id: 'bnd_6', name: 'ForrÃ³ Cyborg', members: ['DJ SertÃ£o', 'MC Cabra'], trend24h: 0.03, trend7d: 0.13, likes: 1400, dislikes: 45, views: 44000, links: { profile: 'https://example.com/band/bnd_6' } },
  { position: 7, id: 'bnd_7', name: 'AxÃ© Quantum', members: ['Beto', 'Lia'], trend24h: 0.03, trend7d: 0.12, likes: 1300, dislikes: 42, views: 42000, links: { profile: 'https://example.com/band/bnd_7' } },
  { position: 8, id: 'bnd_8', name: 'BregaWave', members: ['MC ParÃ¡', 'DJ BelÃ©m'], trend24h: 0.02, trend7d: 0.11, likes: 1200, dislikes: 40, views: 40000, links: { profile: 'https://example.com/band/bnd_8' } },
  { position: 9, id: 'bnd_9', name: 'Funk Neon Crew', members: ['MC Prisma', 'DJ Neon'], trend24h: 0.02, trend7d: 0.10, likes: 1100, dislikes: 38, views: 38000, links: { profile: 'https://example.com/band/bnd_9' } },
  { position: 10, id: 'bnd_10', name: 'Samba do Futuro Band', members: ['DJ Aurora', 'MC Neo'], trend24h: 0.01, trend7d: 0.09, likes: 1000, dislikes: 35, views: 36000, links: { profile: 'https://example.com/band/bnd_10' } },
];

export const DJS: DjItem[] = [
  { position: 1, id: 'dj_1', name: 'DJ Aurora', aliases: ['Auror4'], trend24h: 0.10, trend7d: 0.28, likes: 2600, dislikes: 80, views: 88000, links: { profile: 'https://example.com/dj/dj_1' } },
  { position: 2, id: 'dj_2', name: 'DJ Recife', aliases: ['RecifeBot'], trend24h: 0.07, trend7d: 0.22, likes: 2300, dislikes: 75, views: 82000, links: { profile: 'https://example.com/dj/dj_2' } },
  { position: 3, id: 'dj_3', name: 'DJ Neon', aliases: ['NeonFX'], trend24h: 0.06, trend7d: 0.20, likes: 2100, dislikes: 70, views: 78000, links: { profile: 'https://example.com/dj/dj_3' } },
  { position: 4, id: 'dj_4', name: 'DJ BelÃ©m', aliases: ['Bel3m'], trend24h: 0.05, trend7d: 0.18, likes: 1900, dislikes: 65, views: 73000, links: { profile: 'https://example.com/dj/dj_4' } },
  { position: 5, id: 'dj_5', name: 'DJ SertÃ£o', aliases: ['SertaoX'], trend24h: 0.04, trend7d: 0.15, likes: 1700, dislikes: 60, views: 69000, links: { profile: 'https://example.com/dj/dj_5' } },
  { position: 6, id: 'dj_6', name: 'DJ Manaus', aliases: [], trend24h: 0.04, trend7d: 0.14, likes: 1600, dislikes: 58, views: 65000, links: { profile: 'https://example.com/dj/dj_6' } },
  { position: 7, id: 'dj_7', name: 'DJ Bahia', aliases: ['BahBeat'], trend24h: 0.03, trend7d: 0.13, likes: 1500, dislikes: 55, views: 62000, links: { profile: 'https://example.com/dj/dj_7' } },
  { position: 8, id: 'dj_8', name: 'DJ ParÃ¡', aliases: [], trend24h: 0.02, trend7d: 0.11, likes: 1400, dislikes: 52, views: 59000, links: { profile: 'https://example.com/dj/dj_8' } },
  { position: 9, id: 'dj_9', name: 'DJ Prisma', aliases: [], trend24h: 0.02, trend7d: 0.10, likes: 1300, dislikes: 50, views: 56000, links: { profile: 'https://example.com/dj/dj_9' } },
  { position: 10, id: 'dj_10', name: 'DJ 5G', aliases: [], trend24h: 0.01, trend7d: 0.09, likes: 1200, dislikes: 48, views: 53000, links: { profile: 'https://example.com/dj/dj_10' } },
];

import { getTopTracksExternal } from './aggregator';

export function getItems(category: string) {
  if (category === 'bandas') return BANDAS;
  if (category === 'djs') return DJS;
  if (category === 'ia') return MUSICAS.filter((m) => m.isAiGenerated).map((m, idx) => ({ ...m, position: idx + 1 }));
  return MUSICAS;
}

export async function getItemsAsync(category: string, opts?: { source?: 'all'|'spotify'|'youtube'|'apple'|'deezer'; platform?: 'all'|'spotify'|'youtube'; timeframe?: '24h'|'7d' }) {
  if (category === 'musicas') {
    try {
      const ext = await getTopTracksExternal({ limit: 10, source: opts?.source ?? 'all', platform: opts?.platform ?? 'all', timeframe: opts?.timeframe ?? '24h' });
      if (ext.length) {
        return ext.map((m, idx) => ({
          position: idx + 1,
          id: m.id,
          title: m.title,
          artists: m.artists,
          links: m.links,
          origin: m.origin,
          isAiGenerated: false,
        })) as MusicItem[];
      }
    } catch (e) { /* ignore */ }
  }
  return getItems(category);
}




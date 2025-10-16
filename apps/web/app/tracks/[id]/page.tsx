import { notFound } from 'next/navigation';
import { getTrackById } from '../../../lib/tracks';

function inferBadges(title: string, artists: string[]): string[] {
  const badges: string[] = [];
  const t = title.toLowerCase();
  const joined = artists.join(' ').toLowerCase();
  if (t.includes('remix') || joined.includes('dj')) badges.push('DJ/Remix');
  if (t.includes('ai') || joined.includes('bot')) badges.push('IA');
  if (badges.length === 0) badges.push('Original');
  return badges;
}

export default function TrackPage({ params }: { params: { id: string } }) {
  const data = getTrackById(params.id);
  if (!data) return notFound();

  const badges = inferBadges(data.title, data.artists ?? []);

  return (
    <div>
      <h1 style={{marginBottom:8}}>{data.title}</h1>
      <div style={{display:'flex', gap:8, alignItems:'center', marginBottom:8}}>
        <span className="artists">{data.artists?.join(', ')}</span>
        <span className="artists">{"\u2022"}</span>
        {badges.map((b) => (
          <span key={b} className="chip">{b}</span>
        ))}
      </div>
      <div style={{display:'flex', gap:8, marginTop:12}}>
        {data.links?.spotify && <a className="btn" href={data.links.spotify} target="_blank" rel="noopener noreferrer">Ouvir no Spotify</a>}
        {data.links?.youtube && <a className="btn" href={data.links.youtube} target="_blank" rel="noopener noreferrer">Ouvir no YouTube</a>}
      </div>
    </div>
  );
}

import { notFound } from 'next/navigation';
import { DJS } from '../../../lib/rankings';

export default function DjPage({ params }: { params: { id: string } }) {
  const data = DJS.find(d => d.id === params.id);
  if (!data) return notFound();

  return (
    <div>
      <h1 style={{ marginBottom: 8 }}>{data.name}</h1>
      <div className="artists">Aliases: {data.aliases?.join(', ') ?? '-'}</div>
      <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
        {data.links?.profile && (
          <a className="btn btn-xs btn-listen" href={data.links.profile} target="_blank" rel="noopener noreferrer">Perfil</a>
        )}
      </div>
    </div>
  );
}

import RankCard, { RankItem, RankKind } from './RankCard';
import Link from 'next/link';

export default function RankSection({
  title,
  kind,
  items,
}: {
  title: string;
  kind: RankKind;
  items: RankItem[];
}) {
  return (
    <section style={{ marginTop: 24 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <h2 style={{ margin: 0 }}>{title}</h2>
        <Link className="btn" href={`/rankings/${kind}`}>Ver todos</Link>
      </div>
      {items.length === 0 ? (
        <div className="card" role="status" aria-live="polite">
          <div style={{ color: '#9ca3af' }}>Nenhum item disponível no momento.</div>
        </div>
      ) : (
        <div className="grid">
          {items.map((it) => (
            <RankCard key={`${kind}-${it.id}`} kind={kind} item={it} />
          ))}
        </div>
      )}
    </section>
  );
}

import Link from 'next/link';

const CATEGORIES = [
  { key: 'musicas', label: 'Músicas' },
  { key: 'bandas', label: 'Bandas' },
  { key: 'djs', label: 'DJs' },
  { key: 'ia', label: 'IA' },
] as const;

export default function CategoryTabs({ active, params }: { active: string; params: URLSearchParams }) {
  return (
    <nav style={{ display: 'flex', gap: 12, margin: '8px 0 12px 0' }}>
      {CATEGORIES.map((c) => {
        const href = `/rankings/${c.key}?${params.toString()}`;
        const isActive = c.key === active;
        return (
          <Link
            key={c.key}
            href={href}
            className="chip"
            aria-current={isActive ? 'page' : undefined}
            style={isActive ? { background: '#10172a', borderColor: '#60a5fa', color: '#e6edf3' } : undefined}
          >
            {c.label}
          </Link>
        );
      })}
    </nav>
  );
}

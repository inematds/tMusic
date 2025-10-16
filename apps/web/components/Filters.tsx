import Link from 'next/link';

type FilterProps = {
  basePath: string;
  searchParams: URLSearchParams;
};

function Chip({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      className="chip"
      style={active ? { background: '#10172a', borderColor: '#6ee7b7', color: '#e6edf3' } : undefined}
    >
      {label}
    </Link>
  );
}

export default function Filters({ basePath, searchParams }: FilterProps) {
  const scope = searchParams.get('scope') ?? 'br';
  const platform = searchParams.get('platform') ?? 'all';
  const timeframe = searchParams.get('timeframe') ?? '24h';

  const makeHref = (updates: Record<string, string>) => {
    const sp = new URLSearchParams(searchParams);
    Object.entries(updates).forEach(([k, v]) => sp.set(k, v));
    return `${basePath}?${sp.toString()}`;
  };

  return (
    <div className="toolbar">
      <Chip href={makeHref({ scope: 'br' })} label="BR" active={scope === 'br'} />
      <Chip href={makeHref({ platform: 'all' })} label="Todas" active={platform === 'all'} />
      <Chip href={makeHref({ platform: 'spotify' })} label="Spotify" active={platform === 'spotify'} />
      <Chip href={makeHref({ platform: 'youtube' })} label="YouTube" active={platform === 'youtube'} />
      <Chip href={makeHref({ timeframe: '24h' })} label="24h" active={timeframe === '24h'} />
      <Chip href={makeHref({ timeframe: '7d' })} label="7d" active={timeframe === '7d'} />
    </div>
  );
}


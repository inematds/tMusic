import CategoryTabs from '../../../components/CategoryTabs';
import Filters from '../../../components/Filters';
import RankSection from '../../../components/RankSection';
import type { RankItem, RankKind } from '../../../components/RankCard';
import { getItemsAsync } from '../../../lib/rankings';

const TITLE: Record<string, string> = {
  musicas: 'Top 10 MÃºsicas',
  bandas: 'Top 10 Bandas',
  djs: 'Top 10 DJs',
  ia: 'Top 10 IA',
};

const KIND_MAP: Record<string, RankKind> = {
  musicas: 'musicas',
  bandas: 'bandas',
  djs: 'djs',
  ia: 'ia',
};

export default async function CategoryPage({ params, searchParams }: { params: { category: string }; searchParams: Record<string, string | string[] | undefined> }) {
  const category = (params.category ?? 'musicas').toLowerCase();
  const scope = (typeof searchParams.scope === 'string' ? searchParams.scope : 'br') ?? 'br';
  const platform = (typeof searchParams.platform === 'string' ? searchParams.platform : 'all') ?? 'all';
  const timeframe = (typeof searchParams.timeframe === 'string' ? searchParams.timeframe : '24h') ?? '24h';
  const source = (typeof searchParams.source === 'string' ? searchParams.source : 'all') ?? 'all';

  const qs = new URLSearchParams({ category, scope, platform, timeframe, source });
  const data = { items: await getItemsAsync(category, { source: source as any, platform: platform as any, timeframe: timeframe as any }) };

  const paramsForTabs = new URLSearchParams({ scope, platform, timeframe, source });
  const kind = KIND_MAP[category] ?? 'musicas';
  const items = (data.items ?? []) as RankItem[];

  return (
    <section>
      <CategoryTabs active={category} params={paramsForTabs} />
      <Filters basePath={`/rankings/${category}`} searchParams={qs} />
      <RankSection title={TITLE[category] ?? 'Top 10'} kind={kind} items={items} />
    </section>
  );
}


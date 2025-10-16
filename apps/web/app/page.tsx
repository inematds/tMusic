import RankSection from '../components/RankSection';
import type { RankItem } from '../components/RankCard';
import Filters from '../components/Filters';
import { getItemsAsync } from '../lib/rankings';

export default async function HomePage({ searchParams }: { searchParams: Record<string, string | string[] | undefined> }) {
  const scope = (typeof searchParams.scope === 'string' ? searchParams.scope : 'br') ?? 'br';
  const platform = (typeof searchParams.platform === 'string' ? searchParams.platform : 'all') ?? 'all';
  const timeframe = (typeof searchParams.timeframe === 'string' ? searchParams.timeframe : '24h') ?? '24h';

  const [musicas, bandas, djs, ia] = await Promise.all([
    getItemsAsync('musicas'),
    getItemsAsync('bandas'),
    getItemsAsync('djs'),
    getItemsAsync('ia'),
  ]);

  return (
    <section>
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom: 12}}>
        <div>
          <h1 style={{margin:0}}>Top 10 por Categoria</h1>
          <div className="sub">Filtros aplicados abaixo</div>
        </div>
      </div>
      <Filters basePath={`/`} searchParams={new URLSearchParams({ scope, platform, timeframe })} />
      <div className="grid-cats">
        <RankSection title="Top 10 Músicas" kind="musicas" items={musicas} />
        <RankSection title="Top 10 Bandas" kind="bandas" items={bandas} />
        <RankSection title="Top 10 DJs" kind="djs" items={djs} />
        <RankSection title="Top 10 IA" kind="ia" items={ia} />
      </div>
    </section>
  );
}









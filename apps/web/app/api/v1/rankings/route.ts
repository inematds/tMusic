import { getItems } from '../../../../lib/rankings';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const scope = (searchParams.get('scope') ?? 'br').toLowerCase();
  const platform = (searchParams.get('platform') ?? 'all').toLowerCase();
  const timeframe = (searchParams.get('timeframe') ?? '24h').toLowerCase();
  const category = (searchParams.get('category') ?? 'musicas').toLowerCase();

  const all = getItems(category).slice(0, 10);

  return Response.json({ scope, category, platform, timeframe, items: all });
}

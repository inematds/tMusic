import { fetchAppleTopSongs } from './sources/apple';
import { fetchDeezerTopTracks } from './sources/deezer';

export type AggregatedItem = {
  id: string;
  title: string;
  artists: string[];
  links?: { profile?: string };
  origin?: string;
};

function keyOf(it: AggregatedItem) {
  const title = (it.title || '').toLowerCase().trim();
  const artist = (it.artists?.[0] || '').toLowerCase().trim();
  return `${title}::${artist}`;
}

export async function getTopTracksExternal(limit = 10): Promise<AggregatedItem[]> {
  const [apple, deezer] = await Promise.all([
    fetchAppleTopSongs(50).catch(() => []),
    fetchDeezerTopTracks(50).catch(() => []),
  ]);

  // scoring by position (higher is better)
  const scoreMap = new Map<string, { item: AggregatedItem; score: number }>();

  const applyList = (list: AggregatedItem[], base = 0) => {
    list.forEach((it, idx) => {
      const k = keyOf(it);
      const add = base + (list.length - idx);
      if (!scoreMap.has(k)) scoreMap.set(k, { item: it, score: 0 });
      const v = scoreMap.get(k)!;
      v.score += add;
    });
  };

  applyList(apple, 50);
  applyList(deezer, 50);

  const ranked = Array.from(scoreMap.values())
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((v, i) => v.item);

  return ranked;
}


export type AppleSong = {
  id: string;
  name: string; // title
  artistName: string;
  url?: string;
};

export async function fetchAppleTopSongs(limit = 50): Promise<{
  id: string;
  title: string;
  artists: string[];
  links?: { profile?: string };
  origin?: string;
}[]> {
  const endpoint = `https://rss.applemarketingtools.com/api/v2/br/music/most-played/${limit}/songs.json`;
  try {
    const res = await fetch(endpoint, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error(`Apple RSS ${res.status}`);
    const data = await res.json();
    const results: AppleSong[] = data?.feed?.results ?? [];
    return results.map((r) => ({
      id: `apple:${r.id}`,
      title: r.name,
      artists: [r.artistName],
      links: { profile: r.url },
      origin: 'Apple Music',
    }));
  } catch (e) {
    return [];
  }
}


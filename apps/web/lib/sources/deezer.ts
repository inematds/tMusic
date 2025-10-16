type DeezerArtist = { id: number; name: string; link?: string };
type DeezerTrack = { id: number; title: string; link?: string; artist: DeezerArtist };

export async function fetchDeezerTopTracks(limit = 50): Promise<{
  id: string;
  title: string;
  artists: string[];
  links?: { profile?: string };
  origin?: string;
}[]> {
  // Brazil editorial id = 16
  const endpoint = `https://api.deezer.com/editorial/16/charts`;
  try {
    const res = await fetch(endpoint, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error(`Deezer ${res.status}`);
    const data = await res.json();
    const tracks: DeezerTrack[] = data?.tracks?.data ?? [];
    return tracks.slice(0, limit).map((t) => ({
      id: `deezer:${t.id}`,
      title: t.title,
      artists: [t.artist?.name].filter(Boolean) as string[],
      links: { profile: t.link },
      origin: 'Deezer',
    }));
  } catch (e) {
    return [];
  }
}


import { getTrackById } from '../../../../../lib/tracks';

export async function GET(_req: Request, { params }: { params: { id: string } }) {
  const t = getTrackById(params.id);
  if (!t) return new Response('Not found', { status: 404 });
  return Response.json({
    id: t.id,
    title: t.title,
    artists: t.artists,
    isAiGenerated: t.isAiGenerated,
    links: t.links,
  });
}


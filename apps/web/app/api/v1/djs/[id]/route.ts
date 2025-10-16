import { DJS } from '../../../../../lib/rankings';

export async function GET(_req: Request, { params }: { params: { id: string } }) {
  const d = DJS.find((x) => x.id === params.id);
  if (!d) return new Response('Not found', { status: 404 });
  return Response.json({ id: d.id, name: d.name, aliases: d.aliases ?? [], links: d.links ?? {} });
}


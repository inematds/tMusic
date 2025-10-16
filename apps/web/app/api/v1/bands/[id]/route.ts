import { BANDAS } from '../../../../../lib/rankings';

export async function GET(_req: Request, { params }: { params: { id: string } }) {
  const b = BANDAS.find((x) => x.id === params.id);
  if (!b) return new Response('Not found', { status: 404 });
  return Response.json({ id: b.id, name: b.name, members: b.members ?? [], links: b.links ?? {} });
}


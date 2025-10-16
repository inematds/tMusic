import { applyVote, type Vote } from '../../../../lib/votes-store';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const entityType = String(body.entityType ?? '').toLowerCase();
    const entityId = String(body.entityId ?? '');
    const prev = (String(body.prev ?? 'neutral') as Vote);
    const next = (String(body.next ?? 'neutral') as Vote);

    if (!entityType || !entityId) {
      return Response.json({ error: 'Missing entityType/entityId' }, { status: 400 });
    }

    const counters = applyVote(entityType, entityId, prev, next);
    return Response.json({ ok: true, counters });
  } catch (e) {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 });
  }
}


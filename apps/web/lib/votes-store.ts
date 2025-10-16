export type Vote = 'like' | 'neutral' | 'dislike';

type Counters = { likes: number; dislikes: number; views: number };

const store = new Map<string, Counters>();

function key(entityType: string, entityId: string) {
  return `${entityType}:${entityId}`;
}

export function getCounters(entityType: string, entityId: string): Counters {
  return store.get(key(entityType, entityId)) ?? { likes: 0, dislikes: 0, views: 0 };
}

export function applyVote(entityType: string, entityId: string, prev: Vote, next: Vote): Counters {
  const k = key(entityType, entityId);
  const c = { ...getCounters(entityType, entityId) };
  // remove previous
  if (prev === 'like') c.likes = Math.max(0, c.likes - 1);
  if (prev === 'dislike') c.dislikes = Math.max(0, c.dislikes - 1);
  // add next
  if (next === 'like') c.likes += 1;
  if (next === 'dislike') c.dislikes += 1;
  store.set(k, c);
  return c;
}

export function addView(entityType: string, entityId: string): Counters {
  const k = key(entityType, entityId);
  const c = { ...getCounters(entityType, entityId) };
  c.views += 1;
  store.set(k, c);
  return c;
}


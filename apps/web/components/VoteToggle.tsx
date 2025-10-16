"use client";

import { useState } from 'react';

type VoteState = 'dislike' | 'neutral' | 'like';

export default function VoteToggle({ initial = 'neutral', onChange }: { initial?: VoteState; onChange?: (v: VoteState) => void }) {
  const [state, setState] = useState<VoteState>(initial);
  const toggle = (v: VoteState) => {
    const next = state === v ? 'neutral' : v;
    setState(next);
    onChange?.(next);
  };

  return (
    <div className="thumbs" role="group" aria-label="Voto">
      <button
        type="button"
        className={`thumb-btn ${state === 'dislike' ? 'thumb-on' : 'thumb-off'}`}
        aria-pressed={state === 'dislike'}
        aria-label="Detestei"
        onClick={(e) => { e.stopPropagation(); toggle('dislike'); }}
      >
        ðŸ‘Ž
      </button>
      <button
        type="button"
        className={`thumb-btn ${state === 'like' ? 'thumb-on' : 'thumb-off'}`}
        aria-pressed={state === 'like'}
        aria-label="Gostei"
        onClick={(e) => { e.stopPropagation(); toggle('like'); }}
      >
        ðŸ‘
      </button>
    </div>
  );
}


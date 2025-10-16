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
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M10.5 20.5c.9 0 1.7-.6 1.9-1.5l1.1-4.3c.1-.4.5-.7.9-.7H19c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-8c-.6 0-1.1.2-1.5.6L5 8.1V19c0 .8.7 1.5 1.5 1.5h4zM3 8h2v11H3V8z"/>
        </svg>
      </button>
      <button
        type="button"
        className={`thumb-btn ${state === 'like' ? 'thumb-on' : 'thumb-off'}`}
        aria-pressed={state === 'like'}
        aria-label="Gostei"
        onClick={(e) => { e.stopPropagation(); toggle('like'); }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M13.5 3.5c-.9 0-1.7.6-1.9 1.5L10.5 9c-.1.4-.5.7-.9.7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h8c.6 0 1.1-.2 1.5-.6l4.5-3.5V5c0-.8-.7-1.5-1.5-1.5h-4zM21 5h-2v11h2V5z"/>
        </svg>
      </button>
    </div>
  );
}

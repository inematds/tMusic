import type { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'tMusic — Tendências Musicais do Brasil',
    template: 'tMusic — %s',
  },
  description: 'Tops e tendências de Músicas, Bandas, DJs e conteúdos IA no Brasil.',
  applicationName: 'tMusic',openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'tMusic',
    title: 'tMusic — Tendências Musicais do Brasil',
    description: 'Tops e tendências de Músicas, Bandas, DJs e conteúdos IA no Brasil.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'tMusic — Tendências Musicais do Brasil',
    description: 'Tops e tendências de Músicas, Bandas, DJs e conteúdos IA no Brasil.',
  },
};

const styles = `
  :root {
    --bg: #0b0e14;
    --panel: #121826;
    --muted: #7a8499;
    --text: #e6edf3;
    --accent: #6ee7b7;
    --accent-2: #60a5fa;
    --border: #1f2a44;
  }
  * { box-sizing: border-box; }
  html, body { height: 100%; }
  body {
    margin: 0;
    font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
    background: linear-gradient(180deg, #0b0e14 0%, #0e1320 100%);
    color: var(--text);
  }
  header {
    position: sticky; top: 0; z-index: 10;
    backdrop-filter: saturate(140%) blur(8px);
    background: rgba(11,14,20,0.6);
    border-bottom: 1px solid var(--border);
  }
  .container { max-width: 1280px; margin: 0 auto; padding: 16px; }
  .brand { display: flex; align-items: center; gap: 8px; font-weight: 700; }
  .brand .dot { width: 10px; height: 10px; border-radius: 50%; background: linear-gradient(135deg, var(--accent), var(--accent-2)); display: inline-block; }
  .sub { color: var(--muted); font-size: 14px; }
  .toolbar { display:flex; gap: 8px; margin-top: 10px; }
  .chip { border: 1px solid var(--border); background: #0f1524; color: #c7d2fe; padding: 6px 10px; border-radius: 999px; font-size: 12px; cursor: pointer; }
  .grid { display: grid; grid-template-columns: 1fr; gap: 12px; }
  @media (min-width: 680px) { .grid { grid-template-columns: 1fr; } }
  .card { background: var(--panel); border: 1px solid var(--border); border-radius: 12px; padding: 10px; display:flex; align-items:center; gap:10px; }
  .pos { width: 32px; height: 32px; border-radius: 8px; background: #0f1524; display:flex; align-items:center; justify-content:center; color:#9fb0ff; font-weight:700; border:1px solid var(--border); font-size: 13px; }
  .title { font-weight: 600; }
  .artists { color: var(--muted); font-size: 14px; }
  .spacer { flex: 1; }
  .card-main { display:flex; gap:10px; align-items:center; text-decoration:none; color: inherit; min-width: 0; flex: 1; }
  .btn { background: linear-gradient(135deg, var(--accent), var(--accent-2)); color: #0b0e14; border: none; padding: 8px 12px; border-radius: 8px; font-weight: 700; cursor: pointer; text-decoration:none; }
  .trend { font-size: 12px; color: #86efac; }
  .grid-cats { display: grid; grid-template-columns: 1fr; gap: 24px; }
  @media (min-width: 900px) { .grid-cats { grid-template-columns: 1fr 1fr; } }
  @media (min-width: 1100px) { .grid-cats { grid-template-columns: repeat(4, 1fr); } }
  .btn-sm { padding: 6px 10px; font-size: 12px; }
  .btn-xs { padding: 4px 8px; font-size: 11px; border-radius: 6px; }
  .btn-listen { background: linear-gradient(135deg, #22d3ee, #a78bfa); color: #0b0e14; }
  .actions { display: flex; flex-direction: column; gap: 6px; }
  .card { align-items: flex-start; }
  .metrics { font-size: 11px; color: var(--muted); display:flex; gap:10px; align-items:center; margin-top:6px; }
  .btn-ghost { background: transparent; border: 1px solid var(--border); color: var(--text); padding: 6px 10px; border-radius: 8px; font-size: 12px; text-align:center; }
  .like-row { display:flex; gap: 8px; }
  /* Segmented vote toggle */
  .segmented { display:flex; gap:6px; }
  .segmented .seg { width: 30px; height: 26px; border:1px solid var(--border); border-radius: 6px; background:#0f1524; color:#94a3b8; display:flex; align-items:center; justify-content:center; cursor:pointer; font-size:14px; }
  .segmented .seg.on.like { background:#0f1a14; border-color:#15803d; color:#bbf7d0; }
  .segmented .seg.on.dislike { background:#1a0f12; border-color:#b91c1c; color:#fecaca; }
  .segmented .seg.on.neutral { background:#0f1629; border-color:#334155; color:#cbd5e1; }
  /* Thumbs vote */
  .thumbs { display:flex; gap:8px; margin-top:6px; }
  .thumb-btn { width: 28px; height: 28px; border-radius: 6px; border:1px solid var(--border); display:flex; align-items:center; justify-content:center; background:#0f1524; font-size:14px; color:#9ca3af; cursor:pointer; }
  .thumb-on { color:#facc15; border-color:#ca8a04; background:#171308; }
  .thumb-off { color:#6b7280; border-color:#374151; background:#0f1524; }
  /* Play icon button */
  .play-btn { width: 28px; height: 28px; border-radius: 6px; border:1px solid var(--border); display:flex; align-items:center; justify-content:center; background:#0f1524; font-size:14px; text-decoration:none; }
  .play-on { color: #ef4444; border-color:#7f1d1d; background:#180f10; }
  .play-off { color: #6b7280; border-color:#374151; background:#0f1524; cursor: default; }
`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <style>{styles}</style>
        <header>
          <div className="container">
            <div className="brand"><span className="dot" /> tMusic</div>
            <div className="sub">Tendências Musicais do Brasil</div>
          </div>
        </header>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}




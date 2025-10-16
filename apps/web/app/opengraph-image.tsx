import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OG() {
  const { width, height } = size;
  return new ImageResponse(
    (
      <div
        style={{
          width,
          height,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(180deg, #0b0e14 0%, #0e1320 100%)',
          color: '#e6edf3',
          fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <div
            style={{
              width: 100,
              height: 100,
              borderRadius: 999,
              backgroundImage: 'linear-gradient(135deg, #6ee7b7, #60a5fa)',
              boxShadow: '0 10px 40px rgba(96,165,250,0.25)',
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 72, fontWeight: 800 }}>tMusic</div>
            <div style={{ fontSize: 28, color: '#9da7bd' }}>Tendências Musicais do Brasil</div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}


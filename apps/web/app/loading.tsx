export default function RootLoading() {
  return (
    <div aria-busy="true" aria-live="polite">
      <div className="sub">Carregando rankings...</div>
      <div className="grid-cats" style={{ marginTop: 16 }}>
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="card" style={{ height: 96, opacity: 0.6 }} />
        ))}
      </div>
    </div>
  );
}


export default function CategoryLoading() {
  return (
    <div aria-busy="true" aria-live="polite">
      <div className="sub">Carregando categoria...</div>
      <div className="grid" style={{ marginTop: 12 }}>
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="card" style={{ height: 84, opacity: 0.6 }} />
        ))}
      </div>
    </div>
  );
}


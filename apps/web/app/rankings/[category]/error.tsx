"use client";

export default function CategoryError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div role="alert">
      <h2>Erro ao carregar categoria</h2>
      <div className="sub">{error.message || 'Tente novamente mais tarde.'}</div>
      <button className="btn" onClick={() => reset()} style={{ marginTop: 12 }}>Tentar novamente</button>
    </div>
  );
}


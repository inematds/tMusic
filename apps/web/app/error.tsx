"use client";

export default function RootError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div role="alert">
      <h2>Ocorreu um erro</h2>
      <div className="sub">{error.message || 'Falha ao carregar a página.'}</div>
      <button className="btn" onClick={() => reset()} style={{ marginTop: 12 }}>Tentar novamente</button>
    </div>
  );
}


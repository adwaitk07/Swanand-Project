import { Headphones } from 'lucide-react';

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: 24 }}>
      <div
        style={{
          maxWidth: 560,
          padding: 24,
          borderRadius: 24,
          border: '1px solid rgba(71, 246, 255, 0.28)',
          background: 'rgba(10, 15, 28, 0.88)',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.35)',
          textAlign: 'center',
        }}
      >
        <Headphones size={48} color="#47f6ff" style={{ marginBottom: 16 }} />
        <span
          style={{
            display: 'block',
            marginBottom: 10,
            color: '#47f6ff',
            fontSize: '0.78rem',
            letterSpacing: '0.16em',
            textTransform: 'uppercase' as const,
          }}
        >
          Neon Studio
        </span>
        <h1 style={{ margin: '0 0 12px', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
          Browser Audio Workbench
        </h1>
        <p style={{ margin: '0 0 12px', lineHeight: 1.6, color: 'rgba(238, 245, 255, 0.82)' }}>
          Welcome to Neon Studio — your browser-based audio workspace.
        </p>
      </div>
    </div>
  );
}

export default App;

function Error({ statusCode }: { statusCode?: number }) {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      fontFamily: 'system-ui, sans-serif',
      backgroundColor: '#F5F0E8'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '4rem', fontWeight: 300, color: '#1c1409', opacity: 0.2 }}>
          {statusCode || 'Errore'}
        </h1>
        <p style={{ color: '#8a7e6b', fontSize: '0.875rem' }}>
          {statusCode === 404
            ? 'Pagina non trovata'
            : 'Si è verificato un errore'}
        </p>
        <a 
          href="/" 
          style={{ 
            display: 'inline-block',
            marginTop: '1.5rem',
            padding: '0.75rem 1.5rem',
            border: '1px solid #d4c9b5',
            color: '#1c1409',
            textDecoration: 'none',
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            fontFamily: 'monospace'
          }}
        >
          Torna alla Home
        </a>
      </div>
    </div>
  );
}

Error.getInitialProps = ({ res, err }: { res?: { statusCode: number }; err?: { statusCode: number } }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;

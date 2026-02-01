import React from 'react';
import PageTransition from '../components/PageTransition';

const Downloads = () => {
  return (
    <PageTransition>
      <div className="container">
        <h2>Descargas</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '40px' }}>Obtén la última versión de Leilos</p>
        
        <div className="card" style={{ maxWidth: '600px', margin: '0 auto', padding: '30px', background: 'var(--bg-card)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '8px' }}>
          <h3 style={{ color: 'var(--primary)', marginBottom: '15px' }}>Leilos Launcher v1.0.9</h3>
          <p style={{ marginBottom: '25px' }}>¡El launcher ya está disponible! Descárgalo ahora para comenzar a jugar.</p>
          
          <div style={{ marginBottom: '30px' }}>
              <a href="https://cdn.leilos.qzz.io/download/launcher/Leilos Launcher_1.0.9_x64_en-US.msi" target="_blank" rel="noopener noreferrer" style={{ 
                  display: 'inline-block',
                  padding: '12px 30px', 
                  fontSize: '1.2em', 
                  backgroundColor: 'var(--primary)', 
                  color: '#000', 
                  fontWeight: 'bold', 
                  borderRadius: '4px',
                  textDecoration: 'none',
                  boxShadow: '0 0 15px rgba(212, 175, 55, 0.4)'
              }}>
                  <i className="fas fa-download" style={{ marginRight: '10px' }}></i>
                  Descargar
              </a>
          </div>

          <div style={{ marginTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '20px' }}>
              <p style={{ fontSize: '0.9em', color: 'var(--text-muted)', marginBottom: '10px' }}>
                  ¿No te fías? Revisa nuestro código fuente en GitHub:
              </p>
              <a href="https://github.com/LeilosFN/launcher-v2" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none', wordBreak: 'break-all' }}>
                  <i className="fab fa-github" style={{ marginRight: '5px' }}></i>
                  https://github.com/LeilosFN/launcher-v2
              </a>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Downloads;

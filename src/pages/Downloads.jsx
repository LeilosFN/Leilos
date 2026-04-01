import React from 'react';
import PageTransition from '../components/PageTransition';

const Downloads = () => {
  return (
    <PageTransition>
      <div className="container">
        <h2>Downloads</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '40px' }}>Get the latest version of Leilos</p>
        
        <div className="card" style={{ maxWidth: '600px', margin: '0 auto', padding: '30px', background: 'var(--bg-card)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '8px' }}>
          <h3 style={{ color: 'var(--primary)', marginBottom: '15px' }}>Leilos Launcher v1.1.4</h3>
          <p style={{ marginBottom: '25px' }}>The launcher is now available. Download it to start playing.</p>
          
          <div style={{ marginBottom: '30px' }}>
              <a href="https://cdn.leilos.qzz.io/download/Leilos Launcher_1.1.4_x64_en-US.msi" target="_blank" rel="noopener noreferrer" style={{ 
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
                  Download
              </a>
          </div>

          <div style={{ marginTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '20px' }}>
              <p style={{ fontSize: '0.9em', color: 'var(--text-muted)', marginBottom: '10px' }}>
                  Want to verify? Check our source code on GitHub:
              </p>
              <a href="https://github.com/LeilosFN/launcher" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none', wordBreak: 'break-all' }}>
                  <i className="fab fa-github" style={{ marginRight: '5px' }}></i>
                  https://github.com/LeilosFN/launcher
              </a>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Downloads;

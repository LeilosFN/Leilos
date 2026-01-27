import React from 'react';

const Downloads = () => {
  return (
    <div className="container">
      <h2>Descargas</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '40px' }}>Obtén la última versión de Leilos</p>
      
      <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h3 style={{ color: '#b8b8b8' }}>No Disponible</h3>
        <p>Las descargas no están habilitadas por el momento. Estamos trabajando en la nueva versión.</p>
        <div style={{ marginTop: '20px', fontSize: '3em', color: '#333' }}>
            <i className="fas fa-tools"></i>
        </div>
      </div>
    </div>
  );
};

export default Downloads;
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="page-container">
      <div className="content-box">
        <h1 className="page-title">404</h1>
        <h2 className="subtitle" style={{ color: '#D4AF37', marginTop: '0' }}>Página No Encontrada</h2>
        
        <div className="info-text">
          <p>Parece que te has perdido en el vacío.</p>
          <p>La página que buscas no existe o ha sido movida.</p>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <Link to="/" className="download-btn">
            Volver al Inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

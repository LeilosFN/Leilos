import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container hero">
      <h1>Leilos</h1>
      <p>Un proyecto de Fortnite usando los archivos originales.</p>
      
      <div style={{ marginTop: '40px' }}>
        <a href="https://discord.gg/rNtPqQyBwg" target="_blank" rel="noopener noreferrer" className="btn" style={{ marginRight: '20px' }}>
          <i className="fab fa-discord"></i> Unirse al Discord
        </a>
        <a href="https://github.com/LeilosFN" target="_blank" rel="noopener noreferrer" className="btn">
          <i className="fab fa-github"></i> GitHub
        </a>
      </div>

      <div className="card-grid">
        <div className="card">
          <h3><i className="fas fa-server"></i> Servidores EU</h3>
          <p>Alojados en Madrid, España (Por ahora). Baja latencia y alto rendimiento garantizado.</p>
        </div>
        <div className="card">
          <h3><i className="fas fa-users"></i> Comunidad y Futuro</h3>
          <p>Cuanta más gente se una y ayude, mejor será el producto final. ¡Más diversión para todos!</p>
        </div>
        <div className="card">
          <h3><i className="fas fa-shield-alt"></i> 100% Seguro</h3>
          <p>Todo el contenido es seguro y verificado personalmente por nosotros. Tu seguridad es prioridad.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
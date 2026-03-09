import React from 'react';
import PageTransition from '../components/PageTransition';

const Home = () => {
  return (
    <PageTransition>
      <div className="container hero">
        <h1 className="brand-script">Leilos</h1>
        <p>A fucking Fortnite project that isn't from Epic. :) </p>
        
        <div style={{ marginTop: '40px' }}>
          <a href="https://mini.crisu.qzz.io/?d=LeilosDiscord" target="_blank" rel="noopener noreferrer" className="btn" style={{ marginRight: '20px' }}>
            <i className="fab fa-discord"></i> Join Discord
          </a>
          <a href="https://github.com/LeilosFN" target="_blank" rel="noopener noreferrer" className="btn">
            <i className="fab fa-github"></i> GitHub
          </a>
        </div>

        <div className="card-grid">
          <div className="card">
            <h3><i className="fas fa-server"></i> EU Servers</h3>
            <p>Hosted in Madrid, Spain (for now). Low latency and high performance.</p>
          </div>
          <div className="card">
            <h3><i className="fas fa-users"></i> Community & Future</h3>
            <p>The more people join and help, the better the final product. More fun for everyone.</p>
          </div>
          <div className="card">
            <h3><i className="fas fa-shield-alt"></i> 100% Safe</h3>
            <p>All content is safe and personally verified by us. Your security is a priority.</p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Home;

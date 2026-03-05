import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

const NotFound = () => {
  return (
    <PageTransition>
      <div className="page-container">
        <div className="content-box">
          <h1 className="page-title">404</h1>
          <h2 className="subtitle" style={{ color: '#D4AF37', marginTop: '0' }}>Page Not Found</h2>
          
          <div className="info-text">
            <p>It looks like you’re lost in the void.</p>
            <p>The page you’re looking for doesn’t exist or has been moved.</p>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <Link to="/" className="download-btn">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;

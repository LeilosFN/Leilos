import React from 'react';

const AccessDenied = () => {
  return (
    <div className="access-denied-container">
      <h1 className="glitch" data-text="403 FORBIDDEN">403 FORBIDDEN</h1>
      <h2 style={{ color: 'var(--text-main)', marginTop: '20px' }}>ACCESO DENEGADO</h2>
      <p style={{ color: '#ff0000', marginTop: '10px', letterSpacing: '2px' }}>PROPIEDAD DE LEILOS</p>
      <div style={{ marginTop: '30px', border: '1px solid #ff0000', padding: '10px' }}>
        <p style={{ fontSize: '0.8em', color: '#ff0000' }}>IP LOGGED // SECURITY ALERT</p>
      </div>
    </div>
  );
};

export default AccessDenied;
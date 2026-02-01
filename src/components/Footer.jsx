import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: 'rgba(5, 5, 5, 0.95)',
      borderTop: '1px solid rgba(212, 175, 55, 0.2)',
      padding: '50px 20px',
      marginTop: 'auto',
      color: 'var(--text-muted)',
      fontSize: '0.9em'
    }}>
      <div className="container" style={{ padding: '0', maxWidth: '1000px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', textAlign: 'left' }}>
          
          {/* Section 1: Legal & Disclaimer */}
          <div>
            <h4 style={{ color: 'var(--primary)', marginBottom: '15px', fontFamily: 'var(--font-orbitron)' }}>LEGAL</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div>
                <strong style={{ color: '#fff' }}>Términos y Condiciones</strong>
                <p style={{ fontSize: '0.85em', marginTop: '5px', lineHeight: '1.4' }}>
                  Este proyecto no está afiliado, asociado, autorizado, respaldado ni relacionado oficialmente de ninguna manera con Epic Games, Inc. Somos un proyecto independiente creado por la comunidad para la comunidad.
                </p>
              </div>
              <div style={{ marginTop: '10px' }}>
                <strong style={{ color: '#fff' }}>Política de Privacidad</strong>
                <p style={{ fontSize: '0.85em', marginTop: '5px', lineHeight: '1.4' }}>
                  Tu privacidad es prioridad. No recopilamos, almacenamos ni compartimos información personal. Todo el código es transparente, vigilado y controlado para garantizar tu seguridad.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Links & Contact */}
          <div>
            <h4 style={{ color: 'var(--primary)', marginBottom: '15px', fontFamily: 'var(--font-orbitron)' }}>ENLACES</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <a href="https://github.com/LeilosFN" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="fab fa-github"></i> GitHub (Código Fuente)
                </a>
              </li>
              <li>
                <a href="mailto:leilos@googlegroups.com" style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="fas fa-envelope"></i> Contacto (leilos@googlegroups.com)
                </a>
              </li>
            </ul>
          </div>

          {/* Section 3: Credits & Powered By */}
          <div>
             <h4 style={{ color: 'var(--primary)', marginBottom: '15px', fontFamily: 'var(--font-orbitron)' }}>CRÉDITOS</h4>
             <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <p style={{ fontSize: '0.9em' }}>&copy; 2026 Leilos. Todos los derechos reservados.</p>
                
                {/* Trae.ai Ad */}
                <a href="https://www.trae.ai" target="_blank" rel="noopener noreferrer" className="trae-badge">
                    <div style={{ width: '28px', height: '21px', flexShrink: 0 }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="21" fill="none" viewBox="0 0 28 21" className="logo-IzEEXr">
                            <g clipPath="url(#logo_svg__a)">
                                <path fill="#fff" d="M28.002 20.846H4v-3.998H0V.846h28.002zM4 16.848h20.002V4.845H4zm10.002-6.062-2.829 2.828-2.828-2.828 2.828-2.829zm8-.002-2.828 2.828-2.829-2.828 2.829-2.829z"></path>
                            </g>
                            <defs>
                                <clipPath id="logo_svg__a">
                                    <path fill="#fff" d="M0 .846h28.002v20H0z"></path>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div>
                        <span style={{ display: 'block', fontSize: '0.8em', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>Con la ayuda de</span>
                        <span style={{ fontWeight: 'bold', color: '#fff' }}>Trae.ai</span>
                    </div>
                </a>
             </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

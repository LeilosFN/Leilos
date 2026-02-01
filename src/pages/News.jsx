import React, { useState, useEffect } from 'react';
import PageTransition from '../components/PageTransition';

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://cdn.leilos.qzz.io/json/news.json')
      .then(response => {
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        return response.json();
      })
      .then(data => {
        // Check for new structure { news: [...] } or fallback to direct array
        const newsList = data.news || (Array.isArray(data) ? data : []);

        if (Array.isArray(newsList)) {
            setNews(newsList);
        } else {
            console.error("Data format error: Expected array or object with news key, got", data);
            setNews([]);
            setError("Formato de datos inválido recibido del CDN.");
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Error loading news:", err);
        setError(`Error de conexión: ${err.message}. Posible bloqueo CORS.`);
        setNews([]);
        setLoading(false);
      });
  }, []);

  return (
    <PageTransition>
      <div className="container">
        <h2>Noticias y Actualizaciones</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '40px' }}>Lo último del proyecto</p>
        
        {loading && <p>Cargando noticias...</p>}

        {error && (
          <div className="card" style={{ borderColor: '#ff0000', textAlign: 'left' }}>
              <h3 style={{ color: '#ff0000' }}>Error al cargar noticias</h3>
              <p>{error}</p>
          </div>
        )}
        
        {!loading && !error && news.length === 0 && (
           <p>No hay noticias disponibles.</p>
        )}

        {!loading && !error && news.length > 0 && (
          <div className="card-grid" style={{ gridTemplateColumns: '1fr' }}>
              {news.map((item, index) => (
                  <div key={index} className="card" style={{ textAlign: 'left' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                          <h3>{item.title || 'Sin Título'}</h3>
                          <span style={{ color: 'var(--primary)', fontSize: '0.9em' }}>{item.date || ''}</span>
                      </div>
                      <p>{item.content || ''}</p>
                  </div>
              ))}
          </div>
        )}
      </div>
    </PageTransition>
  );
};

export default News;

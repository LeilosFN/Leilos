import React, { useState, useEffect } from 'react';

const Status = () => {
  const [statuses, setStatuses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://cdn.leilos.qzz.io/json/status.json')
      .then(response => {
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        return response.json();
      })
      .then(data => {
        // Soporte para nueva estructura { services: [...] } o array directo antiguo
        const servicesList = data.services || (Array.isArray(data) ? data : []);

        if (Array.isArray(servicesList)) {
            setStatuses(servicesList);
        } else {
            console.error("Data format error: Expected array, got", data);
            setStatuses([]);
            setError("Formato de datos inválido recibido del CDN.");
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Error loading status:", err);
        setError(`Error de conexión: ${err.message}. Posible bloqueo CORS o archivo no encontrado.`);
        setStatuses([]);
        setLoading(false);
      });
  }, []);

  const getStatusClass = (status) => {
    if (!status) return 'status-offline';
    try {
        // If the item has a specific color property, we might handle it inline, 
        // but for class mapping we keep standard status logic unless overridden.
        // However, the indicator style below now prioritizes the 'color' prop.
        switch(status.toLowerCase()) {
            case 'online': return 'status-online';
            case 'offline': return 'status-offline';
            case 'down': return 'status-offline';
            case 'maintenance': return 'status-maintenance';
            default: return 'status-offline';
        }
    } catch (e) { return 'status-offline'; }
  };

  return (
    <div className="container">
      <h2>Estado de los Servicios</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '40px' }}>Monitoreo en tiempo real desde CDN</p>
      
      {loading && <p>Cargando estados...</p>}
      
      {error && (
        <div className="card" style={{ borderColor: '#ff0000' }}>
            <h3 style={{ color: '#ff0000' }}>Error</h3>
            <p>{error}</p>
            <p style={{ fontSize: '0.8em', color: '#888', marginTop: '10px' }}>
                Si estás en local, verifica que el CDN permita CORS (Access-Control-Allow-Origin: *).
            </p>
        </div>
      )}

      {!loading && !error && statuses.length === 0 && (
         <div className="card">
            <h3>Sin Información</h3>
            <p>No se encontraron servicios listados.</p>
         </div>
      )}

      {!loading && !error && statuses.length > 0 && (
        <div className="card-grid">
            {statuses.map((item, index) => (
                <div key={index} className="card">
                    <h3>
                        <span 
                            className={`status-indicator ${!item.color ? getStatusClass(item.status) : ''}`}
                            style={item.color ? { backgroundColor: item.color, color: item.color, boxShadow: `0 0 10px ${item.color}` } : {}}
                        ></span>
                        {item.name || 'Servicio Desconocido'}
                    </h3>
                    <p>Estado: <span style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>{item.status || 'Unknown'}</span></p>
                </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Status;
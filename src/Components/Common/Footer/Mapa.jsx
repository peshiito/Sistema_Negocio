import React from "react";
import "./Mapa.css";

const Mapa = () => {
  const direccion =
    "Av. 9 de Julio y Av. Corrientes, San Nicolás, Ciudad Autónoma de Buenos Aires, Argentina";

  const lat = -34.603722;
  const lng = -58.381592;

  const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`;

  return (
    <div className="mapa-container">
      <h3>Nuestra Ubicación</h3>
      <div className="mapa-content">
        <div className="mapa-frame">
          <iframe
            src={googleMapsUrl}
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: "8px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de Bebidas Online"
          ></iframe>
        </div>

        <div className="mapa-info">
          <div className="direccion-card">
            <div className="marker-icon">📍</div>
            <div className="direccion-text">
              <h4>Bebidas Online</h4>
              <p>{direccion}</p>
              <div className="horarios">
                <p>
                  <strong>Horarios:</strong>
                </p>
                <p>Lunes a Viernes: 9:00 - 20:00</p>
                <p>Sábados: 10:00 - 18:00</p>
                <p>Domingos: 10:00 - 14:00</p>
              </div>
            </div>
          </div>

          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
              direccion
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="direccion-btn"
          >
            Cómo llegar
          </a>
        </div>
      </div>
    </div>
  );
};

export default Mapa;

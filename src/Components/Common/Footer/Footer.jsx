// Footer.jsx
import React from "react";
import Mapa from "./Mapa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-moderno">
      {/* Sección de Información y Contacto */}
      <div className="footer-top">
        <div className="footer-container">
          {/* Columna Logo y Redes */}
          <div className="footer-col">
            <div className="logo-section">
              <div className="logo">
                <span className="logo-icon">🥂</span>
                <span className="logo-text">BebidasPremium</span>
              </div>
              <p className="footer-desc">
                Las mejores bebidas directamente a tu puerta. Calidad y servicio
                premium.
              </p>
              <div className="social-grid">
                <a href="#" className="social-card">
                  <div className="social-icon wa">
                    <i className="fab fa-whatsapp"></i>
                  </div>
                  <span>WhatsApp</span>
                </a>
                <a href="#" className="social-card">
                  <div className="social-icon ig">
                    <i className="fab fa-instagram"></i>
                  </div>
                  <span>Instagram</span>
                </a>
                <a href="#" className="social-card">
                  <div className="social-icon tk">
                    <i className="fab fa-tiktok"></i>
                  </div>
                  <span>TikTok</span>
                </a>
              </div>
            </div>
          </div>

          {/* Columna Enlaces Rápidos */}
          <div className="footer-col">
            <h4 className="footer-title">Categorías</h4>
            <div className="footer-links">
              <a href="#" className="footer-link">
                <span className="link-icon">🍺</span>
                Cervezas Artesanales
              </a>
              <a href="#" className="footer-link">
                <span className="link-icon">🍷</span>
                Vinos Premium
              </a>
              <a href="#" className="footer-link">
                <span className="link-icon">🥃</span>
                Whisky & Licores
              </a>
              <a href="#" className="footer-link">
                <span className="link-icon">🍸</span>
                Cocteles Preparados
              </a>
              <a href="#" className="footer-link">
                <span className="link-icon">🚫</span>
                Sin Alcohol
              </a>
            </div>
          </div>

          {/* Columna Contacto */}
          <div className="footer-col">
            <h4 className="footer-title">Contacto</h4>
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-details">
                  <span>Av. 9 de Julio y Corrientes</span>
                  <span>San Nicolás, CABA</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="contact-details">
                  <span>+54 11 2345-6789</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-details">
                  <span>hola@bebidaspremium.com</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="contact-details">
                  <span>Lun-Vie: 9:00-20:00</span>
                  <span>Sáb-Dom: 10:00-18:00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Newsletter */}
          <div className="footer-col">
            <h4 className="footer-title">Newsletter</h4>
            <div className="newsletter-section">
              <p>Recibí ofertas exclusivas y novedades</p>
              <div className="newsletter-form">
                <input
                  type="email"
                  placeholder="tu.email@ejemplo.com"
                  className="newsletter-input"
                />
                <button className="newsletter-btn">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
              <div className="payment-methods">
                <div className="payment-title">Métodos de pago</div>
                <div className="payment-icons">
                  <span className="payment-icon">💳</span>
                  <span className="payment-icon">📱</span>
                  <span className="payment-icon">💰</span>
                  <span className="payment-icon">🏦</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección del Mapa */}
      <div className="mapa-section">
        <Mapa />
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-bottom-content">
            <p>&copy; 2024 BebidasPremium. Todos los derechos reservados.</p>
            <div className="legal-links">
              <a href="#">Términos y Condiciones</a>
              <a href="#">Política de Privacidad</a>
              <a href="#">Venta Responsable</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

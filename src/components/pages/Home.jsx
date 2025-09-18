import React from 'react';

const Home = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section" style={{
        background: 'linear-gradient(135deg, #569264 0%, #4A7C59 100%)',
        color: 'white',
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <div className="hero-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ 
            fontSize: '3.5rem', 
            marginBottom: '20px', 
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            Bienvenidos a Talento Lab
          </h1>
          <p style={{ 
            fontSize: '1.3rem', 
            marginBottom: '40px',
            lineHeight: '1.6',
            opacity: '0.95'
          }}>
            El laboratorio de talentos tecnológicos que impulsa la innovación y el crecimiento de tu organización
          </p>
          <div className="hero-buttons" style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
              background: '#fff',
              color: '#569264',
              border: 'none',
              padding: '15px 30px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'transform 0.2s',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
            }}
            onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
            >
              Explorar Servicios
            </button>
            <button style={{
              background: 'transparent',
              color: '#fff',
              border: '2px solid #fff',
              padding: '15px 30px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => {
              e.target.style.background = '#fff';
              e.target.style.color = '#569264';
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = '#fff';
            }}
            >
              Contáctanos
            </button>
          </div>
        </div>
      </section>

      {/* Servicios Principales */}
      <section className="services-overview" style={{
        padding: '80px 20px',
        backgroundColor: '#f8f9fa'
      }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ 
            textAlign: 'center', 
            fontSize: '2.5rem', 
            marginBottom: '20px',
            color: '#333'
          }}>
            Nuestros Servicios
          </h2>
          <p style={{ 
            textAlign: 'center', 
            fontSize: '1.2rem', 
            marginBottom: '60px',
            color: '#666',
            maxWidth: '600px',
            margin: '0 auto 60px'
          }}>
            Conectamos talento tecnológico especializado con organizaciones que buscan impulsar su transformación digital
          </p>
          
          <div className="services-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '40px',
            marginTop: '40px'
          }}>
            <div className="service-card" style={{
              background: '#fff',
              padding: '40px',
              borderRadius: '12px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              textAlign: 'center',
              transition: 'transform 0.3s, box-shadow 0.3s',
              border: '1px solid #e9ecef'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)';
            }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🏢</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#569264' }}>
                Para Empresas
              </h3>
              <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '20px' }}>
                Impulsa la innovación y el crecimiento de tu empresa con nuestros equipos de desarrollo, consultoría tecnológica y soluciones a medida.
              </p>
              <button style={{
                background: '#569264',
                color: '#fff',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: '500'
              }}>
                Más información
              </button>
            </div>

            <div className="service-card" style={{
              background: '#fff',
              padding: '40px',
              borderRadius: '12px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              textAlign: 'center',
              transition: 'transform 0.3s, box-shadow 0.3s',
              border: '1px solid #e9ecef'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)';
            }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🏛️</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#569264' }}>
                Para Instituciones
              </h3>
              <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '20px' }}>
                Conectamos instituciones públicas y privadas con profesionales tecnológicos especializados para proyectos de impacto.
              </p>
              <button style={{
                background: '#569264',
                color: '#fff',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: '500'
              }}>
                Más información
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="stats-section" style={{
        background: 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)',
        color: '#fff',
        padding: '80px 20px'
      }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ 
            textAlign: 'center', 
            fontSize: '2.5rem', 
            marginBottom: '60px'
          }}>
            Nuestro Impacto
          </h2>
          <div className="stats-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            textAlign: 'center'
          }}>
            <div className="stat-item">
              <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '10px' }}>500+</div>
              <div style={{ fontSize: '1.2rem', opacity: '0.9' }}>Profesionales Especialistas</div>
            </div>
            <div className="stat-item">
              <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '10px' }}>150+</div>
              <div style={{ fontSize: '1.2rem', opacity: '0.9' }}>Organizaciones Atendidas</div>
            </div>
            <div className="stat-item">
              <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '10px' }}>95%</div>
              <div style={{ fontSize: '1.2rem', opacity: '0.9' }}>Índice de Satisfacción</div>
            </div>
            <div className="stat-item">
              <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '10px' }}>24/7</div>
              <div style={{ fontSize: '1.2rem', opacity: '0.9' }}>Soporte Disponible</div>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="why-choose-us" style={{
        padding: '80px 20px',
        backgroundColor: '#fff'
      }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ 
            textAlign: 'center', 
            fontSize: '2.5rem', 
            marginBottom: '60px',
            color: '#333'
          }}>
            ¿Por qué elegir Talento Lab?
          </h2>
          
          <div className="features-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '40px'
          }}>
            <div className="feature-item" style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '4rem', 
                marginBottom: '20px',
                background: 'linear-gradient(135deg, #569264, #4A7C59)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>🚀</div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '15px', color: '#333' }}>
                Implementación Rápida
              </h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Equipos listos para trabajar en menos de 48 horas con onboarding optimizado
              </p>
            </div>

            <div className="feature-item" style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '4rem', 
                marginBottom: '20px',
                background: 'linear-gradient(135deg, #569264, #4A7C59)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>🎯</div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '15px', color: '#333' }}>
                Talento Especializado
              </h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Profesionales con experiencia comprobada en tecnologías de vanguardia
              </p>
            </div>

            <div className="feature-item" style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '4rem', 
                marginBottom: '20px',
                background: 'linear-gradient(135deg, #569264, #4A7C59)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>💰</div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '15px', color: '#333' }}>
                Costo Optimizado
              </h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Hasta 40% menos costoso que contratación directa con misma calidad
              </p>
            </div>

            <div className="feature-item" style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '4rem', 
                marginBottom: '20px',
                background: 'linear-gradient(135deg, #569264, #4A7C59)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>🔒</div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '15px', color: '#333' }}>
                Seguridad Garantizada
              </h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Cumplimiento de normativas internacionales y estándares de seguridad
              </p>
            </div>

            <div className="feature-item" style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '4rem', 
                marginBottom: '20px',
                background: 'linear-gradient(135deg, #569264, #4A7C59)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>📈</div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '15px', color: '#333' }}>
                Escalabilidad
              </h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Equipos que crecen con tus necesidades y proyectos en desarrollo
              </p>
            </div>

            <div className="feature-item" style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '4rem', 
                marginBottom: '20px',
                background: 'linear-gradient(135deg, #569264, #4A7C59)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>🤝</div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '15px', color: '#333' }}>
                Colaboración Efectiva
              </h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Metodologías ágiles y comunicación transparente en cada proyecto
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section" style={{
        background: 'linear-gradient(135deg, #569264 0%, #4A7C59 100%)',
        color: '#fff',
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            marginBottom: '20px'
          }}>
            ¿Listo para impulsar tu transformación digital?
          </h2>
          <p style={{ 
            fontSize: '1.2rem', 
            marginBottom: '40px',
            opacity: '0.95',
            lineHeight: '1.6'
          }}>
            Contáctanos hoy y descubre cómo nuestro talento tecnológico puede transformar tu organización
          </p>
          <div className="cta-buttons" style={{ 
            display: 'flex', 
            gap: '20px', 
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button style={{
              background: '#fff',
              color: '#569264',
              border: 'none',
              padding: '15px 30px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'transform 0.2s',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
            }}>
              Agendar Consulta Gratuita
            </button>
            <button style={{
              background: 'transparent',
              color: '#fff',
              border: '2px solid #fff',
              padding: '15px 30px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}>
              Descargar Brochure
            </button>
          </div>
          <div style={{ marginTop: '40px', fontSize: '1.1rem', opacity: '0.9' }}>
            📞 +1 (555) 123-4567 | 📧 contacto@talentolab.com
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
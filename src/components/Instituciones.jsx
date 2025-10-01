import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext.jsx';
import './styles/Instituciones.css';

const Instituciones = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const { addToCart } = useCart();

  // Paquetes de servicios tecnológicos
  const servicePackages = [
    {
      id: 1,
      name: "Básico",
      subtitle: "Ideal para instituciones pequeñas",
      price: "$2,500",
      period: "/mes",
      description: "Perfecto para organizaciones que necesitan talento tecnológico específico",
      features: [
        "1-3 profesionales especializados",
        "Desarrolladores Full Stack",
        "Soporte técnico básico",
        "Gestión de proyectos incluida",
        "Onboarding rápido (48h)",
        "Comunicación por email/chat"
      ],
      popular: false,
      color: "blue"
    },
    {
      id: 2,
      name: "Profesional",
      subtitle: "Para instituciones medianas",
      price: "$5,500",
      period: "/mes",
      description: "Equipo completo de tecnología para proyectos complejos",
      features: [
        "4-8 profesionales especializados",
        "DevOps y arquitectos de software",
        "QA y testing automatizado",
        "Scrum Master incluido",
        "Soporte 24/7",
        "Reuniones semanales",
        "Métricas y reportes",
        "Capacitación del equipo interno"
      ],
      popular: true,
      color: "green"
    },
    {
      id: 3,
      name: "Enterprise",
      subtitle: "Para grandes instituciones",
      price: "$12,000",
      period: "/mes",
      description: "Solución completa con equipos multidisciplinarios",
      features: [
        "10+ profesionales especializados",
        "Arquitectos de soluciones",
        "Especialistas en ciberseguridad",
        "Data Scientists y ML Engineers",
        "Product Manager dedicado",
        "Consultoría estratégica",
        "SLA garantizado",
        "Integración con sistemas legacy",
        "Auditorías de código",
        "Escalabilidad empresarial"
      ],
      popular: false,
      color: "purple"
    },
    {
      id: 4,
      name: "Custom",
      subtitle: "Soluciones personalizadas",
      price: "Contactanos",
      period: "",
      description: "Nuestro equipo especializado te ayudará a encontrar la solución perfecta para tus necesidades",
      features: [
        "Equipos a medida",
        "Consultoría personalizada",
        "Soporte dedicado",
        "Capacitación personalizada",
        "Integraciones personalizadas",
        "Gestión de proyectos personalizada"
      ],
      popular: false,
      color: "orange"
    }
  ];

  const handleAddToCart = (pkg) => {
    addToCart({
      id: pkg.id,
      name: pkg.name,
      subtitle: pkg.subtitle,
      price: pkg.price,
      period: pkg.period,
      description: pkg.description
    });
    
    // Show confirmation message
    alert(`${pkg.name} ha sido agregado al carrito!`);
  };
  const benefits = [
    {
      icon: "🚀",
      title: "Implementación Rápida",
      description: "Equipos listos para trabajar en menos de 48 horas"
    },
    {
      icon: "🎯",
      title: "Talento Especializado",
      description: "Profesionales con experiencia en sector público y privado"
    },
    {
      icon: "💰",
      title: "Costo Optimizado",
      description: "Hasta 40% menos costoso que contratación directa"
    },
    {
      icon: "🔒",
      title: "Seguridad Garantizada",
      description: "Cumplimiento de normativas y estándares de seguridad"
    },
    {
      icon: "👥",
      title: "Equipo Multidisciplinario",
      description: "Profesionales con diferentes especialidades"
    },
    {
      icon: "📈",
      title: "Escalabilidad Flexible",
      description: "Ajusta el tamaño del equipo según tus necesidades"
    }
  ];

  return (
    <div className="instituciones-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Talento Tecnológico para tu Institución
          </h1>
          <p className="hero-subtitle">
            Conectamos a las mejores instituciones públicas y privadas con profesionales tecnológicos altamente calificados
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Profesionales</span>
            </div>
            <div className="stat">
              <span className="stat-number">150+</span>
              <span className="stat-label">Instituciones</span>
            </div>
            <div className="stat">
              <span className="stat-number">95%</span>
              <span className="stat-label">Satisfacción</span>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="benefits-section">
        <div className="container">
          <h2 className="section-title">¿Por qué elegir nuestro talento tecnológico?</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Packages Section */}
      <div className="packages-section">
        <div className="container">
          <h2 className="section-title">Nuestros Paquetes de Servicios</h2>
          <p className="section-subtitle">
            Elige el plan que mejor se adapte a las necesidades de tu institución
          </p>
          
          <div className="packages-grid">
            {servicePackages.map((pkg) => (
              <div 
                key={pkg.id} 
                className={`package-card ${pkg.popular ? 'popular' : ''} ${selectedPackage === pkg.id ? 'selected' : ''}`}
                onClick={() => setSelectedPackage(pkg.id)}
              >
                {pkg.popular && <div className="popular-badge">Más Popular</div>}
                
                <div className="package-header">
                  <h3 className="package-name">{pkg.name}</h3>
                  <p className="package-subtitle">{pkg.subtitle}</p>
                  <div className="package-price">
                    <span className="price">{pkg.price}</span>
                    <span className="period">{pkg.period}</span>
                  </div>
                  <p className="package-description">{pkg.description}</p>
                </div>

                <div className="package-features">
                  <ul className="features-list">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="feature-item">
                        <span className="checkmark">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="package-footer">
                  <button 
                    className={`package-button ${pkg.color}`}
                    onClick={() => handleAddToCart(pkg)}
                  >
                    Agregar al Carrito
                  </button>
                  <button 
                    className="package-button-secondary"
                    onClick={() => alert(`Información sobre ${pkg.name}: Nos pondremos en contacto contigo en las próximas 24 horas para una consulta personalizada.`)}
                  >
                    Solicitar Información
                  </button>
                  <p className="package-note">Sin compromiso inicial</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="container">
          <h2 className="cta-title">¿Listo para potenciar tu institución?</h2>
          <p className="cta-subtitle">
            Contáctanos hoy y descubre cómo nuestro talento tecnológico puede transformar tu organización
          </p>
          <div className="cta-buttons">
            <button className="cta-button primary">Agendar Consulta Gratuita</button>
            <button className="cta-button secondary">Descargar Brochure</button>
          </div>
          <div className="cta-subtitle">
            <p style={{color: "white"}}> 📧 instituciones@talentolab.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instituciones;

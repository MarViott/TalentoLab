import React, { useState } from "react";
import './styles/Formularios.css';

export default function Contacto() {
  // Estados para los campos del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    empresa: "",
    motivoContacto: "",
    urgencia: "",
    presupuesto: "",
    mensaje: ""
  });

  // Estados para validación y UI
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Opciones para los selects
  const motivosContacto = [
    { value: '', label: 'Selecciona el motivo de tu consulta' },
    { value: 'informacion-servicios', label: 'Información sobre servicios' },
    { value: 'cotizacion', label: 'Solicitar cotización' },
    { value: 'demo', label: 'Agendar una demo' },
    { value: 'soporte-tecnico', label: 'Soporte técnico' },
    { value: 'alianza', label: 'Propuesta de alianza' },
    { value: 'consultoria', label: 'Consultoría personalizada' },
    { value: 'otro', label: 'Otro motivo' }
  ];

  const nivelesUrgencia = [
    { value: '', label: 'Nivel de urgencia' },
    { value: 'baja', label: 'Baja - Puedo esperar 1 semana' },
    { value: 'media', label: 'Media - Necesito respuesta en 2-3 días' },
    { value: 'alta', label: 'Alta - Necesito respuesta en 24 horas' },
    { value: 'critica', label: 'Crítica - Necesito respuesta inmediata' }
  ];

  const rangosPresupuesto = [
    { value: '', label: 'Rango de presupuesto (opcional)' },
    { value: 'menor-5k', label: 'Menos de $5,000' },
    { value: '5k-15k', label: '$5,000 - $15,000' },
    { value: '15k-50k', label: '$15,000 - $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: 'mayor-100k', label: 'Más de $100,000' },
    { value: 'no-definido', label: 'Aún no definido' }
  ];

  // Manejo de cambios en los inputs
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ 
      ...prevFormData, 
      [name]: value 
    }));

    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validación del formulario
  const validateForm = () => {
    const newErrors = {};

    // Validación de nombre
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es obligatorio';
    } else if (formData.nombre.trim().length < 2) {
      newErrors.nombre = 'El nombre debe tener al menos 2 caracteres';
    }

    // Validación de apellido
    if (!formData.apellido.trim()) {
      newErrors.apellido = 'El apellido es obligatorio';
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Por favor ingresa un email válido';
    }

    // Validación de teléfono (opcional pero si se llena debe ser válido)
    if (formData.telefono.trim()) {
      const phoneRegex = /^[\d\s+\-()]{10,}$/;
      if (!phoneRegex.test(formData.telefono)) {
        newErrors.telefono = 'Por favor ingresa un teléfono válido';
      }
    }

    // Validación de motivo de contacto
    if (!formData.motivoContacto) {
      newErrors.motivoContacto = 'Por favor selecciona el motivo de tu consulta';
    }

    // Validación de urgencia
    if (!formData.urgencia) {
      newErrors.urgencia = 'Por favor indica el nivel de urgencia';
    }

    // Validación de mensaje
    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje es obligatorio';
    } else if (formData.mensaje.trim().length < 10) {
      newErrors.mensaje = 'El mensaje debe tener al menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Manejo del envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simular envío del formulario (aquí conectarías con tu API)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mostrar mensaje de éxito
      setSubmitSuccess(true);
      
      // Limpiar formulario
      setFormData({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        empresa: "",
        motivoContacto: "",
        urgencia: "",
        presupuesto: "",
        mensaje: ""
      });

      // Ocultar mensaje de éxito después de 5 segundos
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);

    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setErrors({ submit: 'Hubo un error al enviar el mensaje. Por favor intenta de nuevo.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Si el formulario se envió exitosamente
  if (submitSuccess) {
    return (
      <div className="registro-container">
        <div className="success-message">
          <div className="success-icon">📧</div>
          <h2>¡Mensaje Enviado!</h2>
          <p>
            Gracias por contactarnos, {formData.nombre}. Hemos recibido tu mensaje y nuestro equipo 
            te responderá según el nivel de urgencia indicado.
          </p>
          {formData.urgencia === 'critica' && (
            <div className="urgent-notice">
              <strong>📞 Urgencia Crítica:</strong> Te contactaremos en las próximas 2 horas.
            </div>
          )}
          <button 
            className="btn-primary"
            onClick={() => setSubmitSuccess(false)}
          >
            Enviar Otro Mensaje
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="registro-container">
      <div className="registro-header">
        <h1 className="registro-title">Contáctanos</h1>
        <p className="registro-subtitle">
          ¿Tienes una pregunta, necesitas una cotización o quieres saber más sobre nuestros servicios? 
          Estamos aquí para ayudarte. Completa el formulario y nos pondremos en contacto contigo.
        </p>
      </div>

      {/* Información de contacto rápido */}
      <div className="contact-info-cards">
        <div className="contact-card">
          <div className="contact-icon">📞</div>
          <h3>Teléfono</h3>
          <p>+1 (555) 123-4567</p>
          <span>Lun - Vie, 9:00 AM - 6:00 PM</span>
        </div>
        <div className="contact-card">
          <div className="contact-icon">📧</div>
          <h3>Email</h3>
          <p>contacto@talentotech.com</p>
          <span>Respuesta en menos de 24h</span>
        </div>
        <div className="contact-card">
          <div className="contact-icon">🚨</div>
          <h3>Urgencias</h3>
          <p>soporte@talentotech.com</p>
          <span>Respuesta inmediata</span>
        </div>
      </div>

      <form className="registro-form" onSubmit={handleSubmit}>
        {errors.submit && (
          <div className="error-message global-error">
            {errors.submit}
          </div>
        )}

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="nombre" className="form-label">
              Nombre *
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className={`form-input ${errors.nombre ? 'error' : ''}`}
              placeholder="Tu nombre"
            />
            {errors.nombre && <span className="error-text">{errors.nombre}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="apellido" className="form-label">
              Apellido *
            </label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              className={`form-input ${errors.apellido ? 'error' : ''}`}
              placeholder="Tu apellido"
            />
            {errors.apellido && <span className="error-text">{errors.apellido}</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`form-input ${errors.email ? 'error' : ''}`}
              placeholder="tu.email@empresa.com"
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="telefono" className="form-label">
              Teléfono
            </label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              className={`form-input ${errors.telefono ? 'error' : ''}`}
              placeholder="+1 (555) 123-4567"
            />
            {errors.telefono && <span className="error-text">{errors.telefono}</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="empresa" className="form-label">
              Empresa/Institución
            </label>
            <input
              type="text"
              id="empresa"
              name="empresa"
              value={formData.empresa}
              onChange={handleChange}
              className="form-input"
              placeholder="Nombre de tu organización"
            />
          </div>

          <div className="form-group">
            <label htmlFor="presupuesto" className="form-label">
              Presupuesto Estimado
            </label>
            <select
              id="presupuesto"
              name="presupuesto"
              value={formData.presupuesto}
              onChange={handleChange}
              className="form-select"
            >
              {rangosPresupuesto.map(rango => (
                <option key={rango.value} value={rango.value}>
                  {rango.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="motivoContacto" className="form-label">
              Motivo de Consulta *
            </label>
            <select
              id="motivoContacto"
              name="motivoContacto"
              value={formData.motivoContacto}
              onChange={handleChange}
              className={`form-select ${errors.motivoContacto ? 'error' : ''}`}
            >
              {motivosContacto.map(motivo => (
                <option key={motivo.value} value={motivo.value}>
                  {motivo.label}
                </option>
              ))}
            </select>
            {errors.motivoContacto && <span className="error-text">{errors.motivoContacto}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="urgencia" className="form-label">
              Nivel de Urgencia *
            </label>
            <select
              id="urgencia"
              name="urgencia"
              value={formData.urgencia}
              onChange={handleChange}
              className={`form-select ${errors.urgencia ? 'error' : ''}`}
            >
              {nivelesUrgencia.map(nivel => (
                <option key={nivel.value} value={nivel.value}>
                  {nivel.label}
                </option>
              ))}
            </select>
            {errors.urgencia && <span className="error-text">{errors.urgencia}</span>}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="mensaje" className="form-label">
            Mensaje *
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            className={`form-textarea ${errors.mensaje ? 'error' : ''}`}
            placeholder="Describe tu consulta, proyecto o necesidad. Mientras más detalles proporciones, mejor podremos ayudarte..."
            rows="6"
          />
          {errors.mensaje && <span className="error-text">{errors.mensaje}</span>}
        </div>

        <div className="form-footer">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`btn-submit ${isSubmitting ? 'loading' : ''}`}
          >
            {isSubmitting ? (
              <>
                <span className="loading-spinner"></span>
                Enviando mensaje...
              </>
            ) : (
              'Enviar Mensaje'
            )}
          </button>
          
          <p className="form-disclaimer">
            Tu información está protegida y solo será utilizada para responder a tu consulta. 
            Nos comprometemos a responder según el nivel de urgencia indicado.
          </p>
        </div>
      </form>
    </div>
  );
}
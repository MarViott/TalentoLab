import React, { useState } from 'react';
import './styles/Formularios.css';

export default function Registrate() {
  // Estados para los campos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    empresa: '',
    cargo: '',
    tipoInstitucion: '',
    servicioInteres: '',
    mensaje: ''
  });

  // Estados para validación y UI
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Opciones para los selects
  const tiposInstitucion = [
    { value: '', label: 'Selecciona tipo de institución' },
    { value: 'publica', label: 'Institución Pública' },
    { value: 'privada', label: 'Empresa Privada' },
    { value: 'startup', label: 'Startup' },
    { value: 'ong', label: 'ONG/Fundación' },
    { value: 'educativa', label: 'Institución Educativa' }
  ];

  const serviciosInteres = [
    { value: '', label: 'Selecciona servicio de interés' },
    { value: 'basico', label: 'Paquete Básico - $2,500/mes' },
    { value: 'profesional', label: 'Paquete Profesional - $5,500/mes' },
    { value: 'enterprise', label: 'Paquete Enterprise - $12,000/mes' },
    { value: 'consultoria', label: 'Consultoría Personalizada' },
    { value: 'otro', label: 'Otro servicio' }
  ];

  // Manejo de cambios en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
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

  // Validación de formulario
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

    // Validación de teléfono
    const phoneRegex = /^[\d\s+\-()]{10,}$/;
    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El teléfono es obligatorio';
    } else if (!phoneRegex.test(formData.telefono)) {
      newErrors.telefono = 'Por favor ingresa un teléfono válido';
    }

    // Validación de empresa
    if (!formData.empresa.trim()) {
      newErrors.empresa = 'El nombre de la empresa es obligatorio';
    }

    // Validación de tipo de institución
    if (!formData.tipoInstitucion) {
      newErrors.tipoInstitucion = 'Por favor selecciona el tipo de institución';
    }

    // Validación de servicio de interés
    if (!formData.servicioInteres) {
      newErrors.servicioInteres = 'Por favor selecciona un servicio de interés';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Manejo del envío del formulario
  const manejarEnvio = async (evento) => {
    evento.preventDefault();
    
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
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        empresa: '',
        cargo: '',
        tipoInstitucion: '',
        servicioInteres: '',
        mensaje: ''
      });

      // Ocultar mensaje de éxito después de 5 segundos
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);

    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setErrors({ submit: 'Hubo un error al enviar el formulario. Por favor intenta de nuevo.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Si el formulario se envió exitosamente
  if (submitSuccess) {
    return (
      <div className="registro-container">
        <div className="success-message">
          <div className="success-icon">✅</div>
          <h2>¡Registro Exitoso!</h2>
          <p>Gracias por tu interés, {formData.nombre}. Nuestro equipo se pondrá en contacto contigo pronto.</p>
          <button 
            className="btn-primary"
            onClick={() => setSubmitSuccess(false)}
          >
            Registrar Otra Persona
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="registro-container">
      <div className="registro-header">
        <h1 className="registro-title">Únete a Nuestro Ecosistema Tecnológico</h1>
        <p className="registro-subtitle">
          Conecta tu institución con el mejor talento tecnológico. Completa el formulario y te contactaremos en menos de 24 horas.
        </p>
      </div>

      <form className="registro-form" onSubmit={manejarEnvio}>
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
              className={`form-input ${errors.apellido ? 'error' : ''}`}
              placeholder="Tu apellido"
            />
            {errors.apellido && <span className="error-text">{errors.apellido}</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Corporativo *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`form-input ${errors.email ? 'error' : ''}`}
              placeholder="tu.email@empresa.com"
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="telefono" className="form-label">
              Teléfono *
            </label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleInputChange}
              className={`form-input ${errors.telefono ? 'error' : ''}`}
              placeholder="+1 (555) 123-4567"
            />
            {errors.telefono && <span className="error-text">{errors.telefono}</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="empresa" className="form-label">
              Nombre de la Institución/Empresa *
            </label>
            <input
              type="text"
              id="empresa"
              name="empresa"
              value={formData.empresa}
              onChange={handleInputChange}
              className={`form-input ${errors.empresa ? 'error' : ''}`}
              placeholder="Nombre de tu organización"
            />
            {errors.empresa && <span className="error-text">{errors.empresa}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="cargo" className="form-label">
              Cargo/Posición
            </label>
            <input
              type="text"
              id="cargo"
              name="cargo"
              value={formData.cargo}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Director, CTO, Gerente, etc."
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="tipoInstitucion" className="form-label">
              Tipo de Institución *
            </label>
            <select
              id="tipoInstitucion"
              name="tipoInstitucion"
              value={formData.tipoInstitucion}
              onChange={handleInputChange}
              className={`form-select ${errors.tipoInstitucion ? 'error' : ''}`}
            >
              {tiposInstitucion.map(tipo => (
                <option key={tipo.value} value={tipo.value}>
                  {tipo.label}
                </option>
              ))}
            </select>
            {errors.tipoInstitucion && <span className="error-text">{errors.tipoInstitucion}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="servicioInteres" className="form-label">
              Servicio de Interés *
            </label>
            <select
              id="servicioInteres"
              name="servicioInteres"
              value={formData.servicioInteres}
              onChange={handleInputChange}
              className={`form-select ${errors.servicioInteres ? 'error' : ''}`}
            >
              {serviciosInteres.map(servicio => (
                <option key={servicio.value} value={servicio.value}>
                  {servicio.label}
                </option>
              ))}
            </select>
            {errors.servicioInteres && <span className="error-text">{errors.servicioInteres}</span>}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="mensaje" className="form-label">
            Mensaje Adicional
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleInputChange}
            className="form-textarea"
            placeholder="Cuéntanos más sobre tus necesidades tecnológicas, proyectos específicos o cualquier pregunta que tengas..."
            rows="4"
          />
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
                Enviando...
              </>
            ) : (
              'Solicitar Información'
            )}
          </button>
          
          <p className="form-disclaimer">
            Al enviar este formulario, aceptas que nos contactemos contigo para brindarte información sobre nuestros servicios.
          </p>
        </div>
      </form>
    </div>
  );
} 
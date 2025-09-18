import React from 'react';

const servicios = [
    {
        titulo: 'Desarrollo de Software a Medida',
        descripcion: 'Creamos aplicaciones web y móviles personalizadas para optimizar los procesos de tu empresa.',
    },
    {
        titulo: 'Consultoría Tecnológica',
        descripcion: 'Asesoramos en la adopción de nuevas tecnologías, arquitectura de software y transformación digital.',
    },
    {
        titulo: 'Outsourcing de Talento TI',
        descripcion: 'Proveemos equipos de desarrolladores expertos para potenciar tus proyectos tecnológicos.',
    },
    {
        titulo: 'Integración de Sistemas',
        descripcion: 'Conectamos tus sistemas y plataformas para mejorar la eficiencia y el flujo de información.',
    },
    {
        titulo: 'Soporte y Mantenimiento',
        descripcion: 'Ofrecemos soporte técnico y mantenimiento continuo para asegurar la estabilidad de tus soluciones.',
    },
];

const Empresas = () => (
    <section style={{ padding: '2rem', maxWidth: 900, margin: '0 auto', textAlign: 'center', backgroundColor: 'whitesmoke', borderRadius: 8, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
        <h1>Talento Tecnológico para Empresas</h1>
        <p>
            Impulsa la innovación y el crecimiento de tu empresa con nuestros servicios tecnológicos de alta calidad. Contamos con un equipo de expertos listos para ayudarte a alcanzar tus objetivos.
        </p>
        <ul style={{ listStyle: 'none', padding: 0 }}>
            {servicios.map((servicio, idx) => (
                <li key={idx} style={{ marginBottom: '1.5rem', background: '', color: 'white', padding: '1rem', borderRadius: 8 }}>
                    <h2 style={{ margin: '0 0 0.5rem 0' }}>{servicio.titulo}</h2>
                    <p style={{ margin: 0 }}>{servicio.descripcion}</p>
                </li>
            ))}
        </ul>
        <div style={{ marginTop: '2rem' }}>
            <strong>¿Listo para potenciar tu empresa?</strong>
            <br />
            <a href="mailto:contacto@tuempresa.com" style={{ color: '#1976d2', textDecoration: 'none' }}>
                Contáctanos para una asesoría personalizada
            </a>
        </div>
    </section>
);

export default Empresas;
import React from 'react';
import './styles/Inicio.css';
import './styles/Nav.css';

const Inicio = () => {
    return (
        <>
        <div className="inicio-container">
            <h1 style={{padding: "20px 300px", animation: "fade-in 1s ease-in-out"}}>
                ¡Bienvenido!
            </h1>
            <b><p style={{ animation: "fade-in 1s ease-in-out", color: "#666" }}>Aquí comienza tu proyecto tecnológico!</p></b>

        </div>
        
        </>
    );
};

export default Inicio;
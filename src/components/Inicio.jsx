import React from 'react';
import './styles/Inicio.css';
import './styles/Nav.css';

const Inicio = () => {
    return (
        <>
        <div className="inicio-container">
            <h1 style={{padding: "10px 300px"}}>
                ¡Bienvenido!
            </h1>
            <b><p style={{color: "#666" }}>Aquí comienza tu proyecto tecnológico!</p></b>
        </div>
        
        </>
    );
};

export default Inicio;
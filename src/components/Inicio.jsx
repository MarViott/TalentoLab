import React from 'react';

const Inicio = () => {
    return (
        <div className="inicio-container">
            <h1 style={{justifyContent: "center", animation: "fade-in 1s ease-in-out"}}>
                ¡Bienvenido!
            </h1>
            <b><p style={{ animation: "fade-in 1s ease-in-out", color: "#666" }}>Aquí comienza tu proyecto tecnológico!</p></b>  
        </div>
    );
};

export default Inicio;
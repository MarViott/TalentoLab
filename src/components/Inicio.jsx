import React from 'react';


const Inicio = () => {
    return (
        <div className="inicio-container">
            <h1 style={{ animation: "fade-in 1s ease-in-out" }}>
                ¡Bienvenido a <span className="talento-lab">Talento Lab</span>!
            </h1>
            <b><p style={{ animation: "fade-in 1s ease-in-out", color: "#666" }}>Un laboratorio de talentos tecnológicos</p></b>  
        </div>
    );
};

export default Inicio;
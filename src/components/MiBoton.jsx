import React from 'react';
function MiBoton ({texto, color, onClick}) {
    const estilo = {        
        padding: '10px 20px',
        backgroundColor: color || 'blue',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        margin: '10px',

    }
    return (
        <button id="btn" style={estilo} onClick={onClick}>{texto}</button>
    )
} export {MiBoton}

function MiBoton ({text, color}) {
    const estilo = {
        padding: '10px 20px',
        backgroundColor: color,
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        margin: '10px',
        
    }
    return (
        <button id="btn" style={estilo}>{text}</button>
    )
} export {MiBoton}
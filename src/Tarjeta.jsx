function Tarjeta({ titulo, descripcion, imagenUrl, botonTexto }) {
    return (
      <div className="tarjeta">
        <img src={imagenUrl} alt={titulo} />
        <h2>{titulo}</h2>
        <p>{descripcion}</p>
        <button>{botonTexto}</button>
      </div>
    );
  }
  
  export default Tarjeta;
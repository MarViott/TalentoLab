import React from 'react';
import './styles/TarjetaProyecto.css'; // Importa tus estilos personalizados desde components\styles\TarjetaProyecto.css;

function TarjetaProyecto({ titulo, descripcion, botonTexto }) {
  function capturaClic() {
    alert(`Explorando: ${titulo}`);
  }

  return (
    <div className="tarjeta-proyecto">
      <h2 className="proyecto-titulo">{titulo}</h2>
      <p className="proyecto-descripcion">{descripcion}</p>
      <button className="proyecto-boton" onClick={capturaClic}>
        {botonTexto}
      </button>
    </div>
  );
}
export default TarjetaProyecto;
 
import React from "react";
function TarjetaEquipo({ equipo }) {
    return (
        <div className="equipo-container">
        {equipo.map((miembro, index) => (
            <div key={index} className="tarjeta-miembro">
            <h2>{miembro.nombre}</h2>
            <p>{miembro.descripcion}</p>
            <img src={miembro.imagen}
            alt={miembro.nombre}
            className="miembro-imagen" />
            </div>
        ))}
        </div>
    );
}
export default TarjetaEquipo;
import React, { useState } from 'react';
export default function Registrate() {
  const [nombre, setNombre] = useState('');
  function manejarEnvio(evento) {
      evento.preventDefault();
      alert(`Formulario enviado por: ${nombre}`);
  }
  return (
      <form onSubmit={manejarEnvio}>
          <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ingresa tu nombre"
          />
          <button type="submit">Enviar</button>
      </form>
  );
} 
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function IniciarSesion({ setIsAuthenticated, setUsuario }) {
  const navigate = useNavigate();
  const ubicacion = useLocation();
 
  const [formulario, setFormulario] = useState({ nombre: '', email: '' });


  const manejarEnvio = (e) => {
    e.preventDefault();
    if (formulario.nombre && formulario.email) {
      setIsAuthenticated(true);
      setUsuario(formulario);
     
      // Si venía del carrito, redirige a pagar
     const destino = ubicacion.state?.desde || './componentes/pagar';
      navigate(destino);
    }
  };
    return (
        <div>
            <h2>Inicio de sesión</h2>
            <form onSubmit={manejarEnvio}>
                <label>
                    Nombre:
                    <input type="text" value={formulario.nombre} onChange={(e) => setFormulario({ ...formulario, nombre: e.target.value })} />
                </label>
                <label>
                    Email:
                    <input type="email" value={formulario.email} onChange={(e) => setFormulario({ ...formulario, email: e.target.value })} />
                </label>
                <button type="submit">Iniciar sesión</button>
            </form>
        </div>
    );
}
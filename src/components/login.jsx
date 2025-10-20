import "./styles/Formularios.css";

import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulación de autenticación
    if (usuario === "admin" && password === "1234") {
      login(usuario);
      // Redirigir a la página anterior o a dashboard
      const from = location.state?.from || "/dashboard";
      navigate(from);
    } else {
      alert("Credenciales incorrectas");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Iniciar sesión</h2>
      <div>
        <label>Usuario:</label>
        <input
          type="text"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
      </div>
      <div>
        <label>Contraseña:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Iniciar sesión</button>
    </form>
  );
}
export default Login;

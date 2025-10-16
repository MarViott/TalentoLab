import { useLocation, useNavigate } from "react-router-dom";

export default function Pagar({
  setIsAuthenticated,
  usuario,
  setUsuario,
}) {
  const navigate = useNavigate();

    const manejarPago = () => {
      setIsAuthenticated(false);
      setUsuario(null);
      navigate('/');
    };

  return (
    <div>
      <h2>Detalle del pago</h2>
      <p>Nombre: {usuario ? usuario.nombre : "N/A"}</p>
      <p>Email: {usuario ? usuario.email : "N/A"}</p>
      <button onClick={manejarPago}>Pagar</button>
    </div>
  );
}
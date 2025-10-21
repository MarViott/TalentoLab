import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

function RutaProtegida({ children }) {
  const { isAuthenticated } = useAuthContext();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default RutaProtegida;

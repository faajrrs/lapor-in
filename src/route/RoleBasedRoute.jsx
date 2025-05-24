// src/routes/RoleBasedRoute.js
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";

export default function RoleBasedRoute({ children, allowAdmin = false }) {
  const { auth } = useContext(AuthContext);

  if (!auth.token) {
    return <Navigate to="/" replace />;
  }

  if (allowAdmin && !auth.instansi_id) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  if (!allowAdmin && auth.instansi_id) {
    return <Navigate to="/beranda" replace />;
  }

  return children;
}

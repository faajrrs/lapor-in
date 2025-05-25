import { Navigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export default function ProtectedRouteAdmin({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/masuk" replace />;
  }

  try {
    const decoded = jwtDecode(token);
    if (decoded.role_id !== 1) {
      return <Navigate to="/beranda" replace />;
    }
    return <Outlet />;
  } catch (err) {
    console.error("Token invalid:", err);
    return <Navigate to="/masuk" replace />;
  }
}

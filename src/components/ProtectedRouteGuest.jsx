import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export default function ProtectedRouteGuest({ children }) {
  const token = localStorage.getItem("token");

  if (token) {
    try {
      const decoded = jwtDecode(token);
      if (decoded.role_id === 1) {
        return <Navigate to="/admin/dashboard" replace />;
      } else if (decoded.role === "user") {
        return <Navigate to="/beranda" replace />;
      }
    } catch (err) {
      // Jika token invalid, biarkan lanjut ke halaman login
      console.error("Token invalid:", err);
    }
  }

  return children;
}

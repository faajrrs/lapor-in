import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export default function ProtectedRouteUser({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/masuk" replace />;
  }

  try {
    const decoded = jwtDecode(token);
    if (decoded.role !== "user") {
      return <Navigate to="/admin/dashboard" replace />;
    }

    return children;
  } catch (err) {
    console.error("Token invalid:", err);
    return <Navigate to="/masuk" replace />;
  }
}

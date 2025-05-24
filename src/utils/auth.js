import { jwtDecode } from "jwt-decode";

export function getToken() {
  return localStorage.getItem("token");
}

export function getUserFromToken() {
  const token = getToken();
  if (!token) return null;
  try {
    return jwtDecode(token); // Misalnya: { id, email, role_id, ... }
  } catch (error) {
    console.error("Gagal decode token:", error);
    return null;
  }
}

export function isLoggedIn() {
  return !!getToken();
}

export function isAdmin() {
  const user = getUserFromToken();
  if (!user) {
    window.location.href = "/masuk";
    return false;
  }
  if (user.role_id !== 1) {
    window.location.href = "/beranda";
    return false;
  }
  return true;
}

export function isUser() {
  const user = getUserFromToken();
  if (!user) {
    window.location.href = "/masuk";
    return false;
  }
  if (user.role_id !== 2) {
    window.location.href = "/admin/dashboard";
    return false;
  }
  return true;
}

export function logout() {
  localStorage.removeItem("token");
  window.location.href = "/masuk";
}

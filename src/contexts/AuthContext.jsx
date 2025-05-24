// src/contexts/AuthContext.js
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: localStorage.getItem("token"),
    instansi_id: localStorage.getItem("instansi_id"),
  });

  useEffect(() => {
    // Sync state jika localStorage berubah (misal setelah login/logout)
    const handleStorageChange = () => {
      setAuth({
        token: localStorage.getItem("token"),
        instansi_id: localStorage.getItem("instansi_id"),
      });
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const login = (token, instansi_id) => {
    localStorage.setItem("token", token);
    localStorage.setItem("instansi_id", instansi_id);
    setAuth({ token, instansi_id });
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("instansi_id");
    setAuth({ token: null, instansi_id: null });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

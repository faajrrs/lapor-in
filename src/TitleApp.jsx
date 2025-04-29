import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const routeTitles = {
  // Title HomePage
  "/": "Lapor-In!",
  // Title Auth
  "/masuk": "Masuk - Lapor-In!",
  "/daftar": "Daftar - Lapor-In!",
  "/lupa-kata-sandi": "Lupa Kata Sandi - Lapor-In!",
  //Title User
  "/beranda": "Beranda - Lapor-In!",
  "/riwayat/masuk": "Riwayat Masuk - Lapor-In!",
  "/riwayat/proses": "Riwayat Proses - Lapor-In!",
  "/riwayat/selesai": "Riwayat Selesai - Lapor-In!",
  "/laporan": "Laporkan Masalah - Lapor-In!",
  "/chat": "Chat - Lapor-In!",
  "/notifikasi": "Notifikasi - Lapor-In!",

  //Title Admin
  "/admin/dashboard": "Dashboard Admin - Lapor-In!",
  "/admin/laporan-pengaduan": "Laporan Admin - Lapor-In!",
  "/admin/chat-pengguna": "Chat Pengguna - Lapor-In!",
  "/admin/kelola-pengguna": "Kelola Pengguna - Lapor-In!",
};

const TitleApp = () => {
  const location = useLocation();

  useEffect(() => {
    const title = routeTitles[location.pathname] || "Lapor-In!";
    document.title = title;
  }, [location]);

  return null;
};

export default TitleApp;

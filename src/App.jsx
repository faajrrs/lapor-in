import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Homepage from "./pages/Homepage";
import ForgotPassword from "./pages/auth/ForgotPassword";
import "./global.css";
import HomeUser from "./pages/user/HomeUser";
import ReportUser from "./pages/user/ReportUser";
import ChatUser from "./pages/user/ChatUser";
import NotificationUser from "./pages/user/NotificationUser";
import DashboardAdmin from "./pages/admin/DashboardAdmin";
import ReportAdmin from "./pages/admin/ReportAdmin";
import TitleApp from "./TitleApp";
import ChatAdmin from "./pages/admin/ChatAdmin";
import ManageAdmin from "./pages/admin/ManageAdmin";
import HistoryMain from "./pages/user/HistoryMain";
import ReportDetail from "./pages/admin/ReportDetail";
import ProfilUser from "./pages/user/ProfileUser";

function App() {
  return (
    <Router>
      <TitleApp />
      <Routes>
        {/* Route HomePage */}
        <Route path="/" element={<Homepage />} />
        
        {/* Route Auth */}
        <Route path="/masuk" element={<Login />} />
        <Route path="/daftar" element={<Register />} />
        <Route path="/lupa-kata-sandi" element={<ForgotPassword />} />

        {/* Route User */}
        <Route path="/beranda" element={<HomeUser />} />
        <Route path="/beranda/profile" element={<ProfilUser/>}/>
        <Route path="/riwayat/*" element={<HistoryMain/>}/>
        <Route path="/laporan" element={<ReportUser />} />
        <Route path="/chat" element={<ChatUser />} />
        <Route path="/notifikasi" element={<NotificationUser />} />

        {/* Route Admin */}
        <Route path="/admin">
          <Route path="dashboard" element={<DashboardAdmin />} />
          <Route path="laporan-pengaduan" element={<ReportAdmin />} />
          <Route path="laporan-pengaduan/detail/:id" element={<ReportDetail />} />
          <Route path="chat-pengguna" element={<ChatAdmin />} />
          <Route path="kelola-pengguna" element={<ManageAdmin />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

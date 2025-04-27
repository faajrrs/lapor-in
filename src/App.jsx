import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Homepage from "./pages/Homepage";
import ForgotPassword from "./pages/auth/ForgotPassword";
import './global.css'
import HomeUser from "./pages/user/HomeUser";
import HistoryUser from "./pages/user/HistoryUser";
import ReportUser from "./pages/user/ReportUser";
import ChatUser from "./pages/user/ChatUser";
import NotificationUser from "./pages/user/NotificationUser";
import HistoryFinish from "./pages/user/HistoryFinish";
import HistoryHandled from "./pages/user/HistoryHandled";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/beranda" element={<HomeUser/>}/>
        <Route path="/riwayat/proses" element={<HistoryUser/>}/>
        <Route path="/riwayat/ditangani" element={<HistoryHandled/>}/>
        <Route path="/riwayat/selesai" element={<HistoryFinish/>}/>
        <Route path="/laporan" element={<ReportUser/>}/>
        <Route path="/chat" element={<ChatUser/>}/>
        <Route path="/notifikasi" element={<NotificationUser/>}/>
      </Routes>
    </Router>
  );
}

export default App;

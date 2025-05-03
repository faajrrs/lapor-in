import { Routes, Route, Navigate } from "react-router-dom";
import LayoutUser from "../../layouts/LayoutUser";
import HistoryUser from "./HistoryUser";
import HistoryHandled from "./HistoryHandled";
import HistoryFinish from "./HistoryFinish";
import HistoryDetail from "./HistoryDetail";

export default function HistoryMain() {
  return (
    <LayoutUser>
      <Routes>
        <Route index element={<Navigate to="masuk" />} />
        <Route path="masuk" element={<HistoryUser />} />
        <Route path="proses" element={<HistoryHandled />} />
        <Route path="selesai" element={<HistoryFinish />} />
        <Route path="masuk/detail/:id" element={<HistoryDetail />} />
        <Route path="proses/detail/:id" element={<HistoryDetail />} />
        <Route path="selesai/detail/:id" element={<HistoryDetail />} />
      </Routes>
    </LayoutUser>
  );
}

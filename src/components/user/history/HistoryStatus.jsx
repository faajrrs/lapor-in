import { useLocation } from "react-router-dom";
import HistoryStatusItem from "./status/HistoryStatusItem";

export default function HistoryStatus() {
    const location = useLocation();
    const { pathname } = location;
    return(
        <ul className="history__status">
            <HistoryStatusItem text="Proses" to="/riwayat/proses" active={pathname === "/riwayat/proses"}/>
            <HistoryStatusItem text="Ditangani" to="/riwayat/ditangani" active={pathname === "/riwayat/ditangani"}/>
            <HistoryStatusItem text="Selesai" to="/riwayat/selesai" active={pathname === "/riwayat/selesai"}/>
        </ul>
    )
}
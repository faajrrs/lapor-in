import { useLocation, useNavigate } from "react-router-dom";

export default function HistoryActions() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const pathSegments = location.pathname.split("/"); // ["", "riwayat", "masuk", "detail", "1"]
  const backPath =
    pathSegments.length >= 3 ? `/riwayat/${pathSegments[2]}` : "/riwayat";

  return (
    <div className="history__actions">
      <button className="btn__detail back" onClick={() => navigate(backPath)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.75"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-arrow-left-icon lucide-arrow-left"
        >
          <path d="m12 19-7-7 7-7" />
          <path d="M19 12H5" />
        </svg>
      </button>
      <h1 className="title__detail">Detail Laporan</h1>
      <button className="btn__detail print">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.75"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-printer-icon lucide-printer"
        >
          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
          <path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" />
          <rect x="6" y="14" width="12" height="8" rx="1" />
        </svg>
        <h3>Cetak Laporan</h3>
      </button>
    </div>
  );
}

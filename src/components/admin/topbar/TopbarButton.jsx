import { useNavigate } from "react-router-dom";

export default function TopbarButton() {
  const navigate = useNavigate();

  return (
    <button
      className="top-bar-button"
      onClick={() => navigate("/admin/laporan-pengaduan")}
    >
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
  );
}

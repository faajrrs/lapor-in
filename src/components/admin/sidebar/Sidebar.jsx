import { useLocation } from "react-router-dom";
import AvatarAdmin from "../../../assets/img/admin/avatar-admin.jpg";
import SidebarLink from "./SidebarLink";
import SidebarMenu from "./SidebarMenu";
import { logout } from "../../../utils/logout";

export default function Sidebar() {
  const location = useLocation();
  const { pathname } = location;
  return (
    <aside className="sidebar" id="sidebar" aria-label="Sidebar navigation">
      <div className="admin">
        <img
          src={AvatarAdmin}
          alt="User avatar, circular, dark background with white letter U"
          width="32"
          height="32"
        />
        <span>Administrator</span>
      </div>
      <SidebarMenu titleMenu="DATA LAPORAN">
        <SidebarLink
          textMenu="Dashboard"
          to="/admin/dashboard"
          active={pathname === "/admin/dashboard"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-layout-dashboard-icon lucide-layout-dashboard"
          >
            <rect width="7" height="9" x="3" y="3" rx="1" />
            <rect width="7" height="5" x="14" y="3" rx="1" />
            <rect width="7" height="9" x="14" y="12" rx="1" />
            <rect width="7" height="5" x="3" y="16" rx="1" />
          </svg>
        </SidebarLink>
        <SidebarLink
          textMenu="Laporan Pengaduan"
          to="/admin/laporan-pengaduan"
          active={pathname === "/admin/laporan-pengaduan"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-file-text-icon lucide-file-text"
          >
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            <path d="M10 9H8" />
            <path d="M16 13H8" />
            <path d="M16 17H8" />
          </svg>
        </SidebarLink>
      </SidebarMenu>

      <SidebarMenu titleMenu="DATA PENGGUNA">
        <SidebarLink
          textMenu="Chat Pengguna"
          to="/admin/chat-pengguna"
          active={pathname === "/admin/chat-pengguna"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-messages-square-icon lucide-messages-square"
          >
            <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z" />
            <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
          </svg>
        </SidebarLink>
        <SidebarLink
          textMenu="Kelola Pengguna"
          to="/admin/kelola-pengguna"
          active={pathname === "/admin/kelola-pengguna"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-contact-icon lucide-contact"
          >
            <path d="M16 2v2" />
            <path d="M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
            <path d="M8 2v2" />
            <circle cx="12" cy="11" r="3" />
            <rect x="3" y="4" width="18" height="18" rx="2" />
          </svg>
        </SidebarLink>
        <div onClick={logout} style={{ cursor: "pointer" }}>
          <SidebarLink textMenu="Keluar" to="#" active={false}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-log-out-icon lucide-log-out"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" x2="9" y1="12" y2="12" />
            </svg>
          </SidebarLink>
        </div>
      </SidebarMenu>
      <div className="sidebar-footer">
        <img src="/img/logo.png" alt="" />
      </div>
    </aside>
  );
}

import ButtonSidebar from "./ButtonSidebar";

export default function Topbar() {
  return (
    <div className="topbar" aria-label="Page navigation and actions">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <ButtonSidebar/>
      </nav>
      <div
        classNames="actions-wrapper"
        style={{ display: "flex", alignItems: "center", gap: "16px" }}
      >
        <div className="search-area">
          <input type="search" placeholder="Search" aria-label="Search" />
          <i className="fas fa-search" aria-hidden="true"></i>
        </div>
        <div className="actions" role="toolbar" aria-label="Page actions">
          <button aria-label="Notifications">
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
              class="lucide lucide-bell-icon lucide-bell"
            >
              <path d="M10.268 21a2 2 0 0 0 3.464 0" />
              <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

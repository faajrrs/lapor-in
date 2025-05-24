import { Link } from "react-router-dom";

export default function SidebarLink({
  textMenu,
  children,
  to,
  active,
  onClick,
}) {
  return (
    <li className="sidebar-item">
      <Link
        to={to}
        className={`sidebar-link ${active ? "menu-active" : ""}`}
        onClick={onClick}
      >
        {children}
        <span>{textMenu}</span>
      </Link>
    </li>
  );
}

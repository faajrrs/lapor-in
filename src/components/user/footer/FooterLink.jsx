import { Link } from "react-router-dom";

export default function FooterLink({ children, text, to, active }) {
  return (
    <li className="nav__item">
      <Link to={to} className={`nav__link ${active ? "active" : ""}`}>
        {children}
        <h2>{text}</h2>
      </Link>
    </li>
  );
}

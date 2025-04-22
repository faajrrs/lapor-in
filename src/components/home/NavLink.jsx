import { Link } from "react-router-dom";

export default function NavLink({ text }) {
  const path = text === "Masuk" ? "/login" : "/register";
  return (
    <li className="nav__item">
      <Link to={path} className="nav__link">
        {text}
      </Link>
    </li>
  );
}

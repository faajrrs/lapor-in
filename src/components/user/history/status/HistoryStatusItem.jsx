import { Link } from "react-router-dom";

export default function HistoryStatusItem({to,active,text}) {
  return (
    <li className="history__status_item">
      <Link to={to} className={`history__status_link ${active ? "active" : ""}`}>{text}</Link>
    </li>
  );
}

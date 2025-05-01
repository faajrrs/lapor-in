import { Link } from "react-router-dom";

export default function FormLink({ href, text }) {
  return (
    <div className="form-link">
      <Link to={href} className="text-link">
        {text}
      </Link>
    </div>
  );
}

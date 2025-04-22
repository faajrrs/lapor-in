import { Link } from "react-router-dom";

export default function FormFooter({text,link,path}) {
    return(
        <div className="form-link link-register">
        <span>
          {text} <Link to={path}>{link}</Link>
        </span>
      </div>
    )
}
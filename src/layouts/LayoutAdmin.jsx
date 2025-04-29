import "../assets/css/admin.css";
import Sidebar from "../components/admin/sidebar/Sidebar";

export default function LayoutAdmin({children}) {
  return (
    <div className="container-admin">
      <div className="container-admin-wrapper">
        <Sidebar/>
        {children}
      </div>
    </div>
  );
}

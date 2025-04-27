import "../assets/css/user.css";
import FooterUser from "../components/user/footer/FooterUser";
import HeaderUser from "../components/user/HeaderUser";
export default function LayoutUser({ children }) {
  return (
    <div className="container__user">
      <HeaderUser />
      <section className="section__user">{children}</section>
      <FooterUser />
    </div>
  );
}

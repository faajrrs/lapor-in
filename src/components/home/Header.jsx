import NavLink from "./NavLink";

export default function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src="/public/img/logo.png" alt="" />
        </div>
        <ul className="nav__list">
          <NavLink text="Masuk"/>
          <NavLink text="Daftar"/>
        </ul>
      </nav>
    </header>
  );
}

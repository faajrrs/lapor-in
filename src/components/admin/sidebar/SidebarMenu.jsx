export default function SidebarMenu({titleMenu,children}) {
  return (
    <section>
      <h3 className="section-title">{titleMenu}</h3>
      <ul className="sidebar-menu">
        {children}
      </ul>
    </section>
  );
}

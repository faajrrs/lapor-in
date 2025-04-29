import Topbar from "../topbar/Topbar";

export default function MainContent({ children }) {
  return (
    <main className="content" role="main">
      <Topbar />
      {children}
    </main>
  );
}

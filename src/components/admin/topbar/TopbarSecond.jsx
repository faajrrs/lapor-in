export default function TopbarSecond({title,children}) {
  return (
    <div className="top-bar">
        {children}
        <h1 className="page-title">{title}</h1>
    </div>
  );
}

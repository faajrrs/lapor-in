export default function FormHeader({title}) {
  return (
    <div className="form-header">
      <img src="/img/logo.png" alt="" />
      <span>{title}</span>
    </div>
  );
}

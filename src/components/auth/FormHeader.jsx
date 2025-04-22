export default function FormHeader({title}) {
  return (
    <div className="form-header">
      <img src="/img/logo.svg" alt="" />
      <span>{title}</span>
    </div>
  );
}

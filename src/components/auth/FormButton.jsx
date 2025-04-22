export default function FormButton({type,text}) {
  return (
    <div className="field button-field">
      <button type={type}>{text}</button>
    </div>
  );
}

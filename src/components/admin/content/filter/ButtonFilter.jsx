export default function ButtonFilter({type,className,text,onClick}) {
  return (
    <button className={className} type={type} onClick={onClick}>
      {text}
    </button>
  );
}

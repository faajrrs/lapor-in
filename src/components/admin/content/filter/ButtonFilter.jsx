export default function ButtonFilter({type,className,text}) {
  return (
    <button className={className} type={type}>
      {text}
    </button>
  );
}

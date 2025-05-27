export default function FilterInput({type,placeholder,className,ariaLabel,value,onChange}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      aria-label={ariaLabel}
      value={value}
      onChange={onChange}
    />
  );
}

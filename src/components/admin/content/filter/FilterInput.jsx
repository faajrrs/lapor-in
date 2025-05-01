export default function FilterInput({type,placeholder,className,ariaLabel}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      aria-label={ariaLabel}
    />
  );
}

export default function FormInputReport({ type, placeholder, name, value, onChange }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      {...(type !== "file" ? { value } : {})} // value hanya untuk input selain file
    />
  );
}

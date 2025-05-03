export default function HistoryDescItem({label,desc}) {
  return (
    <div className="detail__group">
      <label className="label__detail">{label}</label>
      <p>{desc}</p>
    </div>
  );
}

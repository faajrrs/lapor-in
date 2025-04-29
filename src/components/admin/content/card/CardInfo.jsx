export default function CardInfo({className,titleCard,count}) {
  return (
    <article className={`stat-card ${className}`} aria-label="Info">
      <p className="label">{titleCard}</p>
      <div className="value-change">
        <p className="value-count">{count}</p>
        <p className="value-label">Laporan</p>
      </div>
    </article>
  );
}

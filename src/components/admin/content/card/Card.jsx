import CardInfo from "./CardInfo";

export default function Card() {
  return (
    <section className="today-stats" aria-label="Today's statistics">
      <CardInfo
        className="total-report"
        titleCard="Total Semua Laporan"
        count="250"
      />
      <CardInfo
        className="incoming-report"
        titleCard="Laporan Masuk"
        count="50"
      />
      <CardInfo
        className="process-report"
        titleCard="Laporan Proses"
        count="10"
      />
      <CardInfo
        className="completed-report"
        titleCard="Laporan Selesai"
        count="190"
      />
    </section>
  );
}

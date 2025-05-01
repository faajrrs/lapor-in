import Waved1 from "../../assets/img/hero/waved/1.png";
import Waved2 from "../../assets/img/hero/waved/2.png";
import Waved3 from "../../assets/img/hero/waved/3.png";
import Waved4 from "../../assets/img/hero/waved/4.png";
export default function SectionHero() {
  return (
    <section className="hero">
      <h1 className="title__hero">Layanan Pengaduan Masyarakat</h1>
      <p>
        Sebuah platform digital yang memudahkan masyarakat dalam menyampaikan
        pengaduan dan laporan situasi darurat secara cepat, terhubung langsung
        dengan instansi terkait, untuk memastikan penanganan tepat sesuai
        kategori masalah yang dilaporkan.
      </p>
      <div className="waved">
        <img src={Waved1} alt="" />
        <img src={Waved2} alt="" />
        <img src={Waved3} alt="" />
        <img src={Waved4} alt="" />
      </div>
    </section>
  );
}

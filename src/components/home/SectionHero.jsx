import Waved1 from '../../assets/img/hero/waved/1.png'
import Waved2 from '../../assets/img/hero/waved/2.png'
import Waved3 from '../../assets/img/hero/waved/3.png'
import Waved4 from '../../assets/img/hero/waved/4.png'
export default function SectionHero() {
  return (
    <section className="hero">
      <h1>Layanan Pengaduan Masyarakat</h1>
      <p>
        Aplikasi Lapor-in! adalah sebuah platform digital yang mempermudah
        masyarakat dalam melaporkan pengaduan dan situasi darurat ke instansi
        terkait dengan cepat dan tepat. Dirancang untuk menghubungkan warga
        dengan pihak berwenang secara lebih efektif, sehingga setiap laporan
        dapat segera ditindaklanjuti sesuai dengan kategori permasalahannya.
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

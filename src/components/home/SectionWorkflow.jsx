import Icon1 from '../../assets/img/workflow/icon1.png'
import Icon2 from '../../assets/img/workflow/icon2.png'
import Icon3 from '../../assets/img/workflow/icon3.png'
import Icon4 from '../../assets/img/workflow/icon4.png'
import Icon5 from '../../assets/img/workflow/icon5.png'
export default function SectionWorkflow() {
    return(
        <section className="workflow">
        <ul className="workflow__list">
          <li className="workflow__item">
            <div className="icon__workflow">
              <img src={Icon1} alt="" />
            </div>
            <div className="description__workflow">
              <h1>Tulis Laporan</h1>
              <p>Laporkan keluhan anda dengan jelas dan lengkap</p>
            </div>
          </li>
          <li className="workflow__item">
            <div className="icon__workflow">
              <img src={Icon2} alt="" />
            </div>
            <div className="description__workflow">
              <h1>Proses Verifikasi</h1>
              <p>
                Laporan Anda akan diverifikasi dan diteruskan kepada instansi
                berwenang
              </p>
            </div>
          </li>
          <li className="workflow__item">
            <div className="icon__workflow">
              <img src={Icon3} alt="" />
            </div>
            <div className="description__workflow">
              <h1>Proses Tindak Lanjut</h1>
              <p>Instansi akan menindaklanjuti dan membalas laporan Anda</p>
            </div>
          </li>
          <li className="workflow__item">
            <div className="icon__workflow">
              <img src={Icon4} alt="" />
            </div>
            <div className="description__workflow">
              <h1>Beri Tanggapan</h1>
              <p>
                Anda dapat menanggapi kembali balasan yang diberikan oleh
                instansi
              </p>
            </div>
          </li>
          <li className="workflow__item">
            <div className="icon__workflow">
              <img src={Icon5} alt="" />
            </div>
            <div className="description__workflow">
              <h1>Selesai</h1>
              <p>
                Laporan Anda akan terus ditindaklanjuti hingga terselesaikan
              </p>
            </div>
          </li>
        </ul>
      </section>
    )
}
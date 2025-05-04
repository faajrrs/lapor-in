import MainContent from "../../components/admin/main/MainContent";
import TopbarSecond from "../../components/admin/topbar/TopbarSecond";
import LayoutAdmin from "../../layouts/LayoutAdmin";

import imgReport from "../../assets/img/user/history/kebakaran.jpg";
import TopbarButton from "../../components/admin/topbar/TopbarButton";
import DetailUser from "../../components/admin/content/detail/DetailUser";
import DetailReport from "../../components/admin/content/detail/DetailReport";

export default function ReportDetail() {
  return (
    <LayoutAdmin>
      <MainContent>
        <TopbarSecond title="DETAIL LAPORAN PENGADUAN">
          <TopbarButton />
        </TopbarSecond>
        <div className="content-detail">
          <form action="">
            <DetailUser
              name_user="Fendika Edo Ferdinata"
              no_telp_user="0895601812"
              email_user="fendika@gmail.com"
            />
            <DetailReport
              title_report="Kebakaran Rumah"
              desc_report="Jalanan di depan Sekolah Alam Pacitan Berlubang lebih dari
              diameter 1 Meter, sehingga beresiko menyebabkan kecelakaan
              para pengendara bermotor, utamanya orang tua yang mengantar
              anak nya ke sekolah, mohon segera diperbaiki demi kenyamanan
              pengendara dan anak anak sekolah."
              date_report="12 April 2025"
              location_report="Perumnas Barehan"
            />
            <div className="detail-image">
              <label>Bukti Laporan</label>
              <img src={imgReport} alt="" />
              <img src={imgReport} alt="" />
              <img src={imgReport} alt="" />
            </div>
            <div className="detail-footer">
              <div className="detail-status">
                <label>Status Laporan</label>
                <select>
                  <option value="masuk" key="">
                    Masuk
                  </option>
                  <option value="proses" key="">
                    Proses
                  </option>
                  <option value="selesai" key="">
                    Selesai
                  </option>
                </select>
              </div>
              <div className="detail-button">
                <button type="submit">Simpan Perubahan</button>
              </div>
            </div>
          </form>
        </div>
      </MainContent>
    </LayoutAdmin>
  );
}

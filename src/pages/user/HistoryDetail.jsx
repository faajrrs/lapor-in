import { useParams } from "react-router-dom";
import imgReport from "../../assets/img/user/history/kebakaran.jpg";
import HistoryActions from "../../components/user/history/HistoryDetailAction";
import HistoryDescList from "../../components/user/history/detail/HistoryDescList";
import HistoryDescItem from "../../components/user/history/detail/HistoryDescItem";

const dataReport = [
  {
    id: 1,
    image_report: imgReport,
    nama_agency: "Dinas Pemadam Kebakaran",
    title_report: "Kebakaran Rumah",
    desc_report:
      "Rumah saya sedang kebakaran karena terjadi konsleting pada listrik jadi tolong bantu saya.",
    location_report: "Perumnas Barehan, Kecamatan Pacitan",
    date_report: "14 April 2025",
  },
  {
    id: 2,
    image_report: imgReport,
    nama_agency: "Dinas Pemadam Kebakaran",
    title_report: "Kebakaran Rumah",
    desc_report:
      "Rumah saya sedang kebakaran karena terjadi konsleting pada listrik jadi tolong bantu saya.",
    location_report: "Perumnas Barehan, Kecamatan Pacitan",
    date_report: "14 April 2025",
  },
  {
    id: 3,
    image_report: imgReport,
    nama_agency: "Dinas Pemadam Kebakaran",
    title_report: "Kebakaran Rumah",
    desc_report:
      "Rumah saya sedang kebakaran karena terjadi konsleting pada listrik jadi tolong bantu saya.",
    location_report: "Perumnas Barehan, Kecamatan Pacitan",
    date_report: "14 April 2025",
  },
];
export default function HistoryDetail() {
  const { id } = useParams();
  const detail = dataReport.find((item) => item.id == id);
  return (
    <div class="history__container">
      <div className="history__detail">
        <HistoryActions />
        {detail ? (
          <>
            <div className="history__description_detail">
              <HistoryDescList>
                <HistoryDescItem
                  label="Judul Laporan"
                  desc={detail.title_report}
                />
                <HistoryDescItem
                  label="Deskripsi Laporan"
                  desc={detail.desc_report}
                />
              </HistoryDescList>
              <HistoryDescList>
                <HistoryDescItem
                  label="Tanggal Kejadian"
                  desc={detail.date_report}
                />
                <HistoryDescItem
                  label="Lokasi Kejadian"
                  desc={detail.location_report}
                />
                <HistoryDescItem
                  label="Instansi Tujuan"
                  desc={detail.nama_agency}
                />
              </HistoryDescList>
            </div>
            <div className="history__image_detail">
              <h2>Bukti Laporan</h2>
              <img src={detail.image_report} alt="" />
              <img src={detail.image_report} alt="" />
              <img src={detail.image_report} alt="" />
            </div>
          </>
        ) : (
          <h1>Tidak ada detail laporan.</h1>
        )}
      </div>
    </div>
  );
}

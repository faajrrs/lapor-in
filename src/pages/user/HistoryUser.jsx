import HistoryList from "../../components/user/history/HistoryList";
import imgReport from "../../assets/img/user/history/kebakaran.jpg";
import HistoryItem from "../../components/user/history/item/HistoryItem";
import HistoryButton from "../../components/user/history/item/HistoryButton";
import { Link } from "react-router-dom";
import HistoryStatus from "../../components/user/history/HistoryStatus";

const dataReport = [
  {
    id: 1,
    image_report: imgReport,
    nama_agency: "Dinas Pemadam Kebakaran",
    title_report: "Kebakaran Rumah",
    location_report: "Perumnas Barehan, Kecamatan Pacitan",
    date_report: "14 April 2025",
  },
  {
    id: 2,
    image_report: imgReport,
    nama_agency: "Dinas Pemadam Kebakaran",
    title_report: "Kebakaran Rumah",
    location_report: "Perumnas Barehan, Kecamatan Pacitan",
    date_report: "14 April 2025",
  },
  {
    id: 3,
    image_report: imgReport,
    nama_agency: "Dinas Pemadam Kebakaran",
    title_report: "Kebakaran Rumah",
    location_report: "Perumnas Barehan, Kecamatan Pacitan",
    date_report: "14 April 2025",
  },
];
export default function HistoryUser() {
  return (
    <div className="history__container">
      <HistoryStatus />
      <HistoryList>
        {dataReport.map((laporan) => (
          <HistoryItem
            key={laporan.id}
            image_report={laporan.image_report}
            name_agency={laporan.nama_agency}
            date_report={laporan.date_report}
            title_report={laporan.title_report}
            location_report={laporan.location_report}
            children={
              <Link to={`/riwayat/masuk/detail/${laporan.id}`}>
                <HistoryButton />
              </Link>
            }
          />
        ))}
      </HistoryList>
    </div>
  );
}

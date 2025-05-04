import { Link } from "react-router-dom";
import Filter from "../../components/admin/content/filter/Filter";
import Table from "../../components/admin/content/table/Table";
import MainContent from "../../components/admin/main/MainContent";
import TopbarSecond from "../../components/admin/topbar/TopbarSecond";
import LayoutAdmin from "../../layouts/LayoutAdmin";

const header = [
  "No",
  "Tanggal Kejadian",
  "Pelapor",
  "Nomor Handphone",
  "Judul Laporan",
  "Lokasi Kejadian",
  "Status",
  "Aksi",
];
const Data = [
  {
    id : 1,
    tanggal_laporan : "09 - 12 - 2024",
    nama_pelapor: "Fendika Edo Ferdinata",
    nomor_pelapor: "0891771112",
    judul_laporan: "Kebakaran Rumah",
    lokasi_laporan: "Desa Kembang Dusun Sedayu",
    status_laporan: "Proses",
  },
  {
    id : 2,
    tanggal_laporan : "09 - 12 - 2024",
    nama_pelapor: "Fajar Satria Sebastian",
    nomor_pelapor: "0891771112",
    judul_laporan: "Sapi masuk rumah",
    lokasi_laporan: "Perumnas Barehan",
    status_laporan: "Selesai",
  }
]

const renderReportRow = (item,index) => (
  <>
    <td>{index + 1}</td>
    <td>{item.tanggal_laporan}</td>
    <td>{item.nama_pelapor}</td>
    <td>{item.nomor_pelapor}</td>
    <td>{item.judul_laporan}</td>
    <td>{item.lokasi_laporan}</td>
    <td className={`status-${item.status_laporan.toLowerCase()}`}>{item.status_laporan}</td>
    <td>
      <Link to={`detail/:${item.id}`} className="btn-detail" type="button">Detail</Link>
    </td>
  </>
)

export default function ReportAdmin() {
  return (
    <LayoutAdmin>
      <MainContent>
        <TopbarSecond title="LAPORAN PENGADUAN"/>
        <Filter />
        <Table headers={header} datas={Data} renderRow={renderReportRow}/>
      </MainContent>
    </LayoutAdmin>
  );
}

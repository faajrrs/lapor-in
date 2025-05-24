import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Filter from "../../components/admin/content/filter/Filter";
import Table from "../../components/admin/content/table/Table";
import MainContent from "../../components/admin/main/MainContent";
import TopbarSecond from "../../components/admin/topbar/TopbarSecond";
import LayoutAdmin from "../../layouts/LayoutAdmin";
import { isAdmin } from "../../utils/auth";

export default function ReportAdmin() {
  const [laporan, setLaporan] = useState([]);

  useEffect(() => {
    isAdmin();
    const token = localStorage.getItem("token");
    fetch("http://localhost:3000/laporan/admin", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setLaporan(data.data);
        } else {
          alert("Gagal memuat laporan");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Terjadi kesalahan saat mengambil data laporan");
      });
  }, []);

  const header = [
    "No",
    "Tanggal",
    "Nama Pelapor",
    "Nomor",
    "Judul",
    "Lokasi",
    "Status",
    "Aksi",
  ];

  const renderReportRow = (item, index) => (
    <>
      <td>{index + 1}</td>
      <td>{item.tanggal}</td>
      <td>{item.nama_lengkap}</td>
      <td>{item.hp}</td>
      <td>{item.judul_laporan}</td>
      <td>{item.lokasi}</td>
      <td className={`status-${item.status.toLowerCase()}`}>{item.status}</td>
      <td>
        <Link
          to={`/admin/laporan-pengaduan/detail/${item.id}`}
          className="btn-detail"
          type="button"
        >
          Detail
        </Link>
      </td>
    </>
  );

  return (
    <LayoutAdmin>
      <MainContent>
        <TopbarSecond title="LAPORAN PENGADUAN" />
        <Filter />
        <Table headers={header} datas={laporan} renderRow={renderReportRow} />
      </MainContent>
    </LayoutAdmin>
  );
}

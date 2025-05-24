import CardInfo from "./CardInfo";
import { useEffect, useState } from "react";

export default function Card() {
  const [laporan, setLaporan] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    fetch("http://localhost:3000/laporan/dashboard", {
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
  return (
    <section className="today-stats" aria-label="Today's statistics">
      <CardInfo
        className="total-report"
        titleCard="Total Semua Laporan"
        count={laporan.total_laporan}
      />
      <CardInfo
        className="incoming-report"
        titleCard="Laporan Masuk"
        count={laporan.status_1}
      />
      <CardInfo
        className="process-report"
        titleCard="Laporan Proses"
        count={laporan.status_2}
      />
      <CardInfo
        className="completed-report"
        titleCard="Laporan Selesai"
        count={laporan.status_2}
      />
    </section>
  );
}

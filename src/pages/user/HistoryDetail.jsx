import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import HistoryActions from "../../components/user/history/HistoryDetailAction";
import HistoryDescList from "../../components/user/history/detail/HistoryDescList";
import HistoryDescItem from "../../components/user/history/detail/HistoryDescItem";

export default function HistoryDetail() {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/laporan/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setDetail(data.data);
        } else {
          alert("Laporan tidak ditemukan");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Gagal mengambil detail laporan");
      });
  }, [id]);

  return (
    <div className="history__container">
      <div className="history__detail">
        <HistoryActions />
        {detail ? (
          <>
            <div className="history__description_detail">
              <HistoryDescList>
                <HistoryDescItem label="Judul Laporan" desc={detail.judul_laporan} />
                <HistoryDescItem label="Deskripsi Laporan" desc={detail.deskripsi_laporan} />
              </HistoryDescList>
              <HistoryDescList>
                <HistoryDescItem label="Tanggal Kejadian" desc={detail.tanggal} />
                <HistoryDescItem label="Lokasi Kejadian" desc={detail.lokasi} />
                <HistoryDescItem label="Instansi Tujuan" desc={detail.nama_instansi} />
              </HistoryDescList>
            </div>
            <div className="history__image_detail">
              <h2>Bukti Laporan</h2>
              <img
                src={`http://localhost:3000/uploads/laporan/${detail.foto_laporan}`}
                alt="Bukti Laporan"
              />
              <img
                src={`http://localhost:3000/uploads/laporan/${detail.foto_laporan}`}
                alt="Bukti Laporan"
              />
              <img
                src={`http://localhost:3000/uploads/laporan/${detail.foto_laporan}`}
                alt="Bukti Laporan"
              />
            </div>
          </>
        ) : (
          <h1>Loading atau tidak ada detail laporan.</h1>
        )}
      </div>
    </div>
  );
}

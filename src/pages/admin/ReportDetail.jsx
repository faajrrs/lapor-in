import MainContent from "../../components/admin/main/MainContent";
import TopbarSecond from "../../components/admin/topbar/TopbarSecond";
import LayoutAdmin from "../../layouts/LayoutAdmin";

import imgReport from "../../assets/img/user/history/kebakaran.jpg";
import TopbarButton from "../../components/admin/topbar/TopbarButton";
import DetailUser from "../../components/admin/content/detail/DetailUser";
import DetailReport from "../../components/admin/content/detail/DetailReport";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ReportDetail() {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);
  const [statusId, setStatusId] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`http://localhost:3000/laporan/detailAdmin/${id}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          console.log("DATA API:", data);
          setDetail(data.data);
          setStatusId(String(data.data.status_id));
        } else {
          alert("Laporan tidak ditemukan");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Gagal mengambil detail laporan");
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    fetch(`http://localhost:3000/laporan/updateStatus/${id}`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status_id: parseInt(statusId) }), // Kirim sebagai angka ke backend
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert("Status berhasil diperbarui");
        } else {
          alert("Gagal memperbarui status");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Terjadi kesalahan saat memperbarui status");
      });
  };

  return (
    <LayoutAdmin>
      <MainContent>
        <TopbarSecond title="DETAIL LAPORAN PENGADUAN">
          <TopbarButton />
        </TopbarSecond>
        {detail ? (
          <>
            <div className="content-detail">
              <form onSubmit={handleSubmit}>
                <DetailUser
                  name_user={detail.nama_lengkap}
                  no_telp_user={detail.hp}
                  email_user={detail.email}
                />
                <DetailReport
                  title_report={detail.judul_laporan}
                  desc_report={detail.deskripsi_laporan}
                  date_report={detail.tanggal}
                  location_report={detail.lokasi}
                />
                <div className="detail-image">
                  <label>Bukti Laporan</label>
                  <img
                    src={`http://localhost:3000/uploads/laporan/${detail.foto_laporan}`}
                    alt=""
                  />
                  <img
                    src={`http://localhost:3000/uploads/laporan/${detail.foto_laporan}`}
                    alt=""
                  />
                  <img
                    src={`http://localhost:3000/uploads/laporan/${detail.foto_laporan}`}
                    alt=""
                  />
                </div>
                <div className="detail-footer">
                  <div className="detail-status">
                    <label>Status Laporan</label>
                    <select
                      name="status_id"
                      value={statusId}
                      onChange={(e) => setStatusId(e.target.value)}
                    >
                      <option value="1" key="">
                        Masuk
                      </option>
                      <option value="2" key="">
                        Proses
                      </option>
                      <option value="3" key="">
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
          </>
        ) : (
          <h1>Loading atau tidak ada detail laporan.</h1>
        )}
      </MainContent>
    </LayoutAdmin>
  );
}

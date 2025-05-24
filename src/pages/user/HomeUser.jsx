import { Link } from "react-router-dom";
import LayoutUser from "../../layouts/LayoutUser";
import { useEffect, useState } from "react";
import { isUser } from "../../utils/auth";

export default function HomeUser() {
  const [profil, setDetail] = useState(null);
  useEffect(() => {
    isUser();
    const token = localStorage.getItem("token");
    fetch(`http://localhost:3000/users/me`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setDetail(data.data);
        } else {
          alert("User tidak ditemukan");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Gagal mengambil data user");
      });
  }, []);
  return (
    <LayoutUser>
      <div className="user__profile">
        <div className="user__profile_wrapper">
          <div className="user__image">{/* <img src="" alt="" /> */}</div>
          <div className="user__description">
            <h2>Selamat Datang Pelapor</h2>
            <h1>{profil?.nama_lengkap}</h1>
            <p>
              Perbarui profil Anda untuk mempermudah pengelolaan pengaduan. Klik
              tombol di bawah untuk melihat dan mengeditnya!
            </p>
            <Link className="user__btn_profile" to="/beranda/profile">
              Lihat Profile
            </Link>
            {/* <div className="user__btn_profile">Lihat Profile</div> */}
          </div>
        </div>
      </div>
    </LayoutUser>
  );
}

import LayoutUser from "../../layouts/LayoutUser";
import AvatarUser from "../../assets/img/user/user.jpg";
import { useEffect, useState } from "react";
import { isUser } from "../../utils/auth";
import Swal from "sweetalert2";

export default function ProfilUser() {
  const [profil, setProfil] = useState({
    nama_lengkap: "",
    email: "",
    hp: "",
    alamat: "",
  });

  useEffect(() => {
    isUser();
    const token = localStorage.getItem("token");
    fetch(`http://localhost:3000/users/me/detail`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setProfil(data.data);
        } else {
          alert("User tidak ditemukan");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Gagal mengambil data user");
      });
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setProfil((prevProfil) => ({
      ...prevProfil,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const token = localStorage.getItem("token");

    fetch(`http://localhost:3000/users/me/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(profil),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          Swal.fire({
            title: "User Berhasil Diperbarui",
            text: "Data yang ditampilkan data terbaru",
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Gagal Memperbaarui Data",
            text: "Data gagal untuk diubah ",
            icon: "error",
          });
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Terjadi kesalahan saat menyimpan");
      });
  }

  return (
    <LayoutUser>
      <div className="form__container profile">
        <div className="form__header profile">
          <h1>PROFIL SAYA</h1>
        </div>
        <form className="form__profile" onSubmit={handleSubmit}>
          <div className="profile__field">
            <img src={AvatarUser} alt="Avatar User" />
          </div>
          <div className="profile__field">
            <label>Nama Lengkap</label>
            <input
              type="text"
              name="nama_lengkap"
              value={profil.nama_lengkap}
              onChange={handleChange}
            />
          </div>
          <div className="profile__field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={profil.email}
              onChange={handleChange}
            />
          </div>
          <div className="profile__field">
            <label>Nomor Handphone</label>
            <input
              type="text"
              name="hp"
              value={profil.hp}
              onChange={handleChange}
            />
          </div>
          <div className="profile__field textarea">
            <label>Alamat Rumah</label>
            <input
              type="text"
              name="alamat"
              value={profil.alamat || ""}
              onChange={handleChange}
            />
          </div>
          <div className="profile__field">
            <button type="submit">Simpan</button>
            <button type="button" onClick={() => alert("Fitur belum tersedia")}>
              Ganti Password
            </button>
          </div>
        </form>
      </div>
    </LayoutUser>
  );
}

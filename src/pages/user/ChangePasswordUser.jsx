import LayoutUser from "../../layouts/LayoutUser";
import { useState } from "react";
import Swal from "sweetalert2";

export default function ChangePasswordUser() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (newPassword !== confirmPassword) {
      return Swal.fire("Oops", "Konfirmasi password tidak cocok", "warning");
    }

    try {
      const res = await fetch("http://localhost:3000/users/gantiPassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
          currentPassword,
          newPassword,
        }),
      });

      const data = await res.json();

      if (data.success) {
        Swal.fire("Berhasil", "Password berhasil diubah", "success").then(
          () => {
            window.location.href = "/beranda/profile";
          }
        );
      } else {
        Swal.fire("Gagal", data.msg || "Password gagal diubah", "error");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Terjadi kesalahan saat mengubah password", "error");
    }
  };

  return (
    <LayoutUser>
      <div className="form__container profile">
        <div className="form__header profile">
          <h1>GANTI PASSWORD</h1>
        </div>
        <form className="form__profile" onSubmit={handleSubmit}>
          <div className="profile__field">
            <label>Password Sekarang</label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
            />
          </div>
          <div className="profile__field">
            <label>Password Baru</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="profile__field">
            <label>Konfirmasi Password Baru</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="profile__field">
            <button type="submit">Simpan Password Baru</button>
          </div>
        </form>
      </div>
    </LayoutUser>
  );
}

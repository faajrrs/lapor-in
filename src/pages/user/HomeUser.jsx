import LayoutUser from "../../layouts/LayoutUser";

export default function HomeUser() {
  return (
    <LayoutUser>
      <div className="user__profile">
        <div className="user__profile_wrapper">
          <div className="user__image">{/* <img src="" alt="" /> */}</div>
          <div className="user__description">
            <h2>Selamat Datang Pelapor</h2>
            <h1>Fendika Edo Ferdinata</h1>
            <p>
              Perbarui profil Anda untuk mempermudah pengelolaan pengaduan. Klik
              tombol di bawah untuk melihat dan mengeditnya!
            </p>
            <div className="user__btn_profile">Lihat Profile</div>
          </div>
        </div>
      </div>
    </LayoutUser>
  );
}

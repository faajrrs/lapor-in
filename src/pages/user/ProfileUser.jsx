import LayoutUser from "../../layouts/LayoutUser";
import AvatarUser from "../../assets/img/user/user.jpg"

export default function ProfilUser() {

    function handleClick(e) {
        e.preventDefault()
    }
    
  return (
    <LayoutUser>
      <div class="form__container profile">
        <div class="form__header profile">
          <h1>PROFIL SAYA</h1>
        </div>
        <form className="form__profile">
            <div className="profile__field">
                <img src={AvatarUser} alt="" />
            </div>
            <div className="profile__field">
                <label>Nama Lengkap</label>
                <input type="text" value="Fendika Edo Ferdinata"/>
            </div>
            <div className="profile__field">
                <label>Email</label>
                <input type="email" value="fendika@gmail.com"/>
            </div>
            <div className="profile__field">
                <label>Nomor Handphone</label>
                <input type="text" value="08xxxx"/>
            </div>
            <div className="profile__field textarea">
                <label>Alamat Rumah</label>
                <input type="text" value="augduagufga"/>
            </div>
            <div className="profile__field">
                <button type="submit" onClick={handleClick}>Simpan</button>
                <button type="submit" onClick={handleClick}>Ganti Password</button>
            </div>    
        </form>
      </div>
    </LayoutUser>
  );
}

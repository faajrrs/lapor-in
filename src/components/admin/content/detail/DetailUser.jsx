export default function DetailUser({name_user,no_telp_user,email_user}) {
  return (
    <div className="detail-user">
      <div className="user-info">
        <label>Nama Pelapor</label>
        <p>{name_user}</p>
      </div>
      <div className="user-info">
        <label>Nomor Handphone</label>
        <p>{no_telp_user}</p>
      </div>
      <div className="user-info">
        <label>Email</label>
        <p>{email_user}</p>
      </div>
    </div>
  );
}

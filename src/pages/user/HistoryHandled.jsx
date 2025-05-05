import HistoryList from "../../components/user/history/HistoryList";
//import imgReport from "../../assets/img/user/history/kebakaran.jpg";
import HistoryItem from "../../components/user/history/item/HistoryItem";
import HistoryButton from "../../components/user/history/item/HistoryButton";
import { Link } from "react-router-dom";
import HistoryStatus from "../../components/user/history/HistoryStatus";
import { useEffect, useState } from "react";

export default function HistoryHandled() {
  const [laporan, setLaporan] = useState([]);
  useEffect(() => {
     fetch("http://localhost:3000/laporan/proses") // ganti port sesuai backend kamu
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
     <div className="history__container">
       <HistoryStatus />
       <HistoryList>
         {laporan.map((item, index) => (
             <HistoryItem
               key={index}
               image_report={`http://localhost:3000/uploads/laporan/${item.foto_laporan}`}
               name_agency={item.nama_instansi} // jika ingin ditampilkan, bisa ambil dari backend juga
               title_report={item.judul_laporan}
               date_report={item.tanggal}
               location_report={item.lokasi}
               children={
               <Link to={`/riwayat/masuk/detail/${item.id}`}>
                 <HistoryButton />
               </Link>
               }
             >
             </HistoryItem>
           ))}
       </HistoryList>
     </div>
   );
}

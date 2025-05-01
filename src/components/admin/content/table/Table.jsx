import "../../../../assets/css/table.css";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
export default function Table({ headers = [], datas = [], renderRow }) {
  return (
    <div
      className="table-container"
      role="region"
      aria-label="Laporan Pengaduan Table"
    >
      <table>
        <TableHead headers={headers}/>
        <TableBody datas={datas} renderRow={renderRow} headersCount={headers.length}/>
      </table>
    </div>
  );
}

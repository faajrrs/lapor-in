export default function DetailReport({title_report,desc_report,date_report,location_report}) {
    return(
        <div className="detail-desc">
        <div className="detail-desc-item">
          <div className="detail-report">
            <label>Judul Laporan</label>
            <p>{title_report}</p>
          </div>
          <div className="detail-report">
            <label>Deskripsi Laporan</label>
            <p>
              {desc_report}
            </p>
          </div>
        </div>
        <div className="detail-desc-item">
          <div className="detail-report">
            <label>Tanggal Kejadian</label>
            <p>{date_report}</p>
          </div>
          <div className="detail-report">
            <label>Lokasi Kejadian</label>
            <p>
             {location_report}
            </p>
          </div>
        </div>
      </div>
    )
}
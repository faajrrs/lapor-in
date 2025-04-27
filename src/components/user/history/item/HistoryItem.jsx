export default function HistoryItem({children,image_report,name_agency,title_report,location_report,date_report}) {
  return (
    <li className="history__item">
      <div className="history__image">
        <img src={image_report} alt="" />
      </div>
      <div className="history__instansi">
        <p>{name_agency}</p>
      </div>
      <div className="history__description">
        <h1>{title_report}</h1>
        <div className="history__location">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.75"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-map-pin-icon lucide-map-pin"
          >
            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <p>
            {location_report}
          </p>
        </div>
      </div>
      <div className="history__date">
        <p>{date_report}</p>
      </div>
      <div className="history__actions">
          {children}
      </div>
    </li>
  );
}

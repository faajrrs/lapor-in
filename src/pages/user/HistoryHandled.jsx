import HistoryList from "../../components/user/history/HistoryList";
import HistoryStatus from "../../components/user/history/HistoryStatus";
import HistoryItem from "../../components/user/history/item/HistoryItem";
import LayoutUser from "../../layouts/LayoutUser";
import ImgReport from "../../assets/img/user/history/kebakaran.jpg";
import HistoryButton from "../../components/user/history/item/HistoryButton";

export default function HistoryHandled() {
  return (
    <LayoutUser>
      <div className="history__container">
        <HistoryStatus />
        <HistoryList>
          <HistoryItem
            image_report={ImgReport}
            name_agency="Pemadam Kebakaran"
            title_report="Kebakaran Rumah"
            date_report="12 April 2004"
            location_report="Jl. RM Suryo, Barehan, Ploso, Kec. Pacitan, Kabupaten Pacitan, Jawa Timur 63511"
          >
            <HistoryButton text="Detail" />
          </HistoryItem>
        </HistoryList>
      </div>
    </LayoutUser>
  );
}

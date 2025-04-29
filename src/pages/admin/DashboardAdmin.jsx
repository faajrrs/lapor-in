import Card from "../../components/admin/content/card/Card";
import Chart from "../../components/admin/content/chart/Chart";
import MainContent from "../../components/admin/main/MainContent";
import RightSidebar from "../../components/admin/rightbar/RightSidebar";
import LayoutAdmin from "../../layouts/LayoutAdmin";

export default function DashboardAdmin() {
  return (
    <LayoutAdmin>
      <MainContent>
        <Card />
        <Chart />
      </MainContent>
      <RightSidebar />
    </LayoutAdmin>
  );
}

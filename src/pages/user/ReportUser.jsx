import FormReport from "../../components/user/report/FormReport";
import LayoutUser from "../../layouts/LayoutUser";

export default function ReportUser() {
  return (
    <LayoutUser>
      <div class="form__container">
        <div class="form__header">
          <h1>Sampaikan Laporan anda</h1>
        </div>
        <FormReport />
      </div>
    </LayoutUser>
  );
}

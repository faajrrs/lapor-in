import FormReport from "../../components/user/report/FormReport";
import LayoutUser from "../../layouts/LayoutUser";
import { isUser } from "../../utils/auth";
import { useEffect } from "react";

export default function ReportUser() {
  useEffect(() => {
    isUser();
  }, []);
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

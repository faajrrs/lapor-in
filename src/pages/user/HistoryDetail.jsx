import LayoutUser from "../../layouts/LayoutUser";

export default function HistoryDetail() {
  return (
    <LayoutUser>
      <div class="form__container">
        <div class="form__header">
          <h1>Detail Laporan anda</h1>
        </div>
        <FormReport />
      </div>
    </LayoutUser>
  );
}

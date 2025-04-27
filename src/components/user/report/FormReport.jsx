import FormFieldReport from "./FormFieldReport";
import FormInputReport from "./FormInputReport";
import FormLabelReport from "./FormLabelReport";

export default function FormReport() {
  return (
    <form action="" className="form__report">
      <FormFieldReport>
        <FormLabelReport text="Judul Laporan" />
        <FormInputReport
          type="text"
          name="judul_laporan"
          placeholder="Ketik judul laporan anda"
        />
      </FormFieldReport>
      <FormFieldReport>
        <FormLabelReport text="Deskripsi Laporan" />
        <FormInputReport
          type="text"
          name="deskripsi_laporan"
          placeholder="Ketik deskripsi laporan anda"
        />
      </FormFieldReport>
      <FormFieldReport>
        <FormLabelReport text="Tanggal Laporan" />
        <FormInputReport type="date" name="tgl_laporan" />
      </FormFieldReport>
      <FormFieldReport>
        <FormLabelReport text="Lokasi Laporan" />
        <FormInputReport
          type="text"
          name="lokasi_laporan"
          placeholder="Ketik lokasi/alamat kejadian laporan anda"
        />
      </FormFieldReport>
      <FormFieldReport>
        <FormLabelReport text="Instansi Tujuan" />
        <select name="" id="">
          <option value="">Pilih Instansi Tujuan</option>
          <option value="">Damkar</option>
          <option value="">Polisi</option>
        </select>
      </FormFieldReport>
      <FormFieldReport>
        <FormLabelReport text="Kirim Bukti Laporan"/>
        <FormInputReport type="file" placeholder="Ketik lokasi/alamat kejadian laporan anda"/>
      </FormFieldReport>
      <div class="form__btn">
        <button type="submit">LAPOR!</button>
      </div>
    </form>
  );
}

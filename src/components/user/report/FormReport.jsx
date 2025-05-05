import { useState, useRef } from "react";
import FormFieldReport from "./FormFieldReport";
import FormInputReport from "./FormInputReport";
import FormLabelReport from "./FormLabelReport";

export default function FormReport() {
  const [formData, setFormData] = useState({
    judul_laporan: "",
    deskripsi_laporan: "",
    lokasi: "",
    instansi_id: "",
    foto: null,
  });

  const fileInputRef = useRef(null); // <- untuk reset file input

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("judul_laporan", formData.judul_laporan);
    data.append("deskripsi_laporan", formData.deskripsi_laporan);
    data.append("lokasi", formData.lokasi);
    data.append("instansi_id", formData.instansi_id);
    data.append("foto", formData.foto);

    try {
      const res = await fetch("http://localhost:3000/laporan", {
        method: "POST",
        body: data,
      });

      const result = await res.json();
      if (result.success) {
        alert("Laporan berhasil dikirim!");

        // Reset form
        setFormData({
          judul_laporan: "",
          deskripsi_laporan: "",
          lokasi: "",
          instansi_id: "",
          foto: null,
        });

        if (fileInputRef.current) {
          fileInputRef.current.value = null;
        }
      } else {
        alert("Gagal: " + result.message);
      }
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan server");
    }
  };

  return (
    <form className="form__report" onSubmit={handleSubmit} encType="multipart/form-data">
      <FormFieldReport>
        <FormLabelReport text="Judul Laporan" />
        <FormInputReport
          type="text"
          name="judul_laporan"
          placeholder="Ketik judul laporan anda"
          value={formData.judul_laporan}
          onChange={handleChange}
        />
      </FormFieldReport>

      <FormFieldReport>
        <FormLabelReport text="Deskripsi Laporan" />
        <FormInputReport
          type="text"
          name="deskripsi_laporan"
          placeholder="Ketik deskripsi laporan anda"
          value={formData.deskripsi_laporan}
          onChange={handleChange}
        />
      </FormFieldReport>

      <FormFieldReport>
        <FormLabelReport text="Lokasi Laporan" />
        <FormInputReport
          type="text"
          name="lokasi"
          placeholder="Ketik lokasi/alamat kejadian laporan anda"
          value={formData.lokasi}
          onChange={handleChange}
        />
      </FormFieldReport>

      <FormFieldReport>
        <FormLabelReport text="Instansi Tujuan" />
        <select
          name="instansi_id"
          value={formData.instansi_id}
          onChange={handleChange}
        >
          <option value="">Pilih Instansi Tujuan</option>
          <option value="1">Damkar</option>
          <option value="2">Polisi</option>
        </select>
      </FormFieldReport>

      <FormFieldReport>
        <FormLabelReport text="Kirim Bukti Laporan" />
        <FormInputReport
          type="file"
          name="foto"
          onChange={handleChange}
          ref={fileInputRef} // <- penting untuk reset
        />
      </FormFieldReport>

      <div className="form__btn">
        <button type="submit">LAPOR!</button>
      </div>
    </form>
  );
}

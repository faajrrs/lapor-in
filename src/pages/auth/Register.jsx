import "../../assets/css/auth.css";
import FormFooter from "../../components/auth/FormFooter";
import FormHeader from "../../components/auth/FormHeader";
import LayoutAuth from "../../layouts/LayoutAuth";
import LayoutHome from "../../layouts/LayoutHome";
import Form from "../../components/auth/Form";
import FormField from "../../components/auth/FormField";
import FormLabel from "../../components/auth/FormLabel";
import FormInput from "../../components/auth/FormInput";
import FormButton from "../../components/auth/FormButton";
import { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    nama_lengkap: "",
    hp: "",
    email: "",
    password: "",
  });

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
    data.append("nama_lengkap", formData.judul_laporan);
    data.append("hp", formData.hp);
    data.append("email", formData.email);
    data.append("password", formData.password);

    const res = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    if (result.success) {
      alert("User Berhasil Dibuat!");
      window.location.href = "http://localhost:5173/masuk";
      // Reset form
      setFormData({
        nama_lengkap: "",
        hp: "",
        email: "",
        password: "",
      });

      if (fileInputRef.current) {
        fileInputRef.current.value = null;
      }
    } else {
      alert("Gagal: " + result.message);
    }
    /*catch (error) {
      console.error(error);
      alert("Terjadi kesalahan server");
    }
    */
  };

  return (
    <LayoutHome>
      <LayoutAuth>
        <FormHeader title="Daftar Akun Baru" />
        <Form onSubmit={handleSubmit}>
          <FormField>
            <FormLabel text="Nama Lengkap" />
            <FormInput
              name="nama_lengkap"
              type="text"
              placeholder="Masukkan nama lengkap anda"
              value={formData.nama_lengkap}
              onChange={handleChange}
            />
          </FormField>
          <FormField>
            <FormLabel text="No Handphone" />
            <FormInput
              name="hp"
              type="text"
              placeholder="Masukkan nomor handphone"
              value={formData.hp}
              onChange={handleChange}
            />
          </FormField>
          <FormField>
            <FormLabel text="Email" />
            <FormInput
              name="email"
              type="email"
              placeholder="Masukkan email"
              value={formData.email}
              onChange={handleChange}
            />
          </FormField>
          <FormField>
            <FormLabel text="Kata Sandi" />
            <FormInput
              name="password"
              type="password"
              placeholder="Masukkan kata sandi anda"
              value={formData.password}
              onChange={handleChange}
            />
          </FormField>

          <FormButton text="Daftar" />
        </Form>
        <FormFooter
          text="Sudah punya akun? "
          link="Masuk sekarang!"
          path="/masuk"
        />
      </LayoutAuth>
    </LayoutHome>
  );
}

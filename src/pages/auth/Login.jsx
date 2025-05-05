import LayoutHome from "../../layouts/LayoutHome";
import "../../assets/css/auth.css";
import FormHeader from "../../components/auth/FormHeader";
import Form from "../../components/auth/Form";
import FormFooter from "../../components/auth/FormFooter";
import LayoutAuth from "../../layouts/LayoutAuth";
import FormField from "../../components/auth/FormField";
import FormLabel from "../../components/auth/FormLabel";
import FormInput from "../../components/auth/FormInput";
import FormLink from "../../components/auth/FormLink";
import FormButton from "../../components/auth/FormButton";
import { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        alert("Login berhasil!");
        localStorage.setItem("token", result.token);
      
        // Arahkan tergantung instansi_id
        if (result.instansi_id !== null ) {
          window.location.href = "http://localhost:5173/masuk/dashboard";
        } else {
          window.location.href = "http://localhost:5173/beranda";
        }
      }
      else {
        alert("Gagal login: " + result.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan server");
    }
  };
  return (
    <LayoutHome>
      <LayoutAuth>
        <FormHeader title="Masuk Ke Akun" />
        <Form onSubmit={handleSubmit}>
          <FormField>
            <FormLabel text="No Handphone / Email" />
            <FormInput
              type="email"
              name="email"
              value={formData.email}
              placeholder="Masukkan no handphone / email yang terdaftar"
              onChange={handleChange}
            />
          </FormField>

          <FormField>
            <FormLabel text="Kata Sandi" />
            <FormInput
              type="password"
              name="password"
              value={formData.password}
              placeholder="Masukkan kata sandi yang terdaftar"
              onChange={handleChange}
            />
          </FormField>

          <FormLink text="Lupa kata sandi?" href="/lupa-kata-sandi" />
          <FormButton text="Masuk" type="submit" />
        </Form>
        <FormFooter text="Belum punya akun? " link="Daftar sekarang!" path="/daftar" />
      </LayoutAuth>
    </LayoutHome>
  );
}

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
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import Swal from "sweetalert2";

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
        Swal.fire({
          title: "Login Berhasil",
          text: "Selamat Menggunakan Aplikasi",
          icon: "success",
        });

        // Simpan token
        localStorage.setItem("token", result.token);


        // Decode token untuk dapatkan role_id
        const decoded = jwtDecode(result.token);
        const roleId = decoded.role_id;

        // Redirect berdasarkan role
        if (roleId === 1) {
          window.location.href = "http://localhost:5173/admin/dashboard";
        } else {
          window.location.href = "http://localhost:5173/beranda";
        } else {
          alert("Role tidak dikenali");
        }
      } else {
        Swal.fire({
          title: "Login Gagal",
          text: result.message,
          icon: "error",
        });
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
        <FormFooter
          text="Belum punya akun? "
          link="Daftar sekarang!"
          path="/daftar"
        />
      </LayoutAuth>
    </LayoutHome>
  );
}

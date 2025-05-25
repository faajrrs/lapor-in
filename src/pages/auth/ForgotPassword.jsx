import { useState } from "react";
import "../../assets/css/auth.css";
import Form from "../../components/auth/Form";
import FormButton from "../../components/auth/FormButton";
import FormField from "../../components/auth/FormField";
import FormHeader from "../../components/auth/FormHeader";
import FormInput from "../../components/auth/FormInput";
import FormLabel from "../../components/auth/FormLabel";
import LayoutAuth from "../../layouts/LayoutAuth";
import LayoutHome from "../../layouts/LayoutHome";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/auth/request-reset", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        window.location.href = "http://localhost:5173/buat-sandi-baru";
      }
      setMsg(data.msg);
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan server");
    }
  };

  return (
    <LayoutHome>
      <LayoutAuth>
        <FormHeader title="Lupa Kata Sandi" />
        <Form onSubmit={handleSubmit}>
          <FormField>
            <FormLabel text="Email" />
            <FormInput
              type="email"
              placeholder="Masukkan email anda yang terdaftar"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormField>
          <FormButton type="submit" text="Kirim" />
          {msg && <p style={{ marginTop: "1rem", color: "green" }}>{msg}</p>}
        </Form>
      </LayoutAuth>
    </LayoutHome>
  );
}

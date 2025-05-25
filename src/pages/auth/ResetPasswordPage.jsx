import { useState } from "react";
import "../../assets/css/auth.css";
import LayoutHome from "../../layouts/LayoutHome";
import LayoutAuth from "../../layouts/LayoutAuth";
import Form from "../../components/auth/Form";
import FormField from "../../components/auth/FormField";
import FormInput from "../../components/auth/FormInput";
import FormLabel from "../../components/auth/FormLabel";
import FormButton from "../../components/auth/FormButton";
import FormHeader from "../../components/auth/FormHeader";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/auth/verify-reset", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, code, newPassword }),
    });

    const data = await res.json();
    if (data.success) {
      window.location.href = "http://localhost:5173/masuk";
    }
    setMsg(data.msg);
  };

  return (
    <LayoutHome>
      <LayoutAuth>
        <FormHeader title="Reset Password" />
        <Form onSubmit={handleSubmit}>
          <FormField>
            <FormLabel text="Email" />
            <FormInput
              type="email"
              placeholder="Masukkan email anda"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormField>

          <FormField>
            <FormLabel text="Kode Verifikasi" />
            <FormInput
              type="text"
              placeholder="Masukkan kode verifikasi"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </FormField>

          <FormField>
            <FormLabel text="Password Baru" />
            <FormInput
              type="password"
              placeholder="Masukkan password baru"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </FormField>

          <FormButton type="submit" text="Ubah Password" />
          {msg && <p style={{ marginTop: "1rem", color: "green" }}>{msg}</p>}
        </Form>
      </LayoutAuth>
    </LayoutHome>
  );
}

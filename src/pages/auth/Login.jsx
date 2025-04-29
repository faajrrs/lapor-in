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
export default function Login() {
  return (
    <LayoutHome>
      <LayoutAuth>
        <FormHeader title="Masuk Ke Akun" />
        <Form>
            <FormField>
                <FormLabel text="No Handphone / Email"/>
                <FormInput type="email" placeholder="Masukkan no handphone / email yang terdaftar"/>
            </FormField>
            <FormField>
                <FormLabel text="Kata Sandi"/>
                <FormInput type="password" placeholder="Masukkan kata sandi yang terdaftar"/>
            </FormField>
            <FormLink text="Lupa kata sandi?" href="/lupa-kata-sandi"/>
            <FormButton text="Masuk" type="submit"/>
        </Form>
        <FormFooter text="Belum punya akun? " link="Daftar sekarang!" path="/daftar"/>
      </LayoutAuth>
    </LayoutHome>
  );
}

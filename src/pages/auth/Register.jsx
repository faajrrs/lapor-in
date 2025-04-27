import "../../assets/css/auth.css";
// import "../../App.css";
import FormFooter from "../../components/auth/FormFooter";
import FormHeader from "../../components/auth/FormHeader";
import LayoutAuth from "../../layouts/LayoutAuth";
import LayoutHome from "../../layouts/LayoutHome";
import Form from "../../components/auth/Form";
import FormField from "../../components/auth/FormField";
import FormLabel from "../../components/auth/FormLabel";
import FormInput from "../../components/auth/FormInput";
import FormButton from "../../components/auth/FormButton";

export default function Register() {
    return(
        <LayoutHome>
            <LayoutAuth>
                <FormHeader title="Daftar Akun Baru"/>
                <Form>
                    <FormField>
                        <FormLabel text="No Handphone"/>
                        <FormInput type="text" placeholder="Masukkan nomor handphone"/>
                    </FormField>
                    <FormField>
                        <FormLabel text="Nama Lengkap"/>
                        <FormInput type="text" placeholder="Masukkan nama lengkap anda"/>
                    </FormField>
                    <FormField>
                        <FormLabel text="Kata Sandi"/>
                        <FormInput type="password" placeholder="Masukkan kata sandi anda"/>
                    </FormField>

                    <FormButton text="Daftar"/>
                </Form>
                <FormFooter text="Sudah punya akun? " link="Masuk sekarang!" path="/login"/>
            </LayoutAuth>
        </LayoutHome>
    );
}
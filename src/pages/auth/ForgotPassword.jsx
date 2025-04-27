import "../../assets/css/auth.css";
// import "../../App.css";
import Form from "../../components/auth/Form";
import FormButton from "../../components/auth/FormButton";
import FormField from "../../components/auth/FormField";
import FormHeader from "../../components/auth/FormHeader";
import FormInput from "../../components/auth/FormInput";
import FormLabel from "../../components/auth/FormLabel";
import LayoutAuth from "../../layouts/LayoutAuth";
import LayoutHome from "../../layouts/LayoutHome";

export default function ForgotPassword() {
    return(
        <LayoutHome>
            <LayoutAuth>
                <FormHeader title="Lupa Kata Sandi"/>
                <Form>
                    <FormField>
                        <FormLabel text="Email"/>
                        <FormInput type="email" placeholder="Masukkan email anda yang terdaftar"/>
                    </FormField>
                    <FormButton type="submit" text="Kirim"/>
                </Form>
            </LayoutAuth>
        </LayoutHome>
    );
}
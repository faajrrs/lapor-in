import Header from "../components/home/Header";
import Main from "../components/home/Main";
import LayoutHome from "../layouts/LayoutHome";

export default function Homepage() {
    return(
        <LayoutHome>
            <Header/>
            <Main/>
        </LayoutHome>
    );
}
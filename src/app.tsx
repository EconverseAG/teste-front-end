import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import IconesHome from "./components/IconesHome/IconesHome";
import { Produtos } from "./components/Produtos/Produtos";
import Parceiros from "./components/Parceiros/Parceiros";
import Marcas from "./components/Marcas/Marcas";
import ProdutosRelacionados from "./components/ProdutosRelacionados/ProdutosRelacionados";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import "./styles/global.scss";
import '@splidejs/splide/dist/css/splide.min.css';


export default function App() {
    return (
        <div>
            <Header />
            <Banner />
            <IconesHome />
            <Produtos />
            <Parceiros />
            <ProdutosRelacionados />
            <Parceiros />
            <Marcas />
            <ProdutosRelacionados />
            <Newsletter />
            <Footer />
        </div>
    );
}

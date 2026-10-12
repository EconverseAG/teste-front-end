import Categorias from "./components/Categorias";
import BlackFridayBanner from "./components/BlackFridayBanner";
import Header from "./components/Header";
import Products from "./components/Products";
import BannerParceiros from "./components/BannerParceiros";
import Brands from "./components/Brand";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <BlackFridayBanner />
      <Categorias />
      <Products />
      <BannerParceiros />
      <Products showCategories={false} />
      <BannerParceiros />
      <Brands />
      <Products showCategories={false} />
      <Footer />
    </div>
  );
}

export default App;

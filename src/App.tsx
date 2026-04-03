import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { MainBanner } from "./components/MainBanner";
import { CategoryList } from "./components/CategoryList";
import { ProductShelf } from "./components/ProductShelf";
import { PartnerBanners } from "./components/PartnerBanners";
import { BrandCarousel } from "./components/BrandCarousel";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";
import "./components/ProductCard/style.scss";

function App() {
  return (
    <div>
      <Header />
      <Navbar />

      <main>
        <MainBanner />
        <CategoryList />

        <ProductShelf
          title="Produtos relacionados"
          showTabs={true}
          activeTab="Celular"
        />
        <PartnerBanners />

        <ProductShelf
          title="Produtos relacionados"
          showTabs={false}
          activeTab="Celular"
        />

        <PartnerBanners />

        <BrandCarousel />

        <ProductShelf
          title="Produtos relacionados"
          showTabs={false}
          activeTab="Celular"
        />

        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}

export default App;

import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { MainBanner } from "./components/MainBanner";
import { CategoryList } from "./components/CategoryList";
import { ProductGrid } from "./components/ProductGrid";
import { PartnerBanners } from "./components/PartnerBanners";
import "./components/ProductCard/style.scss";
import { BrandCarousel } from "./components/BrandCarousel";

function App() {
  return (
    <div>
      <Header />
      <Navbar />

      <main>
        <MainBanner />
        <CategoryList />
        <ProductGrid />
        <PartnerBanners />
        <BrandCarousel />
      </main>
    </div>
  );
}

export default App;

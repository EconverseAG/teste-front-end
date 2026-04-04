import { MainBanner } from "../../components/MainBanner";
import { CategoryList } from "../../components/CategoryList";
import { ProductShelf } from "../../components/ProductShelf";
import { PartnerBanners } from "../../components/PartnerBanners";
import { BrandCarousel } from "../../components/BrandCarousel";
import { Newsletter } from "../../components/Newsletter";

export function Home() {
  return (
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
  );
}

import { SiteFooter } from "@/components/layout/site-footer/site-footer";
import { SiteHeader } from "@/components/layout/site-header/site-header";
import { ProductShowcase } from "@/features/products/components/product-showcase/product-showcase";
import { createProductShowcases } from "@/features/products/lib/create-product-showcases";
import { getProducts } from "@/features/products/lib/products";
import { BrandList } from "@/features/store/components/brand-list/brand-list";
import { CategoryNav } from "@/features/store/components/category-nav/category-nav";
import { HeroBanner } from "@/features/store/components/hero-banner/hero-banner";
import { Newsletter } from "@/features/store/components/newsletter/newsletter";
import { PromoBanners } from "@/features/store/components/promo-banners/promo-banners";
import styles from "./page.module.scss";

export default async function HomePage() {
  const products = await getProducts();

  const [firstShowcaseProducts, secondShowcaseProducts, thirdShowcaseProducts] =
    createProductShowcases(products);

  return (
    <>
      <SiteHeader />

      <main className={styles.homeContent}>
        <div className={styles.heroSection}>
          <HeroBanner />
          <CategoryNav />
        </div>

        <ProductShowcase
          id="vitrine-1"
          title="Produtos relacionados"
          products={firstShowcaseProducts}
          showTabs
        />

        <PromoBanners />

        <ProductShowcase
          id="vitrine-2"
          title="Produtos relacionados"
          products={secondShowcaseProducts}
        />

        <PromoBanners />

        <BrandList />

        <ProductShowcase
          id="vitrine-3"
          title="Produtos relacionados"
          products={thirdShowcaseProducts}
        />
      </main>
      <Newsletter />
      <SiteFooter />
    </>
  );
}

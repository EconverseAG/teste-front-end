import type { Product } from "@/lib/catalog"
import { SEARCH_RESULTS_ID } from "@/content/home"
import { ScrollToTop } from "@/components/molecules"
import { ScrollProgress } from "@/components/motion/ScrollProgress/ScrollProgress"
import {
  BrandList,
  CartDrawer,
  CategoryNav,
  Footer,
  Header,
  HeroBanner,
  Newsletter,
  PartnerBanners,
  ProductShowcase,
} from "@/components/organisms"
import styles from "./HomeTemplate.module.scss"

/** Ordem e ritmo da home exatamente como no Figma. */
export function HomeTemplate({ products }: { products: readonly Product[] }) {
  return (
    <>
      <a href="#conteudo" className={styles.skip}>
        Pular para o conteúdo
      </a>
      <ScrollProgress />
      <Header />
      <main id="conteudo" className={styles.main}>
        <HeroBanner />
        <CategoryNav />
        <ProductShowcase id={SEARCH_RESULTS_ID} products={products} withTabs searchable priority />
        <PartnerBanners id="parceiros-1" />
        <ProductShowcase products={products} />
        <PartnerBanners id="parceiros-2" />
        <BrandList />
        <ProductShowcase products={products} />
      </main>
      <Newsletter />
      <Footer />
      <CartDrawer />
      <ScrollToTop />
    </>
  )
}

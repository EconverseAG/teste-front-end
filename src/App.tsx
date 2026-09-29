import { useCallback, useState } from 'react';
import BrandsSection from './components/BrandsSection/BrandsSection';
import CategoryNav from './components/CategoryNav/CategoryNav';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HeroBanner from './components/HeroBanner/HeroBanner';
import Newsletter from './components/Newsletter/Newsletter';
import PartnersSection from './components/PartnersSection/PartnersSection';
import ProductModal from './components/ProductModal/ProductModal';
import ProductShowcase from './components/ProductShowcase/ProductShowcase';
import { VITRINE_TABS } from './data/content';
import { useProducts } from './hooks/useProducts';
import type { Product } from './types/product';

export default function App() {
  const { products, status } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const openModal = useCallback((product: Product) => setSelectedProduct(product), []);
  const closeModal = useCallback(() => setSelectedProduct(null), []);

  const vitrineProps = { products, status, onOpenModal: openModal };

  return (
    <div className="app-layout">
      <Header />

      <main>
        <HeroBanner />
        <CategoryNav />

        <ProductShowcase
          {...vitrineProps}
          id="vitrine-1"
          titulo="Produtos relacionados"
          carrosselTitulo="Ofertas da semana"
          tabs={VITRINE_TABS}
        />

        <PartnersSection />

        <ProductShowcase
          {...vitrineProps}
          id="vitrine-2"
          titulo="Produtos relacionados"
          carrosselTitulo="Mais vendidos"
          variant="after-partners"
          showViewAll
        />

        <PartnersSection gap />

        <BrandsSection />

        <ProductShowcase
          {...vitrineProps}
          id="vitrine-3"
          titulo="Produtos relacionados"
          carrosselTitulo="Novidades"
          variant="last"
          showViewAll
        />
      </main>

      <Newsletter />
      <Footer />

      {selectedProduct ? <ProductModal product={selectedProduct} onClose={closeModal} /> : null}
    </div>
  );
}

import { useCallback, useState } from 'react';
import { BrandsSection } from '../../components/BrandsSection/BrandsSection';
import { CategoryList } from '../../components/CategoryList/CategoryList';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { Banner } from '../../components/Banner/Banner';
import { Newsletter } from '../../components/Newsletter/Newsletter';
import { PartnerBanners } from '../../components/PartnerBanners/PartnerBanners';
import { ProductModal } from '../../components/ProductModal/ProductModal';
import { ProductSection } from '../../components/ProductSection/ProductSection';
import { useProducts } from '../../hooks/useProducts';
import type { Product } from '../../types/product';
import './Home.scss';

const RELATED_PRODUCTS_TABS = ['Celular', 'Acessórios', 'Tablets', 'Notebooks', 'TVs', 'Ver todos'];

export function Home() {
  const { products, isLoading, errorMessage } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const closeModal = useCallback(() => setSelectedProduct(null), []);

  function renderProducts() {
    if (isLoading) return <p className="home__status" role="status">Carregando produtos...</p>;
    if (errorMessage) return <p className="home__status" role="alert">{errorMessage}</p>;

    return (
      <>
        <ProductSection
          id="related-products-1"
          title="Produtos relacionados"
          products={products}
          tabs={RELATED_PRODUCTS_TABS}
          onSelectProduct={setSelectedProduct}
        />
        <PartnerBanners />
        <ProductSection
          id="related-products-2"
          title="Produtos relacionados"
          products={products}
          showViewAll
          onSelectProduct={setSelectedProduct}
        />
        <PartnerBanners />
        <BrandsSection />
        <ProductSection
          id="related-products-3"
          title="Produtos relacionados"
          products={products}
          showViewAll
          onSelectProduct={setSelectedProduct}
        />
      </>
    );
  }

  return (
    <>
      <Header />
      <main id="produtos" className="home">
        <Banner />
        <CategoryList />
        {renderProducts()}
      </main>
      <Newsletter />
      <Footer />
      {selectedProduct && <ProductModal product={selectedProduct} onClose={closeModal} />}
    </>
  );
}

import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import type { Product } from './types/product';
import { getProducts } from './data/products';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryNav } from './components/CategoryNav';
import { ProductShelf } from './components/ProductShelf';
import { PartnerBanners } from './components/PartnerBanners';
import { BrandShelf } from './components/BrandShelf';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import './styles/main.scss';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartCount, setCartCount] = useState(0);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    getProducts(controller.signal).then(setProducts).catch((cause: unknown) => {
      if (cause instanceof Error && cause.name === 'AbortError') return;
      setError(cause instanceof Error ? cause.message : 'Não foi possível carregar os produtos.');
    });
    return () => controller.abort();
  }, []);

  const matchingProducts = useMemo(() => products.filter((product) =>
    `${product.productName} ${product.descriptionShort}`.toLocaleLowerCase('pt-BR').includes(searchTerm.toLocaleLowerCase('pt-BR')),
  ), [products, searchTerm]);

  return <>
    <Header cartCount={cartCount} onSearch={setSearchTerm} />
    <main>
      <Hero />
      <CategoryNav />
      {error ? <div className="load-state load-state--error" role="alert"><p>{error}</p><button type="button" onClick={() => window.location.reload()}>Tentar novamente</button></div> : products.length === 0 ? <p className="load-state" role="status">Carregando produtos…</p> : searchTerm ? (
        matchingProducts.length > 0
          ? <ProductShelf id="produtos" products={matchingProducts} onSelect={setSelectedProduct} title={`Resultados para “${searchTerm}”`} />
          : <p className="load-state" role="status">Nenhum produto encontrado para “{searchTerm}”.</p>
      ) : <>
        <ProductShelf id="produtos" products={products} onSelect={setSelectedProduct} showCategories />
        <PartnerBanners />
        <ProductShelf id="ofertas" products={products} onSelect={setSelectedProduct} subtitle="Ver todos" />
        <PartnerBanners />
        <BrandShelf />
        <ProductShelf id="mais-produtos" products={products} onSelect={setSelectedProduct} subtitle="Ver todos" />
      </>}
    </main>
    <Footer />
    <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} onAddToCart={(quantity) => setCartCount((count) => count + quantity)} />
  </>;
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);

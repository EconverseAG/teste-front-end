import './App.css'
import './styles/main.scss'
import Modal from './components/Shared/organisms/Modal/Modal';
import Newsletter from './components/Shared/organisms/Newsletter/Newsletter';
import HomeSection from './components/Shared/organisms/HomeSection';

import { useEffect, useState } from 'react';
import { fetchProducts } from './services/products.ts';
import type { Product } from './types.ts';
import Header from './components/Shared/organisms/Header';
import Banner from './components/Shared/organisms/Banner';
import { BrandNavigation } from './components/Shared/organisms/BrandNavigation';
import Footer from './components/Shared/organisms/Footer';
import { LogoEconverse } from './components/Shared/atoms/Icons';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Dados de exemplo para os parceiros
  const partners = [
    {
      id: 1,
      name: "Econverse",
      logo: LogoEconverse
    },
    {
      id: 2,
      name: "Econverse",
      logo: LogoEconverse
    },
    {
      id: 3,
      name: "Econverse",
      logo: LogoEconverse
    },
    {
      id: 4,
      name: "Econverse",
      logo: LogoEconverse
    },
    {
      id: 5,
      name: "Econverse",
      logo: LogoEconverse
    }
  ];

  const handleBuy = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return (
    <>
      <Header />
      <main role="main" aria-label="Conteúdo principal">
        <section aria-label="Carregando produtos" className="loading-section">
          <div role="status" aria-live="polite">
            <h2>Carregando produtos...</h2>
            <p>Por favor, aguarde enquanto carregamos as melhores ofertas para você.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );

  if (error) return (
    <>
      <Header />
      <main role="main" aria-label="Conteúdo principal">
        <section aria-label="Erro ao carregar" className="error-section">
          <div role="alert" aria-live="assertive">
            <h2>Erro ao carregar produtos</h2>
            <p>Desculpe, ocorreu um erro: {error}</p>
            <button onClick={() => window.location.reload()}>
              Tentar novamente
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );

  return (
    <>
      <Header />
      <main role="main" aria-label="Conteúdo principal da Econverse">
        <Banner />
        <HomeSection products={products} onBuyClick={handleBuy} />
        <BrandNavigation title="Navegue por marcas" partners={partners} />
        <Newsletter />
      </main>
      <Footer />
      <Modal isOpen={isModalOpen} onClose={closeModal} product={selectedProduct} />
    </>
  )
}

export default App

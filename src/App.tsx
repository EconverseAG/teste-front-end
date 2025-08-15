import './App.css'
import './styles/main.scss'
import Card from '../src/components/Shared/atoms/Card/Card.tsx';
import Header from './components/Shared/organisms/Header/Header';
import Footer from './components/Shared/organisms/Footer/Footer';

import React from 'react';
import { useEffect, useState } from 'react'; 
import { fetchProducts } from './services/products.ts';
import type { Product } from './types/Product.ts';

function App() {

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  const handleBuy = () => {
    console.log('Produto comprado!');
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
      <div>Carregando...</div>
      <Footer />
    </>
  );
  
  if (error) return (
    <>
      <Header />
      <div>Erro: {error}</div>
      <Footer />
    </>
  );
  

  return (
    <>
      <Header />
      
      <main>
        <h1>Econverse | Vitrine de Produtos</h1>

        <div className="cards-container">
        {products.map((product) => (
          <Card
            key={product.productName}
            imageSrc={product.photo}
            imageAlt={product.productName}
            description={product.descriptionShort}
            originalPrice={product.price}
            currentPrice={product.price}
            installments={{ count: 1, value: product.price }} // ajuste conforme necessário
            freeShipping={true} // ajuste conforme necessário
            onBuyClick={handleBuy}
          />
        ))}
      </div>
      </main>
      
      <Footer />
    </>
  )
}

export default App

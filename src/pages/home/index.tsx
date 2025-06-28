import React, { useState } from 'react';
import Popup from '../../components/popup';
import useProducts from '../../hooks/useProduct';
import type { Product } from '../../interfaces/Product';
import './index.scss';
import LoadingComponent from '../../components/loading';
import ErrorComponent from '../../components/error';

const Home: React.FC = () => {
  const { products, loading, error } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = (product: Product) => {
    setSelectedProduct(product);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setSelectedProduct(null);
  };

  if (loading) return <LoadingComponent />;
  if (error) return <ErrorComponent message={error} />;

  return (
    <div className="home">
      <h1>Vitrine de Produtos</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div
            key={product.id}
            className="product"
            onClick={() => openPopup(product)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && openPopup(product)}
          >
            <img src={product.photo} alt={product.productName} />
            <h2>{product.productName}</h2>
            <p>Preço: R${product.price}</p>
          </div>
        ))}
      </div>
      {isOpen && selectedProduct && (
        <Popup product={selectedProduct} onClose={closePopup} />
      )}
    </div>
  );
};

export default Home;
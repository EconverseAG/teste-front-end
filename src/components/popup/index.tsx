import React from 'react';
import type { Product } from '../../interfaces/Product';
import './index.scss';

interface PopupProps {
  product: Product;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ product, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <button onClick={onClose} aria-label="Fechar popup">Fechar</button>
        <img src={product.photo} alt={product.productName} />
        <h2>{product.productName}</h2>
        <p>{product.descriptionShort}</p>
        <p>Preço: R${product.price}</p>
      </div>
    </div>
  );
};

export default Popup;
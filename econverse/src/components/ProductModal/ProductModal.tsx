import { useEffect, useRef, useState } from 'react';
import type { MouseEvent } from 'react';
import type { Product } from '../../types/product';
import { formatCurrency } from '../../utils/formatCurrency';
import { CloseIcon } from '../Icons/Icons';
import { QuantitySelector } from '../QuantitySelector/QuantitySelector';
import './ProductModal.scss';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose();
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  function handleOverlayClick(event: MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) onClose();
  }

  return (
    <div className="product-modal__overlay" onClick={handleOverlayClick}>
      <div
        className="product-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
      >
        <button
          ref={closeButtonRef}
          type="button"
          className="product-modal__close"
          aria-label="Fechar"
          onClick={onClose}
        >
          <CloseIcon size={24} />
        </button>

        <div className="product-modal__media">
          <img src={product.photo} alt={product.productName} />
        </div>

        <div className="product-modal__info">
          <h2 id="product-modal-title" className="product-modal__title">
            {product.productName}
          </h2>
          <p className="product-modal__price">{formatCurrency(product.price)}</p>
          <p className="product-modal__description">{product.descriptionShort}</p>
          <a className="product-modal__link" href="#detalhes">
            Veja mais detalhes do produto &gt;
          </a>

          <div className="product-modal__actions">
            <QuantitySelector quantity={quantity} onChange={setQuantity} />
            <button type="button" className="product-modal__buy">
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

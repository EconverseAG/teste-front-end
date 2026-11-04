import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import type { Product } from '../../types/product';
import { formatPrice } from '../../utils/formatPrice';
import './ProductModal.scss';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onBuy?: (product: Product, quantity: number) => void;
}

export function ProductModal({ product, onClose, onBuy }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (!product) return;
    setQuantity(1);

    const onKeyDown = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [product, onClose]);

  if (!product) return null;

  const { productName, descriptionShort, photo, price } = product;

  return createPortal(
    <div className="product-modal__overlay" onClick={onClose}>
      <div
        className="product-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="product-modal__close" onClick={onClose} aria-label="Fechar">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M1 1l10 10M11 1L1 11" />
          </svg>
        </button>

        <img className="product-modal__image" src={photo} alt={productName} />

        <div className="product-modal__info">
          <div className="product-modal__text">
            <div>
              <h2 id="product-modal-title" className="product-modal__title">{productName}</h2>
              <p className="product-modal__price">{formatPrice(price)}</p>
            </div>
            <div>
              <p className="product-modal__description">{descriptionShort}</p>
              <a className="product-modal__link" href="#">Veja mais detalhes do produto &gt;</a>
            </div>
          </div>

          <div className="product-modal__actions">
            <div className="product-modal__quantity">
              <button type="button" onClick={() => setQuantity((q) => Math.max(1, q - 1))} aria-label="Diminuir">−</button>
              <span>{String(quantity).padStart(2, '0')}</span>
              <button type="button" onClick={() => setQuantity((q) => q + 1)} aria-label="Aumentar">+</button>
            </div>
            <button type="button" className="product-modal__buy" onClick={() => onBuy?.(product, quantity)}>
              COMPRAR
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
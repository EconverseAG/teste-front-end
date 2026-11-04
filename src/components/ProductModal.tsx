import { useEffect, useRef, useState } from 'react';
import type { Product } from '../types/product';
import { formatPrice } from '../data/products';

export function ProductModal({ product, onClose, onAddToCart }: {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (quantity: number) => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (product && dialog && !dialog.open) dialog.showModal();
    if (!product && dialog?.open) dialog.close();
  }, [product]);
  useEffect(() => setQuantity(1), [product]);

  const handleBackdrop = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current) onClose();
  };

  return (
    <dialog className="product-modal" ref={dialogRef} onClose={onClose} onClick={handleBackdrop} aria-labelledby="modal-title">
      {product && <div className="product-modal__content">
        <button className="product-modal__close" type="button" onClick={onClose} aria-label="Fechar detalhes">×</button>
        <div className="product-modal__image-wrap"><img src={product.photo} alt={product.productName} /></div>
        <div className="product-modal__details">
          <h2 id="modal-title">{product.productName}</h2>
          <p className="product-modal__price">{formatPrice(product.price)}</p>
          <p className="product-modal__description">{product.descriptionShort}</p>
          <p className="product-modal__source">Informações conforme o catálogo da Econverse.</p>
          <div className="product-modal__actions">
            <div className="quantity" aria-label="Quantidade">
              <button type="button" aria-label="Diminuir quantidade" onClick={() => setQuantity((value) => Math.max(1, value - 1))}>−</button>
              <output aria-live="polite">{String(quantity).padStart(2, '0')}</output>
              <button type="button" aria-label="Aumentar quantidade" onClick={() => setQuantity((value) => value + 1)}>+</button>
            </div>
            <button className="button button--yellow" type="button" onClick={() => { onAddToCart(quantity); onClose(); }}>Comprar</button>
          </div>
        </div>
      </div>}
    </dialog>
  );
}

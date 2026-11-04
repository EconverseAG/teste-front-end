import { useState, type ChangeEvent } from 'react';

import type { Product } from '@/types/product';
import Modal from '@/components/Modal';
import ProductDetailsButton from '@/components/ModalProductDetails/ProductDetailsButton';

import { formatPrice } from '@/utils/price';

import './ModalProductDetails.scss';

type ModalProductDetailsProps = {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
};

function ModalProductDetails({
  product,
  isOpen,
  onClose,
}: Readonly<ModalProductDetailsProps>) {
  const [quantity, setQuantity] = useState(1);

  const formattedPrice = formatPrice(product.price);

  const handleDecrease = () => {
    setQuantity((current) => Math.max(1, current - 1));
  };

  const handleIncrease = () => {
    setQuantity((current) => current + 1);
  };

  const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);

    if (Number.isInteger(value) && value >= 1) {
      setQuantity(value);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="modal-product-details">
        <img
          className="modal-product-details__image"
          src={product.photo}
          alt={product.productName}
        />

        <div className="modal-product-details__content">
          <div>
            <h3 className="modal-product-details__title">
              {product.productName}
            </h3>

            <span className="modal-product-details__original-price">
              {formattedPrice}
            </span>
          </div>

          <div>
            <p className="modal-product-details__description">
              {product.descriptionShort}
            </p>
            <ProductDetailsButton onClick={() => {}} />
          </div>

          <div className="modal-product-details__quantity">
            <div className="modal-product-details__quantity-control">
              <button
                type="button"
                onClick={handleDecrease}
                disabled={quantity === 1}
                aria-label="Diminuir quantidade"
              >
                −
              </button>

              <input
                type="text"
                min="1"
                value={String(quantity).padStart(2, '0')}
                readOnly
                onChange={handleQuantityChange}
                aria-label="Quantidade do produto"
              />

              <button
                type="button"
                onClick={handleIncrease}
                aria-label="Aumentar quantidade"
              >
                +
              </button>
            </div>
            <button className="modal-product-details__buy-button" type="button">
              Comprar
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ModalProductDetails;

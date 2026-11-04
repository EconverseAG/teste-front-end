import { type KeyboardEvent } from 'react';

import type { Product } from '@/types/product';
import './ProductCard.scss';
import { applyDiscount, formatInstallments, formatPrice } from '@/utils/price';

type ProductCardProps = {
  product: Product;
  onSelect: (product: Product) => void;
};

function ProductCard({ product, onSelect }: Readonly<ProductCardProps>) {
  const formattedPrice = formatPrice(product.price);
  const discountedPrice = applyDiscount(product.price);
  const formattedDiscountedPrice = formatPrice(discountedPrice);

  const installmentDescription = formatInstallments(discountedPrice, 2);

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onSelect(product);
    }
  };

  return (
    <article
      className="product-card"
      onClick={() => onSelect(product)}
      onKeyDown={(event) => handleKeyDown(event)}
      tabIndex={0}
      role="button"
      aria-label={`Ver detalhes de ${product.productName}`}
    >
      <div className="product-card__image-wrapper">
        <img
          className="product-card__image"
          src={product.photo}
          alt={product.productName}
          loading="lazy"
        />
      </div>

      <p className="product-card__description">{product.descriptionShort}</p>

      <div className="product-card__pricing">
        <span className="product-card__original-price">{formattedPrice}</span>
        <strong className="product-card__price">
          {formattedDiscountedPrice}
        </strong>
        <span className="product-card__installments">
          {installmentDescription}
        </span>

        <span className="product-card__shipping">Frete grátis</span>
      </div>

      <button
        className="product-card__button"
        type="button"
        aria-label={`Comprar ${product.productName}`}
      >
        Comprar
      </button>
    </article>
  );
}

export default ProductCard;

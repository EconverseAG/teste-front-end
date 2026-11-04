import type { Product } from '../../types/product';
import { formatPrice } from '../../utils/formatPrice';
import './ProductCard.scss';

// O JSON não traz preço antigo; usamos uma margem fixa só para reproduzir o layout.
const OLD_PRICE_MARKUP = 1.07;
const INSTALLMENTS = 2;

export function ProductCard({ product }: { product: Product }) {
  const { productName, descriptionShort, photo, price } = product;

  return (
    <article className="product-card">
      <img
        className="product-card__image"
        src={photo}
        alt={descriptionShort}
        loading="lazy"
      />

      <h3 className="product-card__name">{productName}</h3>

      <div className="product-card__prices">
        <p className="product-card__old-price">
          <s>{formatPrice(Math.round(price * OLD_PRICE_MARKUP))}</s>
        </p>
        <p className="product-card__price">{formatPrice(price)}</p>
      </div>

      <p className="product-card__installments">
        ou {INSTALLMENTS}x de {formatPrice(Math.round(price / INSTALLMENTS))} sem juros
      </p>
      <p className="product-card__shipping">Frete grátis</p>

      <button type="button" className="product-card__button">
        Comprar
      </button>
    </article>
  );
}
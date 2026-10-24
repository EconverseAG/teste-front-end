import type { Product } from '../../types/product';
import { formatCurrency } from '../../utils/formatCurrency';
import './ProductCard.scss';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

const INSTALLMENTS = 2;

export function ProductCard({ product, onSelect }: ProductCardProps) {
  const { productName, photo, price, oldPrice } = product;

  return (
    <article className="product-card">
      <button
        type="button"
        className="product-card__details"
        onClick={() => onSelect(product)}
        aria-label={`Ver detalhes de ${productName}`}
      >
        <img className="product-card__image" src={photo} alt={productName} loading="lazy" />
        <h3 className="product-card__name">{productName}</h3>
        {oldPrice && <span className="product-card__old-price">{formatCurrency(oldPrice)}</span>}
        <span className="product-card__price">{formatCurrency(price)}</span>
        <span className="product-card__installments">
          ou {INSTALLMENTS}x de {formatCurrency(price / INSTALLMENTS)} sem juros
        </span>
        <span className="product-card__shipping">Frete grátis</span>
      </button>
      <button type="button" className="product-card__buy" onClick={() => onSelect(product)}>
        Comprar
      </button>
    </article>
  );
}

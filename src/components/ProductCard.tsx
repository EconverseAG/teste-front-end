import type { Product } from '../types/product';
import { formatPrice } from '../data/products';

export function ProductCard({ product, onSelect }: { product: Product; onSelect: (product: Product) => void }) {
  return (
    <article className="product-card">
      <button type="button" className="product-card__select" onClick={() => onSelect(product)} aria-label={`Ver detalhes de ${product.productName}`}>
        <img className="product-card__image" src={product.photo} alt={product.productName} loading="lazy" />
        <span className="product-card__description">{product.descriptionShort}</span>
      </button>
      <p className="product-card__price">{formatPrice(product.price)}</p>
      <p className="product-card__delivery">Consulte as condições de entrega</p>
      <button type="button" className="button button--blue product-card__buy" onClick={() => onSelect(product)}>Comprar</button>
    </article>
  );
}

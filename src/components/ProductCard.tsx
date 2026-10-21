
import type { Product } from "../types/product";

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

function ProductCard({ product, onSelect }: ProductCardProps) {
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(product.price);

  return (
    <article className="product-card">
      <button
        className="product-card__button"
        type="button"
        onClick={() => onSelect(product)}
        aria-label={`Ver detalhes de ${product.productName}`}
      >
        <img
          className="product-card__image"
          src={product.photo}
          alt={product.productName}
        />

        <h2>{product.productName}</h2>

        <p>{product.descriptionShort}</p>

        <strong>{formattedPrice}</strong>

        <span>Ver detalhes</span>
      </button>
    </article>
  );
}

export default ProductCard;

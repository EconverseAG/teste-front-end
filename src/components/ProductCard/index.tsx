import type { Product } from "../../types/product";

interface ProductCardProps {
  product: Product;
  openModal: (product: Product) => void;
}

export const ProductCard = ({ product, openModal }: ProductCardProps) => {
  const formatPrice = (value: number) => {
    const adjustedValue = value / 10;

    return adjustedValue.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const currentPrice = formatPrice(product.price);
  const oldPrice = formatPrice(product.price * 1.1);

  return (
    <article className="product-card">
      <div className="product-card__content">
        <img
          className="product-card__image"
          src={product.photo}
          alt={product.productName}
          loading="lazy"
        />

        <h3 className="product-card__name">{product.productName}</h3>

        <div className="product-card__prices">
          <span className="product-card__old-price">{oldPrice}</span>
          <span className="product-card__current-price">{currentPrice}</span>
        </div>

        <p className="product-card__installments">
          ou 2x de {formatPrice(product.price / 2)}
        </p>

        <span className="product-card__shipping">Frete grátis</span>
      </div>

      <button
        className="product-card__button"
        onClick={() => openModal(product)}
      >
        comprar
      </button>
    </article>
  );
};

import { Button } from "@/src/shared/components/Button/Button";
import type { Product } from "@/src/features/products/types/product";
import styles from "./ProductCard.module.scss";

type ProductCardProps = {
  product: Product;
  onSelect: (product: Product) => void;
};

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  currency: "BRL",
  style: "currency",
});

export function ProductCard({ onSelect, product }: ProductCardProps) {
  return (
    <article className={styles.card}>
      <button className={styles.openDetails} onClick={() => onSelect(product)} type="button">
        <span className={styles.imageWrap}>
          <img alt={product.name} loading="lazy" src={product.image} />
        </span>
        <span className={styles.info}>
          <span className={styles.name}>{product.name}</span>
          <span className={styles.description}>{product.description}</span>
          {product.oldPrice ? (
            <span className={styles.oldPrice}>{currencyFormatter.format(product.oldPrice)}</span>
          ) : null}
          <strong>{currencyFormatter.format(product.price)}</strong>
          <small>{product.installment}</small>
          <em>Frete grátis</em>
        </span>
      </button>
      <Button onClick={() => onSelect(product)}>Comprar</Button>
    </article>
  );
}

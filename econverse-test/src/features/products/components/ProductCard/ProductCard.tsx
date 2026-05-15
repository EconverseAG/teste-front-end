"use client";

import { Button } from "@/src/shared/components/Button/Button";
import type { Product } from "@/src/features/products/types/product";
import { useCommerce } from "@/src/shared/store/CommerceContext";
import { Heart, ShoppingCart } from "lucide-react";
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
  const { addToCart, isFavorite, toggleFavorite } = useCommerce();
  const favorite = isFavorite(product.id);

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
      <button
        className={`${styles.favoriteButton} ${favorite ? styles.favoriteButtonActive : ""}`}
        onClick={() => toggleFavorite(product)}
        type="button"
        aria-label={
          favorite ? `Remover ${product.name} dos favoritos` : `Adicionar ${product.name} aos favoritos`
        }
      >
        <Heart aria-hidden="true" strokeWidth={2} />
      </button>
      <div className={styles.actions}>
        <Button className={styles.buyButton} onClick={() => addToCart(product)}>
          <ShoppingCart aria-hidden="true" strokeWidth={2.2} />
          Adicionar
        </Button>
        <Button className={styles.detailsButton} onClick={() => onSelect(product)} variant="ghost">
          Detalhes
        </Button>
      </div>
    </article>
  );
}

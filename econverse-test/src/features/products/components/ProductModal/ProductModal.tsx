"use client";

import { Button } from "@/src/shared/components/Button/Button";
import { Modal } from "@/src/shared/components/Modal/Modal";
import type { Product } from "@/src/features/products/types/product";
import { useCommerce } from "@/src/shared/store/CommerceContext";
import { Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";
import styles from "./ProductModal.module.scss";

type ProductModalProps = {
  product: Product | null;
  onClose: () => void;
};

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  currency: "BRL",
  style: "currency",
});

export function ProductModal({ onClose, product }: ProductModalProps) {
  const titleId = "product-modal-title";
  const [quantity, setQuantity] = useState(1);
  const { addToCart, isFavorite, toggleFavorite } = useCommerce();
  const favorite = product ? isFavorite(product.id) : false;

  return (
    <Modal isOpen={Boolean(product)} onClose={onClose} titleId={titleId}>
      {product ? (
        <div className={styles.content}>
          <div className={styles.media}>
            <img alt={product.name} src={product.image} />
          </div>
          <div className={styles.details}>
            <p className={styles.category}>{product.category}</p>
            <h2 id={titleId}>{product.name}</h2>
            <strong>{currencyFormatter.format(product.price)}</strong>
            <p>{product.description}</p>
            <small>Entrega rápida, compra segura e parcelamento em {product.installment}.</small>
            <button
              className={`${styles.favoriteAction} ${favorite ? styles.favoriteActionActive : ""}`}
              onClick={() => toggleFavorite(product)}
              type="button"
              aria-label={favorite ? "Remover produto dos favoritos" : "Adicionar produto aos favoritos"}
            >
              <Heart aria-hidden="true" strokeWidth={2} />
              {favorite ? "Salvo nos favoritos" : "Adicionar aos favoritos"}
            </button>
            <div className={styles.purchase}>
              <div aria-label="Quantidade" className={styles.quantity}>
                <button onClick={() => setQuantity((current) => Math.max(1, current - 1))} type="button">
                  −
                </button>
                <span>{String(quantity).padStart(2, "0")}</span>
                <button onClick={() => setQuantity((current) => current + 1)} type="button">
                  +
                </button>
              </div>
              <Button className={styles.buyButton} onClick={() => addToCart(product, quantity)}>
                <ShoppingCart aria-hidden="true" strokeWidth={2.2} />
                Comprar
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </Modal>
  );
}

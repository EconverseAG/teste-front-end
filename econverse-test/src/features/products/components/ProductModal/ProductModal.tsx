"use client";

import { Button } from "@/src/shared/components/Button/Button";
import { Modal } from "@/src/shared/components/Modal/Modal";
import type { Product } from "@/src/features/products/types/product";
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
            <div className={styles.purchase}>
              <div aria-label="Quantidade" className={styles.quantity}>
                <button type="button">−</button>
                <span>01</span>
                <button type="button">+</button>
              </div>
              <Button>Comprar</Button>
            </div>
          </div>
        </div>
      ) : null}
    </Modal>
  );
}

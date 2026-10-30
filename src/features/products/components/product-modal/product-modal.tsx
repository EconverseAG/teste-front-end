'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { formatPrice } from '@/features/products/lib/format'
import type { Product } from '@/features/products/types/product'
import styles from './product-modal.module.scss'

interface ProductModalProps {
  product: Product | null
  onClose: () => void
}

const MAX_QUANTITY = 10

export function ProductModal({ product, onClose }: ProductModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (product && !dialog.open) {
      setQuantity(1)
      dialog.showModal()
    } else if (!product && dialog.open) {
      dialog.close()
    }
  }, [product])

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
      aria-labelledby="product-modal-title"
      className={styles.productModal}
    >
      {product ? (
        <div className={styles.content}>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className={styles.closeButton}
          >
            <span aria-hidden="true" className={`${styles.closeLine} ${styles.closeLineForward}`} />
            <span aria-hidden="true" className={`${styles.closeLine} ${styles.closeLineBackward}`} />
          </button>

          <div className={styles.imageFrame}>
            <Image src={product.photo} alt={product.name} fill sizes="247px" className={styles.image} />
          </div>

          <div className={styles.details}>
            <div className={styles.copy}>
              <div className={styles.headingGroup}>
                <h2 id="product-modal-title" className={styles.title}>
                  {product.name}
                </h2>
                <p className={styles.price}>{formatPrice(product.price)}</p>
              </div>
              <p className={styles.description}>{product.description}</p>
              <a href="#" className={styles.detailsLink}>
                {'Veja mais detalhes do produto >'}
              </a>
            </div>

            <div className={styles.purchaseRow}>
              <div className={styles.stepper}>
                <button
                  type="button"
                  onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                  disabled={quantity <= 1}
                  aria-label="Diminuir quantidade"
                  className={styles.quantityButton}
                >
                  <span aria-hidden="true" className={styles.quantityLine} />
                </button>
                <output aria-live="polite" aria-label="Quantidade" className={styles.quantity}>
                  {String(quantity).padStart(2, '0')}
                </output>
                <button
                  type="button"
                  onClick={() => setQuantity((value) => Math.min(MAX_QUANTITY, value + 1))}
                  disabled={quantity >= MAX_QUANTITY}
                  aria-label="Aumentar quantidade"
                  className={`${styles.quantityButton} ${styles.increaseButton}`}
                >
                  <span aria-hidden="true" className={styles.quantityLine} />
                  <span aria-hidden="true" className={styles.quantityLineVertical} />
                </button>
              </div>
              <button
                type="button"
                onClick={onClose}
                className={styles.buyButton}
              >
                Comprar
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </dialog>
  )
}

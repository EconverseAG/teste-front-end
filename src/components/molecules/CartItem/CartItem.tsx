"use client"

import { clsx } from "clsx"
import { Icon, ProgressiveImage } from "@/components/atoms"
import type { CartLine } from "@/providers/CartProvider"
import { AnimatedPrice } from "../AnimatedPrice/AnimatedPrice"
import { QuantitySelector } from "../QuantitySelector/QuantitySelector"
import styles from "./CartItem.module.scss"

type CartItemProps = {
  line: CartLine
  onQuantityChange: (quantity: number) => void
  onRemove: () => void
  className?: string
}

/** Linha do carrinho: foto, nome, quantidade e total da linha (CartItemRow do ij-ecommerce). */
export function CartItem({ line, onQuantityChange, onRemove, className }: CartItemProps) {
  const { product, quantity } = line

  return (
    <article className={clsx(styles.item, className)} aria-label={product.name}>
      <div className={styles.media}>
        <ProgressiveImage src={product.photo} alt="" sizes="80px" fit="contain" />
      </div>

      <div className={styles.body}>
        <div className={styles.head}>
          <h3 className={styles.name}>{product.name}</h3>
          <button type="button" className={styles.remove} onClick={onRemove} aria-label={`Remover ${product.name}`}>
            <Icon name="trash" size={18} />
          </button>
        </div>

        <div className={styles.foot}>
          <QuantitySelector
            value={quantity}
            onChange={onQuantityChange}
            label={`Quantidade de ${product.name}`}
            className={styles.quantity}
          />
          <AnimatedPrice value={product.price * quantity} fontSize={15} className={styles.total} />
        </div>
      </div>
    </article>
  )
}

"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Icon } from "@/components/atoms"
import { useCart } from "@/providers/CartProvider"
import { CART_BUTTON_ID } from "../CartDrawer/CartDrawer"
import styles from "./Header.module.scss"

export function CartLink({ className }: { className?: string }) {
  const { count, open, setOpen } = useCart()
  const label = count > 0 ? `Carrinho, ${count} ${count === 1 ? "item" : "itens"}` : "Carrinho vazio"

  return (
    <button
      id={CART_BUTTON_ID}
      type="button"
      className={className}
      aria-label={label}
      aria-haspopup="dialog"
      aria-expanded={open}
      onClick={() => setOpen(true)}
    >
      {/* O ícone dá um "pulo" a cada item adicionado. */}
      <motion.span
        key={count}
        className={styles.cartIcon}
        initial={count > 0 ? { rotate: -12, scale: 1.15 } : false}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 14 }}
      >
        <Icon name="cart" size={32} />
      </motion.span>
      <AnimatePresence>
        {count > 0 && (
          <motion.span
            key={count}
            className={styles.badge}
            aria-hidden="true"
            data-testid="cart-count"
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.4, opacity: 0 }}
            transition={{ type: "spring", stiffness: 600, damping: 22 }}
          >
            {count > 99 ? "99+" : count}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  )
}

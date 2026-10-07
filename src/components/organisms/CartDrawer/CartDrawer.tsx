"use client"

import { AnimatePresence, motion } from "framer-motion"
import { type MouseEvent } from "react"
import { Button, IconButton } from "@/components/atoms"
import { AnimatedPrice, CartItem, EmptyState, FreeShippingProgress } from "@/components/molecules"
import { AnimatedCounter } from "@/components/motion/AnimatedCounter/AnimatedCounter"
import { useModalDialog } from "@/hooks/useModalDialog"
import { FREE_SHIPPING_FROM } from "@/content/home"
import { useCart } from "@/providers/CartProvider"
import styles from "./CartDrawer.module.scss"

const ease = [0.22, 1, 0.36, 1] as const

/** id do botão do carrinho no header: recebe o foco de volta ao fechar a gaveta. */
export const CART_BUTTON_ID = "cart-button"

/** Gaveta lateral do carrinho (CartDrawer do ij-ecommerce sobre <dialog> nativo). */
export function CartDrawer() {
  const { open, setOpen } = useCart()
  return <AnimatePresence>{open && <DrawerContent onClose={() => setOpen(false)} />}</AnimatePresence>
}

function DrawerContent({ onClose }: { onClose: () => void }) {
  const dialogRef = useModalDialog(CART_BUTTON_ID)
  const { lines, count, subtotal, updateItem, removeItem } = useCart()

  function handleBackdrop(event: MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) onClose()
  }

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-labelledby="cart-title"
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
    >
      <motion.div
        className={styles.backdrop}
        onClick={handleBackdrop}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        <motion.aside
          className={styles.panel}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.4, ease }}
        >
          <header className={styles.header}>
            <div>
              <h2 id="cart-title" className={styles.title}>
                Carrinho
              </h2>
              <p className={styles.count}>
                {count > 0 ? (
                  <>
                    <AnimatedCounter value={count} fontSize={13} decorative />
                    <span className="sr-only">{count}</span> {count === 1 ? "item" : "itens"} no carrinho
                  </>
                ) : (
                  "Seu carrinho está vazio"
                )}
              </p>
            </div>
            <IconButton icon="close" label="Fechar carrinho" iconSize={14} className={styles.close} onClick={onClose} autoFocus />
          </header>

          {lines.length === 0 ? (
            <EmptyState
              icon="cart"
              title="Nada por aqui ainda"
              description="Os produtos que você comprar aparecem aqui."
              action={
                <Button variant="accent" size="sm" onClick={onClose}>
                  Continuar comprando
                </Button>
              }
              className={styles.empty}
            />
          ) : (
            <>
              <FreeShippingProgress subtotal={subtotal} threshold={FREE_SHIPPING_FROM} />

              <ul className={styles.list}>
                <AnimatePresence initial={false}>
                  {lines.map((line) => (
                    <motion.li
                      key={line.product.id}
                      layout
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -24, height: 0 }}
                      transition={{ duration: 0.3, ease }}
                    >
                      <CartItem
                        line={line}
                        onQuantityChange={(quantity) => updateItem(line.product.id, quantity)}
                        onRemove={() => removeItem(line.product.id)}
                      />
                    </motion.li>
                  ))}
                </AnimatePresence>
              </ul>

              <footer className={styles.footer}>
                <p className={styles.subtotal}>
                  <span>Subtotal</span>
                  <AnimatedPrice value={subtotal} fontSize={18} />
                </p>
                <Button variant="accent" block>
                  Finalizar compra
                </Button>
                <button type="button" className={styles.continue} onClick={onClose}>
                  Continuar comprando
                </button>
              </footer>
            </>
          )}
        </motion.aside>
      </motion.div>
    </dialog>
  )
}

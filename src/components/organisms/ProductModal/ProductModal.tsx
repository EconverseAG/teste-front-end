"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useState, type MouseEvent } from "react"
import { Button, IconButton, ProgressiveImage } from "@/components/atoms"
import { AnimatedPrice, QuantitySelector } from "@/components/molecules"
import { useModalDialog } from "@/hooks/useModalDialog"
import type { Product } from "@/lib/catalog"
import styles from "./ProductModal.module.scss"

type ProductModalProps = {
  product: Product | null
  onClose: () => void
  onBuy: (product: Product, quantity: number) => void
}

/**
 * <dialog> nativo com showModal(): top layer, foco preso e o resto da página
 * inerte de graça. O framer-motion só cuida da entrada/saída; o dialog fica
 * aberto durante a animação de saída e fecha quando ela termina.
 */
export function ProductModal({ product, onClose, onBuy }: ProductModalProps) {
  return (
    <AnimatePresence>{product && <ModalContent key={product.id} product={product} onClose={onClose} onBuy={onBuy} />}</AnimatePresence>
  )
}

function ModalContent({ product, onClose, onBuy }: { product: Product } & Omit<ProductModalProps, "product">) {
  const dialogRef = useModalDialog()
  const [quantity, setQuantity] = useState(1)
  const titleId = `modal-title-${product.id}`
  const descriptionId = `modal-description-${product.id}`

  function handleBackdropClick(event: MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) onClose()
  }

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      onCancel={(event) => {
        // Esc: anima a saída em vez do fechamento seco do navegador.
        event.preventDefault()
        onClose()
      }}
    >
      <motion.div
        className={styles.backdrop}
        onClick={handleBackdropClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        data-testid="modal-backdrop"
      >
        <motion.article
          className={styles.panel}
          initial={{ opacity: 0, y: 32, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.98 }}
          transition={{ type: "spring", stiffness: 380, damping: 32 }}
        >
          <IconButton
            icon="close"
            label="Fechar"
            iconSize={15}
            className={styles.close}
            onClick={onClose}
            autoFocus
          />

          <motion.div
            className={styles.media}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <ProgressiveImage src={product.photo} alt={product.name} sizes="(max-width: 768px) 60vw, 247px" fit="contain" />
          </motion.div>

          <div className={styles.info}>
            <h2 id={titleId} className={styles.title}>
              {product.name}
            </h2>
            {/* O total acompanha a quantidade girando os dígitos (padrão do ij-ecommerce). */}
            <p className={styles.price}>
              <AnimatedPrice value={product.price * quantity} fontSize={20} />
            </p>

            <p id={descriptionId} className={styles.description}>
              {product.description}
            </p>
            <a href="#" className={styles.details}>
              Veja mais detalhes do produto <span aria-hidden="true">&gt;</span>
            </a>

            <div className={styles.purchase}>
              <QuantitySelector value={quantity} onChange={setQuantity} />
              <Button variant="accent" size="sm" className={styles.buy} onClick={() => onBuy(product, quantity)}>
                Comprar
              </Button>
            </div>
          </div>
        </motion.article>
      </motion.div>
    </dialog>
  )
}

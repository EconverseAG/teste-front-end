"use client"

import { motion } from "framer-motion"
import { formatCurrency } from "@/lib/format"
import styles from "./FreeShippingProgress.module.scss"

type FreeShippingProgressProps = { subtotal: number; threshold: number }

/** Quanto falta para o frete grátis, com barra que cresce a cada item. */
export function FreeShippingProgress({ subtotal, threshold }: FreeShippingProgressProps) {
  const missing = Math.max(0, threshold - subtotal)
  const progress = Math.min(1, subtotal / threshold)

  return (
    <div className={styles.shipping} aria-live="polite">
      <p>
        {missing > 0 ? (
          <>
            Faltam <strong>{formatCurrency(missing)}</strong> para o frete grátis
          </>
        ) : (
          <strong>Você ganhou frete grátis!</strong>
        )}
      </p>
      <span className={styles.track} aria-hidden="true">
        <motion.span
          className={styles.bar}
          initial={false}
          animate={{ scaleX: progress }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
      </span>
    </div>
  )
}

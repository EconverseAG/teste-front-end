"use client"

import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion"
import { useState, type ReactNode } from "react"
import styles from "./Header.module.scss"

/** Distância rolada antes de o header começar a se esconder. */
const HIDE_AFTER = 160

/**
 * Header grudado no topo: some ao rolar para baixo (mais área para a vitrine)
 * e volta ao rolar para cima, já com sombra. Continua no fluxo, então a
 * altura da página não muda.
 */
export function HeaderShell({ children }: { children: ReactNode }) {
  const { scrollY } = useScroll()
  const reduceMotion = useReducedMotion()
  const [hidden, setHidden] = useState(false)
  const [elevated, setElevated] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    const delta = latest - (scrollY.getPrevious() ?? 0)
    setElevated(latest > 8)
    // Ignora micro-rolagens (trackpad) para o header não ficar piscando.
    if (Math.abs(delta) < 6) return
    setHidden(!reduceMotion && latest > HIDE_AFTER && delta > 0)
  })

  return (
    <motion.header
      className={styles.header}
      data-elevated={elevated || undefined}
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      // Foco por teclado dentro do header o traz de volta.
      onFocusCapture={() => setHidden(false)}
    >
      {children}
    </motion.header>
  )
}

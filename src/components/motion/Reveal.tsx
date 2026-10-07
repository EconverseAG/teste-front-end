"use client"

import { motion, type HTMLMotionProps } from "framer-motion"

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number
  /** Deslocamento vertical inicial, em px. */
  offset?: number
}

/**
 * Entrada suave ao rolar até a seção (uma vez só). O `MotionConfig` do layout
 * usa `reducedMotion="user"`, então quem pede menos movimento não vê o slide.
 */
export function Reveal({ delay = 0, offset = 24, children, ...rest }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: offset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

"use client"

import { clsx } from "clsx"
import { motion, useSpring, useTransform, type MotionValue } from "framer-motion"
import { useEffect } from "react"
import styles from "./AnimatedCounter.module.scss"

type AnimatedCounterProps = {
  value: number
  /** Casas decimais exibidas como dígitos fixos (ex.: [10, 1] para centavos). */
  places?: number[]
  fontSize?: number
  /** Dentro de um rótulo que já anuncia o valor (ex.: preço formatado). */
  decorative?: boolean
  className?: string
}

/** Casas de um inteiro: 1234 -> [1000, 100, 10, 1]. */
export function placesOf(value: number): number[] {
  const length = Math.max(1, Math.floor(Math.abs(value)).toString().length)
  return Array.from({ length }, (_, index) => 10 ** (length - index - 1))
}

function Numeral({ motionValue, digit, height }: { motionValue: MotionValue<number>; digit: number; height: number }) {
  const y = useTransform(motionValue, (latest) => {
    const offset = (10 + digit - (latest % 10)) % 10
    // Gira pelo caminho mais curto (9 -> 0 desce um, não sobe nove).
    return (offset > 5 ? offset - 10 : offset) * height
  })

  return (
    <motion.span aria-hidden="true" className={styles.numeral} style={{ y }}>
      {digit}
    </motion.span>
  )
}

function Digit({ place, value, height }: { place: number; value: number; height: number }) {
  const rounded = Math.floor(Math.round((value / place) * 1e6) / 1e6)
  const spring = useSpring(rounded, { stiffness: 220, damping: 26, mass: 0.75 })

  useEffect(() => {
    spring.set(rounded)
  }, [spring, rounded])

  return (
    <span className={styles.digit} style={{ height }}>
      {Array.from({ length: 10 }, (_, digit) => (
        <Numeral key={digit} motionValue={spring} digit={digit} height={height} />
      ))}
    </span>
  )
}

/**
 * Contador em "rolo": cada dígito gira até o valor novo com mola.
 * Portado do AnimatedCounter do ij-ecommerce (Tailwind -> SCSS Modules).
 * O valor real fica no aria-label; os rolos são decorativos.
 */
export function AnimatedCounter({ value, places, fontSize = 16, decorative = false, className }: AnimatedCounterProps) {
  const safe = Number.isFinite(value) ? Math.max(0, value) : 0
  const height = Math.round(fontSize * 1.2)
  const a11y = decorative ? { "aria-hidden": true } : { role: "img", "aria-label": String(safe) }

  return (
    <span className={clsx(styles.counter, className)} style={{ height, fontSize }} {...a11y}>
      {(places ?? placesOf(safe)).map((place, index) => (
        <Digit key={`${place}-${index}`} place={place} value={safe} height={height} />
      ))}
    </span>
  )
}

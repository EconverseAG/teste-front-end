"use client"

import { clsx } from "clsx"
import { AnimatedCounter, placesOf } from "@/components/motion/AnimatedCounter/AnimatedCounter"
import { formatCurrency } from "@/lib/format"
import styles from "./AnimatedPrice.module.scss"

type AnimatedPriceProps = {
  value: number
  fontSize?: number
  className?: string
}

/**
 * Preço em reais cujos dígitos giram quando o valor muda.
 * Portado do AnimatedCurrency do ij-ecommerce. Leitores de tela recebem o
 * valor formatado uma vez só; os rolos ficam ocultos para eles.
 */
export function AnimatedPrice({ value, fontSize = 16, className }: AnimatedPriceProps) {
  const cents = Math.round(Math.max(0, value) * 100)
  const integer = Math.floor(cents / 100)
  const places = placesOf(integer)

  // Agrupa as casas de milhar como o Intl ("15.000"): separador antes de cada trio.
  const groups: number[][] = []
  places.forEach((place, index) => {
    if (index === 0 || (places.length - index) % 3 === 0) groups.push([])
    groups.at(-1)?.push(place)
  })

  return (
    <span className={clsx(styles.price, className)}>
      <span className="sr-only">{formatCurrency(value)}</span>
      <span className={styles.visual} aria-hidden="true">
        <span className={styles.symbol}>R$</span>
        {groups.map((group, index) => (
          <span key={group[0]} className={styles.group}>
            {index > 0 && "."}
            <AnimatedCounter value={integer} places={group} fontSize={fontSize} decorative />
          </span>
        ))}
        ,
        <AnimatedCounter value={cents % 100} places={[10, 1]} fontSize={fontSize} decorative />
      </span>
    </span>
  )
}

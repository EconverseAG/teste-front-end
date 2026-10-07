"use client"

import { clsx } from "clsx"
import { Icon } from "@/components/atoms"
import { padQuantity } from "@/lib/format"
import styles from "./QuantitySelector.module.scss"

type QuantitySelectorProps = {
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
  label?: string
  className?: string
}

export function QuantitySelector({
  value,
  onChange,
  min = 1,
  max = 99,
  label = "Quantidade",
  className,
}: QuantitySelectorProps) {
  const clamp = (next: number) => Math.min(max, Math.max(min, next))
  const atMin = value <= min
  const atMax = value >= max

  return (
    <div className={clsx(styles.selector, className)} role="group" aria-label={label}>
      <button
        type="button"
        className={styles.step}
        onClick={() => onChange(clamp(value - 1))}
        disabled={atMin}
        aria-label="Diminuir quantidade"
      >
        <Icon name="minus" size={{ width: 21, height: 20 }} />
      </button>
      <output className={styles.value} aria-live="polite" aria-label={`${label}: ${value}`}>
        {padQuantity(value)}
      </output>
      <button
        type="button"
        className={styles.step}
        onClick={() => onChange(clamp(value + 1))}
        disabled={atMax}
        aria-label="Aumentar quantidade"
      >
        <Icon name="plus" size={{ width: 21, height: 20 }} />
      </button>
    </div>
  )
}

import { clsx } from "clsx"
import type { CSSProperties } from "react"
import styles from "./Skeleton.module.scss"

type SkeletonProps = {
  className?: string
  /** Raio próprio (ex.: "50%" para avatar). Padrão: raio do token. */
  radius?: CSSProperties["borderRadius"]
}

/** Bloco de carregamento com brilho deslizante (Shimmer do ij-ecommerce, em SCSS). */
export function Skeleton({ className, radius }: SkeletonProps) {
  return <span aria-hidden="true" className={clsx(styles.skeleton, className)} style={{ borderRadius: radius }} />
}

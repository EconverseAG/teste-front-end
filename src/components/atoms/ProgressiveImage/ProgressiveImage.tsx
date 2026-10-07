"use client"

import Image from "next/image"
import { clsx } from "clsx"
import { Skeleton } from "../Skeleton/Skeleton"
import styles from "./ProgressiveImage.module.scss"

type ProgressiveImageProps = {
  src: string
  alt: string
  sizes: string
  /** Acima da dobra: carrega primeiro e aparece sem fade. */
  priority?: boolean
  fit?: "contain" | "cover"
  className?: string
}

/**
 * Imagem que entra com fade sobre um skeleton, sem salto de layout (ocupa o
 * pai com `fill`). Adaptado do ProgressiveImage do ij-ecommerce: o "carregou"
 * é um atributo no próprio <img>, sem estado React, então nada re-renderiza.
 */
export function ProgressiveImage({ src, alt, sizes, priority = false, fit = "cover", className }: ProgressiveImageProps) {
  return (
    <span className={clsx(styles.frame, className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        draggable={false}
        onLoad={(event) => {
          event.currentTarget.dataset.loaded = ""
        }}
        className={clsx(styles.image, styles[fit], priority && styles.eager)}
      />
      {!priority && <Skeleton className={styles.placeholder} />}
    </span>
  )
}

import Image from "next/image"
import Link from "next/link"
import { clsx } from "clsx"
import styles from "./Logo.module.scss"

type LogoProps = {
  /** header = 139x41 | footer = 164x48 (medidas do Figma) */
  variant?: "header" | "footer"
  className?: string
  priority?: boolean
}

const SIZES = {
  header: { src: "/images/logo.svg", width: 139, height: 41 },
  footer: { src: "/images/logo-footer.svg", width: 164, height: 48 },
} as const

export function Logo({ variant = "header", className, priority = false }: LogoProps) {
  const { src, width, height } = SIZES[variant]

  return (
    <Link href="/" className={clsx(styles.logo, className)} aria-label="Econverse — página inicial">
      <Image src={src} alt="" width={width} height={height} priority={priority} unoptimized />
    </Link>
  )
}

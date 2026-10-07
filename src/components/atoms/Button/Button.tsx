import Link from "next/link"
import { clsx } from "clsx"
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react"
import styles from "./Button.module.scss"

type Variant = "primary" | "accent"
type Size = "sm" | "md" | "lg"

type CommonProps = {
  variant?: Variant
  size?: Size
  /** Ocupa toda a largura do container (botão do card). */
  block?: boolean
  className?: string
  children: ReactNode
}

type ButtonAsButton = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never }
type ButtonAsLink = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

export type ButtonProps = ButtonAsButton | ButtonAsLink

export function Button({ variant = "primary", size = "md", block = false, className, ...props }: ButtonProps) {
  const classes = clsx(styles.button, styles[variant], styles[size], block && styles.block, className)

  if (props.href !== undefined) {
    const { href, ...anchor } = props as ButtonAsLink
    return <Link href={href} className={classes} {...anchor} />
  }

  const { type = "button", ...button } = props as ButtonAsButton
  return <button type={type} className={classes} {...button} />
}

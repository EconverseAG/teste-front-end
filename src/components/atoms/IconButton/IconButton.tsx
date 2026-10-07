import { clsx } from "clsx"
import type { ButtonHTMLAttributes } from "react"
import { Icon } from "../Icon/Icon"
import type { IconName } from "../Icon/icons"
import styles from "./IconButton.module.scss"

type IconButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
  icon: IconName
  /** Obrigatório: botão só com ícone precisa de nome acessível. */
  label: string
  iconSize?: number | { width: number; height: number }
  variant?: "ghost" | "floating"
  /** Espelha o ícone (seta para a esquerda a partir do chevron). */
  flip?: boolean
}

export function IconButton({
  icon,
  label,
  iconSize = 24,
  variant = "ghost",
  flip = false,
  className,
  type = "button",
  ...rest
}: IconButtonProps) {
  return (
    <button type={type} aria-label={label} className={clsx(styles.iconButton, styles[variant], className)} {...rest}>
      <Icon name={icon} size={iconSize} className={clsx(flip && styles.flip)} />
    </button>
  )
}

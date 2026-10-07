import { clsx } from "clsx"
import type { ReactNode } from "react"
import { Icon, type IconName } from "@/components/atoms"
import styles from "./EmptyState.module.scss"

type EmptyStateProps = {
  icon?: IconName
  title: string
  description?: string
  action?: ReactNode
  className?: string
}

/** Estado vazio com ícone em medalhão, filete e ação opcional (padrão do ij-ecommerce). */
export function EmptyState({ icon, title, description, action, className }: EmptyStateProps) {
  return (
    <div className={clsx(styles.empty, className)} role="status">
      {icon && (
        <span className={styles.medal}>
          <Icon name={icon} size={28} />
        </span>
      )}
      <p className={styles.title}>{title}</p>
      {description && <p className={styles.description}>{description}</p>}
      {action && <div className={styles.action}>{action}</div>}
    </div>
  )
}

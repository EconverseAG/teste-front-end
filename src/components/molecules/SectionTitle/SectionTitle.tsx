import Link from "next/link"
import { clsx } from "clsx"
import styles from "./SectionTitle.module.scss"

type SectionTitleProps = {
  id?: string
  title: string
  /** Filetes laterais (vitrines). "Navegue por marcas" não tem. */
  decorated?: boolean
  action?: { label: string; href: string }
  className?: string
}

export function SectionTitle({ id, title, decorated = true, action, className }: SectionTitleProps) {
  return (
    <header className={clsx(styles.header, className)}>
      <h2 id={id} className={clsx(styles.title, decorated && styles.decorated)}>
        {title}
      </h2>
      {action && (
        <Link href={action.href} className={styles.action}>
          {action.label}
        </Link>
      )}
    </header>
  )
}

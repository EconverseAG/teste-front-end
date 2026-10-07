import { clsx } from "clsx"
import type { FooterColumn as FooterColumnData } from "@/content/home"
import styles from "./FooterColumn.module.scss"

export function FooterColumn({ title, links, font }: FooterColumnData) {
  return (
    <nav aria-label={title} className={styles.column}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={clsx(styles.links, font === "secondary" && styles.secondary)}>
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className={styles.link}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

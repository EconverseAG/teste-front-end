import Image from "next/image"
import Link from "next/link"
import { clsx } from "clsx"
import type { Category } from "@/content/home"
import styles from "./CategoryCard.module.scss"

type CategoryCardProps = { category: Category; active?: boolean }

export function CategoryCard({ category, active = false }: CategoryCardProps) {
  return (
    <Link
      href={category.href}
      className={clsx(styles.card, active && styles.active)}
      aria-current={active ? "true" : undefined}
    >
      <span className={styles.tile}>
        <Image src={category.image} alt="" width={61} height={61} className={styles.icon} />
      </span>
      <span className={styles.label}>{category.label}</span>
    </Link>
  )
}

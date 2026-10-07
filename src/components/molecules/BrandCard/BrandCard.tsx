import Image from "next/image"
import styles from "./BrandCard.module.scss"

type BrandCardProps = { name: string; logo: string; href?: string }

export function BrandCard({ name, logo, href = "#" }: BrandCardProps) {
  return (
    <a href={href} className={styles.card}>
      <Image src={logo} alt={name} width={117} height={35} unoptimized className={styles.logo} />
    </a>
  )
}

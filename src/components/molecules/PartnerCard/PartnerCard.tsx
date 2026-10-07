import Image from "next/image"
import { Button } from "@/components/atoms"
import type { Partner } from "@/content/home"
import styles from "./PartnerCard.module.scss"

export function PartnerCard({ title, description, image, href }: Partner) {
  return (
    <article className={styles.card}>
      <Image src={image} alt="" fill sizes="(max-width: 1024px) 100vw, 634px" className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <Button href={href} variant="accent" size="lg" className={styles.cta} aria-label={`Confira: ${title}`}>
          Confira
        </Button>
      </div>
    </article>
  )
}

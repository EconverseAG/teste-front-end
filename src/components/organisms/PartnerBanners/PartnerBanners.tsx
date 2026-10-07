import { PartnerCard } from "@/components/molecules"
import { Reveal } from "@/components/motion/Reveal"
import { PARTNERS } from "@/content/home"
import styles from "./PartnerBanners.module.scss"

export function PartnerBanners({ id }: { id: string }) {
  return (
    <section aria-labelledby={id} className={styles.section}>
      <h2 id={id} className="sr-only">
        Nossos parceiros
      </h2>
      <ul className={styles.list}>
        {PARTNERS.map((partner, index) => (
          <li key={`${partner.title}-${index}`}>
            <Reveal delay={index * 0.1}>
              <PartnerCard {...partner} />
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  )
}

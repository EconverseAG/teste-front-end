import { Icon } from "@/components/atoms"
import type { Benefit } from "@/content/home"
import styles from "./BenefitItem.module.scss"

export function BenefitItem({ icon, lead, highlight, trail }: Benefit) {
  return (
    <li className={styles.item}>
      <Icon name={icon} size={20} className={styles.icon} />
      <span>
        {lead}
        <strong className={styles.highlight}>{highlight}</strong>
        {trail}
      </span>
    </li>
  )
}

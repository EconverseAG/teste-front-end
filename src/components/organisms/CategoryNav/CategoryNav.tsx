import { CategoryCard } from "@/components/molecules"
import { StaggerItem, StaggerList } from "@/components/motion/Stagger"
import { CATEGORIES } from "@/content/home"
import styles from "./CategoryNav.module.scss"

/** "Compre por categoria". Tecnologia é a categoria ativa da página. */
export function CategoryNav({ activeLabel = "Tecnologia" }: { activeLabel?: string }) {
  return (
    <nav id="categorias" aria-label="Compre por categoria" className={styles.section}>
      <StaggerList className={styles.list}>
        {CATEGORIES.map((category) => (
          <StaggerItem key={category.label}>
            <CategoryCard category={category} active={category.label === activeLabel} />
          </StaggerItem>
        ))}
      </StaggerList>
    </nav>
  )
}

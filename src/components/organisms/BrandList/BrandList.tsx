import { BrandCard, SectionTitle } from "@/components/molecules"
import { Reveal } from "@/components/motion/Reveal"
import { StaggerItem, StaggerList } from "@/components/motion/Stagger"
import { BRANDS } from "@/content/home"
import styles from "./BrandList.module.scss"

export function BrandList() {
  return (
    <section aria-labelledby="brands-title" className={styles.section}>
      <Reveal offset={16}>
        <SectionTitle id="brands-title" title="Navegue por marcas" decorated={false} />
      </Reveal>
      <StaggerList className={styles.list}>
        {BRANDS.map((brand) => (
          <StaggerItem key={brand.name}>
            <BrandCard name={brand.name} logo={brand.logo} />
          </StaggerItem>
        ))}
      </StaggerList>
    </section>
  )
}

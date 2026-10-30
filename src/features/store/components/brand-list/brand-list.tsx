import Image from 'next/image'
import styles from './brand-list.module.scss'

const brands = Array.from({ length: 5 }, (_, index) => ({
  id: `brand-${index}`,
  name: 'Econverse',
  logo: '/figma/brand-logo.png',
}))

export function BrandList() {
  return (
    <section aria-labelledby="brands-title" className={styles.brandList}>
      <h2 id="brands-title" className={styles.title}>
        Navegue por marcas
      </h2>
      <ul className={styles.track}>
        {brands.map((brand) => (
          <li key={brand.id} className={styles.item}>
            <a href="#" aria-label={brand.name} className={styles.brandLink}>
              <Image src={brand.logo} alt="" width={117} height={35} className={styles.logo} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

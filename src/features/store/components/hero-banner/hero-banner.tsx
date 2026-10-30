import Image from 'next/image'
import styles from './hero-banner.module.scss'

export function HeroBanner() {
  return (
    <section aria-labelledby="hero-title" className={styles.heroBanner}>
      <Image
        src="/figma/hero.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className={styles.image}
      />
      <div
        aria-hidden="true"
        className={styles.overlay}
      />
      <div className={styles.content}>
        <div className={styles.copy}>
          <h1 id="hero-title" className={styles.title}>
            Venha conhecer nossas promoções
          </h1>
          <p className={styles.subtitle}>
            <strong className={styles.discount}>50% Off</strong> nos produtos
          </p>
        </div>
        <a href="#vitrine-1" className={styles.cta}>
          Ver produto
        </a>
      </div>
    </section>
  )
}

import Image from 'next/image'
import styles from './promo-banners.module.scss'

interface PromoBanner {
  title: string
  description: string
  cta: string
  image: string
}

const defaultBanners: PromoBanner[] = [
  {
    title: 'Parceiros',
    description: 'Lorem ipsum dolor sit amet, consectetur',
    cta: 'Confira',
    image: '/figma/banner.jpg',
  },
  {
    title: 'Parceiros',
    description: 'Lorem ipsum dolor sit amet, consectetur',
    cta: 'Confira',
    image: '/figma/banner.jpg',
  },
]

export function PromoBanners({ banners = defaultBanners }: { banners?: PromoBanner[] }) {
  return (
    <section aria-label="Destaques" className={styles.promoBanners}>
      {banners.map((banner, index) => (
        <article key={index} className={styles.banner}>
          <Image src={banner.image} alt="" fill sizes="(min-width: 768px) 634px, 100vw" className={styles.image} />
          <div aria-hidden="true" className={styles.overlay} />
          <div className={styles.content}>
            <h3 className={styles.title}>{banner.title}</h3>
            <p className={styles.description}>{banner.description}</p>
            <a href="#" className={styles.cta}>
              {banner.cta}
            </a>
          </div>
        </article>
      ))}
    </section>
  )
}

'use client'

import Image from 'next/image'
import { useState } from 'react'
import { categories } from '@/lib/store-content'
import styles from './category-nav.module.scss'

export function CategoryNav() {
  const [active, setActive] = useState(categories[0].label)

  return (
    <nav aria-label="Compre por categoria" className={styles.categoryNav}>
      <ul className={styles.track}>
        {categories.map((category) => {
          const isActive = category.label === active
          return (
            <li key={category.label} className={styles.item}>
              <button
                type="button"
                onClick={() => setActive(category.label)}
                aria-pressed={isActive}
                className={styles.categoryButton}
              >
                <span
                  className={`${styles.tile} ${isActive ? styles.tileActive : styles.tileInactive}`}
                >
                  <Image src={category.icon} alt="" width={61} height={61} className={styles.icon} />
                </span>
                <span
                  className={`${styles.label} ${isActive ? styles.labelActive : styles.labelInactive}`}
                >
                  {category.label}
                </span>
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

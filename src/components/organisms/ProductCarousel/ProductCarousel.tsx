"use client"

import { AnimatePresence, motion, type Variants } from "framer-motion"
import { IconButton } from "@/components/atoms"
import { EmptyState, ProductCard } from "@/components/molecules"
import { useCarousel } from "@/hooks/useCarousel"
import type { Product } from "@/lib/catalog"
import styles from "./ProductCarousel.module.scss"

// Troca de aba: a lista sai para a esquerda e os cards entram em cascata.
const list: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
  exit: { opacity: 0, x: -24, transition: { duration: 0.2 } },
}

const slide: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
}

type ProductCarouselProps = {
  products: readonly Product[]
  onSelect: (product: Product) => void
  /** Muda a cada troca de aba: reinicia o scroll e reanima os cards. */
  listKey: string
  label: string
  emptyTitle?: string
  priority?: boolean
}

export function ProductCarousel({
  products,
  onSelect,
  listKey,
  label,
  emptyTitle = "Nenhum produto encontrado nesta categoria.",
  priority = false,
}: ProductCarouselProps) {
  // A lista é remontada a cada aba (key), então o scroll já volta ao início.
  const { trackRef, canPrev, canNext, prev, next } = useCarousel<HTMLUListElement>()

  if (products.length === 0) {
    return (
      <EmptyState
        icon="search"
        title={emptyTitle}
        description="Experimente outra aba ou veja todos os produtos."
        className={styles.empty}
      />
    )
  }

  return (
    <div className={styles.carousel}>
      <IconButton
        icon="chevron"
        flip
        variant="floating"
        label="Produtos anteriores"
        iconSize={{ width: 8, height: 13 }}
        className={styles.prev}
        onClick={prev}
        disabled={!canPrev}
      />

      <AnimatePresence mode="wait" initial={false}>
        <motion.ul
          key={listKey}
          ref={trackRef}
          className={styles.track}
          aria-label={label}
          variants={list}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {products.map((product, index) => (
            <motion.li key={product.id} className={styles.slide} variants={slide}>
              <ProductCard product={product} onSelect={onSelect} priority={priority && index < 4} />
            </motion.li>
          ))}
        </motion.ul>
      </AnimatePresence>

      <IconButton
        icon="chevron"
        variant="floating"
        label="Próximos produtos"
        iconSize={{ width: 8, height: 13 }}
        className={styles.next}
        onClick={next}
        disabled={!canNext}
      />
    </div>
  )
}

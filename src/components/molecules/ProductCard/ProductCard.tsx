import { clsx } from "clsx"
import type { Product } from "@/lib/catalog"
import { Button, ProgressiveImage } from "@/components/atoms"
import { ProductPrice } from "../ProductPrice/ProductPrice"
import styles from "./ProductCard.module.scss"

type ProductCardProps = {
  product: Product
  onSelect: (product: Product) => void
  /** Imagens acima da dobra carregam com prioridade. */
  priority?: boolean
  className?: string
}

export function ProductCard({ product, onSelect, priority = false, className }: ProductCardProps) {
  const select = () => onSelect(product)

  return (
    <article className={clsx(styles.card, className)} aria-label={product.name}>
      <div className={styles.media}>
        <ProgressiveImage
          src={product.photo}
          alt=""
          sizes="(max-width: 520px) 70vw, (max-width: 1024px) 40vw, 278px"
          className={styles.image}
          fit="contain"
          priority={priority}
        />
      </div>

      <h3 className={styles.title}>
        {/* O card inteiro é clicável via ::after; o botão dá semântica e foco. */}
        <button type="button" className={styles.hit} onClick={select} aria-haspopup="dialog">
          {product.name}
        </button>
      </h3>

      <ProductPrice price={product.price} listPrice={product.listPrice} className={styles.price} />
      <p className={styles.shipping}>Frete grátis</p>

      <Button
        block
        className={styles.buy}
        onClick={select}
        aria-haspopup="dialog"
        aria-label={`Comprar ${product.name}`}
      >
        Comprar
      </Button>
    </article>
  )
}

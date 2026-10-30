import Image from 'next/image'
import { formatPrice } from '@/features/products/lib/format'
import type { Product } from '@/features/products/types/product'
import styles from './product-card.module.scss'

interface ProductCardProps {
  product: Product
  onSelect: (product: Product) => void
}

export function ProductCard({ product, onSelect }: ProductCardProps) {
  const installmentValue = product.price / product.installments

  return (
    <article className={styles.productCard}>
      <button
        type="button"
        onClick={() => onSelect(product)}
        className={styles.detailsButton}
        aria-label={`Ver detalhes de ${product.name}`}
      >
        <span className={styles.imageFrame}>
          <Image src={product.photo} alt={product.name} fill sizes="278px" className={styles.image} />
        </span>
        <span className={styles.description}>{product.description}</span>
        <span className={styles.priceGroup}>
          {product.listPrice ? (
            <span className={styles.listPrice}>
              <span className="sr-only">De </span>
              {formatPrice(product.listPrice)}
            </span>
          ) : null}
          <span className={styles.price}>
            {product.listPrice ? <span className="sr-only">Por </span> : null}
            {formatPrice(product.price)}
          </span>
        </span>
        <span className={styles.installments}>
          <span className={styles.installmentText}>
            ou {product.installments}x de {formatPrice(installmentValue)} sem juros
          </span>
          {product.freeShipping ? <span className={styles.freeShipping}>Frete grátis</span> : null}
        </span>
      </button>
      <button
        type="button"
        onClick={() => onSelect(product)}
        className={styles.buyButton}
      >
        Comprar
      </button>
    </article>
  )
}

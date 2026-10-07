import { clsx } from "clsx"
import { INSTALLMENTS } from "@/lib/catalog"
import { formatCurrency, installmentValue } from "@/lib/format"
import styles from "./ProductPrice.module.scss"

type ProductPriceProps = {
  price: number
  listPrice?: number
  className?: string
}

export function ProductPrice({ price, listPrice, className }: ProductPriceProps) {
  const hasDiscount = listPrice !== undefined && listPrice > price

  return (
    <div className={clsx(styles.price, className)}>
      {hasDiscount && (
        <s className={styles.list}>
          <span className="sr-only">De </span>
          {formatCurrency(listPrice)}
        </s>
      )}
      <p className={styles.current}>
        {hasDiscount && <span className="sr-only">Por </span>}
        {formatCurrency(price)}
      </p>
      <p className={styles.installments}>
        ou {INSTALLMENTS}x de {formatCurrency(installmentValue(price, INSTALLMENTS))} sem juros
      </p>
    </div>
  )
}

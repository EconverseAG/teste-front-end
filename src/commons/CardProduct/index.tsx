import type { Product } from "../../types/product";
import { formatPrice } from "../../utils/formatPrice";
import styles from "./CardProduct.module.scss";

type CardProductProps = {
  product: Product;
  openModal: ({ product }: { product: Product }) => void;
  isOpenModal: boolean;
};

const CardProduct = ({ product, openModal, isOpenModal }: CardProductProps) => {
  const price = product.price;
  const discountPrice = price - price / 10;

  const installment = discountPrice / 2;

  return (
    <div className={styles.cardProduct}>
      <img
        className={styles.imageProduct}
        src={product.photo}
        alt={product.productName}
        width={247}
        height={228}
        title={product.productName}
        loading="lazy"
      />
      <h4 className={styles.titleProduct}>{product.productName}</h4>
      <div className={styles.containerPriceProduct}>
        <p className={styles.priceProduct}>{formatPrice(price)}</p>
        <p className={styles.discountPriceProduct}>
          {formatPrice(discountPrice)}
        </p>
      </div>
      <p className={styles.installmentProduct}>
        ou 2x de {formatPrice(installment)} sem juros
      </p>
      <p className={styles.freeShippingProduct}>Frete grátis</p>
      <button
        className={styles.buyButtonProduct}
        onClick={() => openModal({ product })}
        aria-label="Comprar produto"
        aria-controls="product-modal"
        aria-expanded={isOpenModal}
      >
        COMPRAR
      </button>
    </div>
  );
};

export default CardProduct;

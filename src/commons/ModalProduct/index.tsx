import { useEffect, useState } from "react";
import type { Product } from "../../types/product";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/formatPrice";
import styles from "./ModalProduct.module.scss";

type ModalProps = {
  product: Product;
  closeModal: () => void;
};

const ModalProduct = ({ closeModal, product }: ModalProps) => {
  const [count, setCount] = useState<number>(1);
  const discountPrice = product.price - product.price / 10;

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <section className={styles.modalProduct}>
      <div id="product-modal" role="dialog" className={styles.modalContent}>
        <button
          className={styles.closeButton}
          onClick={closeModal}
          aria-label="Fechar Modal"
        >
          &times;
        </button>
        <div className={styles.modalImage}>
          <img
            src={product.photo}
            alt={product.productName}
            title={product.productName}
            width={247}
            height={228}
            loading="lazy"
          />
        </div>
        <div className={styles.aboutProduct}>
          <h4 className={styles.titleProduct}>{product.productName}</h4>
          <p className={styles.priceProduct}>{formatPrice(discountPrice)}</p>
          <p className={styles.descriptionProduct}>
            Many desktop publishing packages and web page editors now many
            desktop publishing
          </p>
          <Link to={`/${product.productName}`}>
            <p className={styles.detailsProduct}>
              Veja mais detalhes do produto &#10095;
            </p>
          </Link>
          <div className={styles.containerBuy}>
            <div
              className={styles.countProduct}
              aria-label="Quantidade do produto"
            >
              <button
                onClick={() => setCount((prev) => prev - 1)}
                disabled={count === 1}
                aria-label="Diminuir quantidade"
              >
                <svg
                  aria-hidden
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.23047 9.81812H16.0766"
                    stroke="#271C47"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <output
                aria-live="polite"
                aria-atomic="true"
                aria-label={`Quantidade: ${count}`}
              >
                {count}
              </output>
              <button
                onClick={() => setCount((prev) => prev + 1)}
                disabled={count > 19}
                aria-label="Aumentar quantidade"
              >
                <svg
                  aria-hidden
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.1543 4.09082V15.5454"
                    stroke="#271C47"
                    strokeWidth="2"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.23047 9.81812H16.0766"
                    stroke="#271C47"
                    strokeWidth="2"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <button
              className={styles.buyButton}
              aria-label={`Comprar ${product.productName}`}
            >
              COMPRAR
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModalProduct;

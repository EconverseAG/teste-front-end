import { lazy, Suspense, useEffect, useRef, useState } from "react";
import Filters from "./Filters";
import type { Product } from "../../types/product";
import styles from "./ProductShelf.module.scss";
import { Link } from "react-router-dom";

const ModalProduct = lazy(() => import("../ModalProduct"));
const CardProduct = lazy(() => import("../CardProduct"));

type ProductsShelfProps = {
  title: string;
  isVisibleFilters?: boolean;
  isSeeAllButton?: boolean;
};

const ProductsShelf = ({
  title,
  isVisibleFilters = false,
  isSeeAllButton = false,
}: ProductsShelfProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const [translate, setTranslate] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/products.json");
        if (!response.ok) {
          throw new Error("Erro ao buscar produtos");
        }

        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Erro:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const nextSlide = () => {
    if (carouselRef.current) {
      const newTranslate = translate - 313;
      const maxWidth = (products.length - 4) * 313;

      if (-newTranslate >= maxWidth) {
        setTranslate(0);
        carouselRef.current.style.transform = `translateX(0px)`;
      } else {
        setTranslate(newTranslate);
        carouselRef.current.style.transform = `translateX(${newTranslate}px)`;
      }
    }
  };

  const prevSlide = () => {
    if (carouselRef.current) {
      const newTranslate = translate + 313;
      const maxWidth = (products.length - 4) * 313;
      console.log({ newTranslate });
      console.log({ maxWidth });

      if (newTranslate >= 313) {
        setTranslate(-maxWidth);
        carouselRef.current.style.transform = `translateX(-${maxWidth}px)`;
      } else {
        setTranslate(newTranslate);
        carouselRef.current.style.transform = `translateX(${newTranslate}px)`;
      }
    }
  };

  const openModal = ({ product }: { product: Product }) => {
    setSelectedProduct(product);
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsOpenModal(false);
  };

  return (
    <section className={styles.productsShelf}>
      <div className={styles.productsShelfTitle}>
        <hr />
        <h2>{title}</h2>
      </div>
      {isVisibleFilters && <Filters />}
      {isSeeAllButton && (
        <Link className={styles.productsShelfSeeAll} to="/">
          Ver todos
        </Link>
      )}
      {loading ? (
        <h1>Carregando...</h1>
      ) : (
        <div className={styles.carouselWrapper}>
          <button
            className={styles.buttonCarouselLeft}
            onClick={prevSlide}
            aria-label="Voltar Carrossel"
          >
            <svg
              aria-hidden
              width="8"
              height="13"
              viewBox="0 0 8 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.46667 1.14424L6.33419 0L0 6.4L6.33419 12.8L7.46667 11.6558L2.26495 6.4L7.46667 1.14424Z"
                fill="#3F3F40"
              />
            </svg>
          </button>
          <div className={styles.containerCarousel}>
            <div className={styles.contentCarousel} ref={carouselRef}>
              {products.map((product, index) => (
                <CardProduct
                  key={index}
                  product={product}
                  openModal={openModal}
                  isOpenModal={isOpenModal}
                />
              ))}
            </div>
          </div>
          <button
            className={styles.buttonCarouselRight}
            onClick={nextSlide}
            aria-label="Passar Carrossel"
          >
            <svg
              aria-hidden
              width="8"
              height="13"
              viewBox="0 0 8 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.0062e-06 11.6558L1.13248 12.8L7.46667 6.40005L1.13248 4.82375e-05L7.08725e-06 1.14429L5.20172 6.40005L8.0062e-06 11.6558Z"
                fill="#3F3F40"
              />
            </svg>
          </button>
        </div>
      )}
      {isOpenModal && selectedProduct && (
        <Suspense fallback={null}>
          <ModalProduct product={selectedProduct} closeModal={closeModal} />
        </Suspense>
      )}
    </section>
  );
};

export default ProductsShelf;

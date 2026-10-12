import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import { Minus, Plus, X } from "lucide-react";
import dados from "../data/produtos.json";
import "../style/Products.scss";

type Product = (typeof dados.products)[number];

const formatCurrency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const categorias = [
  "CELULAR",
  "ACESSÓRIOS",
  "TABLETS",
  "NOTEBOOKS",
  "TVS",
  "VER TODOS",
];

type ProductsProps = {
  showCategories?: boolean;
};

function Products({ showCategories = true }: ProductsProps) {
  const productsListRef = useRef<HTMLUListElement>(null);
  const productDialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const dialogTitleId = useId();
  const [canScrollPrevious, setCanScrollPrevious] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [purchaseConfirmed, setPurchaseConfirmed] = useState(false);

  useEffect(() => {
    const dialog = productDialogRef.current;
    if (selectedProduct && dialog && !dialog.open) {
      dialog.showModal();
    }
  }, [selectedProduct]);

  const updateScrollControls = useCallback(() => {
    const list = productsListRef.current;
    if (!list) return;

    setCanScrollPrevious(list.scrollLeft > 0);
    setCanScrollNext(list.scrollLeft + list.clientWidth < list.scrollWidth - 1);
  }, []);

  useEffect(() => {
    const list = productsListRef.current;
    if (!list) return;

    updateScrollControls();
    list.addEventListener("scroll", updateScrollControls, { passive: true });
    window.addEventListener("resize", updateScrollControls);

    return () => {
      list.removeEventListener("scroll", updateScrollControls);
      window.removeEventListener("resize", updateScrollControls);
    };
  }, [updateScrollControls]);

  function scrollProducts(direction: "previous" | "next") {
    const list = productsListRef.current;
    if (!list) return;

    list.scrollBy({
      left: direction === "next" ? list.clientWidth : -list.clientWidth,
      behavior: "smooth",
    });
  }

  function openProduct(product: Product) {
    setSelectedProduct(product);
    setQuantity(1);
    setShowFullDescription(false);
    setPurchaseConfirmed(false);
  }

  function closeProductDialog() {
    productDialogRef.current?.close();
  }

  function handleDialogClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === event.currentTarget) {
      closeProductDialog();
    }
  }

  return (
    <>
      <section
        className="products"
        id={showCategories ? "products-categories" : undefined}
        aria-labelledby={titleId}
      >
        <h2 className="products__title" id={titleId}>
          Produtos relacionados
        </h2>

        {showCategories ? (
          <div
            className="products__categories"
            role="group"
            aria-label="Categorias de produtos"
          >
            {categorias.map((categoria, index) => (
              <button
                key={categoria}
                className="products__category"
                type="button"
                aria-pressed={index === 0}
              >
                {categoria}
              </button>
            ))}
          </div>
        ) : (
          <a className="products__see-all" href="#products-categories">
            Ver todos
          </a>
        )}

        <div
          className="products__carousel"
          role="region"
          aria-label="Lista de produtos"
        >
          <button
            className="products__arrow products__arrow--previous"
            type="button"
            aria-label="Produtos anteriores"
            disabled={!canScrollPrevious}
            onClick={() => scrollProducts("previous")}
          >
            <span aria-hidden="true">‹</span>
          </button>

          <ul
            className="products__list"
            ref={productsListRef}
            aria-label="Produtos relacionados"
          >
            {dados.products.map((produto, index) => (
              <li
                key={`${produto.productName}-${index}`}
                className="products__item"
              >
                <article className="products__card">
                  <button
                    className="products__open"
                    type="button"
                    aria-label={`Ver detalhes de ${produto.productName}`}
                    onClick={() => openProduct(produto)}
                  />
                  <img className="products__image" src={produto.photo} alt="" />
                  <h3 className="products__name">{produto.productName}</h3>
                  <p className="products__description">
                    {produto.descriptionShort}
                  </p>
                  <p className="products__price">
                    <data value={produto.price}>
                      {formatCurrency.format(produto.price)}
                    </data>
                  </p>
                  <p className="products__shipping">Frete grátis</p>
                  <button
                    className="products__buy"
                    type="button"
                    onClick={() => openProduct(produto)}
                  >
                    COMPRAR
                  </button>
                </article>
              </li>
            ))}
          </ul>

          <button
            className="products__arrow products__arrow--next"
            type="button"
            aria-label="Próximos produtos"
            disabled={!canScrollNext}
            onClick={() => scrollProducts("next")}
          >
            <span aria-hidden="true">›</span>
          </button>
        </div>
      </section>

      {selectedProduct && (
        <dialog
          className="product-dialog"
          ref={productDialogRef}
          aria-labelledby={dialogTitleId}
          onClick={handleDialogClick}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              event.preventDefault();
              closeProductDialog();
            }
          }}
          onCancel={(event) => {
            event.preventDefault();
            closeProductDialog();
          }}
          onClose={() => {
            setSelectedProduct(null);
            setPurchaseConfirmed(false);
          }}
        >
          <button
            className="product-dialog__close"
            type="button"
            aria-label="Fechar detalhes do produto"
            onClick={closeProductDialog}
          >
            <X size={22} aria-hidden="true" />
          </button>

          {purchaseConfirmed ? (
            <div className="product-dialog__confirmation" role="status">
              <h2 id={dialogTitleId}>Compra confirmada!</h2>
              <p>
                {quantity} unidade{quantity > 1 ? "s" : ""} de{" "}
                {selectedProduct.productName} foram adicionadas à sua compra.
              </p>
              <button
                className="product-dialog__buy"
                type="button"
                onClick={closeProductDialog}
              >
                Fechar
              </button>
            </div>
          ) : (
            <div className="product-dialog__content">
              <div className="product-dialog__image-wrap">
                <img
                  className="product-dialog__image"
                  src={selectedProduct.photo}
                  alt={selectedProduct.productName}
                />
              </div>
              <div className="product-dialog__info">
                <h2 id={dialogTitleId}>
                  {selectedProduct.productName}
                </h2>
                <p className="product-dialog__price">
                  {formatCurrency.format(selectedProduct.price)}
                </p>
                <p
                  className={`product-dialog__description${showFullDescription ? " product-dialog__description--expanded" : ""}`}
                >
                  {selectedProduct.descriptionShort}
                </p>
                <button
                  className="product-dialog__details"
                  type="button"
                  aria-expanded={showFullDescription}
                  onClick={() => setShowFullDescription((expanded) => !expanded)}
                >
                  {showFullDescription
                    ? "Ver menos detalhes"
                    : "Veja mais detalhes do produto >"}
                </button>
                <div className="product-dialog__actions">
                  <div
                    className="product-dialog__quantity"
                    aria-label="Quantidade"
                  >
                    <button
                      type="button"
                      aria-label="Diminuir quantidade"
                      disabled={quantity <= 1}
                      onClick={() =>
                        setQuantity((current) => Math.max(1, current - 1))
                      }
                    >
                      <Minus size={18} aria-hidden="true" />
                    </button>
                    <output aria-live="polite">
                      {String(quantity).padStart(2, "0")}
                    </output>
                    <button
                      type="button"
                      aria-label="Aumentar quantidade"
                      onClick={() => setQuantity((current) => current + 1)}
                    >
                      <Plus size={20} aria-hidden="true" />
                    </button>
                  </div>
                  <button
                    className="product-dialog__buy"
                    type="button"
                    onClick={() => setPurchaseConfirmed(true)}
                  >
                    COMPRAR
                  </button>
                </div>
              </div>
            </div>
          )}
        </dialog>
      )}
    </>
  );
}

export default Products;

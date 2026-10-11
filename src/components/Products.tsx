import { useCallback, useEffect, useId, useRef, useState } from "react";
import dados from "../data/produtos.json";
import "../style/Products.scss";

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
  const titleId = useId();
  const [canScrollPrevious, setCanScrollPrevious] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

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

  return (
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
                <button className="products__buy" type="button">
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
  );
}

export default Products;

// import { useState } from "react";
import { useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import { ProductCard } from "../ProductCard";
// import type { Product } from "../../types/product";

import "./style.scss";

type TabCategory =
  | "Celular"
  | "Acessório"
  | "Tablets"
  | "Notebooks"
  | "TVs"
  | "Ver todos";

export const ProductGrid = () => {
  const tabs: TabCategory[] = [
    "Celular",
    "Acessório",
    "Tablets",
    "Notebooks",
    "TVs",
    "Ver todos",
  ];

  const { products, loading, error } = useProducts();

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const itemsPerPage = 4;

  const isAtStart = currentIndex === 0;
  const isAtEnd = products
    ? currentIndex + itemsPerPage >= products.length
    : true;

  const nextSlide = () => {
    if (!isAtEnd) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (!isAtStart) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  if (loading) {
    return <div className="product-grid__status">Carregando produtos...</div>;
  }

  if (error)
    return (
      <div className="product-grid__status">
        Erro ao carregar vitrine: {error}
      </div>
    );

  const visibleProducts = products?.slice(
    currentIndex,
    currentIndex + itemsPerPage,
  );

  return (
    <section className="product-grid-section">
      <div className="product-grid">
        <h2 className="product-grid__title">Produtos relacionados</h2>

        <nav className="product-grid__tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`product-grid__tab-item ${tab.toUpperCase() === "CELULAR" ? "product-grid__tab-item--active" : ""}`}
            >
              {tab}
            </button>
          ))}
        </nav>

        <div className="product-grid__carousel-wrapper">
          <button
            className={`product-grid__nav-button product-grid__nav-button--prev ${isAtStart ? "disabled" : ""}`}
            onClick={prevSlide}
            disabled={isAtStart}
            aria-label="Anterior"
          />

          <div className="product-grid__list product-grid__list--animating">
            {visibleProducts?.map((product) => (
              <ProductCard
                key={product.productName}
                product={product}
                openModal={() => {}}
              />
            ))}
          </div>

          <button
            className={`product-grid__nav-button product-grid__nav-button--next ${isAtEnd ? "disabled" : ""}`}
            onClick={nextSlide}
            disabled={isAtEnd}
            aria-label="Próximo"
          />
        </div>
      </div>
    </section>
  );
};

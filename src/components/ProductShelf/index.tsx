import { useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import { useModal } from "../../hooks/useModal";
import { ProductCard } from "../ProductCard";
import { ProductModal } from "../ProductModal";
import { ProductTabs } from "../ProductTabs";
import "./style.scss";

interface ProductShelfProps {
  title: string;
  showTabs?: boolean;
  activeTab?: string;
  showViewAll?: boolean;
}

export const ProductShelf = ({
  title,
  showTabs,
  activeTab = "Celular",
  showViewAll,
}: ProductShelfProps) => {
  const { products, loading, error } = useProducts();
  const { selectedProducts, openModal, closeModal } = useModal();
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  if (loading || error || !products) return null;

  const visibleProducts = products?.slice(
    currentIndex,
    currentIndex + itemsPerPage,
  );
  const isAtStart = currentIndex === 0;
  const isAtEnd = products
    ? currentIndex + itemsPerPage >= products.length
    : true;

  return (
    <section className="product-shelf">
      <h2 className="product-shelf__title">{title}</h2>

      {showTabs && <ProductTabs activeTab={activeTab} />}
      {showViewAll && (
        <a href="#" className="product-shelf__view-all">
          Ver todos
        </a>
      )}

      <div className="product-shelf__carousel">
        <button
          className={`nav-button prev ${isAtStart ? "disabled" : ""}`}
          onClick={() => !isAtStart && setCurrentIndex((prev) => prev - 1)}
        />

        <div className="product-shelf__list">
          {visibleProducts?.map((product) => (
            <ProductCard
              key={product.productName}
              product={product}
              openModal={openModal}
            />
          ))}
        </div>

        <button
          className={`nav-button next ${isAtEnd ? "disabled" : ""}`}
          onClick={() => !isAtEnd && setCurrentIndex((prev) => prev + 1)}
        />
      </div>

      <ProductModal product={selectedProducts} onClose={closeModal} />
    </section>
  );
};

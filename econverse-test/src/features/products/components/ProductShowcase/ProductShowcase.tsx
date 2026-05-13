"use client";

import { useId, useMemo, useState } from "react";
import { ProductGrid } from "@/src/features/products/components/ProductGrid/ProductGrid";
import { ProductModal } from "@/src/features/products/components/ProductModal/ProductModal";
import { useProducts } from "@/src/features/products/hooks/useProducts";
import type { Product } from "@/src/features/products/types/product";
import styles from "./ProductShowcase.module.scss";

type ProductShowcaseProps = {
  compact?: boolean;
  tabs?: string[];
  title?: string;
};

const defaultTabs = ["Celular", "Acessórios", "Tablets", "Notebooks", "TVs", "Ver todos"];

export function ProductShowcase({
  compact = false,
  tabs = defaultTabs,
  title = "Produtos relacionados",
}: ProductShowcaseProps) {
  const { error, isLoading, products } = useProducts();
  const headingId = useId();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const visibleProducts = useMemo(() => products.slice(0, compact ? 4 : 8), [compact, products]);

  return (
    <section className={styles.showcase} id={compact ? undefined : "produtos"} aria-labelledby={headingId}>
      <div className={styles.heading}>
        <span />
        <div>
          <h2 id={headingId}>{title}</h2>
          <a href="#produtos">Ver todos</a>
        </div>
        <span />
      </div>

      {!compact ? (
        <div className={styles.tabs} role="list" aria-label="Filtros de produtos">
          {tabs.map((tab, index) => (
            <button className={index === 0 ? styles.activeTab : ""} key={tab} type="button">
              {tab}
            </button>
          ))}
        </div>
      ) : null}

      {isLoading ? (
        <div className={styles.status} role="status">
          Carregando produtos...
        </div>
      ) : null}

      {error ? (
        <div className={styles.status} role="alert">
          {error}
        </div>
      ) : null}

      {!isLoading && !error && visibleProducts.length === 0 ? (
        <div className={styles.status}>Nenhum produto encontrado.</div>
      ) : null}

      {!isLoading && !error && visibleProducts.length > 0 ? (
        <ProductGrid onSelect={setSelectedProduct} products={visibleProducts} />
      ) : null}

      <ProductModal onClose={() => setSelectedProduct(null)} product={selectedProduct} />
    </section>
  );
}

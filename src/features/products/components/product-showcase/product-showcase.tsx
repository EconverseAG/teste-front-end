"use client";

import Image from "next/image";
import { useState } from "react";
import { showcaseTabs } from "@/lib/store-content";
import type { Product } from "@/features/products/types/product";
import styles from "./product-showcase.module.scss";
import { ProductCard } from "@/features/products/components/product-card/product-card";
import { ProductModal } from "@/features/products/components/product-modal/product-modal";
import { SectionTitle } from "@/features/products/components/section-title/section-title";

interface ProductShowcaseProps {
  id: string;
  title: string;
  products: Product[];
  showTabs?: boolean;
}

export function ProductShowcase({
  id,
  title,
  products,
  showTabs = false,
}: ProductShowcaseProps) {
  const [activeTab, setActiveTab] = useState(showcaseTabs[0]);
  const [selected, setSelected] = useState<Product | null>(null);
  const titleId = `${id}-title`;
  const hasProducts = products.length > 0;

  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className={styles.productShowcase}
    >
      <SectionTitle id={titleId} title={title} />

      {showTabs && hasProducts ? (
        <div role="group" aria-label="Filtrar produtos" className={styles.tabs}>
          <div className={styles.tabList}>
            {showcaseTabs.map((tab) => {
              const isActive = tab === activeTab;

              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  aria-pressed={isActive}
                  className={`${styles.tab} ${
                    isActive ? styles.tabActive : styles.tabInactive
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>
      ) : null}

      {hasProducts ? (
        <>
          <div className={styles.carousel}>
            <span aria-hidden="true" className={styles.arrowIcon}>
              <Image
                src="/figma/arrow-left.svg"
                alt=""
                width={40}
                height={40}
              />
            </span>

            <ul className={styles.productGrid}>
              {products.slice(0, 4).map((product) => (
                <li key={product.id}>
                  <ProductCard product={product} onSelect={setSelected} />
                </li>
              ))}
            </ul>

            <span aria-hidden="true" className={styles.arrowIcon}>
              <Image
                src="/figma/arrow-right.svg"
                alt=""
                width={40}
                height={40}
              />
            </span>
          </div>

          <ProductModal product={selected} onClose={() => setSelected(null)} />
        </>
      ) : (
        <div className={styles.emptyState} role="status">
          <p className={styles.emptyTitle}>Nenhum produto disponível</p>

          <p className={styles.emptyDescription}>
            Novos produtos podem ser adicionados em breve.
          </p>
        </div>
      )}
    </section>
  );
}

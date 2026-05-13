import type { Product } from "@/src/features/products/types/product";
import { ProductCard } from "@/src/features/products/components/ProductCard/ProductCard";
import styles from "./ProductGrid.module.scss";

type ProductGridProps = {
  products: Product[];
  onSelect: (product: Product) => void;
};

export function ProductGrid({ onSelect, products }: ProductGridProps) {
  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard key={product.id} onSelect={onSelect} product={product} />
      ))}
    </div>
  );
}

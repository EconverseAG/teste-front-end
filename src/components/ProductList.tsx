
import type { Product } from "../types/product";
import ProductCard from "./ProductCard";

interface ProductListProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

function ProductList({
  products,
  onSelectProduct,
}: ProductListProps) {
  if (products.length === 0) {
    return <p>Nenhum produto encontrado.</p>;
  }

  return (
    <section className="product-list" aria-label="Vitrine de produtos">
      {products.map((product) => (
        <ProductCard
          key={product.productName}
          product={product}
          onSelect={onSelectProduct}
        />
      ))}
    </section>
  );
}

export default ProductList;

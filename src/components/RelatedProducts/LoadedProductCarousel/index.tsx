import { use } from 'react';
import type { Product } from '@/types/product';
import ProductCarousel from '@/components/ProductCarousel';
import ProductCard from '@/components/ProductCard';

type LoadedProductCarouselProps = {
  productsPromise: Promise<Product[]>;
  onSelect: (product: Product) => void;
};

function LoadedProductCarousel({
  productsPromise,
  onSelect,
}: Readonly<LoadedProductCarouselProps>) {
  const products = use(productsPromise);

  return (
    <ProductCarousel ariaLabel="Produtos relacionados">
      {products.length > 0 ? (
        products.map((product, index) => (
          <ProductCard
            key={`${product.productName}-${index}`}
            product={product}
            onSelect={onSelect}
          />
        ))
      ) : (
        <p className="related-products__empty">Nenhum produto encontrado.</p>
      )}
    </ProductCarousel>
  );
}

export default LoadedProductCarousel;

import { Suspense, useState } from 'react';
import type { Product } from '@/types/product';
import './RelatedProducts.scss';

import ProductCategoryTabs from '../ProductCategoryTabs';
import ViewAllButton from '../ViewAllButton';
import ModalProductDetails from '../ModalProductDetails';

import LoadedProductCarousel from './LoadedProductCarousel';
import ProductCarouselSkeleton from './ProductCarouselSkeleton';

import { productCategories as categories } from '@/constants/productCategories';

type RelatedProductsProps = {
  productsPromise: Promise<Product[]>;
  variant?: 'tabs' | 'view-all';
};

function RelatedProducts({
  productsPromise,
  variant,
}: Readonly<RelatedProductsProps>) {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section
      className="related-products"
      aria-labelledby="related-products-title"
    >
      <div className="related-products__heading">
        <span className="related-products__line" aria-hidden="true" />

        <h2 id="related-products-title" className="related-products__title">
          Produtos relacionados
        </h2>

        <span className="related-products__line" aria-hidden="true" />
      </div>

      {variant === 'tabs' && (
        <ProductCategoryTabs
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      )}

      {variant === 'view-all' && <ViewAllButton onClick={() => {}} />}

      <Suspense fallback={<ProductCarouselSkeleton />}>
        <LoadedProductCarousel
          productsPromise={productsPromise}
          onSelect={setSelectedProduct}
        />
      </Suspense>

      {selectedProduct && (
        <ModalProductDetails
          product={selectedProduct}
          isOpen={selectedProduct !== null}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}

export default RelatedProducts;

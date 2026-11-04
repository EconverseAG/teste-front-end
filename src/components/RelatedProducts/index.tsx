import { useState } from 'react';
import type { Product } from '@/types/product';
import ProductCarousel from '@/components/ProductCarousel';
import './RelatedProducts.scss';
import ProductCard from '../ProductCard';
import ProductCategoryTabs from '../ProductCategoryTabs';
import ViewAllButton from '../ViewAllButton';
import { productCategories as categories } from '@/constants/productCategories';

type RelatedProductsProps = {
  products: Product[];
  variant?: 'tabs' | 'view-all';
};

function RelatedProducts({
  products,
  variant,
}: Readonly<RelatedProductsProps>) {
  const [activeCategory, setActiveCategory] = useState('CELULAR');
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

      <ProductCarousel ariaLabel="Produtos relacionados">
        {products.length > 0 ? (
          products.map((product, index) => (
            <ProductCard
              key={`${product.productName}-${index}`}
              product={product}
            />
          ))
        ) : (
          <p className="related-products__empty">Nenhum produto encontrado.</p>
        )}
      </ProductCarousel>
    </section>
  );
}

export default RelatedProducts;

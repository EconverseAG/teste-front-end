import ProductCarousel from '@/components/ProductCarousel';
import './ProductCarouselSkeleton.scss';

function ProductCarouselSkeleton() {
  return (
    <div
      className="product-carousel-skeleton"
      aria-busy="true"
      aria-label="Carregando produtos"
    >
      <ProductCarousel ariaLabel="Carregando produtos relacionados">
        {Array.from({ length: 4 }, (_, index) => (
          <article
            className="product-carousel-skeleton__card"
            aria-hidden="true"
            key={index}
          >
            <div className="product-carousel-skeleton__image" />

            <div className="product-carousel-skeleton__line product-carousel-skeleton__line--description" />

            <div className="product-carousel-skeleton__line product-carousel-skeleton__line--short" />

            <div className="product-carousel-skeleton__line product-carousel-skeleton__line--price" />

            <div className="product-carousel-skeleton__line product-carousel-skeleton__line--installments" />

            <div className="product-carousel-skeleton__line product-carousel-skeleton__line--button" />
          </article>
        ))}
      </ProductCarousel>
    </div>
  );
}

export default ProductCarouselSkeleton;

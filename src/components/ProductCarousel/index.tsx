import { useRef, type ReactNode } from 'react';
import './ProductCarousel.scss';

type ProductCarouselProps = {
  children: ReactNode;
  ariaLabel?: string;
  scrollAmount?: number;
};

function ProductCarousel({
  children,
  ariaLabel = 'Lista de produtos',
  scrollAmount = 320,
}: Readonly<ProductCarouselProps>) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: number) => {
    carouselRef.current?.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="product-carousel">
      <button
        className="product-carousel__arrow product-carousel__arrow--prev"
        type="button"
        aria-label="Itens anteriores"
        onClick={() => handleScroll(-1)}
      >
        ‹
      </button>

      <div
        className="product-carousel__list"
        ref={carouselRef}
        role="group"
        aria-label={ariaLabel}
      >
        {children}
      </div>

      <button
        className="product-carousel__arrow product-carousel__arrow--next"
        type="button"
        aria-label="Próximos itens"
        onClick={() => handleScroll(1)}
      >
        ›
      </button>
    </div>
  );
}

export default ProductCarousel;

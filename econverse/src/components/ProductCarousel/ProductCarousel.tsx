import { useRef } from 'react';
import type { Product } from '../../types/product';
import { ChevronLeftIcon, ChevronRightIcon } from '../Icons/Icons';
import { ProductCard } from '../ProductCard/ProductCard';
import './ProductCarousel.scss';

interface ProductCarouselProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  label: string;
}

export function ProductCarousel({ products, onSelectProduct, label }: ProductCarouselProps) {
  const trackRef = useRef<HTMLUListElement>(null);

  function scrollTrack(direction: 'previous' | 'next') {
    const track = trackRef.current;
    if (!track) return;

    const distance = track.clientWidth * (direction === 'next' ? 1 : -1);
    track.scrollBy({ left: distance, behavior: 'smooth' });
  }

  return (
    <div className="product-carousel" aria-roledescription="carrossel" aria-label={label}>
      <button
        type="button"
        className="product-carousel__arrow product-carousel__arrow--previous"
        aria-label="Produtos anteriores"
        onClick={() => scrollTrack('previous')}
      >
        <ChevronLeftIcon size={16} />
      </button>

      <ul className="product-carousel__track" ref={trackRef}>
        {products.map((product) => (
          <li key={product.id} className="product-carousel__item">
            <ProductCard product={product} onSelect={onSelectProduct} />
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="product-carousel__arrow product-carousel__arrow--next"
        aria-label="Próximos produtos"
        onClick={() => scrollTrack('next')}
      >
        <ChevronRightIcon size={16} />
      </button>
    </div>
  );
}

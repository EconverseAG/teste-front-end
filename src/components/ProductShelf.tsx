import { useRef } from 'react';
import type { Product } from '../types/product';
import { ProductCard } from './ProductCard';

export function ProductShelf({ products, onSelect, title = 'Produtos relacionados', subtitle }: {
  products: Product[];
  onSelect: (product: Product) => void;
  title?: string;
  subtitle?: string;
}) {
  const shelf = useRef<HTMLDivElement>(null);
  const scroll = (direction: -1 | 1) => shelf.current?.scrollBy({ left: direction * shelf.current.clientWidth * 0.8, behavior: 'smooth' });

  return (
    <section className="product-section" id="produtos" aria-label={title}>
      <div className="section-heading"><span /><h2>{title}</h2><span /></div>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
      <div className="shelf-wrap">
        <button className="shelf-arrow shelf-arrow--left" type="button" onClick={() => scroll(-1)} aria-label="Produtos anteriores">‹</button>
        <div className="product-shelf" ref={shelf}>
          {products.map((product, index) => <ProductCard key={`${product.productName}-${index}`} product={product} onSelect={onSelect} />)}
        </div>
        <button className="shelf-arrow shelf-arrow--right" type="button" onClick={() => scroll(1)} aria-label="Próximos produtos">›</button>
      </div>
    </section>
  );
}

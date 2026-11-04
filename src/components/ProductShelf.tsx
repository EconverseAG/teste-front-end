import { useEffect, useRef, useState } from 'react';
import type { Product } from '../types/product';
import { ProductCard } from './ProductCard';

export function ProductShelf({ products, onSelect, title = 'Produtos relacionados', subtitle, id, showCategories }: {
  products: Product[];
  onSelect: (product: Product) => void;
  title?: string;
  subtitle?: string;
  id?: string;
  showCategories?: boolean;
}) {
  const [category, setCategory] = useState('CELULAR');
  const shelf = useRef<HTMLDivElement>(null);
  const tabs = ['CELULAR', 'ACESSÓRIOS', 'TABLETS', 'NOTEBOOKS', 'TVS', 'VER TODOS'];
  const displayedProducts = !showCategories || category === 'VER TODOS'
    ? products
    : category === 'CELULAR'
      ? products.filter((product) => /iphone|celular|smartphone/i.test(product.productName))
      : [];
  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => { shelf.current?.scrollTo({ left: 0 }); }, [category, products]);
  useEffect(() => {
    const element = shelf.current;
    if (!element) return;
    const updateOverflow = () => setCanScroll(element.scrollWidth > element.clientWidth + 1);
    updateOverflow();
    const observer = new ResizeObserver(updateOverflow);
    observer.observe(element);
    return () => observer.disconnect();
  }, [category, displayedProducts.length]);

  const scroll = (direction: -1 | 1) => shelf.current?.scrollBy({ left: direction * shelf.current.clientWidth * 0.8, behavior: 'smooth' });

  return (
    <section className="product-section" id={id} aria-label={title}>
      <div className="section-heading"><span /><h2>{title}</h2><span /></div>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
      {showCategories && <nav className="product-tabs" aria-label="Categorias da vitrine">
        {tabs.map((tab) => <button key={tab} type="button" className={category === tab ? 'product-tabs__active' : ''} aria-pressed={category === tab} onClick={() => setCategory(tab)}>{tab}</button>)}
      </nav>}
      <div className="shelf-wrap">
        <button className="shelf-arrow shelf-arrow--left" type="button" onClick={() => scroll(-1)} aria-label="Produtos anteriores" disabled={!canScroll}>‹</button>
        <div className="product-shelf" ref={shelf}>
          {displayedProducts.map((product) => <ProductCard key={product.productName} product={product} onSelect={onSelect} />)}
        </div>
        <button className="shelf-arrow shelf-arrow--right" type="button" onClick={() => scroll(1)} aria-label="Próximos produtos" disabled={!canScroll}>›</button>
      </div>
      {displayedProducts.length === 0 && <p className="empty-category" role="status">Não há produtos desta categoria no catálogo atual.</p>}
    </section>
  );
}

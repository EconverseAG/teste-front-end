import { useCallback, useEffect, useRef, useState } from 'react';
import { useProducts } from '../../hooks/useProducts';
import { ProductCard } from '../ProductCard/ProductCard';
import './ProductShowcase.scss';

const TABS = ['Celular', 'Acessórios', 'Tablets', 'Notebooks', 'TVs', 'Ver todos'];

// largura do card (304) + espaço entre cards (18)
const SCROLL_STEP = 322;

function Chevron() {
  return (
    <svg width="8" height="13" viewBox="0 0 8 13" fill="none" aria-hidden="true">
      <path
        d="M6.5 1.5 1.5 6.5l5 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ProductShowcase() {
  const { products, loading, error } = useProducts();
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);

  const updateArrows = useCallback(() => {
    const el = viewportRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 1);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    updateArrows();
    window.addEventListener('resize', updateArrows);
    return () => window.removeEventListener('resize', updateArrows);
  }, [products, updateArrows]);

  const scroll = (direction: 1 | -1) => {
    viewportRef.current?.scrollBy({ left: direction * SCROLL_STEP, behavior: 'smooth' });
  };

  return (
    <section className="showcase" id="produtos" aria-labelledby="showcase-title">
      <header className="showcase__header">
        <span className="showcase__line" aria-hidden="true" />
        <h2 id="showcase-title" className="showcase__title">
          Produtos relacionados
        </h2>
        <span className="showcase__line" aria-hidden="true" />
      </header>

      <nav className="showcase__tabs" aria-label="Categorias de produtos">
        <ul>
          {TABS.map((tab) => (
            <li key={tab}>
              <button
                type="button"
                className={`showcase__tab${tab === activeTab ? ' showcase__tab--active' : ''}`}
                aria-pressed={tab === activeTab}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="showcase__carousel">
        <button
          type="button"
          className="showcase__arrow showcase__arrow--prev"
          aria-label="Produtos anteriores"
          onClick={() => scroll(-1)}
          disabled={!canPrev}
        >
          <Chevron />
        </button>

        <div className="showcase__viewport" ref={viewportRef} onScroll={updateArrows}>
          {loading && <p role="status">Carregando produtos...</p>}
          {error && <p role="alert">{error}</p>}
          {!loading && !error && (
            <ul className="showcase__list">
              {products.map((product) => (
                <li key={product.productName} className="showcase__item">
                  <ProductCard product={product} />
                </li>
              ))}
            </ul>
          )}
        </div>

        <button
          type="button"
          className="showcase__arrow showcase__arrow--next"
          aria-label="Próximos produtos"
          onClick={() => scroll(1)}
          disabled={!canNext}
        >
          <Chevron />
        </button>
      </div>
    </section>
  );
}
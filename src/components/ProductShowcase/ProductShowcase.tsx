import { useState } from 'react';
import type { ProductsStatus } from '../../hooks/useProducts';
import type { VitrineTab } from '../../data/content';
import type { Product } from '../../types/product';
import ProductCarousel from '../ProductCarousel/ProductCarousel';
import './ProductShowcase.scss';

const SKELETON_COUNT = 4;

/**
 * `default`       -> 1ª vitrine, colada nas tabs
 * `after-partners`-> 2ª vitrine, logo abaixo do banner de parceiros
 * `last`          -> 3ª vitrine, abaixo das marcas
 */
export type ShowcaseVariant = 'default' | 'after-partners' | 'last';

interface ProductShowcaseProps {
  id: string;
  titulo: string;
  carrosselTitulo: string;
  products: Product[];
  status: ProductsStatus;
  onOpenModal: (product: Product) => void;
  variant?: ShowcaseVariant;
  tabs?: VitrineTab[];
  showViewAll?: boolean;
}

export default function ProductShowcase({
  id,
  titulo,
  carrosselTitulo,
  products,
  status,
  onOpenModal,
  variant = 'default',
  tabs,
  showViewAll = false,
}: ProductShowcaseProps) {
  const [abaAtiva, setAbaAtiva] = useState(0);
  const tituloId = `${id}-titulo`;

  function renderizarConteudo() {
    if (status === 'loading') {
      return (
        <div className="vitrine-skeletons">
          {Array.from({ length: SKELETON_COUNT }, (_, i) => (
            <div className="vitrine-skeleton" key={i} />
          ))}
        </div>
      );
    }

    if (status === 'error') {
      return (
        <p className="showcase-message" role="alert">
          Não foi possível carregar os produtos agora. Tente novamente mais tarde.
        </p>
      );
    }

    if (products.length === 0) {
      return <p className="showcase-message">Nenhum produto encontrado nesta vitrine.</p>;
    }

    return <ProductCarousel products={products} onOpenModal={onOpenModal} titulo={carrosselTitulo} />;
  }

  return (
    <section className={`container showcase showcase--${variant}`} id={id} aria-labelledby={tituloId}>
      <h2 className="section-title" id={tituloId}>
        {titulo}
      </h2>

      {tabs ? (
        <div className="vitrine-tabs" role="tablist" aria-label={`Filtrar ${titulo}`}>
          {tabs.map((tab, index) => (
            <button
              key={tab.label}
              type="button"
              role="tab"
              aria-selected={index === abaAtiva}
              className={index === abaAtiva ? 'active' : undefined}
              onClick={() => setAbaAtiva(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      ) : null}

      {showViewAll ? (
        <a className="view-all" href="#vitrine-1">
          Ver todos
        </a>
      ) : null}

      {renderizarConteudo()}
    </section>
  );
}

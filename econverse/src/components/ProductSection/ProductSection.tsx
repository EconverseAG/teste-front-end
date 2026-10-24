import { useState } from 'react';
import type { Product } from '../../types/product';
import { ProductCarousel } from '../ProductCarousel/ProductCarousel';
import { ProductTabs } from '../ProductTabs/ProductTabs';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import './ProductSection.scss';

interface ProductSectionProps {
  id: string;
  title: string;
  products: Product[];
  onSelectProduct: (product: Product) => void;
  /*quando informado, exibe as abas de filtro acima do carrossel */
  tabs?: string[];
  showViewAll?: boolean;
}

export function ProductSection({
  id,
  title,
  products,
  onSelectProduct,
  tabs,
  showViewAll = false,
}: ProductSectionProps) {
  const [activeTab, setActiveTab] = useState(tabs?.[0] ?? '');
  const titleId = `${id}-title`;

  return (
    <section className="product-section container" aria-labelledby={titleId}>
      <SectionTitle id={titleId} title={title} showViewAll={showViewAll} />
      {tabs && (
        <ProductTabs
          tabs={tabs}
          activeTab={activeTab}
          onChangeTab={setActiveTab}
          label={`Categorias de ${title.toLowerCase()}`}
        />
      )}
      <ProductCarousel products={products} onSelectProduct={onSelectProduct} label={title} />
    </section>
  );
}

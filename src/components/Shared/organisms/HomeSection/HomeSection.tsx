import React from 'react';
import styles from './HomeSection.module.scss';
import { Vitrine } from '../Carousel';
import CategoryCards from '../CategoryCards';
import PartnersSection from '../PartnersSection';
import type { Product } from '../../../../types';

interface HomeSectionProps {
  products: Product[];
  onBuyClick: (product: Product) => void;
}

const HomeSection: React.FC<HomeSectionProps> = ({ products, onBuyClick }) => {
  return (
    <section className={styles.homeSection} aria-label="Seção principal de produtos">
      <div className={styles.container}>
        <CategoryCards />
        <Vitrine products={products} onBuyClick={onBuyClick} showOnlyVerTodos={false}/>
        <PartnersSection />
        <Vitrine products={products} onBuyClick={onBuyClick} showOnlyVerTodos={true}/>
        <Vitrine products={products} onBuyClick={onBuyClick} showOnlyVerTodos={true}/>
      </div>
    </section>
  );
};

export default HomeSection;

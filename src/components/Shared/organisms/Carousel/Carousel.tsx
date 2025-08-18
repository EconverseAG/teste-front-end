import React, { useState, useRef } from 'react';
import styles from './Carousel.module.scss';
import Card from '../../atoms/Card';
import { CategoryMenu } from '../CategoryMenu';
import { CarouselNavigation } from '../CarouselNavigation';
import type { Product } from '../../../../types';

interface VitrineProps {
  products: Product[];
  onBuyClick: (product: Product) => void;
  showOnlyVerTodos?: boolean;
}

const Vitrine: React.FC<VitrineProps> = ({ products, onBuyClick, showOnlyVerTodos = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('CELULAR');
  const carouselRef = useRef<HTMLDivElement>(null);

  const categories = ['CELULAR', 'ACESSÓRIOS', 'TABLETS', 'NOTEBOOKS', 'TVS', 'VER TODOS'];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 4) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 4 + products.length) % products.length);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  // Verifica se há produtos para navegar
  const canGoNext = currentIndex + 4 < products.length;
  const canGoPrev = currentIndex > 0;

  return (
    <div className={styles.vitrineContainer} data-section="vitrine">
      {/* Título com linhas decorativas */}
      <div className={styles.titleSection}>
        <div className={styles.titleLine}></div>
        <h2 className={styles.title}>Produtos relacionados</h2>
        <div className={styles.titleLine}></div>
      </div>

      {/* Menu de categorias */}
      <CategoryMenu
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
        showOnlyVerTodos={showOnlyVerTodos}
      />

      {/* Carrossel de produtos */}
      <div className={styles.carouselContainer}>
        <CarouselNavigation
          onPrevious={prevSlide}
          onNext={nextSlide}
          canGoPrevious={canGoPrev}
          canGoNext={canGoNext}
        />
        
        <div className={styles.carousel} ref={carouselRef}>
          <div className={styles.carouselTrack}>
            {products
              .slice(currentIndex, currentIndex + 4)
              .map((product, index) => (
                <div key={`${product.productName}-${currentIndex + index}`} className={styles.carouselItem}>
                  <Card product={product} onBuyClick={onBuyClick} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vitrine;

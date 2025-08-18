import React from 'react';
import styles from './CarouselNavigation.module.scss';

interface CarouselNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  canGoPrevious?: boolean;
  canGoNext?: boolean;
}

const CarouselNavigation: React.FC<CarouselNavigationProps> = ({
  onPrevious,
  onNext,
  canGoPrevious = true,
  canGoNext = true
}) => {
  return (
    <>
      <button 
        className={`${styles.carouselButton} ${!canGoPrevious ? styles.disabled : ''}`} 
        onClick={onPrevious}
        disabled={!canGoPrevious}
      >
        ‹
      </button>
      <button 
        className={`${styles.carouselButton} ${!canGoNext ? styles.disabled : ''}`} 
        onClick={onNext}
        disabled={!canGoNext}
      >
        ›
      </button>
    </>
  );
};

export default CarouselNavigation;

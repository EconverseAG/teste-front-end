import React from 'react';
import styles from './CarouselNavigation.module.scss';
import { ArrowIcon } from '../../atoms/Icons';

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
        <ArrowIcon 
          direction="left" 
          size={12} 
          color={!canGoPrevious ? '#9F9F9F' : '#3F3F40'}
        />
      </button>
      <button 
        className={`${styles.carouselButton} ${!canGoNext ? styles.disabled : ''}`} 
        onClick={onNext}
        disabled={!canGoNext}
      >
        <ArrowIcon 
          direction="right" 
          size={12} 
          color={!canGoNext ? '#9F9F9F' : '#3F3F40'}
        />
      </button>
    </>
  );
};

export default CarouselNavigation;

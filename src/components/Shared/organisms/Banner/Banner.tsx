import React from 'react';
import styles from './Banner.module.scss';
import { Button } from '../../atoms/Button';
import bannerImage from '../../../../assets/img/Rectange 230.png';

const Banner: React.FC = () => {
  const scrollToVitrine = () => {
    setTimeout(() => {
      const vitrineElement = document.querySelector('[data-section="vitrine"]');
      
      if (vitrineElement) {
        vitrineElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      } else {
        window.scrollTo({
          top: window.innerHeight,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <section className={styles.banner}>
      <div className={styles.bannerContent}>
        <img src={bannerImage} alt="Black Friday Promoções" />
        {/* Left Side - Text Overlay */}
        <div className={styles.textOverlay}>
          <div className={styles.content}>
            <h2 className={styles.headline}>
              Venha conhecer nossas promoções
            </h2>
            <div className={styles.discount}>
              <span className={styles.discountValue}>50% Off</span>
              <span className={styles.discountText}>nos produtos</span>
            </div>
            <Button 
              variant="primary" 
              size="medium"
              onClick={scrollToVitrine}
            >
              Ver produto
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner; 
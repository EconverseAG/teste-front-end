import React from 'react';
import styles from './Card.module.scss';

// Tipagem das props para garantir segurança de tipos
interface CardProps {
  imageSrc: string;
  imageAlt: string;
  description: string;
  originalPrice?: number;
  currentPrice: number;
  installments?: {
    count: number;
    value: number;
  };
  freeShipping?: boolean;
  onBuyClick: () => void;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  imageAlt,
  description,
  originalPrice,
  currentPrice,
  installments,
  freeShipping,
  onBuyClick,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImageContainer}>
        <img src={imageSrc} alt={imageAlt} className={styles.cardImage} />
      </div>
      <div className={styles.cardContent}>
        <p className={styles.description}>{description}</p>
        <div className={styles.pricing}>
          {originalPrice && (
            <span className={styles.originalPrice}>
              R$ {originalPrice.toFixed(2).replace('.', ',')}
            </span>
          )}
          <h3 className={styles.currentPrice}>
            R$ {currentPrice.toFixed(2).replace('.', ',')}
          </h3>
          {installments && (
            <p className={styles.installments}>
              ou {installments.count}x de R$ {installments.value.toFixed(2).replace('.', ',')} sem juros
            </p>
          )}
        </div>
        {freeShipping && (
          <p className={styles.freeShipping}>Frete grátis</p>
        )}
        <button className={styles.buyButton} onClick={onBuyClick}>
          COMPRAR
        </button>
      </div>
    </div>
  );
};

export default Card;
import React from 'react';
import styles from './Card.module.scss';
import type { Product } from '../../../../types';

interface CardProps {
  product: Product;
  onBuyClick: (product: Product) => void;
}

const Card: React.FC<CardProps> = ({ product, onBuyClick }) => {
  const handleBuyClick = () => {
    onBuyClick(product);
  };

  const originalPrice = product.price * 1.0647;
  const installmentValue = product.price / 2;

  return (
    <div className={styles.card}>
      <div className={styles.cardContainer}>
      <div className={styles.cardImageContainer}>
        <img src={product.photo} alt={product.productName} className={styles.cardImage} />
      </div>
      <div className={styles.cardContent}>
        <p className={styles.description}>{product.descriptionShort || 'Descrição não disponível'}</p>
        <div className={styles.pricing}>
          <span className={styles.originalPrice}>
            R$ {originalPrice.toFixed(2).replace('.', ',')}
          </span>
          <h3 className={styles.currentPrice}>
            R$ {product.price ? product.price.toFixed(2).replace('.', ',') : '0,00'}
          </h3>
        </div>
        <p className={styles.installments}>
            ou 2x de R$ {installmentValue.toFixed(2).replace('.', ',')} sem juros
        </p>
        <p className={styles.freeShipping}>Frete grátis</p>
        <button className={styles.buyButton} onClick={handleBuyClick}>
          COMPRAR
        </button>
      </div>
      </div>
    </div>
  );
};

export default Card;
import React from 'react';
import styles from './QuantitySelector.module.scss';
import PlusIcon from '../Icons/PlusIcon';
import MinusIcon from '../Icons/MinusIcon';

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  minQuantity?: number;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onQuantityChange,
  minQuantity = 1
}) => {
  const handleIncrease = () => {
    onQuantityChange(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > minQuantity) {
      onQuantityChange(quantity - 1);
    }
  };

  const isDecreaseDisabled = quantity <= minQuantity;

  return (
    <div className={styles.quantitySelector}>
      <button
        className={`${styles.button} ${isDecreaseDisabled ? styles.disabled : ''}`}
        onClick={handleDecrease}
        disabled={isDecreaseDisabled}
        type="button"
      >
        <MinusIcon 
          className={styles.buttonIcon} 
          color={isDecreaseDisabled ? '#9F9F9F' : '#271C47'}
        />
      </button>
      
      <span className={styles.quantity}>{quantity.toString().padStart(2, '0')}</span>
      
      <button
        className={styles.button}
        onClick={handleIncrease}
        type="button"
      >
        <PlusIcon 
          className={styles.buttonIcon} 
          color="#271C47"
        />
      </button>
    </div>
  );
};

export default QuantitySelector;

import React from 'react';
import styles from './TrustBar.module.scss';
import ShieldCheckIcon from '../../atoms/Icons/ShieldCheckIcon';
import TruckIcon from '../../atoms/Icons/TruckIcon';
import CreditCardIcon from '../../atoms/Icons/CreditCardIcon';

const TrustBar: React.FC = () => {
  return (
    <div className={styles.topInfoBar}>
      <div className={styles.container}>
        <div className={styles.infoItem}>
          <div className={styles.iconContainer}>
            <ShieldCheckIcon />
          </div>
          <span>Compra <strong>100% segura</strong></span>
        </div>
        <div className={styles.infoItem}>
          <div className={styles.iconContainer}>
            <TruckIcon />
          </div>
          <span><strong>Frete grátis</strong> acima de R$ 200</span>
        </div>
        <div className={styles.infoItem}>
          <div className={styles.iconContainer}>
            <CreditCardIcon />
          </div>
          <span><strong>Parcele</strong> suas compras</span>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;

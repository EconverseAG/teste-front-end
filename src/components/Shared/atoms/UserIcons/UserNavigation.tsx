import React from 'react';
import styles from './UserNavigation.module.scss';
import BoxArrowInIcon from '../Icons/BoxArrowInIcon';
import HeartIcon from '../Icons/HeartIcon';
import UserCircleIcon from '../Icons/UserCircleIcon';
import ShoppingCartIcon from '../Icons/ShoppingCartIcon';

const UserNavigation: React.FC = () => {
  return (
    <div className={styles.userNavigation}>
      <button className={styles.iconButton}>
        <BoxArrowInIcon 
          size={32}
          color="#9F9F9F"
        />
      </button>
      <button className={styles.iconButton}>
        <HeartIcon 
          size={32}
          color="#9F9F9F"
        />
      </button>
      <button className={styles.iconButton}>
        <UserCircleIcon 
          size={32}
          color="#9F9F9F"
        />
      </button>
      <button className={styles.iconButton}>
        <ShoppingCartIcon 
          size={32}
          color="#9F9F9F"
        />
      </button>
    </div>
  );
};

export default UserNavigation;

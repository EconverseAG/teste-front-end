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
        <BoxArrowInIcon />
      </button>
      <button className={styles.iconButton}>
        <HeartIcon />
      </button>
      <button className={styles.iconButton}>
        <UserCircleIcon />
      </button>
      <button className={styles.iconButton}>
        <ShoppingCartIcon />
      </button>
    </div>
  );
};

export default UserNavigation;

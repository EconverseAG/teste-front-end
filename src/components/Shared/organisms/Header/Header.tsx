import React, { useState } from 'react';
import styles from './Header.module.scss';
import { TrustBar } from '../TrustBar';
import { UserNavigation } from '../../atoms/UserIcons';
import { NavigationMenu } from '../NavigationMenu';
import { LogoEconverse, MagnifyingGlassIcon } from '../../atoms/Icons';

const Header: React.FC = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('OFERTAS DO DIA');

  const handleMenuItemClick = (item: string) => {
    setActiveMenuItem(item);

    switch (item) {
      case 'OFERTAS DO DIA':
        break;
      case 'SUPERMERCADO':
        break;
      case 'LIVROS':
        break;
      case 'MODA':
        break;
      case 'LANÇAMENTOS':
        break;
      case 'ASSINATURA':
        break;
      case 'TODAS CATEGORIAS':
        break;
      default:
    }
  };

  return (
    <header className={styles.header}>
      <TrustBar />

      <div className={styles.mainHeader}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <a href="https://www.econverse.com.br/" target="_blank" rel="noopener noreferrer">
              <LogoEconverse />
            </a>
          </div>

          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder="O que você está buscando?"
              className={styles.searchInput}
            />
            <button className={styles.searchButton}>
              <MagnifyingGlassIcon />
            </button>
          </div>

          <UserNavigation />
        </div>
      </div>

      <NavigationMenu
        activeItem={activeMenuItem}
        onItemClick={handleMenuItemClick}
        initialActiveItem="OFERTAS DO DIA"
      />
    </header>
  );
};

export default Header;
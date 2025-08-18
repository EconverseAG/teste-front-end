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

    // Aqui você pode adicionar lógica específica para cada item
    switch (item) {
      case 'OFERTAS DO DIA':
        // Adicione aqui as ações específicas para ofertas
        break;
      case 'SUPERMERCADO':
        // Navegação para Supermercado
        break;
      case 'LIVROS':
        // Navegação para Livros
        break;
      case 'MODA':
        // Navegação para Moda
        break;
      case 'LANÇAMENTOS':
        // Navegação para Lançamentos
        break;
      case 'ASSINATURA':
        // Navegação para Assinatura
        break;
      case 'TODAS CATEGORIAS':
        // Navegação para Todas as Categorias
        break;
      default:
        // Navegação padrão
    }
  };

  return (
    <header className={styles.header} role="banner" aria-label="Cabeçalho principal">
      {/* Top Information Bar */}
      <TrustBar />

      {/* Main Header */}
      <div className={styles.mainHeader}>
        <div className={styles.container}>
          {/* Logo */}
          <div className={styles.logo}>
            <a 
              href="https://www.econverse.com.br/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Ir para o site principal da Econverse"
            >
              <LogoEconverse />
            </a>
          </div>

          {/* Search Bar */}
          <div className={styles.searchBar} role="search">
            <label htmlFor="search-input" className="sr-only">
              Buscar produtos
            </label>
            <input
              id="search-input"
              type="search"
              placeholder="O que você está buscando?"
              className={styles.searchInput}
              aria-label="Campo de busca de produtos"
              aria-describedby="search-description"
            />
            <button 
              className={styles.searchButton}
              type="submit"
              aria-label="Buscar produtos"
            >
              <MagnifyingGlassIcon />
            </button>
            <div id="search-description" className="sr-only">
              Digite o nome do produto que você deseja encontrar
            </div>
          </div>

          {/* User Navigation */}
          <UserNavigation />
        </div>
      </div>

      {/* Navigation Bar */}
      <NavigationMenu
        activeItem={activeMenuItem}
        onItemClick={handleMenuItemClick}
        initialActiveItem="OFERTAS DO DIA"
      />
    </header>
  );
};

export default Header;
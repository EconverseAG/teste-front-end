import React from 'react';
import styles from './Header.module.scss';
import shieldIcon from '../../../../assets/Shield.svg';
import truckIcon from '../../../../assets/Truck.svg';
import creditCardIcon from '../../../../assets/CreditCard.svg';
import magnifyingGlassIcon from '../../../../assets/MagnifyingGlass.svg';
import calendarIcon from '../../../../assets/Calendar.svg';
import heartIcon from '../../../../assets/Heart.svg';
import userIcon from '../../../../assets/UserCircle.svg';
import shoppingCartIcon from '../../../../assets/ShoppingCart.svg';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      {/* Top Information Bar */}
      <div className={styles.topInfoBar}>
        <div className={styles.container}>
          <div className={styles.infoItem}>
            <img src={shieldIcon} alt="Shield" />
            <span>Compra <strong>100% segura</strong></span>
          </div>
          <div className={styles.infoItem}>
            <img src={truckIcon} alt="Truck" />
            <span><strong>Frete grátis</strong> acima de R$ 200</span>
          </div>
          <div className={styles.infoItem}>
            <img src={creditCardIcon} alt="Credit Card" />
            <span><strong>Parcele</strong> suas compras</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className={styles.mainHeader}>
        <div className={styles.container}>
          {/* Logo */}
          <div className={styles.logo}>
            <span className={styles.logoCircle}>econ</span>
            <span className={styles.logoText}>verse</span>
          </div>

          {/* Search Bar */}
          <div className={styles.searchBar}>
            <input 
              type="text" 
              placeholder="O que você está buscando?" 
              className={styles.searchInput}
            />
            <button className={styles.searchButton}>
              <img src={magnifyingGlassIcon} alt="Search" />
            </button>
          </div>

          {/* User Icons */}
          <div className={styles.userIcons}>
            <button className={styles.iconButton}>
              <img src={calendarIcon} alt="Calendar" />
            </button>
            <button className={styles.iconButton}>
              <img src={heartIcon} alt="Wishlist" />
            </button>
            <button className={styles.iconButton}>
              <img src={userIcon} alt="User" />
            </button>
            <button className={styles.iconButton}>
              <img src={shoppingCartIcon} alt="Shopping Cart" />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className={styles.navigationBar}>
        <div className={styles.container}>
          <ul className={styles.navList}>
            <li><a href="#" className={styles.navLink}>TODAS CATEGORIAS</a></li>
            <li><a href="#" className={styles.navLink}>SUPERMERCADO</a></li>
            <li><a href="#" className={styles.navLink}>LIVROS</a></li>
            <li><a href="#" className={styles.navLink}>MODA</a></li>
            <li><a href="#" className={styles.navLink}>LANÇAMENTOS</a></li>
            <li><a href="#" className={`${styles.navLink} ${styles.active}`}>OFERTAS DO DIA</a></li>
            <li><a href="#" className={styles.navLink}>ASSINATURA</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header; 
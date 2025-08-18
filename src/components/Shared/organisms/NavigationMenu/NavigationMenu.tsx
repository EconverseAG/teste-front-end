import React, { useState } from 'react';
import styles from './NavigationMenu.module.scss';
import { StarIcon } from '../../atoms/Icons';

interface NavigationMenuProps {
  activeItem?: string;
  onItemClick?: (item: string) => void;
  initialActiveItem?: string;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({
  activeItem: externalActiveItem,
  onItemClick,
  initialActiveItem = 'OFERTAS DO DIA'
}) => {
  const [internalActiveItem, setInternalActiveItem] = useState(initialActiveItem);
  
  const currentActiveItem = externalActiveItem || internalActiveItem;

  const navigationItems = [
    'TODAS CATEGORIAS',
    'SUPERMERCADO',
    'LIVROS',
    'MODA',
    'LANÇAMENTOS',
    'OFERTAS DO DIA',
    'ASSINATURA'
  ];

  const handleItemClick = (item: string) => {
    setInternalActiveItem(item);
    
    if (onItemClick) {
      onItemClick(item);
    }
  };

  const getItemClassName = (item: string) => {
    const baseClass = styles.navLink;
    const isActive = item === currentActiveItem;
    const isOfertasDia = item === 'OFERTAS DO DIA';
    
    let className = baseClass;
    
    if (isActive) {
      className += ` ${styles.active}`;
    }
    
    if (isOfertasDia && isActive) {
      className += ` ${styles.ofertasDia}`;
    }
    
    return className;
  };

  const renderItemContent = (item: string) => {
    if (item === 'ASSINATURA') {
      return (
        <>
          <StarIcon 
            className={styles.assinaturaStar}
            size={20} 
            color="currentColor" 
          />
          {item}
        </>
      );
    }
    return item;
  };

  return (
    <nav className={styles.navigationBar}>
      <div className={styles.container}>
        <ul className={styles.navList}>
          {navigationItems.map((item) => (
            <li key={item}>
              <a 
                href="#" 
                className={getItemClassName(item)}
                onClick={(e) => {
                  e.preventDefault();
                  handleItemClick(item);
                }}
              >
                {renderItemContent(item)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavigationMenu;

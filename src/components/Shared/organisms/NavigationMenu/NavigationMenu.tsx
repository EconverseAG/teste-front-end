import React, { useState } from 'react';
import styles from './NavigationMenu.module.scss';

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
  // Estado interno para controlar o item ativo
  const [internalActiveItem, setInternalActiveItem] = useState(initialActiveItem);
  
  // Usa o item ativo externo se fornecido, senão usa o interno
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
    // Atualiza o estado interno
    setInternalActiveItem(item);
    
    // Chama o callback externo se fornecido
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
    
    // OFERTAS DO DIA só tem estilo especial quando está ativo
    if (isOfertasDia && isActive) {
      className += ` ${styles.ofertasDia}`;
    }
    
    return className;
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
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavigationMenu;

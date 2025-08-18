import React, { useState } from 'react';
import styles from './CategoryCards.module.scss';
import TecnologiaIcon from '../../../../assets/icons/tecnologia.svg?url';
import SupermercadoIcon from '../../../../assets/icons/supermercados 1 (1).svg?url';
import BebidasIcon from '../../../../assets/icons/whiskey (1).svg?url';
import FerramentasIcon from '../../../../assets/icons/ferramentas 1 (1).svg?url';
import SaudeIcon from '../../../../assets/icons/cuidados-de-saude 1 (1).svg?url';
import EsportesIcon from '../../../../assets/icons/corrida 1 (1).svg?url';
import ModaIcon from '../../../../assets/icons/moda 1 (1).svg?url';

interface Category {
  id: string;
  name: string;
  icon: string;
  isActive?: boolean;
  color?: string;
}

const CategoryCards: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([
    {
      id: 'tecnologia',
      name: 'Tecnologia',
      icon: TecnologiaIcon,
      isActive: true,
      color: '#3019B2'
    },
    {
      id: 'supermercado',
      name: 'Supermercado',
      icon: SupermercadoIcon,
      isActive: false,
      color: '#9F9F9F'
    },
    {
      id: 'bebidas',
      name: 'Bebidas',
      icon: BebidasIcon,
      isActive: false,
      color: '#9F9F9F'
    },
    {
      id: 'ferramentas',
      name: 'Ferramentas',
      icon: FerramentasIcon,
      isActive: false,
      color: '#9F9F9F'
    },
    {
      id: 'saude',
      name: 'Saúde',
      icon: SaudeIcon,
      isActive: false,
      color: '#9F9F9F'
    },
    {
      id: 'esportes',
      name: 'Esportes',
      icon: EsportesIcon,
      isActive: false,
      color: '#9F9F9F'
    },
    {
      id: 'moda',
      name: 'Moda',
      icon: ModaIcon,
      isActive: false,
      color: '#9F9F9F'
    }
  ]);

  const handleCategoryClick = (categoryId: string) => {
    setCategories(prevCategories =>
      prevCategories.map(category =>
        category.id === categoryId
          ? { ...category, isActive: !category.isActive, color: !category.isActive ? '#3019B2' : '#9F9F9F' }
          : { ...category, isActive: false, color: '#9F9F9F' }
      )
    );
  };

  return (
    <section className={styles.categorySection}>
      <div className={styles.container}>
        <div className={styles.categoryGrid}>
          {categories.map((category) => (
            <button
              key={category.id}
              className={`${styles.categoryCard} ${category.isActive ? styles.active : ''}`}
              onClick={() => handleCategoryClick(category.id)}
              aria-label={`Filtrar por ${category.name}`}
            >
              <div className={styles.iconContainer}>
                <img 
                  src={category.icon} 
                  alt={category.name}
                  className={styles.categoryIcon}
                />
              </div>
              <span className={styles.categoryName}>{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCards;

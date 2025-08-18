import React, { useState } from 'react';
import styles from './CategoryCards.module.scss';
import { 
  TecnologiaIcon, 
  SupermercadoIcon, 
  BebidasIcon, 
  FerramentasIcon, 
  SaudeIcon, 
  EsportesIcon,
  ModaIcon 
} from '../../atoms/Icons';

interface Category {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string; size?: number; color?: string }>;
  isActive?: boolean;
}

const CategoryCards: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([
    {
      id: 'tecnologia',
      name: 'Tecnologia',
      icon: TecnologiaIcon,
      isActive: true
    },
    {
      id: 'supermercado',
      name: 'Supermercado',
      icon: SupermercadoIcon,
      isActive: false
    },
    {
      id: 'bebidas',
      name: 'Bebidas',
      icon: BebidasIcon,
      isActive: false
    },
    {
      id: 'ferramentas',
      name: 'Ferramentas',
      icon: FerramentasIcon,
      isActive: false
    },
    {
      id: 'saude',
      name: 'Saúde',
      icon: SaudeIcon,
      isActive: false
    },
    {
      id: 'esportes',
      name: 'Esportes',
      icon: EsportesIcon,
      isActive: false
    },
    {
      id: 'moda',
      name: 'Moda',
      icon: ModaIcon,
      isActive: false
    }
  ]);

  const handleCategoryClick = (categoryId: string) => {
    setCategories(prevCategories => 
      prevCategories.map(category => ({
        ...category,
        isActive: category.id === categoryId
      }))
    );
    console.log('Categoria clicada:', categoryId);
  };

  return (
    <section className={styles.categorySection}>
      <div className={styles.container}>
        <div className={styles.categoryGrid}>
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                className={`${styles.categoryCard} ${category.isActive ? styles.active : ''}`}
                onClick={() => handleCategoryClick(category.id)}
                aria-label={`Filtrar por ${category.name}`}
              >
                <div className={styles.iconContainer}>
                  <IconComponent 
                    className={styles.categoryIcon}
                    size={48}
                    color={category.isActive ? '#3019B2' : '#9F9F9F'}
                  />
                </div>
                <span className={styles.categoryName}>{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryCards;

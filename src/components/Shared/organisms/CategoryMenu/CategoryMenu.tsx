import React from 'react';
import styles from './CategoryMenu.module.scss';

interface CategoryMenuProps {
  categories: string[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
  showOnlyVerTodos?: boolean;
}

const CategoryMenu: React.FC<CategoryMenuProps> = ({
  categories,
  selectedCategory,
  onCategorySelect,
  showOnlyVerTodos = false
}) => {
  if (showOnlyVerTodos) {
    return (
      <div className={styles.verTodosContainer}>
        <p className={styles.verTodosText}>Ver todos</p>
      </div>
    );
  }

  return (
    <div className={styles.categoryMenu}>
      {categories.map((category) => (
        <button
          key={category}
          className={`${styles.categoryTab} ${selectedCategory === category ? styles.active : ''}`}
          onClick={() => onCategorySelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryMenu;

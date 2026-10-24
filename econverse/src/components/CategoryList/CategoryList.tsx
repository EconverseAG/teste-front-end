import { useState } from 'react';
import type { CSSProperties } from 'react';
import { categories } from './categories';
import './CategoryList.scss';

export function CategoryList() {
  const [activeCategoryId, setActiveCategoryId] = useState(categories[0].id);

  return (
    <nav className="category-list container" aria-label="Categorias de produtos">
      <ul className="category-list__items">
        {categories.map(({ id, name, icon }) => {
          const isActive = id === activeCategoryId;
          const iconStyle = { '--category-icon': `url(${icon})` } as CSSProperties;

          return (
            <li key={id}>
              <button
                type="button"
                className={`category-list__item ${isActive ? 'category-list__item--active' : ''}`}
                aria-pressed={isActive}
                onClick={() => setActiveCategoryId(id)}
              >
                <span className="category-list__icon-box">
                  <span className="category-list__icon" style={iconStyle} aria-hidden="true" />
                </span>
                <span className="category-list__name">{name}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

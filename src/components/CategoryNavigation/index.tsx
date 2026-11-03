import { useState, type MouseEvent } from 'react';
import { Icon } from '../Icon';
import './CategoryNavigation.scss';

const navigationItems = [
  { id: 1, name: 'Todas Categorias', href: '/categorias', icon: null },
  { id: 2, name: 'Supermercado', href: '/supermercado', icon: null },
  { id: 3, name: 'Livros', href: '/livros', icon: null },
  { id: 4, name: 'Moda', href: '/moda', icon: null },
  { id: 5, name: 'Lançamentos', href: '/lancamentos', icon: null },
  { id: 6, name: 'Ofertas do dia', href: '/ofertas', icon: null },
  {
    id: 7,
    name: 'Assinatura',
    href: '/assinatura',
    icon: 'crownSimple',
    size: 20,
  },
] as const;

function CategoryNavigation() {
  const [activeCategory, setActiveCategory] = useState(1);

  const handleClick = (
    event: MouseEvent<HTMLAnchorElement>,
    categoryId: number,
  ) => {
    event.preventDefault();
    setActiveCategory(categoryId);
  };

  return (
    <nav className="category-navigation" aria-label="Categorias da loja">
      <ul className="category-navigation__list">
        {navigationItems.map((item) => {
          const isActive = activeCategory === item.id;
          const activeClass = isActive ? 'active' : '';
          const ariaCurrent = isActive ? 'page' : undefined;
          const iconClass = isActive ? 'icon--active' : '';

          return (
            <li className="category-navigation__item" key={item.id}>
              <a
                href={item.href}
                className={`category-navigation__link ${activeClass}`}
                aria-current={ariaCurrent}
                onClick={(event) => handleClick(event, item.id)}
              >
                {item.icon && (
                  <Icon
                    name={item.icon}
                    size={item.size}
                    className={iconClass}
                  />
                )}
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default CategoryNavigation;

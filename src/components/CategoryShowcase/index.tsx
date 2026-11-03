import { useState, type MouseEvent } from 'react';
import { Icon } from '@/components/Icon';
import './CategoryShowcase.scss';

const categories = [
  { id: 1, name: 'Tecnologia', icon: 'technology', href: '/tecnologia' },
  { id: 2, name: 'Supermercado', icon: 'supermarket', href: '/supermercado' },
  {
    id: 3,
    name: 'Bebidas',
    icon: 'whiskey',
    href: '/bebidas',
  },
  { id: 4, name: 'Ferramentas', icon: 'tools', href: '/ferramentas' },
  { id: 5, name: 'Saúde', icon: 'healthCare', href: '/saude' },
  {
    id: 6,
    name: 'Esportes e Fitness',
    icon: 'running',
    href: '/esportes-e-fitness',
  },
  { id: 7, name: 'Moda', icon: 'fashion', href: '/moda' },
] as const;

function CategoryShowcase() {
  const [activeCategory, setActiveCategory] = useState(1);

  const handleCategoryClick = (
    event: MouseEvent<HTMLAnchorElement>,
    categoryId: number,
  ) => {
    event.preventDefault();
    setActiveCategory(categoryId);
  };

  return (
    <section
      className="category-showcase"
      aria-label="Explore nossas categorias"
    >
      <ul className="category-showcase__list">
        {categories.map((category) => {
          const isActive = activeCategory === category.id;
          const activeClass = isActive ? 'active' : '';
          const iconClass = isActive ? 'icon--active' : '';

          return (
            <li className="category-showcase__item" key={category.id}>
              <a
                href={category.href}
                className={`category-showcase__link ${activeClass}`}
                onClick={(event) => handleCategoryClick(event, category.id)}
              >
                <div className="category-showcase__icon">
                  <Icon name={category.icon} size={61} className={iconClass} />
                </div>
                <span>{category.name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default CategoryShowcase;

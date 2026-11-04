import './Categories.scss';

import iconTecnologia from '../../assets/icons/categories/tecnologia.svg';
import iconSupermercado from '../../assets/icons/categories/supermercado.svg';
import iconBebidas from '../../assets/icons/categories/bebidas.svg';
import iconFerramentas from '../../assets/icons/categories/ferramentas.svg';
import iconSaude from '../../assets/icons/categories/saude.svg';
import iconEsportes from '../../assets/icons/categories/esportes.svg';
import iconModa from '../../assets/icons/categories/moda.svg';

interface Category {
  label: string;
  icon: string;
  href: string;
  active?: boolean;
  width?: number; // largura do grupo no Figma (Bebidas = 140px, demais = 128px)
}

const CATEGORIES: Category[] = [
  { label: 'Tecnologia', icon: iconTecnologia, href: '#', active: true },
  { label: 'Supermercado', icon: iconSupermercado, href: '#' },
  { label: 'Bebidas', icon: iconBebidas, href: '#', width: 140 },
  { label: 'Ferramentas', icon: iconFerramentas, href: '#' },
  { label: 'Saúde', icon: iconSaude, href: '#' },
  { label: 'Esportes e Fitness', icon: iconEsportes, href: '#' },
  { label: 'Moda', icon: iconModa, href: '#' },
];

export function Categories() {
  return (
    <section className="categories" aria-labelledby="categories-title">
      <h2 id="categories-title" className="sr-only">
        Compre por categoria
      </h2>

      <nav aria-label="Categorias">
        <ul className="categories__list">
          {CATEGORIES.map(({ label, icon, href, active, width }) => (
            <li key={label} className="categories__item" style={width ? { width } : undefined}>
              <a
                href={href}
                className={`categories__link${active ? ' categories__link--active' : ''}`}
                aria-current={active ? 'true' : undefined}
              >
                <span className="categories__card">
                  <img src={icon} alt="" />
                </span>
                <span className="categories__label">{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}

import { useState } from 'react';
import { CrownIcon } from '../Icons/Icons';
import './MainNav.scss';

const navigationLinks = [
  { id: 'categories', label: 'Todas categorias', href: '#categorias' },
  { id: 'supermarket', label: 'Supermercado', href: '#supermercado' },
  { id: 'books', label: 'Livros', href: '#livros' },
  { id: 'fashion', label: 'Moda', href: '#moda' },
  { id: 'releases', label: 'Lançamentos', href: '#lancamentos' },
  {
    id: 'deals',
    label: 'Ofertas do dia',
    href: '#ofertas',
    highlighted: true,
  },
  {
    id: 'subscription',
    label: 'Assinatura',
    href: '#assinatura',
    hasIcon: true,
  },
];

export function MainNav() {
  const [activeLinkId, setActiveLinkId] = useState(
    navigationLinks[0].id,
  );

  return (
    <nav className="main-nav container" aria-label="Navegação principal">
      <ul className="main-nav__list">
        {navigationLinks.map(
          ({ id, label, href, highlighted, hasIcon }) => {
            const isActive = id === activeLinkId;

            return (
              <li key={id}>
                <a
                  className={[
                    'main-nav__link',
                    highlighted && !isActive
                      ? 'main-nav__link--highlighted'
                      : '',
                    isActive ? 'main-nav__link--active' : '',
                    hasIcon ? 'main-nav__subscription' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  href={href}
                  aria-current={isActive ? 'location' : undefined}
                  onClick={() => setActiveLinkId(id)}
                >
                  {hasIcon && <CrownIcon size={20} />}
                  {label}
                </a>
              </li>
            );
          },
        )}
      </ul>
    </nav>
  );
}

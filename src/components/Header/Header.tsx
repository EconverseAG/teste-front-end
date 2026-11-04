import type { FormEvent } from 'react';
import './Header.scss';

import logo from '../../assets/logo-econverse.png';
import iconShield from '../../assets/icons/ShieldCheck.svg';
import iconTruck from '../../assets/icons/Truck.svg';
import iconCard from '../../assets/icons/CreditCard.svg';
import iconSearch from '../../assets/icons/MagnifyingGlass.svg';
import iconOrders from '../../assets/icons/Group.svg';
import iconHeart from '../../assets/icons/Heart.svg';
import iconUser from '../../assets/icons/UserCircle.svg';
import iconCart from '../../assets/icons/ShoppingCart.svg';
import iconCrown from '../../assets/icons/CrownSimple.svg';

const BENEFITS = [
  { icon: iconShield, before: 'Compra ', highlight: '100% segura', after: '' },
  { icon: iconTruck, before: '', highlight: 'Frete grátis', after: ' acima de R$ 200' },
  { icon: iconCard, before: '', highlight: 'Parcele', after: ' suas compras' },
];

const ACTIONS = [
  { label: 'Meus pedidos', icon: iconOrders },
  { label: 'Favoritos', icon: iconHeart },
  { label: 'Minha conta', icon: iconUser },
  { label: 'Carrinho', icon: iconCart },
];

const NAV_LINKS = [
  { label: 'Todas Categorias', href: '#' },
  { label: 'Supermercado', href: '#' },
  { label: 'Livros', href: '#' },
  { label: 'Moda', href: '#' },
  { label: 'Lançamentos', href: '#' },
  { label: 'Ofertas do dia', href: '#', highlight: true },
  { label: 'Assinatura', href: '#', icon: iconCrown },
];

export function Header() {
  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <header className="header">
      <div className="header__inner">
        <ul className="header__benefits">
          {BENEFITS.map(({ icon, before, highlight, after }) => (
            <li key={highlight}>
              <img src={icon} alt="" width={20} height={20} />
              <span>
                {before}
                <strong>{highlight}</strong>
                {after}
              </span>
            </li>
          ))}
        </ul>

        <div className="header__main">
          <a href="/" className="header__logo" aria-label="econverse - página inicial">
            <img src={logo} alt="econverse" width={139} />
          </a>

          <form className="header__search" role="search" onSubmit={handleSearch}>
            <label htmlFor="search" className="sr-only">
              Buscar produtos
            </label>
            <input id="search" type="search" placeholder="O que você está buscando?" />
            <button type="submit" aria-label="Buscar">
              <img src={iconSearch} alt="" width={28} height={28} />
            </button>
          </form>

          <ul className="header__actions">
            {ACTIONS.map(({ label, icon }) => (
              <li key={label}>
                <a href="#" aria-label={label}>
                  <img src={icon} alt="" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav className="header__nav" aria-label="Menu principal">
          <ul>
            {NAV_LINKS.map(({ label, href, highlight, icon }) => (
              <li key={label}>
                <a
                  href={href}
                  className={`header__nav-link${highlight ? ' header__nav-link--highlight' : ''}`}
                >
                  {icon && <img src={icon} alt="" width={20} height={20} />}
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
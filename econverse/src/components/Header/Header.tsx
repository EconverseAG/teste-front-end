import { BenefitsBar } from '../BenefitsBar/BenefitsBar';
import { BoxIcon, CartIcon, HeartIcon, UserIcon } from '../Icons/Icons';
import { Logo } from '../Logo/Logo';
import { MainNav } from '../MainNav/MainNav';
import { SearchBar } from '../SearchBar/SearchBar';
import './Header.scss';

const headerActions = [
  { id: 'orders', label: 'Meus pedidos', icon: <BoxIcon size={32} /> },
  { id: 'favorites', label: 'Favoritos', icon: <HeartIcon size={32} /> },
  { id: 'account', label: 'Minha conta', icon: <UserIcon size={32} /> },
  { id: 'cart', label: 'Carrinho', icon: <CartIcon size={32} /> },
];

export function Header() {
  return (
    <header className="header">
      <BenefitsBar />
      <div className="header__main container">
        <a href="/">
          <Logo />
        </a>
        <SearchBar />
        <ul className="header__actions">
          {headerActions.map(({ id, label, icon }) => (
            <li key={id}>
              <button className="header__action" type="button" aria-label={label}>
                {icon}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <MainNav />
    </header>
  );
}

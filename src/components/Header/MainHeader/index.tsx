import logo from '@/assets/images/logo.svg';
import { Icon } from '@/components/Icon';
import './MainHeader.scss';

const actions = [
  {
    id: 'orders',
    icon: 'shippingBox',
    label: 'Meus pedidos',
    size: 24,
    href: '/meus-pedidos',
  },
  {
    id: 'favorites',
    icon: 'heart',
    label: 'Favoritos',
    size: 32,
    href: '/favoritos',
  },
  {
    id: 'account',
    icon: 'userCircle',
    label: 'Minha conta',
    size: 32,
    href: '/minha-conta',
  },
  {
    id: 'cart',
    icon: 'shoppingCart',
    label: 'Carrinho',
    size: 32,
    href: '/carrinho',
  },
] as const;

function MainHeader() {
  return (
    <div className="main-header">
      <a href="/" aria-label="Econverse - Página inicial">
        <img src={logo} alt="Econverse" />
      </a>

      <form className="main-header__search">
        <input
          type="search"
          id="product-search"
          name="search"
          placeholder="O que você está buscando?"
          aria-label="Buscar produtos"
        />
        <button type="submit" aria-label="Pesquisar">
          <Icon name="search" size={28} />
        </button>
      </form>

      <nav className="main-header__actions" aria-label="Ações da loja">
        {actions.map((action) => (
          <a href={action.href} key={action.id} aria-label={action.label}>
            <Icon name={action.icon} size={action.size} />
          </a>
        ))}
      </nav>
    </div>
  );
}

export default MainHeader;

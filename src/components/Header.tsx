import { useState } from 'react';
import { Brand } from './Brand';

export function Header({ cartCount, onSearch }: { cartCount: number; onSearch: (term: string) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <header className="site-header" id="inicio">
      <div className="service-strip">
        <span><b aria-hidden="true">♧</b> Compra <strong>100% segura</strong></span>
        <span><b aria-hidden="true">▱</b> <strong>Frete grátis</strong> acima de R$ 200</span>
        <span><b aria-hidden="true">▣</b> <strong>Parcele</strong> suas compras</span>
      </div>
      <div className="header-main page-width">
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-label="Abrir menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
        <Brand />
        <form className="search" role="search" onSubmit={(event) => { event.preventDefault(); onSearch(searchTerm.trim()); }}>
          <label className="sr-only" htmlFor="product-search">Buscar produtos</label>
          <input id="product-search" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="O que você está buscando?" />
          <button aria-label="Buscar" type="submit"><span className="search__glass" /></button>
        </form>
        <div className="header-actions">
          <a href="#marcas" aria-label="Ofertas"><span>♧</span></a>
          <a href="#produtos" aria-label="Favoritos"><span>♡</span></a>
          <a href="#newsletter" aria-label="Minha conta"><span>◎</span></a>
          <a href="#produtos" aria-label={`Carrinho com ${cartCount} itens`} className="cart-icon"><span>🛒</span>{cartCount > 0 && <b>{cartCount}</b>}</a>
        </div>
      </div>
      <nav className={`main-nav${menuOpen ? ' main-nav--open' : ''}`} aria-label="Navegação principal">
        <a href="#categorias">Todas categorias</a><a href="#produtos">Supermercado</a><a href="#produtos">Livros</a><a href="#produtos">Moda</a><a href="#produtos">Lançamentos</a><a className="main-nav__highlight" href="#produtos">Ofertas do dia</a><a href="#newsletter">♕ &nbsp; Assinatura</a>
      </nav>
    </header>
  );
}

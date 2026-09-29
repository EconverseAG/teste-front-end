import { Search } from 'lucide-react';
import { HEADER_SHORTCUTS, MAIN_NAV, SUBSCRIPTION_NAV, TOP_BAR } from '../../data/content';
import './Header.scss';

export default function Header() {
  return (
    <header className="main-header">
      <div className="top-bar">
        <div className="container top-bar-content">
          {TOP_BAR.map((item) => (
            <span key={item.highlight}>
              <img src={item.image} alt="" />
              {item.before}
              <strong>{item.highlight}</strong>
              {item.after}
            </span>
          ))}
        </div>
      </div>

      <div className="container header-middle">
        <div className="brand-logo">
          <img className="logo-img" src="/image/Logo.png" alt="Econverse" />
        </div>

        <form className="search-box" role="search" onSubmit={(e) => e.preventDefault()}>
          <label className="sr-only" htmlFor="busca">O que você está buscando?</label>
          <input id="busca" name="q" type="search" placeholder="O que você está buscando?" />
          <Search size={20} className="search-icon" />
        </form>

        <nav className="header-icons" aria-label="Atalhos de conta e carrinho">
          {HEADER_SHORTCUTS.map((shortcut) => (
            <a key={shortcut.label} href={shortcut.href} aria-label={shortcut.label}>
              <img src={shortcut.image} alt="" />
            </a>
          ))}
        </nav>
      </div>

      <nav className="main-nav" aria-label="Navegação principal">
        <div className="container nav-links">
          {MAIN_NAV.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={link.label === 'Ofertas do dia' ? 'active' : undefined}
            >
              {link.label}
            </a>
          ))}
          <a href={SUBSCRIPTION_NAV.href}>
            <img className="nav-icon" src={SUBSCRIPTION_NAV.image} alt="" />
            {SUBSCRIPTION_NAV.label}
          </a>
        </div>
      </nav>
    </header>
  );
}

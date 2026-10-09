import {
  CreditCard,
  Heart,
  Search,
  ShieldCheck,
  ShoppingCart,
  Truck,
  UserRound,
} from "lucide-react";
import logo from "../assets/logo.png";
import "../style/Header.scss";

const benefits = [
  {
    icon: ShieldCheck,
    before: "Compra ",
    emphasis: "100% segura",
    after: "",
  },
  {
    icon: Truck,
    before: "",
    emphasis: "Frete grátis",
    after: " acima de R$ 200",
  },
  {
    icon: CreditCard,
    before: "",
    emphasis: "Parcele",
    after: " suas compras",
  },
];

const categories = [
  "Todas categorias",
  "Supermercado",
  "Livros",
  "Moda",
  "Lançamentos",
  "Ofertas do dia",
  "Assinatura",
];

function Header() {
  return (
    <header className="header" aria-label="Cabeçalho da loja">
      <div className="header__benefits">
        <ul className="header__benefits-list" aria-label="Benefícios da loja">
          {benefits.map(({ icon: Icon, emphasis, before, after }) => (
            <li key={emphasis} className="header__benefit-item">
              <span className="header__benefit-icon" aria-hidden="true">
                <Icon size={14} strokeWidth={2} />
              </span>
              <p className="header__benefit-text">
                {before}
                <strong>{emphasis}</strong>
                {after}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="header__main">
        <a
          className="header__brand"
          href="/"
          aria-label="Econverse - página inicial"
        >
          <img
            className="header__brand-logo"
            src={logo}
            alt="Econverse"
            width={150}
            height={42}
          />
        </a>

        <form
          className="header__search"
          role="search"
          aria-label="Buscar produtos"
        >
          <label htmlFor="site-search" className="sr-only">
            Buscar produtos
          </label>
          <input
            id="site-search"
            type="search"
            name="q"
            placeholder="O que você está buscando?"
          />
          <button type="submit" aria-label="Pesquisar">
            <Search size={20} strokeWidth={2.2} />
          </button>
        </form>

        <nav className="header__actions" aria-label="Ações do cliente">
          <button type="button" aria-label="Lista de favoritos">
            <Heart size={18} strokeWidth={2.1} />
          </button>
          <button type="button" aria-label="Minha conta">
            <UserRound size={18} strokeWidth={2.1} />
          </button>
          <button type="button" aria-label="Carrinho de compras">
            <ShoppingCart size={18} strokeWidth={2.1} />
          </button>
        </nav>
      </div>

      <nav className="header__categories" aria-label="Categorias de produtos">
        <ul>
          {categories.map((category) => (
            <li key={category}>
              <a href="/">{category}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;

import Link from "next/link";
import styles from "./Header.module.scss";

const benefits = [
  { icon: "/figma-assets/shield.svg", label: "Compra", strong: "100% segura" },
  { icon: "/figma-assets/truck.svg", label: "acima de R$ 200", strong: "Frete grátis" },
  { icon: "/figma-assets/credit-card.svg", label: "suas compras", strong: "Parcele" },
];

const links = ["Todas categorias", "Supermercado", "Livros", "Moda", "Lançamentos", "Ofertas do dia"];

const actions = [
  { icon: "/figma-assets/bag.svg", label: "Pedidos" },
  { icon: "/figma-assets/heart.svg", label: "Favoritos" },
  { icon: "/figma-assets/user.svg", label: "Minha conta" },
  { icon: "/figma-assets/cart.svg", label: "Carrinho" },
];

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.topbar} aria-label="Benefícios da loja">
        {benefits.map((benefit) => (
          <span key={benefit.strong}>
            <img alt="" src={benefit.icon} />
            {benefit.strong === "Frete grátis" ? (
              <>
                <strong>{benefit.strong}</strong> {benefit.label}
              </>
            ) : (
              <>
                {benefit.label} <strong>{benefit.strong}</strong>
              </>
            )}
          </span>
        ))}
      </div>

      <div className={styles.mainbar}>
        <Link className={styles.logo} href="/" aria-label="Econverse home">
          <img alt="Econverse" src="/figma-assets/logo.svg" />
        </Link>

        <form className={styles.search} role="search">
          <label htmlFor="search-products">O que você está buscando?</label>
          <input id="search-products" name="search" type="search" placeholder="O que você está buscando?" />
          <button type="submit" aria-label="Buscar produtos">
            <img alt="" src="/figma-assets/search.svg" />
          </button>
        </form>

        <nav className={styles.actions} aria-label="Ações rápidas">
          {actions.map((action) => (
            <a href="#produtos" aria-label={action.label} key={action.label}>
              <img alt="" src={action.icon} />
            </a>
          ))}
        </nav>
      </div>

      <nav className={styles.nav} aria-label="Navegação principal">
        {links.map((link) => (
          <a href="#produtos" key={link}>
            {link}
          </a>
        ))}
        <a className={styles.subscription} href="#newsletter">
          <img alt="" src="/figma-assets/crown.svg" />
          Assinatura
        </a>
      </nav>
    </header>
  );
}

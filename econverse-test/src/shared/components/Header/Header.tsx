import Link from "next/link";
import styles from "./Header.module.scss";

const links = ["Todas categorias", "Supermercado", "Livros", "Moda", "Lançamentos", "Ofertas do dia"];

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.topbar} aria-label="Benefícios da loja">
        <span>Compra 100% segura</span>
        <span>Frete grátis acima de R$ 200</span>
        <span>Parcele suas compras</span>
      </div>

      <div className={styles.mainbar}>
        <Link className={styles.logo} href="/" aria-label="Econverse home">
          <span>ec</span>onverse
        </Link>

        <form className={styles.search} role="search">
          <label htmlFor="search-products">O que você está buscando?</label>
          <input id="search-products" name="search" type="search" placeholder="O que você está buscando?" />
          <button type="submit" aria-label="Buscar produtos">
            ⌕
          </button>
        </form>

        <nav className={styles.actions} aria-label="Ações rápidas">
          <a href="#produtos" aria-label="Favoritos">
            ♡
          </a>
          <a href="#produtos" aria-label="Minha conta">
            ○
          </a>
          <a href="#produtos" aria-label="Carrinho">
            □
          </a>
        </nav>
      </div>

      <nav className={styles.nav} aria-label="Navegação principal">
        {links.map((link) => (
          <a href="#produtos" key={link}>
            {link}
          </a>
        ))}
      </nav>
    </header>
  );
}

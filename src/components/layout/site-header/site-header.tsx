import Image from "next/image";
import { benefits, mainNav } from "@/lib/store-content";
import styles from "./site-header.module.scss";

const actions = [
  { label: "Meus pedidos", icon: "/figma/orders.svg", size: 24 },
  { label: "Favoritos", icon: "/figma/heart.svg", size: 32 },
  { label: "Minha conta", icon: "/figma/user-circle.svg", size: 32 },
  { label: "Carrinho", icon: "/figma/shopping-cart.svg", size: 32 },
];

export function SiteHeader() {
  return (
    <header className={styles.siteHeader}>
      <ul className={styles.benefits}>
        {benefits.map((benefit) => (
          <li
            key={benefit.label}
            className={`${styles.benefit} ${benefit.iconFirst ? styles.benefitIconFirst : styles.benefitIconLast}`}
          >
            <Image
              src={benefit.icon}
              alt=""
              width={20}
              height={20}
              aria-hidden="true"
            />
            <span>
              {benefit.label.split(benefit.emphasis)[0]}
              <strong className={styles.benefitEmphasis}>
                {benefit.emphasis}
              </strong>
              {benefit.label.split(benefit.emphasis)[1]}
            </span>
          </li>
        ))}
      </ul>

      <div className={styles.mainRow}>
        <a
          href="/"
          aria-label="Econverse - página inicial"
          className={styles.logoLink}
        >
          <Image
            src="/figma/logo.png"
            alt="Econverse"
            width={139}
            height={41}
            priority
          />
        </a>

        <form role="search" action="/" className={styles.search}>
          <label htmlFor="site-search" className="sr-only">
            Buscar produtos
          </label>
          <input
            id="site-search"
            name="q"
            type="search"
            placeholder="O que você está buscando?"
            className={styles.searchInput}
          />
          <button
            type="submit"
            aria-label="Buscar"
            className={styles.searchButton}
          >
            <Image
              src="/figma/magnifying-glass.svg"
              alt=""
              width={28}
              height={28}
            />
          </button>
        </form>

        <nav aria-label="Atalhos da conta">
          <ul className={styles.actions}>
            {actions.map((action) => (
              <li key={action.label}>
                <a
                  href="#"
                  aria-label={action.label}
                  className={styles.actionLink}
                >
                  <Image
                    src={action.icon}
                    alt=""
                    width={action.size}
                    height={action.size}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <nav aria-label="Categorias principais" className={styles.mainNav}>
        <ul className={styles.navList}>
          {mainNav.map((item) => (
            <li key={item} className={styles.navItem}>
              <a
                href="#"
                className={`${styles.navLink} ${item === "Ofertas do dia" ? styles.navLinkActive : styles.navLinkInactive}`}
              >
                {item}
              </a>
            </li>
          ))}
          <li className={styles.navItem}>
            <a
              href="#"
              className={`${styles.navLink} ${styles.navLinkInactive} ${styles.subscriptionLink}`}
            >
              <Image src="/figma/crown.svg" alt="" width={20} height={20} />
              Assinatura
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

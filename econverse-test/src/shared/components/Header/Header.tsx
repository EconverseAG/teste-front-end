"use client";

import { useCommerce } from "@/src/shared/store/CommerceContext";
import {
  CreditCard,
  Crown,
  Heart,
  Search,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Truck,
  UserRound,
} from "lucide-react";
import Link from "next/link";
import styles from "./Header.module.scss";

const benefits = [
  { Icon: ShieldCheck, label: "Compra", strong: "100% segura", strongFirst: false },
  { Icon: Truck, label: "acima de R$ 200", strong: "Frete grátis", strongFirst: true },
  { Icon: CreditCard, label: "suas compras", strong: "Parcele", strongFirst: true },
];

const links = ["Todas categorias", "Supermercado", "Livros", "Moda", "Lançamentos", "Ofertas do dia"];

const actions = [
  { Icon: ShoppingBag, label: "Pedidos", target: "#produtos", badge: null },
  { Icon: Heart, label: "Favoritos", target: "#produtos", badge: "favorites" },
  { Icon: UserRound, label: "Minha conta", target: "#newsletter", badge: null },
  { Icon: ShoppingCart, label: "Carrinho", target: "#produtos", badge: "cart" },
] as const;

export function Header() {
  const { cartCount, favoritesCount, openCart } = useCommerce();

  return (
    <header className={styles.header}>
      <div className={styles.topbar} aria-label="Benefícios da loja">
        {benefits.map((benefit) => (
          <span key={benefit.strong}>
            <benefit.Icon aria-hidden="true" strokeWidth={2.2} />
            {benefit.strongFirst ? (
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
            <Search aria-hidden="true" strokeWidth={2.1} />
          </button>
        </form>

        <nav className={styles.actions} aria-label="Ações rápidas">
          {actions.map((action) => {
            const count =
              action.badge === "cart" ? cartCount : action.badge === "favorites" ? favoritesCount : 0;
            const label = count > 0 ? `${action.label}: ${count}` : action.label;

            return action.badge === "cart" ? (
              <button onClick={openCart} aria-label={label} key={action.label} type="button">
                <action.Icon aria-hidden="true" strokeWidth={1.9} />
                {count > 0 ? <span className={styles.badge}>{count}</span> : null}
              </button>
            ) : (
              <a href={action.target} aria-label={label} key={action.label}>
                <action.Icon aria-hidden="true" strokeWidth={1.9} />
                {count > 0 ? <span className={styles.badge}>{count}</span> : null}
              </a>
            );
          })}
        </nav>
      </div>

      <nav className={styles.nav} aria-label="Navegação principal">
        {links.map((link) => (
          <a href="#produtos" key={link}>
            {link}
          </a>
        ))}
        <a className={styles.subscription} href="#newsletter">
          <Crown aria-hidden="true" strokeWidth={2} />
          Assinatura
        </a>
      </nav>
    </header>
  );
}

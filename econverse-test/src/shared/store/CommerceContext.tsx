"use client";

import type { Product } from "@/src/features/products/types/product";
import { ShoppingCart, X } from "lucide-react";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import styles from "./CommerceContext.module.scss";

type CartItem = Product & {
  quantity: number;
};

type CommerceContextValue = {
  cartCount: number;
  cartItems: CartItem[];
  clearCart: () => void;
  clearMessage: () => void;
  closeCart: () => void;
  favoriteIds: string[];
  favoritesCount: number;
  isFavorite: (productId: string) => boolean;
  lastMessage: string | null;
  openCart: () => void;
  removeFromCart: (productId: string) => void;
  addToCart: (product: Product, quantity?: number) => void;
  toggleFavorite: (product: Product) => void;
  updateQuantity: (productId: string, quantity: number) => void;
};

type CommerceProviderProps = {
  children: React.ReactNode;
};

const CART_STORAGE_KEY = "econverse-cart";
const FAVORITES_STORAGE_KEY = "econverse-favorites";
const CommerceContext = createContext<CommerceContextValue | null>(null);
const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  currency: "BRL",
  style: "currency",
});

function readStorage<T>(key: string, fallback: T): T {
  try {
    const value = window.localStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function CommerceProvider({ children }: CommerceProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [hasHydrated, setHasHydrated] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [lastMessage, setLastMessage] = useState<string | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setCartItems(readStorage<CartItem[]>(CART_STORAGE_KEY, []));
      setFavoriteIds(readStorage<string[]>(FAVORITES_STORAGE_KEY, []));
      setHasHydrated(true);
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (hasHydrated) {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    }
  }, [cartItems, hasHydrated]);

  useEffect(() => {
    if (hasHydrated) {
      window.localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favoriteIds));
    }
  }, [favoriteIds, hasHydrated]);

  useEffect(() => {
    if (!lastMessage) {
      return undefined;
    }

    const timer = window.setTimeout(() => setLastMessage(null), 2600);
    return () => window.clearTimeout(timer);
  }, [lastMessage]);

  useEffect(() => {
    if (!isCartOpen) {
      return undefined;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsCartOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isCartOpen]);

  const addToCart = useCallback((product: Product, quantity = 1) => {
    const nextQuantity = Math.max(1, quantity);

    setCartItems((items) => {
      const currentItem = items.find((item) => item.id === product.id);

      if (!currentItem) {
        return [...items, { ...product, quantity: nextQuantity }];
      }

      return items.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + nextQuantity } : item,
      );
    });
    setLastMessage(`${product.name} adicionado ao carrinho`);
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setCartItems((items) => items.filter((item) => item.id !== productId));
    setLastMessage("Produto removido do carrinho");
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    setCartItems((items) =>
      items
        .map((item) => (item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item))
        .filter((item) => item.quantity > 0),
    );
  }, []);

  const clearCart = useCallback(() => {
    setCartItems([]);
    setLastMessage("Carrinho limpo");
  }, []);

  const toggleFavorite = useCallback((product: Product) => {
    setFavoriteIds((ids) => {
      if (ids.includes(product.id)) {
        setLastMessage(`${product.name} removido dos favoritos`);
        return ids.filter((id) => id !== product.id);
      }

      setLastMessage(`${product.name} salvo nos favoritos`);
      return [...ids, product.id];
    });
  }, []);

  const isFavorite = useCallback((productId: string) => favoriteIds.includes(productId), [favoriteIds]);
  const clearMessage = useCallback(() => setLastMessage(null), []);
  const openCart = useCallback(() => setIsCartOpen(true), []);
  const closeCart = useCallback(() => setIsCartOpen(false), []);
  const cartCount = useMemo(() => cartItems.reduce((total, item) => total + item.quantity, 0), [cartItems]);
  const cartTotal = useMemo(
    () => cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
    [cartItems],
  );

  const value = useMemo<CommerceContextValue>(
    () => ({
      addToCart,
      cartCount,
      cartItems,
      clearCart,
      clearMessage,
      closeCart,
      favoriteIds,
      favoritesCount: favoriteIds.length,
      isFavorite,
      lastMessage,
      openCart,
      removeFromCart,
      toggleFavorite,
      updateQuantity,
    }),
    [
      addToCart,
      cartCount,
      cartItems,
      clearCart,
      clearMessage,
      closeCart,
      favoriteIds,
      isFavorite,
      lastMessage,
      openCart,
      removeFromCart,
      toggleFavorite,
      updateQuantity,
    ],
  );

  return (
    <CommerceContext.Provider value={value}>
      {children}
      {isCartOpen ? (
        <div className={styles.cartLayer} role="presentation">
          <button
            className={styles.cartOverlay}
            onClick={closeCart}
            type="button"
            aria-label="Fechar carrinho"
          />
          <aside className={styles.cartPanel} role="dialog" aria-modal="true" aria-labelledby="cart-title">
            <div className={styles.cartHeader}>
              <div>
                <p>Meu carrinho</p>
                <h2 id="cart-title">{cartCount} item(ns)</h2>
              </div>
              <button onClick={closeCart} type="button" aria-label="Fechar carrinho">
                <X aria-hidden="true" strokeWidth={2} />
              </button>
            </div>

            {cartItems.length > 0 ? (
              <>
                <ul className={styles.cartList}>
                  {cartItems.map((item) => (
                    <li className={styles.cartItem} key={item.id}>
                      <img alt={item.name} src={item.image} />
                      <div>
                        <strong>{item.name}</strong>
                        <span>{currencyFormatter.format(item.price)}</span>
                        <div className={styles.cartQuantity}>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            type="button"
                            aria-label={`Diminuir quantidade de ${item.name}`}
                          >
                            −
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            type="button"
                            aria-label={`Aumentar quantidade de ${item.name}`}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <button
                        className={styles.removeItem}
                        onClick={() => removeFromCart(item.id)}
                        type="button"
                        aria-label={`Remover ${item.name} do carrinho`}
                      >
                        Remover
                      </button>
                    </li>
                  ))}
                </ul>

                <div className={styles.cartFooter}>
                  <span>Total</span>
                  <strong>{currencyFormatter.format(cartTotal)}</strong>
                  <button className={styles.checkoutButton} onClick={closeCart} type="button">
                    Finalizar compra
                  </button>
                  <button className={styles.clearCartButton} onClick={clearCart} type="button">
                    Limpar carrinho
                  </button>
                </div>
              </>
            ) : (
              <div className={styles.emptyCart}>
                <ShoppingCart aria-hidden="true" strokeWidth={1.8} />
                <strong>Seu carrinho está vazio</strong>
                <p>Escolha um produto da vitrine para começar.</p>
              </div>
            )}
          </aside>
        </div>
      ) : null}
      {lastMessage ? (
        <div className={styles.toast} role="status" aria-live="polite">
          {lastMessage}
        </div>
      ) : null}
    </CommerceContext.Provider>
  );
}

export function useCommerce() {
  const context = useContext(CommerceContext);

  if (!context) {
    throw new Error("useCommerce must be used inside CommerceProvider");
  }

  return context;
}

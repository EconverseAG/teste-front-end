"use client"

import { createContext, useCallback, useContext, useMemo, useReducer, type ReactNode } from "react"
import type { Product } from "@/lib/catalog"

export type CartLine = { product: Product; quantity: number }

type CartState = { lines: CartLine[]; lastMessage: string; open: boolean }

type CartAction =
  | { type: "add"; product: Product; quantity: number }
  | { type: "update"; productId: string; quantity: number }
  | { type: "remove"; productId: string }
  | { type: "toggle"; open: boolean }

const units = (quantity: number) => (quantity === 1 ? "1 unidade" : `${quantity} unidades`)

export const initialCartState: CartState = { lines: [], lastMessage: "", open: false }

export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "add": {
      const quantity = Math.max(1, Math.trunc(action.quantity))
      const exists = state.lines.some((line) => line.product.id === action.product.id)
      const lines = exists
        ? state.lines.map((line) =>
            line.product.id === action.product.id ? { ...line, quantity: line.quantity + quantity } : line,
          )
        : [...state.lines, { product: action.product, quantity }]
      const summary = quantity === 1 ? "1 unidade adicionada" : `${quantity} unidades adicionadas`
      return { ...state, lines, open: true, lastMessage: `${summary} ao carrinho: ${action.product.name}.` }
    }
    case "update": {
      const quantity = Math.max(1, Math.trunc(action.quantity))
      const line = state.lines.find((item) => item.product.id === action.productId)
      if (!line || line.quantity === quantity) return state
      return {
        ...state,
        lines: state.lines.map((item) => (item === line ? { ...item, quantity } : item)),
        lastMessage: `${line.product.name}: ${units(quantity)} no carrinho.`,
      }
    }
    case "remove": {
      const line = state.lines.find((item) => item.product.id === action.productId)
      if (!line) return state
      return {
        ...state,
        lines: state.lines.filter((item) => item !== line),
        lastMessage: `${line.product.name} removido do carrinho.`,
      }
    }
    case "toggle":
      return state.open === action.open ? state : { ...state, open: action.open }
  }
}

export const selectCount = (lines: readonly CartLine[]) => lines.reduce((total, line) => total + line.quantity, 0)
export const selectSubtotal = (lines: readonly CartLine[]) =>
  lines.reduce((total, line) => total + line.product.price * line.quantity, 0)

type CartContextValue = {
  lines: CartLine[]
  count: number
  subtotal: number
  open: boolean
  addItem: (product: Product, quantity: number) => void
  updateItem: (productId: string, quantity: number) => void
  removeItem: (productId: string) => void
  setOpen: (open: boolean) => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialCartState)

  const addItem = useCallback((product: Product, quantity: number) => dispatch({ type: "add", product, quantity }), [])
  const updateItem = useCallback(
    (productId: string, quantity: number) => dispatch({ type: "update", productId, quantity }),
    [],
  )
  const removeItem = useCallback((productId: string) => dispatch({ type: "remove", productId }), [])
  const setOpen = useCallback((open: boolean) => dispatch({ type: "toggle", open }), [])

  const value = useMemo<CartContextValue>(
    () => ({
      lines: state.lines,
      count: selectCount(state.lines),
      subtotal: selectSubtotal(state.lines),
      open: state.open,
      addItem,
      updateItem,
      removeItem,
      setOpen,
    }),
    [state.lines, state.open, addItem, updateItem, removeItem, setOpen],
  )

  return (
    <CartContext.Provider value={value}>
      {children}
      {/* Anuncia as mudanças para leitores de tela sem roubar o foco. */}
      <p className="sr-only" role="status" aria-live="polite">
        {state.lastMessage}
      </p>
    </CartContext.Provider>
  )
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext)
  if (!context) throw new Error("useCart deve ser usado dentro de <CartProvider>")
  return context
}

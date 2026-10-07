import type { Product } from "@/lib/catalog"
import { cartReducer, initialCartState, selectCount, selectSubtotal } from "./CartProvider"

const product: Product = {
  id: "iphone-0",
  name: "Iphone",
  description: "Iphone",
  photo: "https://x/a.png",
  price: 100,
  category: "celular",
}

const other: Product = { ...product, id: "iphone-1", name: "Outro", price: 50 }

describe("cartReducer", () => {
  const empty = initialCartState

  it("adiciona um produto novo e abre o carrinho", () => {
    const state = cartReducer(empty, { type: "add", product, quantity: 2 })
    expect(state.lines).toEqual([{ product, quantity: 2 }])
    expect(state.open).toBe(true)
    expect(state.lastMessage).toBe("2 unidades adicionadas ao carrinho: Iphone.")
  })

  it("soma a quantidade quando o produto já está no carrinho", () => {
    const once = cartReducer(empty, { type: "add", product, quantity: 1 })
    const twice = cartReducer(once, { type: "add", product, quantity: 3 })
    expect(twice.lines).toEqual([{ product, quantity: 4 }])
  })

  it("nunca adiciona menos de uma unidade", () => {
    const state = cartReducer(empty, { type: "add", product, quantity: 0 })
    expect(state.lines[0]?.quantity).toBe(1)
    expect(state.lastMessage).toBe("1 unidade adicionada ao carrinho: Iphone.")
  })

  it("atualiza a quantidade de uma linha", () => {
    const added = cartReducer(empty, { type: "add", product, quantity: 1 })
    const updated = cartReducer(added, { type: "update", productId: product.id, quantity: 5 })
    expect(updated.lines[0]?.quantity).toBe(5)
    expect(updated.lastMessage).toBe("Iphone: 5 unidades no carrinho.")
  })

  it("ignora atualização de produto que não está no carrinho", () => {
    expect(cartReducer(empty, { type: "update", productId: "x", quantity: 2 })).toBe(empty)
  })

  it("remove uma linha", () => {
    const added = cartReducer(cartReducer(empty, { type: "add", product, quantity: 1 }), {
      type: "add",
      product: other,
      quantity: 1,
    })
    const removed = cartReducer(added, { type: "remove", productId: product.id })
    expect(removed.lines).toEqual([{ product: other, quantity: 1 }])
    expect(removed.lastMessage).toBe("Iphone removido do carrinho.")
  })

  it("abre e fecha o carrinho", () => {
    const opened = cartReducer(empty, { type: "toggle", open: true })
    expect(opened.open).toBe(true)
    expect(cartReducer(opened, { type: "toggle", open: true })).toBe(opened)
  })
})

describe("seletores", () => {
  const lines = [
    { product, quantity: 2 },
    { product: other, quantity: 3 },
  ]

  it("conta as unidades", () => expect(selectCount(lines)).toBe(5))
  it("soma o subtotal", () => expect(selectSubtotal(lines)).toBe(350))
})

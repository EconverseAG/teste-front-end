import { render, screen, waitFor, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { useEffect } from "react"
import { CartLink } from "@/components/organisms/Header/CartLink"
import type { Product } from "@/lib/catalog"
import { CartProvider, useCart } from "@/providers/CartProvider"
import { CartDrawer } from "./CartDrawer"

const photo = "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png"
const iphone: Product = { id: "a", name: "IPHONE 13 MINI", description: "", photo, price: 150, category: "celular" }

function Seed({ product }: { product?: Product }) {
  const { addItem } = useCart()
  useEffect(() => {
    if (product) addItem(product, 1)
  }, [addItem, product])
  return null
}

function renderCart(product?: Product) {
  return render(
    <CartProvider>
      <CartLink />
      <Seed product={product} />
      <CartDrawer />
    </CartProvider>,
  )
}

describe("CartDrawer", () => {
  it("abre pelo header e mostra o estado vazio", async () => {
    const user = userEvent.setup()
    renderCart()

    await user.click(screen.getByRole("button", { name: "Carrinho vazio" }))
    const drawer = await screen.findByRole("dialog", { name: "Carrinho" })
    expect(within(drawer).getByText("Nada por aqui ainda")).toBeInTheDocument()
    expect(within(drawer).getByRole("button", { name: "Fechar carrinho" })).toHaveFocus()
  })

  it("abre sozinho ao adicionar, recalcula o subtotal e mostra quanto falta para o frete grátis", async () => {
    const user = userEvent.setup()
    renderCart(iphone)

    const drawer = await screen.findByRole("dialog", { name: "Carrinho" })
    expect(within(drawer).getByText("R$ 50,00")).toBeInTheDocument()

    await user.click(within(drawer).getByRole("button", { name: "Aumentar quantidade" }))
    expect(within(drawer).getAllByText("R$ 300,00")).toHaveLength(2)
    expect(within(drawer).getByText("Você ganhou frete grátis!")).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Carrinho, 2 itens" })).toBeInTheDocument()
  })

  it("remove o item e volta ao estado vazio", async () => {
    const user = userEvent.setup()
    renderCart(iphone)

    const drawer = await screen.findByRole("dialog", { name: "Carrinho" })
    await user.click(within(drawer).getByRole("button", { name: "Remover IPHONE 13 MINI" }))

    await waitFor(() => expect(within(drawer).getByText("Nada por aqui ainda")).toBeInTheDocument())
    expect(screen.getByRole("button", { name: "Carrinho vazio" })).toBeInTheDocument()
  })
})

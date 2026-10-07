import { act, render, screen, waitFor, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { CartLink } from "@/components/organisms/Header/CartLink"
import type { Product } from "@/lib/catalog"
import { CartProvider } from "@/providers/CartProvider"
import { SearchProvider, useSearch } from "@/providers/SearchProvider"
import { ProductShowcase } from "./ProductShowcase"

const photo = "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png"

const products: Product[] = [
  { id: "a", name: "IPHONE 13 MINI", description: "Mini e potente", photo, price: 9000, category: "celular" },
  { id: "b", name: "Capa iPhone", description: "Capa de silicone", photo, price: 50, category: "acessorios" },
]

function SearchInput() {
  const { query, setQuery } = useSearch()
  return <input aria-label="Buscar" value={query} onChange={(event) => setQuery(event.target.value)} />
}

function renderShowcase() {
  return render(
    <SearchProvider>
      <CartProvider>
        <SearchInput />
        <CartLink />
        <ProductShowcase products={products} withTabs searchable />
      </CartProvider>
    </SearchProvider>,
  )
}

describe("ProductShowcase", () => {
  it("mostra os resultados da busca no lugar das abas e limpa", async () => {
    const user = userEvent.setup()
    renderShowcase()

    await user.type(screen.getByRole("textbox", { name: "Buscar" }), "capa")
    expect(await screen.findByText(/1 resultado para/)).toBeInTheDocument()
    expect(screen.queryByRole("tablist")).not.toBeInTheDocument()
    expect(await screen.findByRole("heading", { name: "Capa iPhone" })).toBeInTheDocument()
    await waitFor(() => expect(screen.queryByRole("heading", { name: "IPHONE 13 MINI" })).not.toBeInTheDocument())

    await user.click(screen.getByRole("button", { name: "Limpar busca" }))
    expect(await screen.findByRole("tablist")).toBeInTheDocument()
  })

  it("sem resultado exato sugere produtos parecidos", async () => {
    const user = userEvent.setup()
    renderShowcase()

    await user.type(screen.getByRole("textbox", { name: "Buscar" }), "iphone 15")
    expect(await screen.findByText(/Nenhum resultado exato/)).toBeInTheDocument()
    await waitFor(() => expect(screen.getAllByRole("article")).toHaveLength(2))
  })

  it("filtra a vitrine pela aba ativa e mostra estado vazio", async () => {
    const user = userEvent.setup()
    renderShowcase()

    const panel = screen.getByRole("tabpanel")
    expect(within(panel).getByRole("heading", { name: "IPHONE 13 MINI" })).toBeInTheDocument()
    expect(within(panel).queryByRole("heading", { name: "Capa iPhone" })).not.toBeInTheDocument()

    await user.click(screen.getByRole("tab", { name: "Acessórios" }))
    expect(await within(panel).findByRole("heading", { name: "Capa iPhone" })).toBeInTheDocument()

    await user.click(screen.getByRole("tab", { name: "TVs" }))
    expect(await within(panel).findByText("Nenhum produto encontrado nesta categoria.")).toBeInTheDocument()
  })

  it("abre o modal com as informações do produto clicado", async () => {
    const user = userEvent.setup()
    renderShowcase()

    await user.click(screen.getByRole("button", { name: "Comprar IPHONE 13 MINI" }))

    const dialog = await screen.findByRole("dialog", { name: "IPHONE 13 MINI" })
    expect(dialog).toHaveAttribute("open")
    expect(within(dialog).getByText("R$ 9.000,00")).toBeInTheDocument()
    expect(within(dialog).getByText("Mini e potente")).toBeInTheDocument()
    expect(within(dialog).getByRole("button", { name: "Fechar" })).toHaveFocus()
  })

  it("compra a quantidade escolhida, fecha o modal e atualiza o carrinho", async () => {
    const user = userEvent.setup()
    renderShowcase()
    expect(screen.getByRole("button", { name: "Carrinho vazio" })).toBeInTheDocument()

    await user.click(screen.getByRole("button", { name: "Comprar IPHONE 13 MINI" }))
    const dialog = await screen.findByRole("dialog")
    await user.click(within(dialog).getByRole("button", { name: "Aumentar quantidade" }))
    expect(within(dialog).getByText("02")).toBeInTheDocument()
    expect(within(dialog).getByText("R$ 18.000,00")).toBeInTheDocument()
    await user.click(within(dialog).getByRole("button", { name: "Comprar" }))

    await waitFor(() => expect(screen.queryByRole("dialog")).not.toBeInTheDocument())
    const cart = screen.getByRole("button", { name: "Carrinho, 2 itens" })
    expect(cart).toHaveAttribute("aria-expanded", "true")
    expect(screen.getByRole("status")).toHaveTextContent("2 unidades adicionadas ao carrinho: IPHONE 13 MINI.")
  })

  it("fecha com Esc e devolve o foco a quem abriu", async () => {
    const user = userEvent.setup()
    renderShowcase()
    const trigger = screen.getByRole("button", { name: "Comprar IPHONE 13 MINI" })

    await user.click(trigger)
    const dialog = await screen.findByRole("dialog")
    act(() => {
      dialog.dispatchEvent(new Event("cancel", { cancelable: true }))
    })

    await waitFor(() => expect(screen.queryByRole("dialog")).not.toBeInTheDocument())
    expect(trigger).toHaveFocus()
  })

  it("fecha ao clicar fora do painel", async () => {
    const user = userEvent.setup()
    renderShowcase()

    await user.click(screen.getByRole("button", { name: "IPHONE 13 MINI" }))
    await user.click(await screen.findByTestId("modal-backdrop"))

    await waitFor(() => expect(screen.queryByRole("dialog")).not.toBeInTheDocument())
  })
})

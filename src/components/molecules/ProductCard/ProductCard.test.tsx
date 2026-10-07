import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import type { Product } from "@/lib/catalog"
import { ProductCard } from "./ProductCard"

const product: Product = {
  id: "iphone-0",
  name: "IPHONE 13 MINI",
  description: "IPHONE 13 MINI",
  photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
  price: 9000,
  category: "celular",
}

describe("ProductCard", () => {
  it("mostra nome, preço, parcelamento e frete", () => {
    render(<ProductCard product={product} onSelect={jest.fn()} />)
    expect(screen.getByRole("heading", { level: 3, name: "IPHONE 13 MINI" })).toBeInTheDocument()
    expect(screen.getByText("R$ 9.000,00")).toBeInTheDocument()
    expect(screen.getByText("ou 2x de R$ 4.500,00 sem juros")).toBeInTheDocument()
    expect(screen.getByText("Frete grátis")).toBeInTheDocument()
  })

  it("não inventa preço 'de' quando o produto não tem", () => {
    render(<ProductCard product={product} onSelect={jest.fn()} />)
    expect(document.querySelector("s")).toBeNull()
  })

  it("mostra o preço 'de' riscado quando há desconto", () => {
    render(<ProductCard product={{ ...product, listPrice: 9500 }} onSelect={jest.fn()} />)
    expect(document.querySelector("s")).toHaveTextContent("De R$ 9.500,00")
  })

  it("abre o produto pelo nome e pelo botão Comprar", async () => {
    const user = userEvent.setup()
    const onSelect = jest.fn()
    render(<ProductCard product={product} onSelect={onSelect} />)

    await user.click(screen.getByRole("button", { name: "IPHONE 13 MINI" }))
    await user.click(screen.getByRole("button", { name: "Comprar IPHONE 13 MINI" }))

    expect(onSelect).toHaveBeenCalledTimes(2)
    expect(onSelect).toHaveBeenCalledWith(product)
  })
})

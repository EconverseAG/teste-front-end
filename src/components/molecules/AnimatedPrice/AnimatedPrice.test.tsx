import { render, screen } from "@testing-library/react"
import { placesOf } from "@/components/motion/AnimatedCounter/AnimatedCounter"
import { AnimatedPrice } from "./AnimatedPrice"

describe("AnimatedPrice", () => {
  it("anuncia o valor formatado uma vez só", () => {
    render(<AnimatedPrice value={15000} />)
    expect(screen.getByText("R$ 15.000,00")).toHaveClass("sr-only")
  })

  it("mostra símbolo, separador de milhar e vírgula nos rolos visuais", () => {
    const { container } = render(<AnimatedPrice value={1234.5} />)
    const visual = container.querySelector(":scope > span > [aria-hidden='true']")
    expect(visual?.textContent).toMatch(/^R\$.*\..*,/)
  })
})

describe("placesOf", () => {
  it("decompõe o inteiro em casas decimais", () => {
    expect(placesOf(0)).toEqual([1])
    expect(placesOf(15000)).toEqual([10000, 1000, 100, 10, 1])
  })
})

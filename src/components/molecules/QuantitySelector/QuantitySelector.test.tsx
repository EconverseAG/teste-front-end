import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { useState } from "react"
import { QuantitySelector } from "./QuantitySelector"

function Controlled({ initial = 1, max = 3 }: { initial?: number; max?: number }) {
  const [value, setValue] = useState(initial)
  return <QuantitySelector value={value} onChange={setValue} max={max} />
}

describe("QuantitySelector", () => {
  it("mostra a quantidade com dois dígitos e começa com o '−' desabilitado", () => {
    render(<Controlled />)
    expect(screen.getByText("01")).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Diminuir quantidade" })).toBeDisabled()
  })

  it("incrementa e decrementa respeitando o máximo", async () => {
    const user = userEvent.setup()
    render(<Controlled max={3} />)
    const plus = screen.getByRole("button", { name: "Aumentar quantidade" })

    await user.click(plus)
    await user.click(plus)
    expect(screen.getByText("03")).toBeInTheDocument()
    expect(plus).toBeDisabled()

    await user.click(screen.getByRole("button", { name: "Diminuir quantidade" }))
    expect(screen.getByText("02")).toBeInTheDocument()
  })
})

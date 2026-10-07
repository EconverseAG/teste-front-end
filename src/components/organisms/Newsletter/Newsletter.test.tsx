import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Newsletter } from "./Newsletter"

describe("Newsletter", () => {
  it("valida no envio, marca os campos e foca o primeiro inválido", async () => {
    const user = userEvent.setup()
    const subscribe = jest.fn().mockResolvedValue(undefined)
    render(<Newsletter subscribe={subscribe} />)

    await user.click(screen.getByRole("button", { name: "Inscrever" }))

    const name = screen.getByLabelText("Nome")
    expect(name).toHaveAttribute("aria-invalid", "true")
    expect(name).toHaveFocus()
    expect(screen.getByText("Informe seu nome.")).toBeInTheDocument()
    expect(screen.getByText("Informe seu e-mail.")).toBeInTheDocument()
    expect(screen.getByText("Aceite os termos para continuar.")).toBeInTheDocument()
    expect(subscribe).not.toHaveBeenCalled()
  })

  it("limpa o erro do campo assim que ele é corrigido", async () => {
    const user = userEvent.setup()
    render(<Newsletter subscribe={jest.fn()} />)

    await user.click(screen.getByRole("button", { name: "Inscrever" }))
    await user.type(screen.getByLabelText("Nome"), "Ivan")

    expect(screen.queryByText("Informe seu nome.")).not.toBeInTheDocument()
    expect(screen.getByText("Informe seu e-mail.")).toBeInTheDocument()
  })

  it("envia os dados válidos e mostra a confirmação", async () => {
    const user = userEvent.setup()
    const subscribe = jest.fn().mockResolvedValue(undefined)
    render(<Newsletter subscribe={subscribe} />)

    await user.type(screen.getByLabelText("Nome"), "Ivan")
    await user.type(screen.getByLabelText("E-mail"), "ivan@exemplo.com")
    await user.click(screen.getByLabelText("Aceito os termos e condições"))
    await user.click(screen.getByRole("button", { name: "Inscrever" }))

    expect(subscribe).toHaveBeenCalledWith({ name: "Ivan", email: "ivan@exemplo.com", acceptedTerms: true })
    expect(await screen.findByText(/Inscrição confirmada/)).toBeInTheDocument()
  })
})

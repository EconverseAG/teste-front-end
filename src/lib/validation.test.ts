import { validateNewsletter } from "./validation"

const valid = { name: "Ivan", email: "ivan@exemplo.com", acceptedTerms: true }

describe("validateNewsletter", () => {
  it("aceita dados válidos", () => {
    expect(validateNewsletter(valid)).toEqual({})
  })

  it("aponta todos os campos obrigatórios de uma vez", () => {
    expect(validateNewsletter({ name: " ", email: "", acceptedTerms: false })).toEqual({
      name: "Informe seu nome.",
      email: "Informe seu e-mail.",
      acceptedTerms: "Aceite os termos para continuar.",
    })
  })

  it.each(["ivan", "ivan@", "ivan@exemplo", "iv an@exemplo.com"])("rejeita e-mail inválido: %s", (email) => {
    expect(validateNewsletter({ ...valid, email }).email).toBe("E-mail inválido.")
  })

  it("rejeita nome com uma letra", () => {
    expect(validateNewsletter({ ...valid, name: "I" }).name).toBe("Nome muito curto.")
  })
})

import { formatCurrency, installmentValue, padQuantity, slugify } from "./format"

describe("formatCurrency", () => {
  it("formata em reais no padrão brasileiro, com espaço comum", () => {
    expect(formatCurrency(1499.9)).toBe("R$ 1.499,90")
    expect(formatCurrency(15000)).toBe("R$ 15.000,00")
    expect(formatCurrency(0)).toBe("R$ 0,00")
  })
})

describe("installmentValue", () => {
  it("divide o total pelo número de parcelas", () => {
    expect(installmentValue(15000, 2)).toBe(7500)
  })

  it("arredonda para baixo no centavo, nunca cobrando a mais", () => {
    expect(installmentValue(100, 3)).toBe(33.33)
  })

  it("rejeita quantidade de parcelas inválida", () => {
    expect(() => installmentValue(100, 0)).toThrow(RangeError)
  })
})

describe("padQuantity", () => {
  it("completa com zero à esquerda como no layout", () => {
    expect(padQuantity(1)).toBe("01")
    expect(padQuantity(12)).toBe("12")
  })
})

describe("slugify", () => {
  it("remove acentos e símbolos", () => {
    expect(slugify("Iphone 11 PRO MAX Branco — Ação!")).toBe("iphone-11-pro-max-branco-acao")
  })
})

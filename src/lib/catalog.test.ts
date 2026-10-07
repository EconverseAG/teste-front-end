import { filterByCategory, inferCategory, isApiProduct, parseProducts, searchProducts } from "./catalog"

const raw = {
  success: true,
  products: [
    { productName: "Iphone 11 PRO MAX BRANCO 1", descriptionShort: "Iphone 11", photo: "https://x/a.png", price: 15000 },
    { productName: "Capa para iPhone", descriptionShort: "Capa", photo: "https://x/b.png", price: 50 },
    { productName: "MacBook Air", descriptionShort: "Notebook", photo: "https://x/c.png", price: 9000 },
    { productName: "Sem preço", descriptionShort: "x", photo: "https://x/d.png" },
    { productName: "Preço negativo", descriptionShort: "x", photo: "https://x/e.png", price: -1 },
    null,
  ],
}

describe("parseProducts", () => {
  it("normaliza os itens válidos e descarta os malformados", () => {
    const products = parseProducts(raw)
    expect(products).toHaveLength(3)
    expect(products[0]).toEqual({
      id: "iphone-11-pro-max-branco-1-0",
      name: "Iphone 11 PRO MAX BRANCO 1",
      description: "Iphone 11",
      photo: "https://x/a.png",
      price: 15000,
      category: "celular",
    })
  })

  it("gera ids únicos mesmo com nomes repetidos", () => {
    const item = raw.products[0]
    const ids = parseProducts({ products: [item, item] }).map((product) => product.id)
    expect(new Set(ids).size).toBe(2)
  })

  it.each([undefined, null, {}, { products: "x" }])("retorna lista vazia para payload inválido (%p)", (payload) => {
    expect(parseProducts(payload)).toEqual([])
  })
})

describe("isApiProduct", () => {
  it("exige os quatro campos com os tipos certos", () => {
    expect(isApiProduct({ productName: "a", descriptionShort: "b", photo: "c", price: 1 })).toBe(true)
    expect(isApiProduct({ productName: "a", descriptionShort: "b", photo: "c", price: "1" })).toBe(false)
    expect(isApiProduct({ productName: "a", descriptionShort: "b", photo: "c", price: Number.NaN })).toBe(false)
  })
})

describe("inferCategory", () => {
  it.each([
    ["IPHONE 13 MINI", "celular"],
    ["Capa de silicone para iPhone", "acessorios"],
    ["iPad Pro 11", "tablets"],
    ["Notebook Dell", "notebooks"],
    ["Smart TV 55", "tvs"],
    ["Cafeteira", null],
  ])("%s -> %s", (name, expected) => {
    expect(inferCategory(name)).toBe(expected)
  })
})

describe("filterByCategory", () => {
  const products = parseProducts(raw)

  it("'todos' devolve tudo", () => {
    expect(filterByCategory(products, "todos")).toHaveLength(3)
  })

  it("filtra pela categoria inferida", () => {
    expect(filterByCategory(products, "acessorios").map((product) => product.name)).toEqual(["Capa para iPhone"])
    expect(filterByCategory(products, "tvs")).toEqual([])
  })
})

describe("searchProducts", () => {
  const products = parseProducts(raw)
  const names = (list: { name: string }[]) => list.map((product) => product.name)

  it("acha por nome sem diferenciar acento e maiúsculas", () => {
    expect(names(searchProducts(products, "  MACBOOK  ").matches)).toEqual(["MacBook Air"])
  })

  it("acha pela categoria", () => {
    expect(names(searchProducts(products, "celular").matches)).toEqual(["Iphone 11 PRO MAX BRANCO 1"])
  })

  it("exige todos os termos e sugere parecidos quando não há resultado exato", () => {
    const result = searchProducts(products, "iphone 13")
    expect(result.matches).toEqual([])
    expect(names(result.related)).toEqual(["Iphone 11 PRO MAX BRANCO 1", "Capa para iPhone"])
  })

  it("busca vazia devolve tudo", () => {
    expect(searchProducts(products, " ").matches).toHaveLength(3)
  })
})

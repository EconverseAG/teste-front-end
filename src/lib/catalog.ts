import { slugify } from "@/lib/format"

/** Formato cru do produtos.json da Econverse. */
export type ApiProduct = {
  productName: string
  descriptionShort: string
  photo: string
  price: number
}

export type ProductCategory = "celular" | "acessorios" | "tablets" | "notebooks" | "tvs"

/** Produto já normalizado para a UI. */
export type Product = {
  id: string
  name: string
  description: string
  photo: string
  /** Preço em reais. */
  price: number
  /** Preço "de" — o JSON não traz; a UI só o mostra quando existir. */
  listPrice?: number
  category: ProductCategory | null
}

export const INSTALLMENTS = 2

export type CategoryTab = { id: ProductCategory | "todos"; label: string }

export const CATEGORY_TABS: readonly CategoryTab[] = [
  { id: "celular", label: "Celular" },
  { id: "acessorios", label: "Acessórios" },
  { id: "tablets", label: "Tablets" },
  { id: "notebooks", label: "Notebooks" },
  { id: "tvs", label: "TVs" },
  { id: "todos", label: "Ver todos" },
]

// O JSON não tem categoria. Ela é inferida pelo nome — a ordem importa:
// "capa para iphone" é acessório, não celular.
const CATEGORY_RULES: ReadonlyArray<[ProductCategory, RegExp]> = [
  ["acessorios", /\b(capa|capinha|pel[ií]cula|fone|carregador|cabo|case|airpods?)\b/i],
  ["tablets", /\b(ipad|tablet|galaxy tab)\b/i],
  ["notebooks", /\b(macbook|notebook|laptop|chromebook)\b/i],
  ["tvs", /\b(tv|smart ?tv|televis[aã]o)\b/i],
  ["celular", /\b(iphone|celular|smartphone|galaxy|motorola|xiaomi|redmi)\b/i],
]

export function inferCategory(name: string): ProductCategory | null {
  return CATEGORY_RULES.find(([, pattern]) => pattern.test(name))?.[0] ?? null
}

export function isApiProduct(value: unknown): value is ApiProduct {
  if (typeof value !== "object" || value === null) return false
  const item = value as Record<string, unknown>
  return (
    typeof item.productName === "string" &&
    typeof item.descriptionShort === "string" &&
    typeof item.photo === "string" &&
    typeof item.price === "number" &&
    Number.isFinite(item.price) &&
    item.price >= 0
  )
}

/**
 * Valida o payload e normaliza para `Product`. Itens malformados são
 * descartados em vez de quebrar a vitrine inteira.
 */
export function parseProducts(payload: unknown): Product[] {
  const list = (payload as { products?: unknown } | null)?.products
  if (!Array.isArray(list)) return []

  return list.filter(isApiProduct).map((item, index) => ({
    id: `${slugify(item.productName)}-${index}`,
    name: item.productName.trim(),
    description: item.descriptionShort.trim(),
    photo: item.photo,
    price: item.price,
    category: inferCategory(item.productName),
  }))
}

export function filterByCategory(products: readonly Product[], tab: CategoryTab["id"]): Product[] {
  return tab === "todos" ? [...products] : products.filter((product) => product.category === tab)
}

const normalize = (text: string) =>
  text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()

const CATEGORY_LABEL = Object.fromEntries(CATEGORY_TABS.map((tab) => [tab.id, tab.label])) as Record<string, string>

export type SearchResult = {
  /** Produtos com todos os termos ("iphone 13" não traz o iPhone 11). */
  matches: Product[]
  /** Sem resultado exato: produtos com algum dos termos, para não deixar a busca vazia. */
  related: Product[]
}

/**
 * Busca no nome, na descrição e na categoria ("celular" acha os iPhones),
 * sem acento e sem diferenciar maiúsculas.
 */
export function searchProducts(products: readonly Product[], query: string): SearchResult {
  const terms = normalize(query).split(/\s+/).filter(Boolean)
  if (terms.length === 0) return { matches: [...products], related: [] }

  const indexed = products.map((product) => ({
    product,
    text: normalize(`${product.name} ${product.description} ${CATEGORY_LABEL[product.category ?? ""] ?? ""}`),
  }))
  const matches = indexed.filter(({ text }) => terms.every((term) => text.includes(term))).map(({ product }) => product)
  const related =
    matches.length > 0
      ? []
      : indexed.filter(({ text }) => terms.some((term) => text.includes(term))).map(({ product }) => product)

  return { matches, related }
}

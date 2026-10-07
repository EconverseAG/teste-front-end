import { parseProducts, type Product } from "@/lib/catalog"

export const PRODUCTS_URL =
  process.env.PRODUCTS_URL ?? "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json"

const REVALIDATE_SECONDS = 60 * 60

/**
 * Busca no servidor (ISR de 1h): o HTML já chega com a vitrine, o que é bom
 * para SEO e elimina o loading no cliente. Falha de rede vira lista vazia,
 * tratada como estado vazio pela UI — a página nunca quebra por causa da API.
 */
export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch(PRODUCTS_URL, { next: { revalidate: REVALIDATE_SECONDS } })
    if (!response.ok) return []
    return parseProducts(await response.json())
  } catch {
    return []
  }
}

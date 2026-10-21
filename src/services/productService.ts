
import type { Product } from "../types/product";

const PRODUCTS_URL = "/api/products";

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(PRODUCTS_URL);

  if (!response.ok) {
    throw new Error(`Erro HTTP: ${response.status}`);
  }

  const data: unknown = await response.json();

  if (
    typeof data !== "object" ||
    data === null ||
    !("products" in data) ||
    !Array.isArray(data.products)
  ) {
    throw new Error("A resposta não contém uma lista válida de produtos.");
  }

  return data.products as Product[];
}

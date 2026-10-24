import type { Product, ProductsApiResponse } from '../types/product';

const PRODUCTS_URL = '/api/econverse/produtos.json';

export async function fetchProducts(signal?: AbortSignal): Promise<Product[]> {
  const response = await fetch(PRODUCTS_URL, { signal });
  console.log(response);

  if (!response.ok) {
    throw new Error(`Não foi possível carregar os produtos (status ${response.status}).`);
  }

  const data: ProductsApiResponse = await response.json();

  return data.products.map((product, index) => ({ id: index, ...product }));
}

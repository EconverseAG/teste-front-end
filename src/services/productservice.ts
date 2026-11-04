import type { Product, ProductsResponse } from '../types/product';

const PRODUCTS_URL = '/api/produtos';

export async function getProducts(signal?: AbortSignal): Promise<Product[]> {
  const response = await fetch(PRODUCTS_URL, { signal });

  if (!response.ok) {
    throw new Error(`Falha ao carregar produtos (${response.status})`);
  }

  const data: ProductsResponse = await response.json();

  if (!data.success) {
    throw new Error('A API retornou success = false');
  }

  return data.products;
}
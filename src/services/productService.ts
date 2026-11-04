import type { ProductsResponse } from '@/types/product';

const PRODUCTS_API_URL = import.meta.env.VITE_PRODUCTS_API_URL;

export async function getProducts() {
  const response = await fetch(PRODUCTS_API_URL);

  if (!response.ok) {
    throw new Error('Erro ao buscar produtos.');
  }

  const data: ProductsResponse = await response.json();

  if (!data.success) {
    throw new Error('Não foi possível carregar os produtos.');
  }

  return data.products;
}

import type { ProductResponse } from '../types/product';

const PRODUCTS_URL = '/data/products.json';

export async function getProducts(signal?: AbortSignal) {
  const response = await fetch(PRODUCTS_URL, { signal });
  if (!response.ok) throw new Error(`Não foi possível carregar os produtos (${response.status}).`);

  const data: unknown = await response.json();
  if (!isProductResponse(data)) throw new Error('A resposta de produtos veio em um formato inesperado.');
  if (!data.success) throw new Error('A Econverse não conseguiu retornar os produtos.');
  // Keep the official API response locally so the page does not depend on CORS
  // headers that the source endpoint does not currently send.
  return data.products.map((product) => ({ ...product, photo: '/assets/foto-iphone.png' }));
}

function isProductResponse(value: unknown): value is ProductResponse {
  if (!value || typeof value !== 'object') return false;
  const response = value as Partial<ProductResponse>;
  return (
    typeof response.success === 'boolean' &&
    Array.isArray(response.products) &&
    response.products.every(
      (product) =>
        product &&
        typeof product.productName === 'string' &&
        typeof product.descriptionShort === 'string' &&
        typeof product.photo === 'string' &&
        typeof product.price === 'number',
    )
  );
}

export const formatPrice = (price: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);

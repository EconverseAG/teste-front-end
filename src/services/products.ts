import type { ProductApiResponse } from '../types';

const PRODUCTS_URL = '/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json';

export async function fetchProducts(signal?: AbortSignal): Promise<ProductApiResponse> {
  const response = await fetch(PRODUCTS_URL, { 
    signal
  });
  
  if (!response.ok) {
    throw new Error(`Falha ao carregar produtos: ${response.status}`);
  }
  
  return response.json();
}
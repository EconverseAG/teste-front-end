import { useEffect, useState } from 'react';
import type { ApiResponse, Product } from '../types/product';

// Endpoint do catálogo. Por padrão usa a cópia local servida em /public,
// mas pode ser apontado para a API real via VITE_PRODUCTS_API_URL.
const PRODUCTS_URL: string = import.meta.env.VITE_PRODUCTS_API_URL ?? '/products.json';

export type ProductsStatus = 'loading' | 'success' | 'error';

export interface ProductsState {
  products: Product[];
  status: ProductsStatus;
}

const INITIAL_STATE: ProductsState = {
  products: [],
  status: 'loading',
};

function isValidResponse(data: unknown): data is ApiResponse {
  return (
    typeof data === 'object' &&
    data !== null &&
    Array.isArray((data as ApiResponse).products)
  );
}

/**
 * Carrega o catálogo de produtos uma única vez e expõe o estado completo
 * (carregando / sucesso / erro) para que a UI não confunda "carregando"
 * com "sem produtos".
 */
export function useProducts(): ProductsState {
  const [state, setState] = useState<ProductsState>(INITIAL_STATE);

  useEffect(() => {
    const controller = new AbortController();
    let active = true;

    async function carregar(): Promise<void> {
      try {
        const response = await fetch(PRODUCTS_URL, { signal: controller.signal });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const data: unknown = await response.json();

        if (!isValidResponse(data)) {
          throw new Error('Formato de resposta inesperado');
        }

        if (active) {
          setState({ products: data.products, status: 'success' });
        }
      } catch (error) {
        // Requisição cancelada no unmount não é erro de aplicação.
        if (error instanceof DOMException && error.name === 'AbortError') {
          return;
        }

        if (active) {
          // Detalhe técnico fica no console; a UI exibe apenas a mensagem amigável.
          console.error('useProducts: falha ao carregar o catálogo.', error);
          setState({ products: [], status: 'error' });
        }
      }
    }

    void carregar();

    return () => {
      active = false;
      controller.abort();
    };
  }, []);

  return state;
}

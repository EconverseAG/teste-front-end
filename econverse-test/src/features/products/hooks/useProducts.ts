"use client";

import { useEffect, useState } from "react";
import { getProducts } from "@/src/features/products/services/products.service";
import type { Product } from "@/src/features/products/types/product";

type ProductsState = {
  products: Product[];
  isLoading: boolean;
  error: string | null;
};

export function useProducts() {
  const [state, setState] = useState<ProductsState>({
    products: [],
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const controller = new AbortController();

    async function loadProducts() {
      try {
        const products = await getProducts(controller.signal);
        setState({ products, isLoading: false, error: null });
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }

        setState({
          products: [],
          isLoading: false,
          error: error instanceof Error ? error.message : "Erro inesperado ao carregar produtos.",
        });
      }
    }

    loadProducts();

    return () => controller.abort();
  }, []);

  return state;
}

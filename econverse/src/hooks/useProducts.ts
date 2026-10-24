import { useEffect, useState } from 'react';
import { fetchProducts } from '../services/productService';
import type { Product } from '../types/product';

interface UseProductsResult {
  products: Product[];
  isLoading: boolean;
  errorMessage: string | null;
}

export function useProducts(): UseProductsResult {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetchProducts(controller.signal)
      .then(setProducts)
      .catch((error: Error) => {
        if (error.name !== 'AbortError') setErrorMessage(error.message);
      })
      .finally(() => {
        if (!controller.signal.aborted) setIsLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { products, isLoading, errorMessage };
}

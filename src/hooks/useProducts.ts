import { useEffect, useState } from 'react';
import { getProducts } from '../services/productservice';
import type { Product } from '../types/product';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    getProducts(controller.signal)
      .then(setProducts)
      .catch((err: Error) => {
        if (err.name !== 'AbortError') {
          console.error('Erro ao carregar produtos:', err);
          setError('Não foi possível carregar os produtos.');
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { products, loading, error };
}
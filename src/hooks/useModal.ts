import { useEffect, useState } from "react";
import type { Product } from "../types/product";
import { productService } from "../services/product-service";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const products = await productService.getAll();
        setProducts(products);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Erro desconhecido");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return { products, loading, error };
}

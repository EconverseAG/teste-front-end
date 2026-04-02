import type { Product, ProductResponse } from "../types/product";

const API_URL =
  "/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json";

export const productService = {
  getAll: async (): Promise<Product[]> => {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Falha ao buscar produtos");
    }

    const data: ProductResponse = await response.json();

    if (!data.success) {
      throw new Error("Falha na API");
    }

    return data.products;
  },
};

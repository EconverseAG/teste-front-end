/** Formato de cada produto retornado pelo produtos.json */
export interface ProductApiItem {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

export interface ProductsApiResponse {
  success?: boolean;
  products: ProductApiItem[];
}

/** Produto usado na aplicação (adiciona um id local para usar como key). */
export interface Product extends ProductApiItem {
  id: number;
  /** Opcional: o JSON não traz preço antigo, o card só exibe se existir. */
  oldPrice?: number;
}

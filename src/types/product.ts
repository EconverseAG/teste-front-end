export interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number; // em centavos (ex.: 149990 = R$ 1.499,90)
}

export interface ProductsResponse {
  success: boolean;
  products: Product[];
}
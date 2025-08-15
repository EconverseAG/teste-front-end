export type Product = {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
};

export type ProductApiResponse = {
  success: boolean;
  products: Product[];
};
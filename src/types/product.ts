export type Product = {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
};

export type ProductsResponse = {
  success: boolean;
  products: Product[];
};

export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  oldPrice?: number;
  installment?: string;
  category?: string;
};

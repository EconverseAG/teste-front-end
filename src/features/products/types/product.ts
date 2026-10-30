import type { z } from "zod";
import type { ApiProductSchema } from "@/features/products/lib/product.schema";

export type ApiProduct = z.infer<typeof ApiProductSchema>;

export interface Product {
  id: string;
  name: string;
  description: string;
  photo: string;
  price: number;
  listPrice?: number;
  installments: number;
  freeShipping: boolean;
}

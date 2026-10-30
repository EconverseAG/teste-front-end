import type { Product } from "@/features/products/types/product";

const PRODUCTS_PER_SHOWCASE = 4;

type ProductShowcases = [Product[], Product[], Product[]];

export function createProductShowcases(
  products: readonly Product[],
): ProductShowcases {
  if (products.length === 0) {
    return [[], [], []];
  }

  const showcaseSize = Math.min(PRODUCTS_PER_SHOWCASE, products.length);

  function createShowcase(startIndex: number): Product[] {
    return Array.from({ length: showcaseSize }, (_, offset) => {
      const productIndex = (startIndex + offset) % products.length;
      return products[productIndex];
    });
  }

  return [
    createShowcase(0),
    createShowcase(PRODUCTS_PER_SHOWCASE),
    createShowcase(PRODUCTS_PER_SHOWCASE * 2),
  ];
}

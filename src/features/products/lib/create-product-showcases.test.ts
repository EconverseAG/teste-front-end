import { describe, expect, it } from "vitest";
import type { Product } from "@/features/products/types/product";
import { createProductShowcases } from "./create-product-showcases";

function createProduct(index: number): Product {
  return {
    id: String(index),
    name: `Produto ${index}`,
    description: `Descrição do produto ${index}`,
    photo: `https://app.econverse.com.br/produto-${index}.png`,
    price: index * 100,
    installments: 2,
    freeShipping: index * 100 >= 200,
  };
}

describe("createProductShowcases", () => {
  it("distribui 10 produtos em 12 slots e reutiliza somente dois", () => {
    const products = Array.from({ length: 10 }, (_, index) =>
      createProduct(index),
    );

    const showcases = createProductShowcases(products);

    expect(
      showcases.map((showcase) => showcase.map((product) => product.id)),
    ).toEqual([
      ["0", "1", "2", "3"],
      ["4", "5", "6", "7"],
      ["8", "9", "0", "1"],
    ]);
  });

  it("retorna três vitrines vazias quando não há produtos", () => {
    expect(createProductShowcases([])).toEqual([[], [], []]);
  });

  it("não repete um produto dentro da mesma vitrine quando há menos de quatro", () => {
    const products = [createProduct(0), createProduct(1)];

    const showcases = createProductShowcases(products);

    for (const showcase of showcases) {
      expect(showcase).toHaveLength(2);
      expect(new Set(showcase.map((product) => product.id)).size).toBe(2);
    }
  });
});

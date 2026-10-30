import { describe, expect, it } from "vitest";
import {
  parseProductsResponse,
  productsApiResponseSchema,
} from "./product.schema";

const validProduct = {
  productName: "Iphone 11 PRO MAX BRANCO",
  descriptionShort: "Iphone 11 PRO MAX BRANCO",
  photo: "https://app.econverse.com.br/produto.png",
  price: 15000,
};

describe("productsApiResponseSchema", () => {
  it("aceita uma resposta válida", () => {
    const input = {
      success: true,
      products: [validProduct],
    };

    expect(parseProductsResponse(input)).toEqual(input);
  });

  it("aceita uma coleção vazia", () => {
    const input = {
      success: true,
      products: [],
    };

    expect(parseProductsResponse(input)).toEqual(input);
  });

  it("rejeita um produto sem nome", () => {
    const input = {
      success: true,
      products: [
        {
          descriptionShort: validProduct.descriptionShort,
          photo: validProduct.photo,
          price: validProduct.price,
        },
      ],
    };

    const result = productsApiResponseSchema.safeParse(input);

    expect(result.success).toBe(false);
  });

  it("rejeita preço com tipo incorreto", () => {
    const input = {
      success: true,
      products: [
        {
          ...validProduct,
          price: "15000",
        },
      ],
    };

    const result = productsApiResponseSchema.safeParse(input);

    expect(result.success).toBe(false);
  });

  it("rejeita URL de imagem inválida", () => {
    const input = {
      success: true,
      products: [
        {
          ...validProduct,
          photo: "produto.png",
        },
      ],
    };

    const result = productsApiResponseSchema.safeParse(input);

    expect(result.success).toBe(false);
  });

  it("rejeita uma resposta sem sucesso", () => {
    const input = {
      success: false,
      products: [validProduct],
    };

    const result = productsApiResponseSchema.safeParse(input);

    expect(result.success).toBe(false);
  });
});

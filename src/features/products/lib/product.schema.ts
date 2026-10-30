import { z } from "zod";

export const ApiProductSchema = z.object({
  productName: z.string(),
  descriptionShort: z.string(),
  photo: z.httpUrl(),
  price: z.number(),
});

export const productsApiResponseSchema = z.object({
  success: z.literal(true),
  products: z.array(ApiProductSchema),
});

export function parseProductsResponse(data: unknown) {
  const result = productsApiResponseSchema.safeParse(data);

  if (!result.success) {
    throw new Error("A API retornou uma estrutura de produtos invalid", {
      cause: result.error,
    });
  }

  return result.data;
}

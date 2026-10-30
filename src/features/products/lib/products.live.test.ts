import { expect, test } from "vitest";
import { productsApiResponseSchema } from "./product.schema";

const PRODUCTS_URL =
  "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json";

const shouldRunLiveTest = process.env.RUN_LIVE_API_TESTS === "true";

test.runIf(shouldRunLiveTest)(
  "a API real responde de acordo com o contrato atual",
  {
    timeout: 15_000,
  },
  async () => {
    const response = await fetch(PRODUCTS_URL);

    expect(response.ok).toBe(true);

    const data: unknown = await response.json();
    const result = productsApiResponseSchema.safeParse(data);

    if (!result.success) {
      throw new Error(
        `A API real não corresponde ao schema: ${JSON.stringify(
          result.error.issues,
        )}`,
      );
    }

    expect(result.data.success).toBe(true);
    expect(result.data.products.length).toBeGreaterThan(0);
  },
);

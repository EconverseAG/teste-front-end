import { beforeEach, describe, expect, it, vi } from "vitest";
import { getProducts } from "./products";

const PRODUCTS_URL =
  "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json";

const fetchMock = vi.fn<typeof fetch>();

function jsonResponse(body: unknown, init?: ResponseInit): Response {
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
    ...init,
  });
}

describe("getProducts", () => {
  beforeEach(() => {
    fetchMock.mockReset();
    vi.stubGlobal("fetch", fetchMock);
  });

  it("busca, valida e transforma os produtos", async () => {
    fetchMock.mockResolvedValueOnce(
      jsonResponse({
        success: true,
        products: [
          {
            productName: "Produto abaixo do limite",
            descriptionShort: "Descrição do primeiro produto",
            photo: "https://app.econverse.com.br/produto-1.png",
            price: 199.99,
          },
          {
            productName: "Produto com frete grátis",
            descriptionShort: "Descrição do segundo produto",
            photo: "https://app.econverse.com.br/produto-2.png",
            price: 200,
          },
        ],
      }),
    );

    const products = await getProducts();

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(PRODUCTS_URL, {
      next: {
        revalidate: 3600,
      },
    });

    expect(products).toEqual([
      {
        id: "0-Produto abaixo do limite",
        name: "Produto abaixo do limite",
        description: "Descrição do primeiro produto",
        photo: "https://app.econverse.com.br/produto-1.png",
        price: 199.99,
        installments: 2,
        freeShipping: false,
      },
      {
        id: "1-Produto com frete grátis",
        name: "Produto com frete grátis",
        description: "Descrição do segundo produto",
        photo: "https://app.econverse.com.br/produto-2.png",
        price: 200,
        installments: 2,
        freeShipping: true,
      },
    ]);
  });

  it("retorna uma coleção vazia quando a API retorna uma coleção vazia", async () => {
    fetchMock.mockResolvedValueOnce(
      jsonResponse({
        success: true,
        products: [],
      }),
    );

    await expect(getProducts()).resolves.toEqual([]);
  });

  it("propaga uma falha de rede com contexto", async () => {
    const cause = new TypeError("fetch failed");

    fetchMock.mockRejectedValueOnce(cause);

    await expect(getProducts()).rejects.toMatchObject({
      message: expect.stringContaining("acessar a API de produtos"),
      cause,
    });
  });

  it("rejeita uma resposta HTTP sem sucesso", async () => {
    fetchMock.mockResolvedValueOnce(
      new Response(null, {
        status: 503,
        statusText: "Service Unavailable",
      }),
    );

    await expect(getProducts()).rejects.toThrow(
      /status 503 Service Unavailable/,
    );
  });

  it("rejeita um corpo que não contém JSON válido", async () => {
    fetchMock.mockResolvedValueOnce(
      new Response("isto não é JSON", {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    );

    await expect(getProducts()).rejects.toThrow(/API de produtos retornou/);
  });

  it("rejeita uma resposta incompatível com o schema", async () => {
    fetchMock.mockResolvedValueOnce(
      jsonResponse({
        success: true,
        products: [
          {
            productName: "Produto inválido",
            descriptionShort: "Preço enviado como string",
            photo: "https://app.econverse.com.br/produto.png",
            price: "15000",
          },
        ],
      }),
    );

    await expect(getProducts()).rejects.toThrow(/estrutura de produtos/);
  });
});

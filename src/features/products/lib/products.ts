import type { ApiProduct, Product } from "@/features/products/types/product";
import { parseProductsResponse } from "@/features/products/lib/product.schema";

const PRODUCTS_URL =
  "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json";

const FREE_SHIPPING_THRESHOLD = 200;

async function fetchProductsResponse(): Promise<unknown> {
  let response: Response;

  try {
    response = await fetch(PRODUCTS_URL, {
      next: { revalidate: 3600 },
    });
  } catch (cause) {
    throw new Error("Nao foi possivel acessar a API de produtos.", {
      cause,
    });
  }

  if (!response.ok) {
    const statusText = response.statusText ? ` ${response.statusText}` : "";
    throw new Error(
      `A Api de produtos respondeu com o status ${response.status}${statusText}.`,
    );
  }

  try {
    const data: unknown = await response.json();

    return data;
  } catch (cause) {
    throw new Error("A API de produtos retornou um Json invalido.", {
      cause,
    });
  }
}

function toProduct(item: ApiProduct, index: number): Product {
  return {
    id: `${index}-${item.productName}`,
    name: item.productName,
    description: item.descriptionShort,
    photo: item.photo,
    price: item.price,
    installments: 2,
    freeShipping: item.price >= FREE_SHIPPING_THRESHOLD,
  };
}

export async function getProducts(): Promise<Product[]> {
  const rawData = await fetchProductsResponse();
  const data = parseProductsResponse(rawData);

  return data.products.map(toProduct);
}

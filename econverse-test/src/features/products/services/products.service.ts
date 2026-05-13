import type { Product } from "@/src/features/products/types/product";
import { fallbackProducts } from "@/src/shared/data/fallback-products";

const PRODUCTS_API_URL = process.env.NEXT_PUBLIC_PRODUCTS_API_URL_CLIENT ?? "/api/products";

type ProductRecord = Record<string, unknown>;

function isRecord(value: unknown): value is ProductRecord {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function getString(record: ProductRecord, keys: string[], fallback = "") {
  for (const key of keys) {
    const value = record[key];

    if (typeof value === "string" && value.trim()) {
      return value.trim();
    }
  }

  return fallback;
}

function getNumber(record: ProductRecord, keys: string[], fallback = 0) {
  for (const key of keys) {
    const value = record[key];

    if (typeof value === "number" && Number.isFinite(value)) {
      return value;
    }

    if (typeof value === "string") {
      const normalizedValue = Number(value.replace(/\./g, "").replace(",", "."));

      if (Number.isFinite(normalizedValue)) {
        return normalizedValue;
      }
    }
  }

  return fallback;
}

function getProductList(payload: unknown): ProductRecord[] {
  if (Array.isArray(payload)) {
    return payload.filter(isRecord);
  }

  if (!isRecord(payload)) {
    return [];
  }

  const possibleLists = [payload.products, payload.items, payload.data, payload.results];
  const list = possibleLists.find(Array.isArray);

  return Array.isArray(list) ? list.filter(isRecord) : [];
}

function normalizeProduct(product: ProductRecord, index: number): Product {
  const name = getString(product, ["productName", "name", "title"], `Produto ${index + 1}`);
  const description = getString(
    product,
    ["descriptionShort", "description", "details"],
    "Produto selecionado Econverse.",
  );
  const price = getNumber(product, ["price", "priceValue", "value"]);
  const oldPrice = getNumber(product, ["oldPrice", "listPrice", "priceBefore"]);
  const image = getString(product, ["photo", "image", "imageUrl", "thumbnail"], "/window.svg");
  const id = getString(product, ["id", "sku", "productId"], `${index}-${name}`);

  return {
    id,
    name,
    description,
    image,
    price,
    oldPrice: oldPrice > price ? oldPrice : undefined,
    installment: getString(product, ["installment", "installments"], "10x sem juros"),
    category: getString(product, ["category", "department"], "Tecnologia"),
  };
}

export async function getProducts(signal?: AbortSignal): Promise<Product[]> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 3500);

  if (signal) {
    signal.addEventListener("abort", () => controller.abort(), { once: true });
  }

  try {
    const response = await fetch(PRODUCTS_API_URL, {
      cache: "no-store",
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error("Não foi possível carregar os produtos.");
    }

    const payload: unknown = await response.json();
    const products = getProductList(payload).map(normalizeProduct);

    return products.length > 0 ? products : fallbackProducts;
  } catch {
    return fallbackProducts;
  } finally {
    clearTimeout(timeout);
  }
}

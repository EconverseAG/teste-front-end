import { NextResponse } from "next/server";
import { fallbackProducts } from "@/src/shared/data/fallback-products";

const PRODUCTS_API_URL =
  process.env.NEXT_PUBLIC_PRODUCTS_API_URL ??
  "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json";

export async function GET() {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 2500);

  try {
    const response = await fetch(PRODUCTS_API_URL, {
      next: { revalidate: 300 },
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error("External products request failed.");
    }

    const payload: unknown = await response.json();

    return NextResponse.json(payload);
  } catch {
    return NextResponse.json({ products: fallbackProducts, source: "fallback" });
  } finally {
    clearTimeout(timeout);
  }
}

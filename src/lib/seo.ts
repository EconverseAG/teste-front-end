import type { Product } from "@/lib/catalog"

/** ItemList de Product (schema.org) para rich results da vitrine. */
export function buildProductListJsonLd(products: readonly Product[]): string {
  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Produtos relacionados",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        description: product.description,
        image: product.photo,
        offers: {
          "@type": "Offer",
          price: product.price.toFixed(2),
          priceCurrency: "BRL",
          availability: "https://schema.org/InStock",
        },
      },
    })),
  }

  return JSON.stringify(data).replace(/</g, "\\u003c")
}

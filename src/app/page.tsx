import { HomeTemplate } from "@/components/templates/HomeTemplate/HomeTemplate"
import { buildProductListJsonLd } from "@/lib/seo"
import { getProducts } from "@/services/products"

export const revalidate = 3600

export default async function HomePage() {
  const products = await getProducts()

  return (
    <>
      <HomeTemplate products={products} />
      {products.length > 0 && (
        <script
          type="application/ld+json"
          // JSON gerado por nós a partir de dados validados; `<` escapado contra injeção.
          dangerouslySetInnerHTML={{ __html: buildProductListJsonLd(products) }}
        />
      )}
    </>
  )
}

"use client"

import { clsx } from "clsx"
import { Fragment, useCallback, useId, useState } from "react"
import { CategoryTabs, SearchSummary, SectionTitle } from "@/components/molecules"
import { Reveal } from "@/components/motion/Reveal"
import { useShowcaseProducts } from "@/hooks/useShowcaseProducts"
import { CATEGORY_TABS, type Product } from "@/lib/catalog"
import { useCart } from "@/providers/CartProvider"
import { ProductCarousel } from "../ProductCarousel/ProductCarousel"
import { ProductModal } from "../ProductModal/ProductModal"
import styles from "./ProductShowcase.module.scss"

type ProductShowcaseProps = {
  id?: string
  title?: string
  products: readonly Product[]
  /** Vitrine principal: abas de categoria. As demais mostram "Ver todos". */
  withTabs?: boolean
  /** Mostra os resultados da busca do header. */
  searchable?: boolean
  /** Acima da dobra: imagens com prioridade e sem animação de entrada. */
  priority?: boolean
  className?: string
}

export function ProductShowcase({
  id,
  title = "Produtos relacionados",
  products,
  withTabs = false,
  searchable = false,
  priority = false,
  className,
}: ProductShowcaseProps) {
  const uid = useId().replace(/:/g, "")
  const headingId = `${uid}-title`
  const panelId = `${uid}-panel`
  const { tab, setTab, visible, search } = useShowcaseProducts(products, { withTabs, searchable })
  const [selected, setSelected] = useState<Product | null>(null)
  const { addItem } = useCart()
  const showTabs = withTabs && !search
  const activeLabel = CATEGORY_TABS.find((item) => item.id === tab)?.label ?? ""
  // Acima da dobra a vitrine já nasce visível: animar a entrada só atrasaria o primeiro paint.
  const Wrapper = priority ? Fragment : Reveal

  const handleBuy = useCallback(
    (product: Product, quantity: number) => {
      addItem(product, quantity)
      setSelected(null)
    },
    [addItem],
  )

  return (
    <section id={id} aria-labelledby={headingId} className={clsx(styles.showcase, className)}>
      <Wrapper>
        <SectionTitle
          id={headingId}
          title={title}
          action={withTabs ? undefined : { label: "Ver todos", href: "#ofertas" }}
        />

        {search && (
          <div className={styles.tabs}>
            <SearchSummary search={search} />
          </div>
        )}

        {showTabs && (
          <div className={styles.tabs}>
            <CategoryTabs
              tabs={CATEGORY_TABS}
              active={tab}
              onChange={setTab}
              panelId={panelId}
              idPrefix={uid}
              label="Categorias de produtos"
            />
          </div>
        )}

        <div
          id={panelId}
          className={styles.panel}
          {...(showTabs ? { role: "tabpanel", "aria-labelledby": `${uid}-tab-${tab}` } : {})}
        >
          <ProductCarousel
            products={visible}
            onSelect={setSelected}
            // Busca: lista fixa enquanto digita (não remonta a cada tecla).
            listKey={search ? "busca" : tab}
            label={search ? `Resultados da busca: ${search.query}` : withTabs ? `${title}: ${activeLabel}` : title}
            emptyTitle={search ? `Nenhum produto encontrado para “${search.query}”.` : undefined}
            priority={priority}
          />
        </div>
      </Wrapper>

      <ProductModal product={selected} onClose={() => setSelected(null)} onBuy={handleBuy} />
    </section>
  )
}

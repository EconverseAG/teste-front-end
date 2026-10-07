"use client"

import { useDeferredValue, useMemo, useState } from "react"
import { filterByCategory, searchProducts, type CategoryTab, type Product } from "@/lib/catalog"
import { useSearch } from "@/providers/SearchProvider"

type ShowcaseOptions = { withTabs: boolean; searchable: boolean }

export type ShowcaseSearch = { query: string; exact: boolean; count: number; clear: () => void }

/**
 * Decide o que a vitrine mostra: a busca do header, quando houver termo,
 * ou a aba de categoria ativa. A busca usa um valor adiado para digitar
 * não travar enquanto a lista é refeita.
 */
export function useShowcaseProducts(products: readonly Product[], { withTabs, searchable }: ShowcaseOptions) {
  const [tab, setTab] = useState<CategoryTab["id"]>(withTabs ? "celular" : "todos")
  const { query, setQuery } = useSearch()
  const term = useDeferredValue(searchable ? query.trim() : "")

  return useMemo(() => {
    if (!term) return { tab, setTab, visible: filterByCategory(products, tab), search: null }

    const { matches, related } = searchProducts(products, term)
    const exact = matches.length > 0
    const search: ShowcaseSearch = { query: term, exact, count: matches.length, clear: () => setQuery("") }
    return { tab, setTab, visible: exact ? matches : related, search }
  }, [products, tab, term, setQuery])
}

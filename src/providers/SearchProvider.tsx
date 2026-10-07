"use client"

import { createContext, useContext, useMemo, useState, type ReactNode } from "react"

type SearchContextValue = { query: string; setQuery: (query: string) => void }

const SearchContext = createContext<SearchContextValue | null>(null)

/** Termo buscado no header, lido pela vitrine principal. */
export function SearchProvider({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState("")
  const value = useMemo(() => ({ query, setQuery }), [query])
  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
}

export function useSearch(): SearchContextValue {
  const context = useContext(SearchContext)
  if (!context) throw new Error("useSearch deve ser usado dentro de <SearchProvider>")
  return context
}

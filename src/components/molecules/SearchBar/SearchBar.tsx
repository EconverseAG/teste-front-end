"use client"

import { clsx } from "clsx"
import type { FormEvent } from "react"
import { Icon } from "@/components/atoms"
import { useSearch } from "@/providers/SearchProvider"
import styles from "./SearchBar.module.scss"

type SearchBarProps = {
  /** id da vitrine que mostra os resultados (rola até ela ao buscar). */
  resultsId: string
  className?: string
}

/** Filtra a vitrine enquanto digita; Enter/lupa leva até os resultados. */
export function SearchBar({ resultsId, className }: SearchBarProps) {
  const { query, setQuery } = useSearch()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    document.getElementById(resultsId)?.scrollIntoView({ block: "start" })
  }

  return (
    <form role="search" action={`#${resultsId}`} className={clsx(styles.search, className)} onSubmit={handleSubmit}>
      <label htmlFor="site-search" className="sr-only">
        Buscar produtos
      </label>
      <input
        id="site-search"
        name="q"
        type="search"
        placeholder="O que você está buscando?"
        autoComplete="off"
        enterKeyHint="search"
        aria-controls={resultsId}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        className={styles.input}
      />
      <button type="submit" className={styles.submit} aria-label="Buscar">
        <Icon name="search" size={28} />
      </button>
    </form>
  )
}

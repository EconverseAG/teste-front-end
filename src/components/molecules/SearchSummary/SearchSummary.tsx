import type { ShowcaseSearch } from "@/hooks/useShowcaseProducts"
import styles from "./SearchSummary.module.scss"

/** Cabeçalho dos resultados da busca, no lugar das abas. */
export function SearchSummary({ search }: { search: ShowcaseSearch }) {
  const { query, exact, count, clear } = search

  return (
    <div className={styles.summary} role="status">
      <p className={styles.text}>
        {exact ? (
          <>
            {count} {count === 1 ? "resultado" : "resultados"} para <strong>“{query}”</strong>
          </>
        ) : (
          <>
            Nenhum resultado exato para <strong>“{query}”</strong>. Veja produtos parecidos:
          </>
        )}
      </p>
      <button type="button" className={styles.clear} onClick={clear}>
        Limpar busca
      </button>
    </div>
  )
}

"use client"

import { clsx } from "clsx"
import { motion } from "framer-motion"
import { useRef, type KeyboardEvent } from "react"
import type { CategoryTab } from "@/lib/catalog"
import styles from "./CategoryTabs.module.scss"

type CategoryTabsProps = {
  tabs: readonly CategoryTab[]
  active: CategoryTab["id"]
  onChange: (id: CategoryTab["id"]) => void
  /** id do painel controlado (aria-controls). */
  panelId: string
  /** Prefixo único para os ids das abas (mais de uma vitrine na página). */
  idPrefix: string
  label: string
}

/** Abas no padrão WAI-ARIA: setas/Home/End movem o foco e ativam a aba. */
export function CategoryTabs({ tabs, active, onChange, panelId, idPrefix, label }: CategoryTabsProps) {
  const refs = useRef<(HTMLButtonElement | null)[]>([])

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = tabs.length - 1
    const target = { ArrowRight: index === last ? 0 : index + 1, ArrowLeft: index === 0 ? last : index - 1, Home: 0, End: last }[
      event.key
    ]
    if (target === undefined) return
    event.preventDefault()
    const tab = tabs[target]
    if (!tab) return
    onChange(tab.id)
    refs.current[target]?.focus()
  }

  return (
    <div role="tablist" aria-label={label} className={styles.tablist}>
      {tabs.map((tab, index) => {
        const selected = tab.id === active
        return (
          <button
            key={tab.id}
            ref={(element) => {
              refs.current[index] = element
            }}
            id={`${idPrefix}-tab-${tab.id}`}
            type="button"
            role="tab"
            aria-selected={selected}
            aria-controls={panelId}
            tabIndex={selected ? 0 : -1}
            className={clsx(styles.tab, selected && styles.active)}
            onClick={() => onChange(tab.id)}
            onKeyDown={(event) => handleKeyDown(event, index)}
          >
            {selected && (
              <motion.span
                layoutId={`${idPrefix}-indicator`}
                className={styles.indicator}
                transition={{ type: "spring", stiffness: 500, damping: 40 }}
              />
            )}
            <span className={styles.label}>{tab.label}</span>
          </button>
        )
      })}
    </div>
  )
}

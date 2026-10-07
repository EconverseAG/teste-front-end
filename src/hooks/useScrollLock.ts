"use client"

import { useEffect } from "react"

/** Trava o scroll da página enquanto `locked` for true (modal aberto). */
export function useScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return
    const root = document.documentElement
    // Compensa a barra de rolagem que some, para o layout não "pular".
    const scrollbar = window.innerWidth - root.clientWidth
    root.style.paddingRight = scrollbar > 0 ? `${scrollbar}px` : ""
    root.dataset.scrollLocked = ""
    return () => {
      delete root.dataset.scrollLocked
      root.style.paddingRight = ""
    }
  }, [locked])
}

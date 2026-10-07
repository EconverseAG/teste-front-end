"use client"

import { useEffect, useRef, useState } from "react"
import { useScrollLock } from "./useScrollLock"

/**
 * <dialog> nativo aberto com showModal() enquanto o componente estiver montado:
 * top layer, foco preso e o resto da página inerte de graça. Ao desmontar
 * (depois da animação de saída) fecha e devolve o foco a quem abriu, ou ao
 * `fallbackFocusId` quando quem abriu já saiu do DOM (ex.: botão de outro modal).
 */
export function useModalDialog(fallbackFocusId?: string) {
  const ref = useRef<HTMLDialogElement>(null)
  // Lido no render, antes do commit: um autoFocus interno já roubaria o foco no effect.
  const [trigger] = useState(() => (typeof document === "undefined" ? null : (document.activeElement as HTMLElement | null)))

  useScrollLock(true)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (!dialog.open) dialog.showModal()
    return () => {
      if (dialog.open) dialog.close()
      const target = trigger?.isConnected ? trigger : fallbackFocusId ? document.getElementById(fallbackFocusId) : null
      target?.focus({ preventScroll: true })
    }
  }, [trigger, fallbackFocusId])

  return ref
}

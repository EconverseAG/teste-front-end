"use client"

import { useCallback, useEffect, useState } from "react"

type CarouselState = { canPrev: boolean; canNext: boolean }

function readState(track: HTMLElement): CarouselState {
  // Tolerância de 2px: subpixel no fim do scroll não pode deixar a seta ativa.
  const maxScroll = track.scrollWidth - track.clientWidth
  return { canPrev: track.scrollLeft > 2, canNext: track.scrollLeft < maxScroll - 2 }
}

/** Quantos px andar para avançar exatamente os itens visíveis. */
export function pageDistance(track: HTMLElement): number {
  const item = track.firstElementChild as HTMLElement | null
  const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0
  if (!item || item.offsetWidth === 0) return track.clientWidth
  const step = item.offsetWidth + gap
  const perPage = Math.max(1, Math.floor((track.clientWidth + gap) / step))
  return perPage * step
}

/**
 * Carrossel sobre scroll nativo (scroll-snap): swipe, teclado e inércia vêm do
 * navegador. O hook só move uma "página" por clique e informa quando cada seta
 * deve desabilitar. Usa callback ref porque a lista é remontada a cada aba.
 */
export function useCarousel<T extends HTMLElement>() {
  const [track, setTrack] = useState<T | null>(null)
  const [state, setState] = useState<CarouselState>({ canPrev: false, canNext: false })

  useEffect(() => {
    if (!track) return
    const update = () => {
      const next = readState(track)
      setState((prev) => (prev.canPrev === next.canPrev && prev.canNext === next.canNext ? prev : next))
    }
    update()
    track.addEventListener("scroll", update, { passive: true })
    const observer = new ResizeObserver(update)
    observer.observe(track)

    // Marca os itens fora da janela: a sombra deles não pode "vazar" para
    // dentro da área visível (o respiro lateral é menor que o blur).
    const visibility = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ;(entry.target as HTMLElement).dataset.inView = String(entry.intersectionRatio >= 0.5)
        }
      },
      { root: track, threshold: [0, 0.5, 1] },
    )
    for (const child of Array.from(track.children)) visibility.observe(child)

    return () => {
      track.removeEventListener("scroll", update)
      observer.disconnect()
      visibility.disconnect()
    }
  }, [track])

  const scrollByPage = useCallback(
    (direction: 1 | -1) => {
      track?.scrollBy({ left: direction * pageDistance(track), behavior: "smooth" })
    },
    [track],
  )

  return {
    trackRef: setTrack,
    ...state,
    prev: useCallback(() => scrollByPage(-1), [scrollByPage]),
    next: useCallback(() => scrollByPage(1), [scrollByPage]),
  }
}

"use client"

import { clsx } from "clsx"
import { useEffect, useState } from "react"
import { Icon } from "@/components/atoms"
import styles from "./ScrollToTop.module.scss"

const MIN_SCROLL = 400

/** Botão flutuante "voltar ao topo" (ScrollToTopButton do ij-ecommerce). */
export function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const update = () => setVisible(window.scrollY > Math.max(MIN_SCROLL, window.innerHeight * 0.6))
    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [])

  function scrollToTop() {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" })
  }

  return (
    <button
      type="button"
      aria-label="Voltar ao topo"
      title="Voltar ao topo"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={clsx(styles.button, visible && styles.visible)}
      onClick={scrollToTop}
    >
      <Icon name="arrowUp" size={20} />
    </button>
  )
}

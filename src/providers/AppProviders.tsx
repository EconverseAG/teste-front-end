"use client"

import { MotionConfig } from "framer-motion"
import type { ReactNode } from "react"
import { CartProvider } from "./CartProvider"
import { SearchProvider } from "./SearchProvider"

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <SearchProvider>
        <CartProvider>{children}</CartProvider>
      </SearchProvider>
    </MotionConfig>
  )
}

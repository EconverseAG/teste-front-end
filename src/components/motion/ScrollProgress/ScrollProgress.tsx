"use client"

import { motion, useScroll, useSpring } from "framer-motion"
import styles from "./ScrollProgress.module.scss"

/** Filete no topo da janela que acompanha o quanto da página já foi lido. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 })

  return <motion.div aria-hidden="true" className={styles.bar} style={{ scaleX }} />
}

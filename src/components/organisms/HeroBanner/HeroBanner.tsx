"use client"

import Image from "next/image"
import { motion, type Variants } from "framer-motion"
import { Button } from "@/components/atoms"
import styles from "./HeroBanner.module.scss"

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export function HeroBanner() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <motion.div
        className={styles.media}
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image src="/images/hero.jpg" alt="" fill priority sizes="100vw" className={styles.image} />
      </motion.div>

      <motion.div className={styles.content} variants={container} initial="hidden" animate="visible">
        <motion.h1 id="hero-title" className={styles.title} variants={item}>
          Venha conhecer nossas promoções
        </motion.h1>
        <motion.p className={styles.subtitle} variants={item}>
          <strong className={styles.highlight}>50% Off</strong> nos produtos
        </motion.p>
        <motion.div variants={item}>
          <Button href="#ofertas" variant="accent" className={styles.cta}>
            Ver produto
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}

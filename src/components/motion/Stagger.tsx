"use client"

import { motion, type HTMLMotionProps, type Variants } from "framer-motion"

const group: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
}

const child: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.94 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

/** Lista que entra em cascata quando chega à tela (uma vez só). */
export function StaggerList({ children, ...rest }: HTMLMotionProps<"ul">) {
  return (
    <motion.ul
      variants={group}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      {...rest}
    >
      {children}
    </motion.ul>
  )
}

export function StaggerItem({ children, ...rest }: HTMLMotionProps<"li">) {
  return (
    <motion.li variants={child} {...rest}>
      {children}
    </motion.li>
  )
}

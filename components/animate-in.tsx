"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"

type Props = {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  duration?: number
  once?: boolean
}

export function AnimateIn({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.6,
  once = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once, margin: "-80px" })

  const offsets = {
    up: { y: 48, x: 0 },
    down: { y: -48, x: 0 },
    left: { y: 0, x: 48 },
    right: { y: 0, x: -48 },
    none: { y: 0, x: 0 },
  }

  const { x, y } = offsets[direction]

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y, x }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y, x }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
  once = true,
}: {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
  once?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once, margin: "-60px" })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        visible: { transition: { staggerChildren: staggerDelay } },
        hidden: {},
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 32 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
      }}
    >
      {children}
    </motion.div>
  )
}

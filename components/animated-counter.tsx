"use client"

import { useEffect, useRef } from "react"
import { useInView, useMotionValue, useSpring, animate } from "motion/react"

type Props = {
  to: number
  duration?: number
  suffix?: string
  prefix?: string
  decimals?: number
  className?: string
}

export function AnimatedCounter({
  to,
  duration = 1.8,
  suffix = "",
  prefix = "",
  decimals = 0,
  className,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })
  const motionVal = useMotionValue(0)
  const spring = useSpring(motionVal, { stiffness: 60, damping: 20, mass: 0.8 })

  useEffect(() => {
    if (!inView) return
    animate(motionVal, to, { duration, ease: "easeOut" })
  }, [inView, to, duration, motionVal])

  useEffect(() => {
    return spring.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent =
          prefix + v.toFixed(decimals).replace(".", ",") + suffix
      }
    })
  }, [spring, prefix, suffix, decimals])

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  )
}

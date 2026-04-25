"use client"

import Image from "next/image"
import Link from "next/link"
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "motion/react"
import { useRef, useState, useEffect } from "react"
import { Star, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

// ─── Cycling text ─────────────────────────────────────────────────────────

const roles = [
  "Professor e Educador",
  "Servidor Público",
  "Vereador — 3 mandatos",
  "Presidente da Câmara",
  "Prefeito de Itaberá",
  "Pré-candidato a Deputado",
]

function CyclingText() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2600)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="h-7 sm:h-8 overflow-hidden relative">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          className="absolute left-0 top-0 text-sm sm:text-base font-semibold text-brand-gold tracking-wide whitespace-nowrap"
          initial={{ y: 28, opacity: 0, filter: "blur(6px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: -28, opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

// ─── Floating particles ────────────────────────────────────────────────────

const particles = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 14 + 8,
  delay: Math.random() * 6,
  opacity: Math.random() * 0.35 + 0.08,
}))

function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() > 0.5 ? 20 : -20, 0],
            opacity: [p.opacity, p.opacity * 2.5, p.opacity],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

// ─── Aurora background ────────────────────────────────────────────────────

function Aurora() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Primary aurora blob */}
      <motion.div
        className="absolute -top-40 -left-40 w-[800px] h-[800px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(29,78,216,0.45) 0%, rgba(29,78,216,0.15) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 80, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Secondary aurora blob — gold */}
      <motion.div
        className="absolute -bottom-20 -right-20 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(180,83,9,0.3) 0%, rgba(217,119,6,0.12) 40%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 40, -60, 0],
          scale: [1, 0.85, 1.15, 1],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      {/* Tertiary aurora blob — lighter blue */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(99,102,241,0.2) 0%, rgba(139,92,246,0.08) 40%, transparent 70%)",
          filter: "blur(90px)",
        }}
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -70, 30, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 8 }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Scanline overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.8) 2px, rgba(255,255,255,0.8) 3px)",
          backgroundSize: "100% 4px",
        }}
      />
    </div>
  )
}

// ─── Word-by-word headline ────────────────────────────────────────────────

function AnimatedHeadline() {
  const words = ["De", "Itaberá", "para", "representar", "nossa", "região", "com"]
  const highlight = ["experiência,", "seriedade", "e", "compromisso."]

  const wordVariants = {
    hidden: { opacity: 0, y: 40, rotateX: -40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: 0.3 + i * 0.07,
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    }),
  }

  return (
    <h1
      className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.15] mb-4 sm:mb-6"
      style={{ perspective: "800px" }}
    >
      <span className="inline-flex flex-wrap gap-x-3 gap-y-1">
        {words.map((word, i) => (
          <motion.span
            key={word + i}
            custom={i}
            variants={wordVariants}
            initial="hidden"
            animate="visible"
            className="inline-block"
          >
            {word}
          </motion.span>
        ))}
      </span>{" "}
      <span className="inline-flex flex-wrap gap-x-3 gap-y-1">
        {highlight.map((word, i) => (
          <motion.span
            key={word + i}
            custom={words.length + i}
            variants={wordVariants}
            initial="hidden"
            animate="visible"
            className="inline-block text-brand-gold"
          >
            {word}
          </motion.span>
        ))}
      </span>
    </h1>
  )
}

// ─── Mouse parallax hook ──────────────────────────────────────────────────

function useMouseParallax(strength = 20) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 50, damping: 20 })
  const springY = useSpring(y, { stiffness: 50, damping: 20 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      x.set(((e.clientX - cx) / cx) * strength)
      y.set(((e.clientY - cy) / cy) * strength)
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [x, y, strength])

  return { x: springX, y: springY }
}

// ─── Hero ─────────────────────────────────────────────────────────────────

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const photoScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  const { x: mx, y: my } = useMouseParallax(14)

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-brand-navy"
    >
      {/* Aurora animated background */}
      <Aurora />

      {/* Floating particles */}
      <Particles />

      {/* Background photo with parallax + mouse parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y: photoY, scale: photoScale, x: mx, rotateY: 0 }}
      >
        <Image
          src="/a3.jpeg"
          alt="Alex Lacerda"
          fill
          priority
          className="object-cover object-center opacity-20"
          sizes="100vw"
        />
        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/85 to-brand-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-brand-navy/20" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full pt-24 pb-20 sm:pt-32 sm:pb-28 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        style={{ y: textY, opacity: sectionOpacity }}
      >
        {/* Left: text */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="mb-5 sm:mb-6"
          >
            <span className="inline-flex items-center gap-2 bg-brand-gold/15 border border-brand-gold/30 text-brand-gold rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium relative overflow-hidden">
              <Star size={12} className="fill-brand-gold shrink-0" />
              Pré-candidato a Deputado
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
              />
            </span>
          </motion.div>

          {/* Animated headline */}
          <AnimatedHeadline />

          {/* Cycling role */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="flex items-center gap-2 mb-5 sm:mb-7"
          >
            <motion.div
              className="w-6 h-[2px] bg-brand-gold rounded-full"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.1, duration: 0.4 }}
            />
            <CyclingText />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="text-sm sm:text-base text-white/65 leading-relaxed mb-8 sm:mb-10 max-w-lg"
          >
            Professor, gestor público e prefeito eleito com{" "}
            <span className="text-white font-semibold">73,94% dos votos</span>. Uma trajetória
            construída no serviço público, na educação e na vida real da população de Itaberá e região.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.55 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <Button
                asChild
                size="lg"
                className="relative overflow-hidden bg-brand-gold text-white border-none h-12 px-7 text-sm sm:text-base shadow-xl shadow-brand-gold/25 font-semibold"
              >
                <Link href="/#quem-e-alex">
                  Conheça a trajetória
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "200%" }}
                    transition={{ duration: 0.5 }}
                  />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/5 backdrop-blur-sm border-white/20 text-white hover:bg-white/12 hover:border-white/40 hover:text-white h-12 px-7 text-sm sm:text-base"
              >
                <Link href="/projetos">Ver projetos</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.7 }}
            className="mt-10 sm:mt-12 flex gap-6 sm:gap-8"
          >
            {[
              { value: "73,94%", label: "dos votos" },
              { value: "3×", label: "vereador" },
              { value: "25+", label: "anos de serviço" },
            ].map(({ value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + i * 0.1, duration: 0.4 }}
                className="flex flex-col"
              >
                <span className="text-xl sm:text-2xl font-bold text-white leading-none">{value}</span>
                <span className="text-xs text-white/45 mt-0.5">{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right: photo card */}
        <motion.div
          className="hidden lg:block relative"
          initial={{ opacity: 0, x: 60, scale: 0.94 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          style={{ x: useTransform(mx, (v) => v * -0.6) }}
        >
          {/* Decorative rings */}
          <motion.div
            className="absolute -inset-4 rounded-3xl border border-white/8"
            animate={{ rotate: [0, 2, -2, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -inset-8 rounded-3xl border border-white/4"
            animate={{ rotate: [0, -3, 3, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />

          {/* Photo */}
          <motion.div
            className="relative rounded-2xl overflow-hidden aspect-[3/4] max-w-[340px] mx-auto shadow-2xl shadow-black/50"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src="/a1.jpeg"
              alt="Alex Lacerda"
              fill
              className="object-cover object-top"
              sizes="340px"
            />
            {/* Photo gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent" />

            {/* Glow border */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{
                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.12), 0 0 60px rgba(29,78,216,0.3)",
              }}
              animate={{
                boxShadow: [
                  "inset 0 0 0 1px rgba(255,255,255,0.12), 0 0 40px rgba(29,78,216,0.2)",
                  "inset 0 0 0 1px rgba(255,255,255,0.2), 0 0 80px rgba(29,78,216,0.45)",
                  "inset 0 0 0 1px rgba(255,255,255,0.12), 0 0 40px rgba(29,78,216,0.2)",
                ],
              }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Floating vote badge */}
          <motion.div
            className="absolute -bottom-5 -left-6 bg-brand-navy border border-white/10 backdrop-blur-md text-white rounded-xl px-4 py-3 shadow-xl"
            initial={{ opacity: 0, scale: 0.7, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.55, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.06 }}
            style={{ y: useTransform(my, (v) => v * 0.5) }}
          >
            <p className="text-2xl font-bold text-brand-gold leading-none">73,94%</p>
            <p className="text-xs text-white/55 mt-0.5">votos válidos</p>
          </motion.div>

          {/* Floating credential badge */}
          <motion.div
            className="absolute -top-4 -right-4 bg-primary/90 backdrop-blur-md text-white rounded-xl px-3 py-2 shadow-xl border border-white/10"
            initial={{ opacity: 0, scale: 0.7, y: -16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.55, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.06 }}
            style={{ y: useTransform(my, (v) => v * -0.4) }}
          >
            <p className="text-xs font-bold leading-tight">Prefeito de Itaberá</p>
            <p className="text-[10px] text-white/60 mt-0.5">PSDB — Eleito 2024</p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  )
}

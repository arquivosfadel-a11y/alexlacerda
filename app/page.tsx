"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/animate-in"
import { AnimatedCounter } from "@/components/animated-counter"
import {
  GraduationCap,
  HeartPulse,
  TrendingUp,
  Leaf,
  Building2,
  Award,
  Users,
  BookOpen,
  Shield,
  ChevronRight,
  Star,
} from "lucide-react"

// ─── Hero ──────────────────────────────────────────────────────────────────

function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] })
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  }
  const item = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
  }

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-brand-navy"
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="animate-orb-1 absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-brand-blue/20 blur-[120px]" />
        <div className="animate-orb-2 absolute -bottom-40 -right-20 w-[700px] h-[700px] rounded-full bg-primary/15 blur-[140px]" />
        <div className="animate-orb-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-brand-gold/8 blur-[100px]" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Background photo with parallax */}
      <motion.div className="absolute inset-0" style={{ y: photoY }}>
        <Image
          src="/a3.jpeg"
          alt="Alex Lacerda"
          fill
          priority
          className="object-cover object-center opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/88 to-brand-navy/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full pt-24 pb-16 sm:pt-32 sm:pb-24"
        style={{ y: textY, opacity }}
      >
        <motion.div
          className="max-w-2xl"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={item}>
            <div className="inline-flex items-center gap-2 bg-brand-gold/20 border border-brand-gold/30 text-brand-gold rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium mb-6 sm:mb-8">
              <Star size={13} className="fill-brand-gold animate-pulse" />
              Prefeito eleito com 73,94% dos votos
              {/* shimmer */}
              <span className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
                <span className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
              </span>
            </div>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6"
          >
            De Itaberá para representar a nossa região com{" "}
            <span className="text-brand-gold relative">
              experiência
              <motion.span
                className="absolute -bottom-1 left-0 h-[3px] w-full bg-brand-gold/60 rounded-full"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.9, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              />
            </span>
            , seriedade e compromisso.
          </motion.h1>

          <motion.p
            variants={item}
            className="text-base sm:text-lg text-white/70 leading-relaxed mb-8 sm:mb-10 max-w-xl"
          >
            Alex Lacerda construiu sua trajetória na educação, na gestão pública e na política
            municipal. Professor de formação, servidor público e liderança de Itaberá.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button
                asChild
                size="lg"
                className="bg-brand-gold text-white hover:bg-brand-gold/90 border-none text-sm sm:text-base h-12 px-6 shadow-lg shadow-brand-gold/30"
              >
                <Link href="/#quem-e-alex">Conheça a trajetória</Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white/50 hover:text-white text-sm sm:text-base h-12 px-6"
              >
                <Link href="/projetos">Ver projetos</Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-xs"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.6 }}
      >
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-transparent to-white/40"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
        <span>Scroll</span>
      </motion.div>
    </section>
  )
}

// ─── Quem é Alex ───────────────────────────────────────────────────────────

const credentials = [
  { icon: GraduationCap, label: "Licenciado em Matemática", sub: "FREA, Avaré/SP" },
  { icon: BookOpen, label: "Licenciado em Pedagogia", sub: "FAFIT, Itararé/SP" },
  { icon: Shield, label: "Servidor público concursado", sub: "Secretaria de Educação SP" },
  { icon: Users, label: "3 mandatos como Vereador", sub: "Câmara Municipal de Itaberá" },
]

function QuemEAlex() {
  return (
    <section id="quem-e-alex" className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <AnimateIn direction="left" className="relative order-2 lg:order-1">
            <motion.div
              className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-sm mx-auto lg:max-w-none shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Image
                src="/a1.jpeg"
                alt="Alex Lacerda — Prefeito de Itaberá"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 80vw, 40vw"
              />
              {/* Shine overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            {/* Floating stat card */}
            <motion.div
              className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-brand-navy text-white rounded-xl p-4 sm:p-5 shadow-xl max-w-[160px] sm:max-w-[190px]"
              initial={{ opacity: 0, scale: 0.7, rotate: -6 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.06, rotate: 2 }}
            >
              <p className="text-2xl sm:text-3xl font-bold text-brand-gold leading-none">73,94%</p>
              <p className="text-xs sm:text-sm text-white/70 mt-1 leading-tight">dos votos válidos nas eleições</p>
            </motion.div>

            {/* Decorative ring */}
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full border-2 border-brand-gold/20 animate-pulse-ring" />
          </AnimateIn>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <AnimateIn direction="right" delay={0.1}>
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">
                Quem é Alex Lacerda
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy leading-tight">
                Uma vida dedicada ao serviço público e à educação
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Alex Lacerda é professor formado em Matemática pela FREA de Avaré/SP e em Pedagogia
                pela FAFIT de Itararé/SP. Servidor público concursado da Secretaria de Educação do
                Estado de São Paulo, atuou em diversas escolas e exerceu funções de direção e gestão
                escolar.
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Na vida pública, foi Conselheiro Tutelar, Diretor de Esportes, Secretário Municipal
                de Saúde, vereador por três mandatos, presidente da Câmara Municipal e, por fim,
                eleito prefeito de Itaberá com expressiva votação popular.
              </p>
            </AnimateIn>

            <StaggerContainer className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3" staggerDelay={0.08}>
              {credentials.map(({ icon: Icon, label, sub }) => (
                <StaggerItem key={label}>
                  <motion.div
                    className="flex items-start gap-3 p-3 rounded-xl bg-brand-light border border-border cursor-default"
                    whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(0,0,0,0.10)", borderColor: "var(--color-primary)" }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground leading-tight">{label}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Trajetória ────────────────────────────────────────────────────────────

const timeline = [
  { period: "Educação", title: "Professor e Educador", description: "Licenciado em Matemática e Pedagogia. Ingressou no magistério público estadual como servidor concursado, atuando em escolas estaduais.", icon: GraduationCap },
  { period: "Gestão Escolar", title: "Diretor de Escola Pública", description: "Assumiu funções de direção e gestão escolar, liderando equipes pedagógicas e administrativas na rede pública estadual de SP.", icon: Building2 },
  { period: "Serviço Social", title: "Conselheiro Tutelar", description: "Atuou como Conselheiro Tutelar, trabalhando na proteção dos direitos de crianças e adolescentes em Itaberá.", icon: Shield },
  { period: "Gestão Municipal", title: "Diretor de Esportes", description: "Assumiu a Diretoria de Esportes do município, promovendo ações esportivas e de lazer para a população itaberense.", icon: Award },
  { period: "Saúde Pública", title: "Secretário Municipal de Saúde", description: "Exerceu a Secretaria Municipal de Saúde, coordenando políticas de atendimento e estruturação dos serviços de saúde.", icon: HeartPulse },
  { period: "Legislativo", title: "Vereador — 3 mandatos", description: "Eleito vereador por três mandatos consecutivos, atuando na Câmara Municipal de Itaberá, propondo legislação e fiscalizando o Executivo.", icon: Users },
  { period: "Presidente da Câmara", title: "Presidente da Câmara Municipal", description: "Eleito pelos pares como Presidente da Câmara Municipal de Itaberá, conduzindo os trabalhos legislativos.", icon: Star },
  { period: "Executivo", title: "Prefeito de Itaberá", description: "Eleito prefeito de Itaberá pelo PSDB com 73,94% dos votos válidos — reconhecimento da sua trajetória construída com trabalho.", icon: TrendingUp },
]

function Trajetoria() {
  return (
    <section id="trajetoria" className="py-16 sm:py-24 bg-brand-light overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimateIn className="text-center mb-12 sm:mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Trajetória</span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy">
            Uma vida ligada ao serviço público
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Da sala de aula à prefeitura, cada etapa foi construída com trabalho e compromisso.
          </p>
        </AnimateIn>

        <div className="relative">
          {/* Animated vertical line */}
          <motion.div
            className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          />

          <div className="space-y-8 sm:space-y-12">
            {timeline.map(({ period, title, description, icon: Icon }, i) => (
              <AnimateIn
                key={title}
                direction={i % 2 === 0 ? "left" : "right"}
                delay={i * 0.06}
              >
                <div className={`relative flex flex-col sm:flex-row gap-4 sm:gap-8 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                  {/* Card */}
                  <div className="flex-1 sm:max-w-[calc(50%-2.5rem)]">
                    <motion.div
                      className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-border"
                      whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.10)", borderColor: "rgba(29,78,216,0.3)" }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <span className="text-xs font-semibold text-primary uppercase tracking-wide">{period}</span>
                      <h3 className="mt-1 text-base sm:text-lg font-bold text-brand-navy">{title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
                    </motion.div>
                  </div>

                  {/* Center icon */}
                  <motion.div
                    className="hidden sm:flex shrink-0 w-10 h-10 rounded-full bg-primary text-white items-center justify-center z-10 shadow-md shadow-primary/30 self-start mt-5"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 + 0.2, duration: 0.5, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    <Icon size={18} />
                  </motion.div>

                  <div className="hidden sm:block flex-1 sm:max-w-[calc(50%-2.5rem)]" />

                  {/* Mobile icon */}
                  <div className="sm:hidden flex items-center gap-3 order-first">
                    <div className="shrink-0 w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center shadow">
                      <Icon size={16} />
                    </div>
                    <span className="text-xs font-semibold text-primary uppercase tracking-wide">{period}</span>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Resultado nas Urnas ───────────────────────────────────────────────────

function Urnas() {
  return (
    <section className="py-16 sm:py-24 bg-brand-navy text-white relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="animate-orb-1 absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full bg-brand-blue/15 blur-[100px]" />
        <div className="animate-orb-2 absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full bg-brand-gold/10 blur-[80px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,.6) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <AnimateIn>
          <span className="text-brand-gold text-sm font-semibold tracking-wider uppercase">
            Reconhecimento nas urnas
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Reconhecimento construído com trabalho
          </h2>
          <p className="mt-3 text-white/60 max-w-lg mx-auto">
            Alex Lacerda foi eleito prefeito de Itaberá com uma das maiores votações da história do município.
          </p>
        </AnimateIn>

        <StaggerContainer className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8" staggerDelay={0.15}>
          {[
            { suffix: "%", decimals: 2, to: 73.94, label: "dos votos válidos" },
            { to: 7554, suffix: "", decimals: 0, label: "votos totais" },
            { to: 1, suffix: "ª", decimals: 0, label: "colocação no município" },
          ].map(({ to, suffix, decimals, label }) => (
            <StaggerItem key={label}>
              <motion.div
                className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8"
                whileHover={{ scale: 1.04, borderColor: "rgba(255,255,255,0.25)", backgroundColor: "rgba(255,255,255,0.08)" }}
                transition={{ duration: 0.25 }}
              >
                <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-brand-gold leading-none tabular-nums">
                  <AnimatedCounter to={to} suffix={suffix} decimals={decimals} duration={2} />
                </p>
                <p className="mt-3 text-sm text-white/60">{label}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimateIn delay={0.3}>
          <p className="mt-8 text-xs text-white/30">Dados eleitorais oficiais — TSE / Fundação Seade</p>
        </AnimateIn>
      </div>
    </section>
  )
}

// ─── Bandeiras ─────────────────────────────────────────────────────────────

const pillars = [
  { icon: GraduationCap, title: "Educação", description: "Valorizar a escola pública, os profissionais da educação e políticas que preparem crianças e jovens para o futuro." },
  { icon: HeartPulse, title: "Saúde", description: "Defender uma saúde mais humana, eficiente e próxima da população, com acesso e qualidade no atendimento." },
  { icon: TrendingUp, title: "Desenvolvimento regional", description: "Fortalecer os municípios do interior, a agricultura, a geração de emprego e a infraestrutura local." },
  { icon: Leaf, title: "Meio ambiente e produção rural", description: "Promover equilíbrio entre desenvolvimento, produção e responsabilidade ambiental." },
  { icon: Building2, title: "Gestão pública", description: "Atuar com transparência, responsabilidade fiscal e participação ativa da população nas decisões." },
]

function Bandeiras() {
  return (
    <section id="bandeiras" className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimateIn className="text-center mb-12 sm:mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Bandeiras</span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy">
            Compromissos com Itaberá e a região
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Cinco pilares que guiam a atuação de Alex Lacerda no serviço público.
          </p>
        </AnimateIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.09}>
          {pillars.map(({ icon: Icon, title, description }) => (
            <StaggerItem key={title}>
              <motion.div
                className="group p-6 rounded-2xl border border-border bg-white cursor-default"
                whileHover={{
                  y: -8,
                  boxShadow: "0 24px 48px rgba(29,78,216,0.12)",
                  borderColor: "rgba(29,78,216,0.35)",
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <motion.div
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.15, backgroundColor: "var(--color-primary)", rotate: 6 }}
                  transition={{ duration: 0.25 }}
                >
                  <Icon size={22} className="text-primary group-hover:text-white transition-colors" />
                </motion.div>
                <h3 className="text-base font-bold text-brand-navy mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </motion.div>
            </StaggerItem>
          ))}

          {/* CTA card */}
          <StaggerItem>
            <motion.div
              className="p-6 rounded-2xl bg-brand-navy text-white flex flex-col justify-between min-h-[180px]"
              whileHover={{ scale: 1.03, boxShadow: "0 24px 48px rgba(0,0,0,0.25)" }}
              transition={{ duration: 0.25 }}
            >
              <div>
                <h3 className="text-base font-bold mb-2">Conheça os projetos</h3>
                <p className="text-sm text-white/60 leading-relaxed">Veja as propostas detalhadas para cada área de atuação.</p>
              </div>
              <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                <Link href="/projetos" className="mt-6 inline-flex items-center gap-1 text-brand-gold font-semibold text-sm">
                  Ver projetos <ChevronRight size={16} />
                </Link>
              </motion.div>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  )
}

// ─── Gallery ───────────────────────────────────────────────────────────────

function Gallery() {
  const images = [
    { src: "/a2.jpeg", alt: "Alex Lacerda em atividade pública" },
    { src: "/a4.jpeg", alt: "Alex Lacerda com a comunidade" },
    { src: "/a5.jpeg", alt: "Alex Lacerda em evento institucional" },
  ]

  return (
    <section className="py-12 sm:py-16 bg-brand-light overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <StaggerContainer className="grid grid-cols-3 gap-3 sm:gap-4" staggerDelay={0.12}>
          {images.map(({ src, alt }) => (
            <StaggerItem key={src}>
              <motion.div
                className="relative aspect-square rounded-xl overflow-hidden"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 20vw"
                />
                <motion.div
                  className="absolute inset-0 bg-brand-navy/40 opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.25 }}
                />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

// ─── CTA Strip ─────────────────────────────────────────────────────────────

function CtaStrip() {
  return (
    <section className="py-12 sm:py-16 bg-primary relative overflow-hidden">
      {/* Moving gradient background */}
      <div className="absolute inset-0 animate-gradient-shift bg-gradient-to-r from-primary via-brand-blue to-primary opacity-80" />

      <AnimateIn className="relative max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Fale com Alex Lacerda e sua equipe
          </h2>
          <p className="mt-1 text-white/70 text-sm">Envie sua mensagem ou entre em contato pelo WhatsApp.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
            <Button asChild className="bg-white text-primary hover:bg-white/90 border-none font-semibold shadow-lg">
              <Link href="/contato">Fale conosco</Link>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
            <Button asChild variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/50 hover:text-white">
              <Link href="https://wa.me/5515999990000" target="_blank" rel="noopener noreferrer">WhatsApp</Link>
            </Button>
          </motion.div>
        </div>
      </AnimateIn>
    </section>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <>
      <Hero />
      <QuemEAlex />
      <Trajetoria />
      <Urnas />
      <Gallery />
      <Bandeiras />
      <CtaStrip />
    </>
  )
}

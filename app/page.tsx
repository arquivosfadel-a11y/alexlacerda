import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/button"
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
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-brand-navy"
    >
      {/* Background photo with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/a3.jpeg"
          alt="Alex Lacerda"
          fill
          priority
          className="object-cover object-center opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/60" />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-gold/20 border border-brand-gold/30 text-brand-gold rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium mb-6 sm:mb-8">
            <Star size={13} className="fill-brand-gold" />
            Prefeito eleito com 73,94% dos votos
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
            De Itaberá para representar a nossa região com{" "}
            <span className="text-brand-gold">experiência</span>,{" "}
            seriedade e compromisso.
          </h1>

          <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-8 sm:mb-10 max-w-xl">
            Alex Lacerda construiu sua trajetória na educação, na gestão pública e na política
            municipal. Professor de formação, servidor público e liderança de Itaberá.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button
              asChild
              size="lg"
              className="bg-brand-gold text-white hover:bg-brand-gold/90 border-none text-sm sm:text-base h-12 px-6"
            >
              <Link href="/#quem-e-alex">Conheça a trajetória</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white/50 hover:text-white text-sm sm:text-base h-12 px-6"
            >
              <Link href="/projetos">Ver projetos</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30 text-xs">
        <div className="w-px h-8 bg-white/20 animate-pulse" />
        <span>Scroll</span>
      </div>
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
    <section id="quem-e-alex" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-sm mx-auto lg:max-w-none shadow-2xl">
              <Image
                src="/a1.jpeg"
                alt="Alex Lacerda — Prefeito de Itaberá"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 80vw, 40vw"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-brand-navy text-white rounded-xl p-4 sm:p-5 shadow-xl max-w-[160px] sm:max-w-[190px]">
              <p className="text-2xl sm:text-3xl font-bold text-brand-gold leading-none">73,94%</p>
              <p className="text-xs sm:text-sm text-white/70 mt-1 leading-tight">dos votos válidos nas eleições</p>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
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

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {credentials.map(({ icon: Icon, label, sub }) => (
                <div
                  key={label}
                  className="flex items-start gap-3 p-3 rounded-xl bg-brand-light border border-border"
                >
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground leading-tight">{label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Trajetória ────────────────────────────────────────────────────────────

const timeline = [
  {
    period: "Educação",
    title: "Professor e Educador",
    description:
      "Licenciado em Matemática e Pedagogia. Ingressou no magistério público estadual como servidor concursado, atuando em escolas estaduais com dedicação ao ensino e à formação de jovens.",
    icon: GraduationCap,
  },
  {
    period: "Gestão Escolar",
    title: "Diretor de Escola Pública",
    description:
      "Assumiu funções de direção e gestão escolar, liderando equipes pedagógicas e administrativas na rede pública estadual de São Paulo.",
    icon: Building2,
  },
  {
    period: "Serviço Social",
    title: "Conselheiro Tutelar",
    description:
      "Atuou como Conselheiro Tutelar, trabalhando diretamente na proteção dos direitos de crianças e adolescentes em Itaberá.",
    icon: Shield,
  },
  {
    period: "Gestão Municipal",
    title: "Diretor de Esportes",
    description:
      "Assumiu a Diretoria de Esportes do município, promovendo ações esportivas e de lazer para a população itaberense.",
    icon: Award,
  },
  {
    period: "Saúde Pública",
    title: "Secretário Municipal de Saúde",
    description:
      "Exerceu a Secretaria Municipal de Saúde, coordenando políticas de atendimento e estruturação dos serviços de saúde do município.",
    icon: HeartPulse,
  },
  {
    period: "Legislativo",
    title: "Vereador — 3 mandatos",
    description:
      "Eleito vereador por três mandatos consecutivos, atuando ativamente na Câmara Municipal de Itaberá, propondo legislação e fiscalizando o Executivo.",
    icon: Users,
  },
  {
    period: "Presidente da Câmara",
    title: "Presidente da Câmara Municipal",
    description:
      "Eleito pelos pares como Presidente da Câmara Municipal de Itaberá, conduzindo os trabalhos legislativos com equilíbrio e respeito às instituições.",
    icon: Star,
  },
  {
    period: "Executivo",
    title: "Prefeito de Itaberá",
    description:
      "Eleito prefeito de Itaberá pelo PSDB com 73,94% dos votos válidos, totalizando 7.554 votos — reconhecimento da sua trajetória construída com trabalho.",
    icon: TrendingUp,
  },
]

function Trajetoria() {
  return (
    <section id="trajetoria" className="py-16 sm:py-24 bg-brand-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Trajetória
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy">
            Uma vida ligada ao serviço público
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Da sala de aula à prefeitura, cada etapa foi construída com trabalho, dedicação e compromisso com Itaberá.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          <div className="space-y-8 sm:space-y-12">
            {timeline.map(({ period, title, description, icon: Icon }, i) => (
              <div
                key={title}
                className={`relative flex flex-col sm:flex-row gap-4 sm:gap-8 ${
                  i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Content card */}
                <div className="flex-1 sm:max-w-[calc(50%-2.5rem)]">
                  <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                      {period}
                    </span>
                    <h3 className="mt-1 text-base sm:text-lg font-bold text-brand-navy">{title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
                  </div>
                </div>

                {/* Icon in center */}
                <div className="hidden sm:flex shrink-0 w-10 h-10 rounded-full bg-primary text-white items-center justify-center z-10 shadow-md self-start mt-5">
                  <Icon size={18} />
                </div>

                {/* Spacer for alternating */}
                <div className="hidden sm:block flex-1 sm:max-w-[calc(50%-2.5rem)]" />

                {/* Mobile icon */}
                <div className="sm:hidden flex items-center gap-3 order-first">
                  <div className="shrink-0 w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center shadow">
                    <Icon size={16} />
                  </div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                    {period}
                  </span>
                </div>
              </div>
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
      {/* Decorative */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-brand-gold -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-primary translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <span className="text-brand-gold text-sm font-semibold tracking-wider uppercase">
          Reconhecimento nas urnas
        </span>
        <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          Reconhecimento construído com trabalho
        </h2>
        <p className="mt-3 text-white/60 max-w-lg mx-auto">
          Alex Lacerda foi eleito prefeito de Itaberá com uma das maiores votações da história do município.
        </p>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-brand-gold leading-none">
              73,94%
            </p>
            <p className="mt-3 text-sm text-white/60">dos votos válidos</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-none">
              7.554
            </p>
            <p className="mt-3 text-sm text-white/60">votos totais</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-none">
              1ª
            </p>
            <p className="mt-3 text-sm text-white/60">colocação no município</p>
          </div>
        </div>

        <p className="mt-8 text-xs text-white/30">
          Dados eleitorais oficiais — TSE / Fundação Seade
        </p>
      </div>
    </section>
  )
}

// ─── Bandeiras ─────────────────────────────────────────────────────────────

const pillars = [
  {
    icon: GraduationCap,
    title: "Educação",
    description:
      "Valorizar a escola pública, os profissionais da educação e políticas que preparem crianças e jovens para o futuro.",
  },
  {
    icon: HeartPulse,
    title: "Saúde",
    description:
      "Defender uma saúde mais humana, eficiente e próxima da população, com acesso e qualidade no atendimento.",
  },
  {
    icon: TrendingUp,
    title: "Desenvolvimento regional",
    description:
      "Fortalecer os municípios do interior, a agricultura, a geração de emprego e a infraestrutura local.",
  },
  {
    icon: Leaf,
    title: "Meio ambiente e produção rural",
    description:
      "Promover equilíbrio entre desenvolvimento, produção e responsabilidade ambiental.",
  },
  {
    icon: Building2,
    title: "Gestão pública",
    description:
      "Atuar com transparência, responsabilidade fiscal e participação ativa da população nas decisões.",
  },
]

function Bandeiras() {
  return (
    <section id="bandeiras" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Bandeiras
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy">
            Compromissos com Itaberá e a região
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Cinco pilares que guiam a atuação de Alex Lacerda no serviço público.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group p-6 rounded-2xl border border-border hover:border-primary/30 hover:shadow-md bg-white transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <Icon size={22} className="text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-base font-bold text-brand-navy mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}

          {/* CTA card */}
          <div className="p-6 rounded-2xl bg-brand-navy text-white flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold mb-2">Conheça os projetos</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Veja as propostas detalhadas para cada área de atuação.
              </p>
            </div>
            <Link
              href="/projetos"
              className="mt-6 inline-flex items-center gap-1 text-brand-gold font-semibold text-sm hover:gap-2 transition-all"
            >
              Ver projetos <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Gallery strip ─────────────────────────────────────────────────────────

function Gallery() {
  const images = [
    { src: "/a2.jpeg", alt: "Alex Lacerda em atividade pública" },
    { src: "/a4.jpeg", alt: "Alex Lacerda com a comunidade" },
    { src: "/a5.jpeg", alt: "Alex Lacerda em evento institucional" },
  ]

  return (
    <section className="py-12 sm:py-16 bg-brand-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {images.map(({ src, alt }) => (
            <div key={src} className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 20vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── CTA strip ─────────────────────────────────────────────────────────────

function CtaStrip() {
  return (
    <section className="py-12 sm:py-16 bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Fale com Alex Lacerda e sua equipe
          </h2>
          <p className="mt-1 text-white/70 text-sm">
            Envie sua mensagem ou entre em contato pelo WhatsApp.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <Button
            asChild
            className="bg-white text-primary hover:bg-white/90 border-none font-semibold"
          >
            <Link href="/contato">Fale conosco</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/50 hover:text-white"
          >
            <Link href="https://wa.me/5515999990000" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </Link>
          </Button>
        </div>
      </div>
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

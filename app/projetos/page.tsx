import type { Metadata } from "next"
import Link from "next/link"
import {
  GraduationCap,
  HeartPulse,
  Tractor,
  Construction,
  Briefcase,
  Leaf,
  Building2,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Projetos | Alex Lacerda",
  description:
    "Conheça os projetos e propostas de Alex Lacerda para Itaberá e a região: educação, saúde, agricultura, infraestrutura e desenvolvimento econômico.",
}

const areas = [
  {
    icon: GraduationCap,
    title: "Educação e formação profissional",
    description:
      "Valorização da escola pública estadual e municipal, formação continuada de professores, ampliação do acesso à educação técnica e profissionalizante para jovens e adultos de Itaberá e região.",
    items: [
      "Apoio às escolas estaduais e municipais",
      "Cursos técnicos e profissionalizantes",
      "Fortalecimento da gestão escolar",
      "Programas de permanência escolar",
    ],
  },
  {
    icon: HeartPulse,
    title: "Saúde e atendimento regional",
    description:
      "Saúde mais humana, eficiente e próxima da população. Melhoria do acesso, ampliação de especialidades e estruturação dos serviços municipais de saúde.",
    items: [
      "Ampliação de especialidades médicas",
      "Melhoria da atenção básica",
      "Infraestrutura de saúde",
      "Saúde preventiva e programas sociais",
    ],
  },
  {
    icon: Tractor,
    title: "Agricultura e produção rural",
    description:
      "Apoio ao produtor rural, estímulo à agricultura familiar, acesso a crédito e assistência técnica para fortalecer a produção agropecuária regional.",
    items: [
      "Assistência técnica ao produtor rural",
      "Apoio à agricultura familiar",
      "Acesso a crédito e financiamento",
      "Feiras e escoamento da produção",
    ],
  },
  {
    icon: Construction,
    title: "Infraestrutura municipal",
    description:
      "Pavimentação, estradas vicinais, saneamento básico e manutenção das vias urbanas e rurais, garantindo melhores condições para a população.",
    items: [
      "Pavimentação de vias urbanas",
      "Manutenção de estradas vicinais",
      "Saneamento básico",
      "Iluminação pública LED",
    ],
  },
  {
    icon: Briefcase,
    title: "Desenvolvimento econômico",
    description:
      "Geração de emprego e renda, atração de investimentos, apoio ao comércio local e fortalecimento do tecido econômico de Itaberá.",
    items: [
      "Atração de novos investimentos",
      "Apoio ao comércio e microempreendedor",
      "Qualificação profissional",
      "Desenvolvimento do turismo regional",
    ],
  },
  {
    icon: Leaf,
    title: "Meio ambiente e sustentabilidade",
    description:
      "Equilíbrio entre desenvolvimento e preservação ambiental, manejo de resíduos sólidos, arborização urbana e proteção dos recursos hídricos.",
    items: [
      "Gestão de resíduos sólidos",
      "Proteção de nascentes e matas ciliares",
      "Arborização e praças públicas",
      "Educação ambiental nas escolas",
    ],
  },
  {
    icon: Building2,
    title: "Gestão pública e transparência",
    description:
      "Administração eficiente, transparente e participativa, com controle fiscal, acesso à informação e canais abertos de diálogo com a população.",
    items: [
      "Portal de transparência ativo",
      "Responsabilidade fiscal",
      "Participação popular nas decisões",
      "Modernização da gestão municipal",
    ],
  },
]

function PageHeader() {
  return (
    <section className="pt-32 pb-12 sm:pt-40 sm:pb-16 bg-brand-navy text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <span className="text-brand-gold text-sm font-semibold tracking-wider uppercase">
          Propostas
        </span>
        <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Projetos para uma região mais forte
        </h1>
        <p className="mt-4 text-white/70 max-w-2xl text-base sm:text-lg leading-relaxed">
          Alex Lacerda defende projetos construídos a partir da realidade dos municípios. A
          prioridade é ouvir as demandas locais, transformar experiência pública em ação e
          fortalecer políticas que atendam de forma prática a população.
        </p>
      </div>
    </section>
  )
}

export default function ProjetosPage() {
  return (
    <>
      <PageHeader />

      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {areas.map(({ icon: Icon, title, description, items }) => (
              <div
                key={title}
                className="group rounded-2xl border border-border p-6 sm:p-7 hover:border-primary/30 hover:shadow-md transition-all bg-white"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Icon size={20} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-brand-navy leading-tight pt-1">
                    {title}
                  </h2>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>
                <ul className="space-y-1.5">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground/70">
                      <ChevronRight size={14} className="text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-brand-light border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-navy">
              Tem uma sugestão ou demanda?
            </h2>
            <p className="text-muted-foreground text-sm mt-1">
              Entre em contato com a equipe de Alex Lacerda.
            </p>
          </div>
          <Button asChild size="lg" className="shrink-0">
            <Link href="/contato">Fale conosco</Link>
          </Button>
        </div>
      </section>
    </>
  )
}

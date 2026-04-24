import type { Metadata } from "next"
import { Download, FileText, ImageIcon, Presentation, FileBarChart, Newspaper, Palette } from "lucide-react"
import { Button } from "@/components/button"

export const metadata: Metadata = {
  title: "Downloads | Alex Lacerda",
  description:
    "Materiais institucionais de Alex Lacerda para consulta, divulgação e apoio à comunicação pública.",
}

const materials = [
  {
    icon: FileText,
    title: "Biografia oficial",
    description:
      "Texto biográfico completo de Alex Lacerda para uso em programas, eventos, releases e comunicados institucionais.",
    format: "PDF · Word",
    tag: "Institucional",
  },
  {
    icon: ImageIcon,
    title: "Fotos institucionais",
    description:
      "Galeria de fotos oficiais em alta resolução para uso em material impresso, digital e imprensa.",
    format: "JPG · PNG",
    tag: "Imagem",
  },
  {
    icon: Presentation,
    title: "Apresentação pública",
    description:
      "Apresentação institucional com perfil, trajetória, bandeiras e propostas de Alex Lacerda.",
    format: "PDF · PPT",
    tag: "Apresentação",
  },
  {
    icon: FileBarChart,
    title: "Plano de propostas",
    description:
      "Documento com as principais propostas e projetos para Itaberá e a região, organizados por área temática.",
    format: "PDF",
    tag: "Proposta",
  },
  {
    icon: Newspaper,
    title: "Material para imprensa",
    description:
      "Kit de imprensa com release de apresentação, dados biográficos, resultado eleitoral e fotos autorizadas.",
    format: "ZIP",
    tag: "Imprensa",
  },
  {
    icon: Palette,
    title: "Logotipo e identidade visual",
    description:
      "Arquivos do logotipo e elementos de identidade visual em diferentes formatos para uso autorizado.",
    format: "SVG · PNG · PDF",
    tag: "Identidade Visual",
  },
]

const tagColors: Record<string, string> = {
  Institucional: "bg-primary/10 text-primary",
  Imagem: "bg-brand-gold/15 text-amber-700",
  Apresentação: "bg-purple-100 text-purple-700",
  Proposta: "bg-green-100 text-green-700",
  Imprensa: "bg-red-100 text-red-700",
  "Identidade Visual": "bg-pink-100 text-pink-700",
}

function PageHeader() {
  return (
    <section className="pt-32 pb-12 sm:pt-40 sm:pb-16 bg-brand-navy text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <span className="text-brand-gold text-sm font-semibold tracking-wider uppercase">
          Materiais
        </span>
        <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Materiais oficiais para download
        </h1>
        <p className="mt-4 text-white/70 max-w-2xl text-base sm:text-lg leading-relaxed">
          Nesta área você encontra materiais institucionais de Alex Lacerda para consulta,
          divulgação e apoio à comunicação pública.
        </p>
      </div>
    </section>
  )
}

function RequestBanner() {
  return (
    <div className="bg-brand-light border border-border rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
      <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
        <Download size={20} className="text-primary" />
      </div>
      <div className="flex-1">
        <p className="text-sm font-semibold text-foreground">Solicite os materiais</p>
        <p className="text-sm text-muted-foreground mt-0.5">
          Para receber os arquivos, entre em contato com a equipe de comunicação de Alex Lacerda.
        </p>
      </div>
      <Button asChild variant="outline" className="shrink-0 sm:ml-auto">
        <a href="/contato">Solicitar</a>
      </Button>
    </div>
  )
}

export default function DownloadsPage() {
  return (
    <>
      <PageHeader />

      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <RequestBanner />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {materials.map(({ icon: Icon, title, description, format, tag }) => (
              <div
                key={title}
                className="group rounded-2xl border border-border p-5 sm:p-6 hover:border-primary/30 hover:shadow-md transition-all bg-white flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Icon size={20} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <span
                    className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${tagColors[tag] ?? "bg-muted text-muted-foreground"}`}
                  >
                    {tag}
                  </span>
                </div>

                <h2 className="text-base font-bold text-brand-navy mb-2">{title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{description}</p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground font-mono">{format}</span>
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-primary hover:bg-primary/5 gap-1.5"
                  >
                    <a href="/contato">
                      <Download size={14} />
                      Solicitar
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

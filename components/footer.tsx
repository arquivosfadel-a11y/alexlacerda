import Link from "next/link"
import { MapPin, Mail, Phone } from "lucide-react"

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Quem é Alex", href: "/#quem-e-alex" },
  { label: "Trajetória", href: "/#trajetoria" },
  { label: "Projetos", href: "/projetos" },
  { label: "Downloads", href: "/downloads" },
  { label: "Contato", href: "/contato" },
]

const pillars = [
  "Educação",
  "Saúde",
  "Desenvolvimento regional",
  "Meio ambiente",
  "Gestão pública",
]

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h2 className="text-xl font-bold mb-1">Alex Lacerda</h2>
            <p className="text-white/60 text-sm mb-4">Prefeito de Itaberá/SP</p>
            <p className="text-white/50 text-sm leading-relaxed">
              Uma trajetória construída na educação, na gestão pública e no serviço à população de Itaberá e região.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">
              Navegação
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bandeiras */}
          <div>
            <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">
              Bandeiras
            </h3>
            <ul className="space-y-2">
              {pillars.map((p) => (
                <li key={p} className="text-sm text-white/50">
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">
              Contato
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/50">
                <MapPin size={15} className="shrink-0 mt-0.5 text-brand-gold" />
                Itaberá/SP
              </li>
              <li className="flex items-center gap-2 text-sm text-white/50">
                <Mail size={15} className="shrink-0 text-brand-gold" />
                contato@alexlacerda.com.br
              </li>
              <li className="flex items-center gap-2 text-sm text-white/50">
                <Phone size={15} className="shrink-0 text-brand-gold" />
                (15) 99999-0000
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <p>© {new Date().getFullYear()} Alex Lacerda. Todos os direitos reservados.</p>
          <p>Dados eleitorais: TSE / Fundação Seade</p>
        </div>
      </div>
    </footer>
  )
}

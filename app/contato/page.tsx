import type { Metadata } from "next"
import { MapPin, Mail, Phone, MessageSquare } from "lucide-react"
import { ContactForm } from "./contact-form"

export const metadata: Metadata = {
  title: "Contato | Alex Lacerda",
  description:
    "Entre em contato com Alex Lacerda e sua equipe. Envie uma mensagem ou fale pelo WhatsApp.",
}

const WA_NUMBER = "5515999990000"

const contactInfo = [
  {
    icon: MapPin,
    title: "Localização",
    lines: ["Itaberá, São Paulo — SP"],
  },
  {
    icon: Mail,
    title: "E-mail",
    lines: ["contato@alexlacerda.com.br"],
  },
  {
    icon: Phone,
    title: "WhatsApp",
    lines: ["(15) 99999-0000"],
  },
]

export default function ContatoPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-12 sm:pt-40 sm:pb-16 bg-brand-navy text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <span className="text-brand-gold text-sm font-semibold tracking-wider uppercase">
            Contato
          </span>
          <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Fale com Alex Lacerda e sua equipe
          </h1>
          <p className="mt-4 text-white/70 max-w-xl text-base sm:text-lg">
            Envie sua mensagem ou entre em contato diretamente pelo WhatsApp.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Info sidebar */}
            <div className="space-y-4 order-2 lg:order-1">
              {contactInfo.map(({ icon: Icon, title, lines }) => (
                <div
                  key={title}
                  className="flex items-start gap-4 p-4 rounded-xl border border-border bg-brand-light"
                >
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-navy">{title}</p>
                    {lines.map((line) => (
                      <p key={line} className="text-sm text-muted-foreground mt-0.5">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              <a
                href={`https://wa.me/${WA_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-green-600 hover:bg-green-700 text-white transition-colors"
              >
                <MessageSquare size={20} />
                <span className="text-sm font-semibold">Chamar no WhatsApp agora</span>
              </a>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="bg-white rounded-2xl border border-border p-6 sm:p-8 shadow-sm">
                <h2 className="text-xl font-bold text-brand-navy mb-6">Enviar mensagem</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

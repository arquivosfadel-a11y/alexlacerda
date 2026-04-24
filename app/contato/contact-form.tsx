"use client"

import { useState } from "react"
import { Send, CheckCircle, MessageSquare } from "lucide-react"
import { Button } from "@/components/button"
import { cn } from "@/lib/utils"

const WA_NUMBER = "5515999990000"

type FieldProps = {
  label: string
  id: string
  required?: boolean
  placeholder?: string
  type?: string
}

function Field({ label, id, required, placeholder, type = "text" }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-destructive ml-0.5">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className={cn(
          "h-11 w-full rounded-xl border border-input bg-background px-3.5 text-sm",
          "placeholder:text-muted-foreground",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:border-ring",
          "transition-colors"
        )}
      />
    </div>
  )
}

export function ContactForm() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSent(true)
    }, 1200)
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle size={32} className="text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-brand-navy">Mensagem enviada!</h3>
        <p className="text-muted-foreground text-sm max-w-xs">
          Obrigado pelo contato. Nossa equipe retornará em breve.
        </p>
        <Button variant="outline" onClick={() => setSent(false)} className="mt-2">
          Enviar outra mensagem
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Nome" id="nome" required placeholder="Seu nome completo" />
        <Field label="Cidade" id="cidade" required placeholder="Sua cidade" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="WhatsApp" id="whatsapp" type="tel" placeholder="(15) 99999-9999" />
        <Field label="E-mail" id="email" type="email" placeholder="seu@email.com" />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="mensagem" className="text-sm font-medium text-foreground">
          Mensagem <span className="text-destructive">*</span>
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={5}
          required
          placeholder="Escreva sua mensagem, sugestão ou demanda..."
          className={cn(
            "w-full rounded-xl border border-input bg-background px-3.5 py-3 text-sm resize-none",
            "placeholder:text-muted-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:border-ring",
            "transition-colors"
          )}
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-3 pt-1">
        <Button type="submit" disabled={loading} className="flex-1 sm:flex-none gap-2 h-11">
          {loading ? (
            <>
              <span className="size-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              <Send size={16} />
              Enviar mensagem
            </>
          )}
        </Button>
        <Button
          type="button"
          variant="outline"
          asChild
          className="flex-1 sm:flex-none gap-2 h-11 border-green-500 text-green-700 hover:bg-green-50 hover:border-green-600 hover:text-green-800"
        >
          <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer">
            <MessageSquare size={16} />
            Chamar no WhatsApp
          </a>
        </Button>
      </div>
    </form>
  )
}

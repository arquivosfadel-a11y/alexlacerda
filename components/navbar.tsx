"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Início", href: "/#inicio" },
  { label: "Quem é Alex", href: "/#quem-e-alex" },
  { label: "Trajetória", href: "/#trajetoria" },
  { label: "Projetos", href: "/projetos" },
  { label: "Downloads", href: "/downloads" },
  { label: "Contato", href: "/contato" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  const isHome = pathname === "/"

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled || !isHome
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex flex-col leading-tight group"
            aria-label="Alex Lacerda — página inicial"
          >
            <span
              className={cn(
                "font-bold text-base sm:text-lg transition-colors",
                scrolled || !isHome ? "text-brand-navy" : "text-white"
              )}
            >
              Alex Lacerda
            </span>
            <span
              className={cn(
                "text-[10px] sm:text-xs font-medium tracking-wide transition-colors",
                scrolled || !isHome ? "text-muted-foreground" : "text-white/70"
              )}
            >
              Prefeito de Itaberá/SP
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    scrolled || !isHome
                      ? "text-foreground/70 hover:text-primary hover:bg-primary/5"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "lg:hidden p-2 rounded-md transition-colors",
              scrolled || !isHome
                ? "text-foreground hover:bg-muted"
                : "text-white hover:bg-white/10"
            )}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden flex flex-col transition-all duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="absolute inset-0 bg-brand-navy/97 backdrop-blur-md" />
        <nav className="relative flex flex-col justify-center flex-1 px-6 pt-20 pb-10 gap-2">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "text-2xl font-semibold text-white/80 hover:text-white py-3 border-b border-white/10 transition-all",
                "translate-y-0 opacity-100",
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              )}
              style={{ transitionDelay: open ? `${i * 50}ms` : "0ms" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}

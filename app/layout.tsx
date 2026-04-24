import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import "@workspace/ui/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { cn } from "@workspace/ui/lib/utils"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })
const fontMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "Alex Lacerda | Prefeito de Itaberá",
  description:
    "Professor, gestor público e prefeito eleito de Itaberá/SP com 73,94% dos votos. Uma trajetória construída no serviço público, na educação e na vida real da população.",
  openGraph: {
    title: "Alex Lacerda | Prefeito de Itaberá",
    description:
      "Experiência pública, compromisso com Itaberá e olhar para o desenvolvimento regional.",
    locale: "pt_BR",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, geist.variable)}
    >
      <body>
        <ThemeProvider defaultTheme="light" enableSystem={false}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

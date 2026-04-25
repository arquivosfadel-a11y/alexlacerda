import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import "@/styles/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { cn } from "@/lib/utils"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })
const fontMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "Alex Lacerda - Pré-candidato a Deputado",
  description:
    "Professor, gestor público, prefeito de Itaberá/SP e pré-candidato a Deputado. Uma trajetória construída no serviço público, na educação e na vida real da população.",
  openGraph: {
    title: "Alex Lacerda - Pré-candidato a Deputado",
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

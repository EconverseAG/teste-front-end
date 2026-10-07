import type { Metadata, Viewport } from "next"
import { Outfit, Poppins, Work_Sans } from "next/font/google"
import type { ReactNode } from "react"
import { AppProviders } from "@/providers/AppProviders"
import "@/styles/globals.scss"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-work-sans",
  display: "swap",
})

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-outfit",
  display: "swap",
})

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Econverse | Ofertas em tecnologia, moda e supermercado",
    template: "%s | Econverse",
  },
  description:
    "Compra 100% segura, frete grátis acima de R$ 200 e parcelamento sem juros. Confira as promoções com até 50% Off em celulares, acessórios, tablets, notebooks e TVs.",
  keywords: ["econverse", "ofertas", "celular", "iphone", "tecnologia", "e-commerce"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Econverse",
    title: "Econverse | Venha conhecer nossas promoções",
    description: "50% Off nos produtos. Compra 100% segura e frete grátis acima de R$ 200.",
    images: [{ url: "/images/hero.jpg", width: 2880, height: 780, alt: "Promoções Black Friday Econverse" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  icons: { icon: "/images/logo.svg" },
}

export const viewport: Viewport = {
  themeColor: "#271c47",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${workSans.variable} ${outfit.variable}`}>
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  )
}

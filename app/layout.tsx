import type React from "react"
import type { Metadata } from "next"
import { Inter, Crimson_Text, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import BrosurPopup from "@/components/ui/brosur-popup"
import { PageWrapper } from "@/components/ui/page-wrapper"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const crimsonText = Crimson_Text({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-crimson",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Salut Soul - Sentra Layanan Universitas Terbuka",
  description:
    "Platform layanan terpadu Universitas Terbuka untuk kemudahan akses informasi dan layanan akademik",
  keywords: "universitas terbuka, pendidikan tinggi, kuliah online, salut soul",
  authors: [{ name: "Universitas Terbuka" }],
  openGraph: {
    title: "Salut Soul - Sentra Layanan Universitas Terbuka",
    description: "Platform layanan terpadu Universitas Terbuka",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${crimsonText.variable} ${playfair.variable}`}
    >
      <head>
        <link rel="icon" href="/Logo_Universitas_Terbuka.ico" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <BrosurPopup />
        <PageWrapper>{children}</PageWrapper>
        <Toaster />
      </body>
    </html>
  )
}

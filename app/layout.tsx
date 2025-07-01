import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "SALUT Soul - Sentra Layanan Universitas Terbuka",
  description:
    "Pendaftaran mahasiswa baru Universitas Terbuka. Kuliah fleksibel, berkualitas, dan terjangkau. Daftar sekarang!",
  keywords: "universitas terbuka, kuliah online, pendidikan jarak jauh, SALUT, pendaftaran mahasiswa",
  authors: [{ name: "SALUT Soul" }],
  openGraph: {
    title: "SALUT Soul - Sentra Layanan Universitas Terbuka",
    description: "Pendaftaran mahasiswa baru Universitas Terbuka. Kuliah fleksibel, berkualitas, dan terjangkau.",
    type: "website",
    locale: "id_ID",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${inter.variable} ${poppins.variable}`}>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Universitas Terbuka - Pendidikan Tinggi Terbuka dan Jarak Jauh",
  description:
    "Universitas Terbuka menyediakan pendidikan tinggi berkualitas dengan sistem pembelajaran terbuka dan jarak jauh untuk semua kalangan.",
  keywords: "universitas terbuka, pendidikan jarak jauh, kuliah online, S1, S2, diploma",
  authors: [{ name: "Universitas Terbuka" }],
  openGraph: {
    title: "Universitas Terbuka - Pendidikan Tinggi Terbuka dan Jarak Jauh",
    description:
      "Universitas Terbuka menyediakan pendidikan tinggi berkualitas dengan sistem pembelajaran terbuka dan jarak jauh untuk semua kalangan.",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Universitas Terbuka - Pendidikan Tinggi Terbuka dan Jarak Jauh",
    description:
      "Universitas Terbuka menyediakan pendidikan tinggi berkualitas dengan sistem pembelajaran terbuka dan jarak jauh untuk semua kalangan.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/Logo_Universitas_Terbuka.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}

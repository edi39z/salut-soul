import "./globals.css"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import Link from "next/link"
import Head from "next/head"

const inter = Inter({ subsets: ["latin"] })
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
})

export const metadata: Metadata = {
  title: "SALUT Soul - Sentra Layanan Universitas Terbuka",
  description: "Pendaftaran mahasiswa baru Universitas Terbuka. Kuliah fleksibel, berkualitas, dan terjangkau.",
  icons: {
    icon: "/Logo_Universitas_Terbuka.ico",
  },
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="id" className={`${inter.className} ${poppins.className}`}>
      <Head>
        <link rel="canonical" href="https://salutsoul.com/" />
      </Head>
      <body className="min-h-screen bg-white text-gray-800">
      <header className="bg-blue-900 text-white p-4">
        <nav className="container mx-auto flex gap-6 text-sm font-medium">
          <Link href="/">Beranda</Link>
          <Link href="/akademik">Akademik</Link>
          <Link href="/pendaftaran">Pendaftaran</Link>
          <Link href="/kontak">Kontak</Link>
          <Link href="/tentang">Tentang</Link>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-6">{children}</main>

      <footer className="bg-blue-100 text-center text-sm text-gray-600 py-4 mt-10">
        &copy; {new Date().getFullYear()} SALUT Soul - Universitas Terbuka
      </footer>
      </body>
      </html>
  )
}

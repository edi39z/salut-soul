"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const akademikItems = [
    { name: "Kalender Akademik", href: "https://www.ut.ac.id/kalender-akademik/" },
    { name: "Biaya Pendidikan", href: "https://www.ut.ac.id/biaya-pendidikan/" },
    { name: "Katalog", href: "https://www.ut.ac.id/katalog/" },
    { name: "Formulir", href: "https://www.ut.ac.id/formulir/" },
    { name: "Sistem Pembelajaran", href: "https://www.ut.ac.id/sistem-pembelajaran/" },
    { name: "Bantuan Belajar", href: "https://www.ut.ac.id/bantuan-belajar/" },
    { name: "Akreditasi", href: "https://www.ut.ac.id/akreditasi/" },
    { name: "MBKM", href: "https://www.ut.ac.id/MBKM/" },
    { name: "Kelulusan", href: "https://www.ut.ac.id/kelulusan/" },
    { name: "Program Sertifikat", href: "https://www.ut.ac.id/program-sertifikat/" },
    { name: "Program Studi", href: "/akademik" },
    { name: "Panduan", href: "https://www.ut.ac.id/panduan/" },
  ]
  const layananItems = [
    { name: "Perpustakaan Digital", href: "https://pustaka.ut.ac.id/lib/" },
    { name: "E-Learning", href: "https://elearning.ut.ac.id/" },
    { name: "Wifi.ID", href: "https://www.ut.ac.id/wifi-id/" },
  ]
  const kontakItems = [
    { name: "Kontak UT Medan", href: "https://medan.ut.ac.id/contact/" },
    { name: "Kontak UT Pusat", href: "https://www.ut.ac.id/kontak/" },
    { name: "Kontak Salut Soul", href: "/kontak" },
  ]

  return (
    <nav className={`fixed top-0 z-50 w-full transition-colors duration-300 ${scrolled ? "bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-sm" : "bg-transparent"}`}>
      {/* Tier 1: Logo bar */}
      <div className="container mx-auto px-4 h-16 md:h-20 lg:h-24 flex items-center justify-between">
        {/* Kiri - UT */}
        <Link href="/" className="flex items-center space-x-2 group">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <Image
              src="/ut.png"
              alt="Universitas Terbuka Logo"
              width={96}
              height={96}
              className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain"
            />
          </motion.div>
          <span className={`text-lg md:text-xl lg:text-2xl font-extrabold ${scrolled ? "text-gray-900" : "text-white text-shadow-lg"} group-hover:text-blue-600 transition-colors duration-300 hidden sm:block`}>
            Universitas Terbuka
          </span>
        </Link>

        {/* Kanan - Salut Soul */}
        <Link href="/" className="flex items-center space-x-2 group">

          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <Image
              src="/soul.png"
              alt="Salut Soul Logo"
              width={128}
              height={128}
              className="w-14 h-14 md:w-18 md:h-18 lg:w-22 lg:h-22 object-contain"
            />
          </motion.div>
        </Link>

        {/* Trigger menu mobile */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="p-2">
                <Menu className={`h-6 w-6 ${scrolled ? "text-gray-900" : "text-white"}`} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-white/95 backdrop-blur-xl">
              <SheetHeader className="sr-only">
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>Navigasi utama</SheetDescription>
              </SheetHeader>
              <div className="flex flex-col space-y-2 mt-8">
                <Link href="/" className="px-4 py-3 text-gray-700 hover:text-blue-600 font-medium rounded-xl hover:bg-blue-50 transition" onClick={() => setIsOpen(false)}>Beranda</Link>
                <Accordion type="single" collapsible>
                  <AccordionItem value="akademik" className="border-none">
                    <AccordionTrigger className="px-4 py-3 text-gray-700 hover:text-blue-600 font-medium rounded-xl hover:bg-blue-50">Akademik</AccordionTrigger>
                    <AccordionContent className="pb-0">
                      <div className="flex flex-col space-y-1 pl-4 border-l-2 border-blue-100 ml-4">
                        {akademikItems.map((item, i) => (
                          <Link key={i} href={item.href} className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg" onClick={() => setIsOpen(false)}>{item.name}</Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <Link href="https://www.ut.ac.id/kategori/berita/" className="block px-4 py-3 text-gray-700 hover:text-blue-600 font-medium rounded-xl hover:bg-blue-50" onClick={() => setIsOpen(false)}>Berita</Link>
                  <AccordionItem value="layanan" className="border-none">
                    <AccordionTrigger className="px-4 py-3 text-gray-700 hover:text-blue-600 font-medium rounded-xl hover:bg-blue-50">Layanan Mahasiswa</AccordionTrigger>
                    <AccordionContent className="pb-0">
                      <div className="flex flex-col space-y-1 pl-4 border-l-2 border-blue-100 ml-4">
                        {layananItems.map((item, i) => (
                          <Link key={i} href={item.href} className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg" onClick={() => setIsOpen(false)}>{item.name}</Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <Link href="/tentang" className="block px-4 py-3 text-gray-700 hover:text-blue-600 font-medium rounded-xl hover:bg-blue-50" onClick={() => setIsOpen(false)}>Tentang</Link>
                  <AccordionItem value="kontak" className="border-none">
                    <AccordionTrigger className="px-4 py-3 text-gray-700 hover:text-blue-600 font-medium rounded-xl hover:bg-blue-50">Kontak</AccordionTrigger>
                    <AccordionContent className="pb-0">
                      <div className="flex flex-col space-y-1 pl-4 border-l-2 border-blue-100 ml-4">
                        {kontakItems.map((item, i) => (
                          <Link key={i} href={item.href} className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg" onClick={() => setIsOpen(false)}>{item.name}</Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Button asChild className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white mx-4 mt-6 rounded-full shadow-xl">
                  <Link href="/pendaftaran" onClick={() => setIsOpen(false)}>Daftar Sekarang</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Tier 2: Desktop nav */}
      <div className={`hidden lg:flex justify-center h-10 items-center ${scrolled ? "border-t border-gray-100" : ""}`}>
        <div className="flex items-center space-x-1">
          {/* Beranda */}
          <Link href="/" className={`px-4 py-2 font-medium rounded-xl transition-all duration-300 hover:scale-105 ${scrolled ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50" : "text-white hover:text-blue-200 text-shadow-lg"}`}>Beranda</Link>

          {/* Akademik */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className={`flex items-center px-4 py-2 font-medium rounded-xl transition-all duration-300 hover:scale-105 group ${scrolled ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50" : "text-white hover:text-blue-200 text-shadow-lg"}`}>
                Akademik <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180 ${scrolled ? "" : "text-white"}`} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 p-2 bg-white/95 backdrop-blur-xl border border-gray-100 shadow-2xl rounded-2xl">
              {akademikItems.map((item, i) => (
                <DropdownMenuItem key={i} asChild>
                  <Link href={item.href} className="flex items-center w-full px-4 py-3 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer">
                    {item.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Berita */}
          <Link href="https://www.ut.ac.id/kategori/berita/" className={`px-4 py-2 font-medium rounded-xl transition-all duration-300 hover:scale-105 ${scrolled ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50" : "text-white hover:text-blue-200 text-shadow-lg"}`}>Berita</Link>

          {/* Layanan Mahasiswa */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className={`flex items-center px-4 py-2 font-medium rounded-xl transition-all duration-300 hover:scale-105 group ${scrolled ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50" : "text-white hover:text-blue-200 text-shadow-lg"}`}>
                Layanan Mahasiswa <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180 ${scrolled ? "" : "text-white"}`} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 p-2 bg-white/95 backdrop-blur-xl border border-gray-100 shadow-2xl rounded-2xl">
              {layananItems.map((item, i) => (
                <DropdownMenuItem key={i} asChild>
                  <Link href={item.href} className="flex items-center w-full px-4 py-3 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer">
                    {item.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Tentang */}
          <Link href="/tentang" className={`px-4 py-2 font-medium rounded-xl transition-all duration-300 hover:scale-105 ${scrolled ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50" : "text-white hover:text-blue-200 text-shadow-lg"}`}>Tentang</Link>

          {/* Kontak */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className={`flex items-center px-4 py-2 font-medium rounded-xl transition-all duration-300 hover:scale-105 group ${scrolled ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50" : "text-white hover:text-blue-200 text-shadow-lg"}`}>
                Kontak <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180 ${scrolled ? "" : "text-white"}`} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 p-2 bg-white/95 backdrop-blur-xl border border-gray-100 shadow-2xl rounded-2xl">
              {kontakItems.map((item, i) => (
                <DropdownMenuItem key={i} asChild>
                  <Link href={item.href} className="flex items-center w-full px-4 py-3 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer">
                    {item.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  )
}

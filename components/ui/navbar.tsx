"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

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
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg border border-gray-100"
            >
              <Image
                src="/Logo_Universitas_Terbuka.ico"
                alt="Logo Universitas Terbuka"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
              />
            </motion.div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                Salut Soul
              </h1>
              <p className="text-sm text-gray-500">Universitas Terbuka</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Beranda */}
            <Link
              href="/"
              className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium rounded-xl hover:bg-blue-50 transition-all duration-300 hover:scale-105"
            >
              Beranda
            </Link>

            {/* Akademik Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 font-medium rounded-xl hover:bg-blue-50 transition-all duration-300 hover:scale-105 group">
                  Akademik
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 p-2 bg-white/95 backdrop-blur-xl border border-gray-100 shadow-2xl rounded-2xl">
                {akademikItems.map((item, index) => (
                  <DropdownMenuItem key={index} asChild>
                    <Link
                      href={item.href}
                      className="flex items-center w-full px-4 py-3 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Berita */}
            <Link
              href="https://www.ut.ac.id/kategori/berita/"
              className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium rounded-xl hover:bg-blue-50 transition-all duration-300 hover:scale-105"
            >
              Berita
            </Link>

            {/* Layanan Mahasiswa Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 font-medium rounded-xl hover:bg-blue-50 transition-all duration-300 hover:scale-105 group">
                  Layanan Mahasiswa
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 p-2 bg-white/95 backdrop-blur-xl border border-gray-100 shadow-2xl rounded-2xl">
                {layananItems.map((item, index) => (
                  <DropdownMenuItem key={index} asChild>
                    <Link
                      href={item.href}
                      className="flex items-center w-full px-4 py-3 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Tentang */}
            <Link
              href="/tentang"
              className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium rounded-xl hover:bg-blue-50 transition-all duration-300 hover:scale-105"
            >
              Tentang
            </Link>

            {/* Kontak Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 font-medium rounded-xl hover:bg-blue-50 transition-all duration-300 hover:scale-105 group">
                  Kontak
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 p-2 bg-white/95 backdrop-blur-xl border border-gray-100 shadow-2xl rounded-2xl">
                {kontakItems.map((item, index) => (
                  <DropdownMenuItem key={index} asChild>
                    <Link
                      href={item.href}
                      className="flex items-center w-full px-4 py-3 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              asChild
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/pendaftaran">Daftar Sekarang</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="sm" className="p-2">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-white/95 backdrop-blur-xl">
              <SheetHeader className="sr-only">
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>Navigasi utama situs web</SheetDescription>
              </SheetHeader>
              <div className="flex flex-col space-y-2 mt-8">
                <Link
                  href="/"
                  className="px-4 py-3 text-gray-700 hover:text-blue-600 font-medium rounded-xl hover:bg-blue-50 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Beranda
                </Link>

                <Accordion type="single" collapsible className="w-full">
                  {/* Mobile Akademik */}
                  <AccordionItem value="akademik" className="border-none">
                    <AccordionTrigger className="px-4 py-3 text-gray-700 hover:text-blue-600 font-medium rounded-xl hover:bg-blue-50 transition-all duration-300 hover:no-underline">
                      Akademik
                    </AccordionTrigger>
                    <AccordionContent className="pb-0">
                      <div className="flex flex-col space-y-1 pl-4 border-l-2 border-blue-100 ml-4">
                        {akademikItems.map((item, index) => (
                          <Link
                            key={index}
                            href={item.href}
                            className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <Link
                    href="https://www.ut.ac.id/kategori/berita/"
                    className="block px-4 py-3 text-gray-700 hover:text-blue-600 font-medium rounded-xl hover:bg-blue-50 transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Berita
                  </Link>

                  {/* Mobile Layanan Mahasiswa */}
                  <AccordionItem value="layanan" className="border-none">
                    <AccordionTrigger className="px-4 py-3 text-gray-700 hover:text-blue-600 font-medium rounded-xl hover:bg-blue-50 transition-all duration-300 hover:no-underline">
                      Layanan Mahasiswa
                    </AccordionTrigger>
                    <AccordionContent className="pb-0">
                      <div className="flex flex-col space-y-1 pl-4 border-l-2 border-blue-100 ml-4">
                        {layananItems.map((item, index) => (
                          <Link
                            key={index}
                            href={item.href}
                            className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <Link
                    href="/tentang"
                    className="block px-4 py-3 text-gray-700 hover:text-blue-600 font-medium rounded-xl hover:bg-blue-50 transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Tentang
                  </Link>

                  {/* Mobile Kontak */}
                  <AccordionItem value="kontak" className="border-none">
                    <AccordionTrigger className="px-4 py-3 text-gray-700 hover:text-blue-600 font-medium rounded-xl hover:bg-blue-50 transition-all duration-300 hover:no-underline">
                      Kontak
                    </AccordionTrigger>
                    <AccordionContent className="pb-0">
                      <div className="flex flex-col space-y-1 pl-4 border-l-2 border-blue-100 ml-4">
                        {kontakItems.map((item, index) => (
                          <Link
                            key={index}
                            href={item.href}
                            className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Button
                  asChild
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white mx-4 mt-6 rounded-full shadow-xl"
                >
                  <Link href="/pendaftaran" onClick={() => setIsOpen(false)}>
                    Daftar Sekarang
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, ChevronDown } from "lucide-react"
import Image from "next/image"

interface NavbarProps {
  showImageHeader?: boolean;
}

export function Navbar({ showImageHeader = false }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    if (!showImageHeader) return

    const handleScroll = () => {
      // The header image height is h-72 (288px). We'll trigger the change slightly before that.
      const threshold = 200 
      if (window.scrollY > threshold) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [showImageHeader])

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

  const textColorClass = "text-gray-800"

  return (
    <>
      {showImageHeader && (
        <div className="flex w-full h-72">
          <div
            className="relative w-1/2 h-full bg-cover bg-top flex items-center justify-center"
            style={{ backgroundImage: "url('/UT_MEDAN.jpg')" }}
            role="img"
            aria-label="Header UT Medan"
          >
            <Link href="/" className={`flex items-center space-x-3 p-4 bg-white/50 rounded-lg shadow-lg backdrop-blur-sm transition-opacity duration-300 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
              <Image
                src="/ut.png"
                alt="Universitas Terbuka Logo"
                width={300}
                height={150}
                className="object-contain"
              />
            </Link>
          </div>
          <div
            className="relative w-1/2 h-full bg-cover bg-top flex items-center justify-center"
            style={{ backgroundImage: "url('/NCOLE_CORNER.jpg')" }}
            role="img"
            aria-label="Header NCOLE Corner"
          >
            <Link href="/" className={`p-4 bg-white/50 rounded-lg shadow-lg backdrop-blur-sm transition-opacity duration-300 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <Image
                    src="/soul.png"
                    alt="Salut Soul Logo"
                    width={150}
                    height={60}
                    className="object-contain"
                />
            </Link>
          </div>
        </div>
      )}
      <header className={`${showImageHeader ? 'sticky' : 'fixed'} top-0 z-50 w-full bg-white border-b border-gray-200`}>
        <div className={`container mx-auto px-4 flex items-center h-20 transition-all duration-300 ${showImageHeader && !isScrolled ? 'justify-center' : 'justify-between'}`}>
          {(!showImageHeader || isScrolled) && (
            <Link href="/" className={`flex items-center space-x-3 transition-opacity duration-300 ${showImageHeader ? (isScrolled ? 'opacity-100' : 'opacity-0') : 'opacity-100'}`}>
              <Image
                src="/ut.png"
                alt="Universitas Terbuka Logo"
                width={150}
                height={150}
                className="object-contain"
              />
            </Link>
          )}

          <nav className="hidden lg:flex items-center space-x-2">
          <Link href="/" className={`px-4 py-2 font-medium rounded-md transition-colors ${textColorClass} hover:bg-gray-100`}>Beranda</Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className={`flex items-center px-4 py-2 font-medium rounded-md transition-colors group ${textColorClass} hover:bg-gray-100`}>
                Akademik <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white/80 backdrop-blur-md shadow-xl rounded-xl border-gray-200/50">
              {akademikItems.map((item, i) => (
                <DropdownMenuItem key={i} asChild>
                  <Link href={item.href} className="text-gray-700 hover:bg-blue-500 hover:text-white rounded-md cursor-pointer p-3">
                    {item.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="https://www.ut.ac.id/kategori/berita/" className={`px-4 py-2 font-medium rounded-md transition-colors ${textColorClass} hover:bg-gray-100`}>Berita</Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className={`flex items-center px-4 py-2 font-medium rounded-md transition-colors group ${textColorClass} hover:bg-gray-100`}>
                Layanan Mahasiswa <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white/80 backdrop-blur-md shadow-xl rounded-xl border-gray-200/50">
              {layananItems.map((item, i) => (
                <DropdownMenuItem key={i} asChild>
                  <Link href={item.href} className="text-gray-700 hover:bg-blue-500 hover:text-white rounded-md cursor-pointer p-3">
                    {item.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/tentang" className={`px-4 py-2 font-medium rounded-md transition-colors ${textColorClass} hover:bg-gray-100`}>Tentang</Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className={`flex items-center px-4 py-2 font-medium rounded-md transition-colors group ${textColorClass} hover:bg-gray-100`}>
                Kontak <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white/80 backdrop-blur-md shadow-xl rounded-xl border-gray-200/50">
              {kontakItems.map((item, i) => (
                <DropdownMenuItem key={i} asChild>
                  <Link href={item.href} className="text-gray-700 hover:bg-blue-500 hover:text-white rounded-md cursor-pointer p-3">
                    {item.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <div className="flex items-center space-x-4">
            {(!showImageHeader || isScrolled) && (
              <Link href="/" className={`transition-opacity duration-300 ${showImageHeader ? (isScrolled ? 'opacity-100' : 'opacity-0') : 'opacity-100'}`}>
                  <Image
                      src="/soul.png"
                      alt="Salut Soul Logo"
                      width={120}
                      height={50}
                      className="object-contain"
                  />
              </Link>
            )}
            <div className="lg:hidden">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                    <Menu className={`h-6 w-6 ${textColorClass}`} />
                    </Button>
                </SheetTrigger>
                <SheetContent className="bg-white/90 backdrop-blur-lg">
                    <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                    </SheetHeader>
                    <div className="mt-8 flex flex-col space-y-2">
                    <Link href="/" className="px-4 py-3 text-gray-700 hover:text-blue-600 font-medium rounded-xl hover:bg-blue-50" onClick={() => setIsOpen(false)}>Beranda</Link>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="akademik" className="border-none">
                        <AccordionTrigger className="px-4 py-3 text-gray-700 hover:text-blue-600 font-medium rounded-xl hover:bg-blue-50">Akademik</AccordionTrigger>
                        <AccordionContent className="pl-4">
                            {akademikItems.map((item, i) => (
                            <Link key={i} href={item.href} className="block py-2 text-gray-600 hover:text-blue-600" onClick={() => setIsOpen(false)}>{item.name}</Link>
                            ))}
                        </AccordionContent>
                        </AccordionItem>
                        <Link href="https://www.ut.ac.id/kategori/berita/" className="block px-4 py-3 text-gray-700 hover:text-blue-600 font-medium rounded-xl hover:bg-blue-50" onClick={() => setIsOpen(false)}>Berita</Link>
                        <AccordionItem value="layanan" className="border-none">
                        <AccordionTrigger className="px-4 py-3 text-gray-700 hover:text-blue-600 font-medium rounded-xl hover:bg-blue-50">Layanan</AccordionTrigger>
                        <AccordionContent className="pl-4">
                            {layananItems.map((item, i) => (
                            <Link key={i} href={item.href} className="block py-2 text-gray-600 hover:text-blue-600" onClick={() => setIsOpen(false)}>{item.name}</Link>
                            ))}
                        </AccordionContent>
                        </AccordionItem>
                        <Link href="/tentang" className="block px-4 py-3 text-gray-700 hover:text-blue-600 font-medium rounded-xl hover:bg-blue-50" onClick={() => setIsOpen(false)}>Tentang</Link>
                        <AccordionItem value="kontak" className="border-none">
                        <AccordionTrigger className="px-4 py-3 text-gray-700 hover:text-blue-600 font-medium rounded-xl hover:bg-blue-50">Kontak</AccordionTrigger>
                        <AccordionContent className="pl-4">
                            {kontakItems.map((item, i) => (
                            <Link key={i} href={item.href} className="block py-2 text-gray-600 hover:text-blue-600" onClick={() => setIsOpen(false)}>{item.name}</Link>
                            ))}
                        </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    </div>
                </SheetContent>
                </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

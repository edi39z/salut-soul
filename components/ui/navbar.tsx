"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, ChevronDown } from "lucide-react"
import Image from "next/image"

interface NavbarProps {
  showImageHeader?: boolean
}

export function Navbar({ showImageHeader = false }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (!showImageHeader) return

    const handleScroll = () => {
      const threshold = 220
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

  const navigationItems = [
    { name: "Beranda", href: "/" },
    { name: "Akademik", href: "/akademik", dropdown: akademikItems },
    { name: "Berita", href: "/berita" },
    { name: "Layanan Mahasiswa", href: "#", dropdown: layananItems },
    { name: "Tentang", href: "/tentang" },
    { name: "Kontak", href: "/kontak", dropdown: kontakItems },
    { name: "Daftar", href: "/pendaftaran", isButton: true },
  ]

  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <>
      {showImageHeader && (
        <div className="relative w-full bg-white">
          {/* Header Section with Building Images */}
          <div className="relative flex items-center justify-between bg-white h-48 overflow-hidden">
            {/* Left Building Image - UT Medan */}
            <div className="absolute left-0 top-0 w-1/5 h-full">
              <div className="relative w-full h-full">
                <Image
                  src="/utmedan.png"
                  alt="UT Medan Building"
                  fill
                  className="object-cover object-[center_20%]"
                  priority
                  sizes="20vw"
                />
                {/* Gradient overlay - fade from transparent to white */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-white/90"></div>
              </div>
            </div>

            {/* Center Logo Section */}
            <div className="relative z-10 flex items-center justify-center space-x-10 flex-grow mx-8">
              {/* UT Logo */}
              <div className="flex items-center justify-center">
                <Image
                  src="/ut.png"
                  alt="Universitas Terbuka Logo"
                  width={200}
                  height={100}
                  className="object-contain drop-shadow-lg"
                />
              </div>

              {/* Vertical Separator */}
              <div className="w-px h-20 bg-gray-400 shadow-sm"></div>

              {/* Salut Soul Logo */}
              <div className="flex items-center justify-center">
                <Image
                  src="/soul.png"
                  alt="Salut Soul Logo"
                  width={160}
                  height={64}
                  className="object-contain drop-shadow-lg"
                />
              </div>
            </div>

            {/* Right Building Image - NCOLE Corner - Show More Building Structure */}
            <div className="absolute right-0 top-0 w-1/4 h-full">
              <div className="relative w-full h-full">
                <Image
                  src="/ncole.jpg"
                  alt="NCOLE Corner Building"
                  fill
                  className="object-cover object-[center_25%]"
                  priority
                  sizes="25vw"
                />
                {/* Gradient overlay - fade from white to transparent */}
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white"></div>
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/20 to-white/90"></div>
              </div>
            </div>
          </div>

          {/* Yellow/Gold Separator Line */}
          <div className="relative h-1 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10"></div>
            <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FFD700]/50 to-transparent blur-sm"></div>
            <div className="absolute -top-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          </div>
        </div>
      )}

      {/* Navigation Bar */}
      <header className={`${showImageHeader ? "sticky" : "fixed"} top-0 z-50 w-full bg-[#002F86] shadow-lg`}>
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Mobile Logo Section - Left Side */}
          <div className="flex items-center lg:hidden">
            <div className="flex items-center space-x-3">
              {/* UT Logo - Mobile */}
              <div className="flex items-center">
                <Image
                  src="/ut2.png"
                  alt="Universitas Terbuka Logo"
                  width={60}
                  height={30}
                  className="object-contain drop-shadow-md"
                />
              </div>

              {/* Vertical Separator - Mobile */}
              <div className="w-px h-8 bg-gradient-to-b from-[#FFD700] via-[#FFA500] to-[#FFD700] shadow-sm"></div>

              {/* Salut Soul Logo - Mobile */}
              <div className="flex items-center">
                <Image
                  src="/soul2.png"
                  alt="Salut Soul Logo"
                  width={50}
                  height={25}
                  className="object-contain drop-shadow-md"
                />
              </div>
            </div>
          </div>

          {/* Desktop Left Logo - Salut Soul (Only show when scrolled) */}
          {showImageHeader && (
            <div
              className={`hidden lg:block transition-all duration-700 ease-out ${isScrolled
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform -translate-y-8 pointer-events-none"
                }`}
            >
              <Image
                src="/soul2.png"
                alt="Salut Soul Logo"
                width={90}
                height={45}
                className="object-contain drop-shadow-md"
              />
            </div>
          )}

          {/* Desktop Left Logo for non-image header pages - UT Logo */}
          {!showImageHeader && (
            <div className="hidden lg:flex items-center">
              <Image src="/ut2.png" alt="Universitas Terbuka Logo" width={120} height={60} className="object-contain" />
            </div>
          )}

          {/* Centered Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center space-x-2 flex-1">
            {navigationItems.map((item, index) => (
              <div key={index}>
                {item.dropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        className={`flex items-center px-4 py-2 font-medium rounded-lg transition-all duration-200 group ${isActiveLink(item.href)
                            ? "text-[#FFD700] bg-white/10"
                            : "text-white hover:text-[#FFD700] hover:bg-white/10"
                          }`}
                      >
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-white/95 backdrop-blur-md shadow-xl rounded-xl border border-gray-200/50 mt-2">
                      {item.dropdown.map((dropdownItem, i) => (
                        <DropdownMenuItem key={i} asChild>
                          <Link
                            href={dropdownItem.href}
                            className="text-gray-700 hover:bg-[#002F86] hover:text-white rounded-lg cursor-pointer p-3 transition-colors duration-200"
                          >
                            {dropdownItem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : item.isButton ? (
                  // Special styling for "Daftar" button
                  <Link
                    href={item.href}
                    className={`px-6 py-2 font-semibold rounded-lg transition-all duration-200 border-2 ${isActiveLink(item.href)
                        ? "bg-[#FFD700] text-[#002F86] border-[#FFD700] shadow-lg"
                        : "bg-[#FFD700] text-[#002F86] border-[#FFD700] hover:bg-[#FFA500] hover:border-[#FFA500] shadow-md hover:shadow-lg"
                      }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-4 py-2 font-medium rounded-lg transition-all duration-200 ${isActiveLink(item.href)
                        ? "text-[#FFD700] bg-white/10"
                        : "text-white hover:text-[#FFD700] hover:bg-white/10"
                      }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Right Logo - UT (Only show when scrolled) */}
          {showImageHeader && (
            <div
              className={`hidden lg:block transition-all duration-700 ease-out ${isScrolled
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform -translate-y-8 pointer-events-none"
                }`}
            >
              <Image src="/ut2.png" alt="UT Logo" width={120} height={60} className="object-contain drop-shadow-md" />
            </div>
          )}

          {/* Desktop Right Logo for non-image header pages - Salut Soul Logo */}
          {!showImageHeader && (
            <div className="hidden lg:flex items-center">
              <Image src="/soul2.png" alt="Salut Soul Logo" width={90} height={45} className="object-contain" />
            </div>
          )}

          {/* Mobile Menu Button - Right Side */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-[#FFD700] hover:bg-white/10 h-12 w-12 rounded-lg"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#002F86]/95 backdrop-blur-lg border-l border-white/20 w-80 p-0">
                <div className="flex flex-col h-full">
                  {/* Fixed Header */}
                  <SheetHeader className="p-6 pb-4 border-b border-white/10">
                    <SheetTitle className="text-white text-lg font-bold text-center">Menu Navigasi</SheetTitle>
                  </SheetHeader>

                  {/* Scrollable Content */}
                  <div className="flex-1 overflow-y-auto px-6 py-4">
                    {/* Mobile Logo Section - Centered in Menu */}
                    <div className="mb-6">
                      <div className="flex items-center justify-center gap-4 p-4 bg-white/10 rounded-lg">
                        {/* UT Logo */}
                        <div className="flex items-center justify-center">
                          <Image
                            src="/ut2.png"
                            alt="Universitas Terbuka Logo"
                            width={80}
                            height={40}
                            className="object-contain"
                          />
                        </div>

                        {/* Vertical Separator */}
                        <div className="relative w-px h-12">
                          <div className="absolute inset-0 bg-gradient-to-b from-[#FFD700] via-[#FFA500] to-[#FFD700] shadow-lg"></div>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFD700]/50 to-transparent blur-sm"></div>
                          <div className="absolute -left-1 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
                        </div>

                        {/* Salut Soul Logo */}
                        <div className="flex items-center justify-center">
                          <Image
                            src="/soul2.png"
                            alt="Salut Soul Logo"
                            width={60}
                            height={30}
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Navigation Items */}
                    <div className="flex flex-col space-y-2">
                      {navigationItems.map((item, index) => (
                        <div key={index}>
                          {item.dropdown ? (
                            <Accordion type="single" collapsible>
                              <AccordionItem value={`item-${index}`} className="border-none">
                                <AccordionTrigger
                                  className={`px-4 py-3 font-medium rounded-xl transition-colors duration-200 text-left hover:no-underline ${isActiveLink(item.href)
                                      ? "text-[#FFD700] bg-white/10"
                                      : "text-white hover:text-[#FFD700] hover:bg-white/10"
                                    }`}
                                >
                                  {item.name}
                                </AccordionTrigger>
                                <AccordionContent className="pl-4 space-y-1">
                                  {item.dropdown.map((dropdownItem, i) => (
                                    <Link
                                      key={i}
                                      href={dropdownItem.href}
                                      className="block py-2 px-3 text-gray-300 hover:text-[#FFD700] hover:bg-white/5 rounded-lg transition-colors duration-200"
                                      onClick={() => setIsOpen(false)}
                                    >
                                      {dropdownItem.name}
                                    </Link>
                                  ))}
                                </AccordionContent>
                              </AccordionItem>
                            </Accordion>
                          ) : item.isButton ? (
                            // Special styling for "Daftar" button in mobile menu
                            <Link
                              href={item.href}
                              className={`block px-4 py-3 font-semibold rounded-xl text-center transition-colors duration-200 border-2 ${isActiveLink(item.href)
                                  ? "bg-[#FFD700] text-[#002F86] border-[#FFD700]"
                                  : "bg-[#FFD700] text-[#002F86] border-[#FFD700] hover:bg-[#FFA500] hover:border-[#FFA500]"
                                }`}
                              onClick={() => setIsOpen(false)}
                            >
                              {item.name}
                            </Link>
                          ) : (
                            <Link
                              href={item.href}
                              className={`block px-4 py-3 font-medium rounded-xl transition-colors duration-200 ${isActiveLink(item.href)
                                  ? "text-[#FFD700] bg-white/10"
                                  : "text-white hover:text-[#FFD700] hover:bg-white/10"
                                }`}
                              onClick={() => setIsOpen(false)}
                            >
                              {item.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Spacer for fixed navbar on non-image header pages */}
      {!showImageHeader && <div className="h-16"></div>}
    </>
  )
}

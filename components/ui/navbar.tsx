"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, GraduationCap, Phone, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Beranda" },
    { href: "/tentang", label: "Tentang" },
    { href: "/akademik", label: "Akademik" },
    { href: "/kontak", label: "Kontak" },
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-slate-800 text-white py-3 hidden md:block">
        <div className="container-academic">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+62 812-3456-7890</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@salutsoul.ac.id</span>
              </div>
            </div>
            <div className="text-slate-300">Senin-Jumat 08:00-17:00 | Sabtu 08:00-14:00</div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-50">
        <div className="container-academic">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div className="hidden sm:block">
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-slate-900">SALUT Soul</span>
                  <span className="text-sm text-slate-600 -mt-1">Universitas Terbuka</span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 rounded-lg font-medium transition-colors duration-200",
                    pathname === item.href
                      ? "text-blue-600 bg-blue-50"
                      : "text-slate-700 hover:text-blue-600 hover:bg-blue-50",
                  )}
                >
                  {item.label}
                </Link>
              ))}

              <div className="ml-4">
                <Button asChild className="btn-primary">
                  <Link href="/pendaftaran">Daftar Sekarang</Link>
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden pb-4 border-t border-slate-200"
              >
                <div className="flex flex-col space-y-2 pt-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "px-4 py-3 rounded-lg font-medium transition-colors duration-200",
                        pathname === item.href
                          ? "text-blue-600 bg-blue-50"
                          : "text-slate-700 hover:text-blue-600 hover:bg-blue-50",
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}

                  <div className="pt-4">
                    <Button asChild className="btn-primary w-full">
                      <Link href="/pendaftaran" onClick={() => setIsMobileMenuOpen(false)}>
                        Daftar Sekarang
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  )
}

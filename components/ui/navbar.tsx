"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Beranda" },
    { href: "/tentang", label: "Tentang Kami" },
    { href: "/akademik", label: "Akademik" },
    { href: "/kontak", label: "Kontak" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "navbar-scroll py-2" : "bg-white/95 backdrop-blur-sm py-4",
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-medium"
            >
              <span className="text-white font-bold text-xl font-heading">S</span>
            </motion.div>
            <div className="hidden sm:block">
              <span className="font-heading font-bold text-xl text-neutral-900 group-hover:text-primary-500 transition-colors">
                SALUT Soul
              </span>
              <p className="text-xs text-neutral-500 -mt-1">Universitas Terbuka</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-medium transition-all duration-300 relative py-2",
                  pathname === item.href ? "text-primary-500" : "text-neutral-700 hover:text-primary-500",
                )}
              >
                {item.label}
                {pathname === item.href && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500 rounded-full"
                  />
                )}
              </Link>
            ))}
            <Button asChild className="btn-primary">
              <Link href="/pendaftaran">Daftar Sekarang</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pb-4 border-t border-neutral-200"
            >
              <div className="flex flex-col space-y-4 pt-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "font-medium py-2 px-4 rounded-lg transition-all duration-300",
                      pathname === item.href
                        ? "text-primary-500 bg-primary-50"
                        : "text-neutral-700 hover:text-primary-500 hover:bg-neutral-50",
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button asChild className="btn-primary mt-4">
                  <Link href="/pendaftaran" onClick={() => setIsMobileMenuOpen(false)}>
                    Daftar Sekarang
                  </Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

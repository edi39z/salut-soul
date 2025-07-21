"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react"

interface Berita {
    id: string
    judul: string
    konten: string
    gambar: string
    slug: string
    linkUrl?: string | null
    tanggal: string
    aktif: boolean
}

export function HeroCarousel() {
    const [berita, setBerita] = useState<Berita[]>([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchBerita = async () => {
            try {
                setLoading(true)
                const response = await fetch("/api/berita?limit=5") // Fetch up to 5 news items for the carousel
                const data = await response.json()

                if (data.success) {
                    setBerita(data.data.filter((item: Berita) => item.aktif)) // Only show active news
                } else {
                    setError("Failed to fetch news for carousel")
                }
            } catch (err) {
                setError("Error loading news for carousel")
                console.error("Error fetching berita for carousel:", err)
            } finally {
                setLoading(false)
            }
        }

        fetchBerita()
    }, [])

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + berita.length) % berita.length)
    }

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % berita.length)
    }

    const handleDotClick = (index: number) => {
        setCurrentIndex(index)
    }



    const truncateText = (text: string, maxLength: number) => {
        if (text.length <= maxLength) return text
        return text.substring(0, maxLength) + "..."
    }

    const getReadMoreUrl = (item: Berita) => {
        return item.linkUrl || `/berita/${item.slug}`
    }

    const isExternalLink = (url: string) => {
        return url.startsWith("http://") || url.startsWith("https://")
    }

    if (loading) {
        return (
            <section className="relative w-full h-screen bg-gray-900 flex items-center justify-center">
                <div className="text-white text-xl animate-pulse">Loading Berita...</div>
            </section>
        )
    }

    if (error || berita.length === 0) {
        return (
            <section className="relative w-full h-screen bg-gray-900 flex items-center justify-center text-center p-4">
                <div className="text-white text-xl">
                    {error || "Tidak ada berita aktif untuk ditampilkan."}
                    <p className="text-sm text-gray-300 mt-2">
                        Silakan tambahkan berita melalui admin panel atau periksa koneksi Anda.
                    </p>
                </div>
            </section>
        )
    }

    const currentNews = berita[currentIndex]

    return (
        <section className="relative w-full h-screen overflow-hidden">
            <AnimatePresence initial={false} mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                >
                    <Image
                        src={currentNews.gambar || "/placeholder.svg?height=1080&width=1920&text=Berita+Image"}
                        alt={currentNews.judul}
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                        className="z-0"
                    />
                    <div className="absolute inset-0 bg-black/50 z-10"></div> {/* Darker overlay for text readability */}
                </motion.div>
            </AnimatePresence>

            <div className="relative z-20 flex items-center h-full px-4 md:px-8 lg:px-16">
                <div className="max-w-3xl text-white space-y-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-shadow-lg"
                    >
                        {currentNews.judul}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="text-lg md:text-xl leading-relaxed max-w-xl opacity-90 text-shadow-lg"
                    >
                        {truncateText(currentNews.konten, 200)}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        {isExternalLink(getReadMoreUrl(currentNews)) ? (
                            <Button
                                asChild
                                size="lg"
                                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                            >
                                <a href={getReadMoreUrl(currentNews)} target="_blank" rel="noopener noreferrer">
                                    Selengkapnya
                                    <ExternalLink className="ml-2 w-5 h-5" />
                                </a>
                            </Button>
                        ) : (
                            <Button
                                asChild
                                size="lg"
                                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                            >
                                <Link href={getReadMoreUrl(currentNews)}>
                                    Selengkapnya
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </Button>
                        )}
                    </motion.div>
                </div>
            </div>

            {/* Navigation Arrows */}
            {berita.length > 1 && (
                <>
                    <button
                        onClick={handlePrev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/20 hover:bg-white/40 rounded-full text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
                        aria-label="Previous slide"
                    >
                        <ArrowLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/20 hover:bg-white/40 rounded-full text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
                        aria-label="Next slide"
                    >
                        <ArrowRight className="w-6 h-6" />
                    </button>
                </>
            )}

            {/* Navigation Dots */}
            {berita.length > 1 && (
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
                    {berita.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? "bg-white w-6" : "bg-white/50"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </section>
    )
}

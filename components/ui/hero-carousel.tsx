"use client"

import Link from "next/link"
import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

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

    const goToNext = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % berita.length)
    }, [berita.length])

    const goToPrevious = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + berita.length) % berita.length)
    }, [berita.length])

    // Removed setInterval for automatic sliding

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
            <section className="relative w-full py-8 lg:py-12 flex items-center justify-center">
                <div className="text-gray-700 text-xl animate-pulse">Loading Berita...</div>
            </section>
        )
    }

    if (error || berita.length === 0) {
        return (
            <section className="relative w-full py-8 lg:py-12 flex items-center justify-center text-center p-4">
                <div className="text-gray-700 text-xl">
                    {error || "Tidak ada berita aktif untuk ditampilkan."}
                    <p className="text-sm text-gray-500 mt-2">
                        Silakan tambahkan berita melalui admin panel atau periksa koneksi Anda.
                    </p>
                </div>
            </section>
        )
    }

    const currentNews = berita[currentIndex]

    return (
        <section className="relative w-full pt-[8rem] md:pt-[9rem] lg:pt-[10rem] pb-8 lg:pb-12">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="relative bg-blue-950 rounded-lg shadow-xl overflow-hidden">
                    <AnimatePresence initial={false} mode="wait">
                        <motion.div
                            key={currentNews.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative w-full h-[300px] md:h-[400px] lg:h-[450px]"
                        >
                            <Image
                                src={currentNews.gambar || "/placeholder.svg?height=1080&width=1920&text=Berita+Image"}
                                alt={currentNews.judul}
                                fill
                                style={{ objectFit: "cover" }}
                                priority
                                className="z-0"
                            />
                            {/* Overlay for text readability */}
                            <div className="absolute inset-0 bg-black/20 z-10" />

                            {/* Navigation Buttons on image */}
                            {berita.length > 1 && (
                                <>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white rounded-full p-2 z-30"
                                        onClick={goToPrevious}
                                    >
                                        <ChevronLeft className="h-6 w-6" />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white rounded-full p-2 z-30"
                                        onClick={goToNext}
                                    >
                                        <ChevronRight className="h-6 w-6" />
                                    </Button>
                                </>
                            )}

                            {/* Dots Indicator on image */}
                            {berita.length > 1 && (
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
                                    {berita.map((_, index) => (
                                        <button
                                            key={index}
                                            className={`h-2 w-2 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/70"
                                                }`}
                                            onClick={() => setCurrentIndex(index)}
                                            aria-label={`Go to slide ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>

                    {/* Text Content below image */}
                    <div className="p-4 md:p-6 lg:p-8 text-white space-y-3 md:space-y-4">
                        <span className="text-sm font-semibold text-orange-400">Berita</span>{" "}
                        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold leading-tight text-white">{currentNews.judul}</h2>
                        <p className="text-sm md:text-base lg:text-lg opacity-90">{truncateText(currentNews.konten, 120)}</p>
                        <Button
                            asChild
                            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg shadow-lg transition-all duration-300 hover:scale-105"
                        >
                            {isExternalLink(getReadMoreUrl(currentNews)) ? (
                                <a href={getReadMoreUrl(currentNews)} target="_blank" rel="noopener noreferrer">
                                    Selengkapnya <ArrowUpRight className="ml-2 h-5 w-5" />
                                </a>
                            ) : (
                                <Link href={getReadMoreUrl(currentNews)}>
                                    Selengkapnya <ArrowUpRight className="ml-2 h-5 w-5" />
                                </Link>
                            )}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

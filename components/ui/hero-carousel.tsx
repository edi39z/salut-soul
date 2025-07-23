/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

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
    const [isAutoPlaying, setIsAutoPlaying] = useState(false)
    const [direction, setDirection] = useState(0)

    // Fetch berita data
    useEffect(() => {
        const fetchBerita = async () => {
            try {
                setLoading(true)
                const response = await fetch("/api/berita", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    cache: "no-store",
                })

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }

                const data = await response.json()

                if (data.success && Array.isArray(data.data)) {
                    const activeBerita = data.data.filter((item: any) => Boolean(item.aktif))

                    if (activeBerita.length > 0) {
                        setBerita(activeBerita)
                        setCurrentIndex(0)
                        setError(null)

                        setTimeout(() => {
                            setIsAutoPlaying(true)
                        }, 1000)
                    } else {
                        setError("Tidak ada berita aktif")
                    }
                } else {
                    setError("Format respons API tidak valid")
                }
            } catch (err) {
                setError(`Error: ${err instanceof Error ? err.message : "Unknown error"}`)
            } finally {
                setLoading(false)
            }
        }

        fetchBerita()
    }, [])

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying || berita.length <= 1) {
            return
        }

        const interval = setInterval(() => {
            setDirection(1)
            setCurrentIndex((prevIndex) => (prevIndex + 1) % berita.length)
        }, 6000)

        return () => clearInterval(interval)
    }, [isAutoPlaying, berita.length])

    // Navigation handlers
    const handlePrev = () => {
        setIsAutoPlaying(false)
        setDirection(-1)
        setCurrentIndex((prevIndex) => (prevIndex - 1 + berita.length) % berita.length)
        setTimeout(() => setIsAutoPlaying(true), 8000)
    }

    const handleNext = () => {
        setIsAutoPlaying(false)
        setDirection(1)
        setCurrentIndex((prevIndex) => (prevIndex + 1) % berita.length)
        setTimeout(() => setIsAutoPlaying(true), 8000)
    }

    const handleDotClick = (index: number) => {
        setIsAutoPlaying(false)
        setDirection(index > currentIndex ? 1 : -1)
        setCurrentIndex(index)
        setTimeout(() => setIsAutoPlaying(true), 8000)
    }

    // Utility functions
    const truncateText = (text: string, maxLength: number) => {
        if (!text) return ""
        if (text.length <= maxLength) return text
        return text.substring(0, maxLength) + "..."
    }

    const getReadMoreUrl = (item: Berita) => {
        if (item.linkUrl && item.linkUrl.trim() !== "") {
            return item.linkUrl
        }
        return `/berita/${item.slug}`
    }

    // Simple slide animation variants
    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 300 : -300,
            opacity: 0,
        }),
    }

    // Simple transition settings
    const transition = {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
    }

    // Loading state
    if (loading) {
        return (
            <section className="py-6">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse">
                            <div className="h-[220px] bg-gray-200"></div>
                            <div className="bg-[#003366] p-4">
                                <div className="h-3 bg-gray-200 rounded w-20 mb-2"></div>
                                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                                <div className="h-3 bg-gray-200 rounded w-2/3 mb-3"></div>
                                <div className="h-8 bg-gray-200 rounded w-32"></div>
                            </div>
                            <div className="h-10 bg-[#003366] flex justify-center items-center space-x-2 py-2">
                                <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                                <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                                <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    // Error state
    if (error || berita.length === 0) {
        return (
            <section className="py-6">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <div className="text-gray-600 text-lg font-medium mb-4">{error || "Tidak ada berita tersedia"}</div>
                            <Button
                                onClick={() => window.location.reload()}
                                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md"
                            >
                                Muat Ulang
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    const currentNews = berita[currentIndex]

    if (!currentNews) {
        return (
            <section className="py-6">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <div className="text-gray-600 text-lg">Error: Tidak dapat memuat berita saat ini</div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="py-6">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto relative group">
                    {/* Carousel card */}
                    <div className="relative w-full overflow-hidden rounded-lg shadow-lg bg-white">
                        {/* Simple Navigation Arrows */}
                        {berita.length > 1 && (
                            <>
                                <button
                                    onClick={handlePrev}
                                    className="absolute left-4 top-[110px] -translate-y-1/2 z-20 w-10 h-10 bg-amber-500/90 text-white flex items-center justify-center rounded-full shadow-lg hover:bg-amber-600 transition-all duration-300 opacity-80 hover:opacity-100"
                                    aria-label="Previous slide"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="absolute right-4 top-[110px] -translate-y-1/2 z-20 w-10 h-10 bg-amber-500/90 text-white flex items-center justify-center rounded-full shadow-lg hover:bg-amber-600 transition-all duration-300 opacity-80 hover:opacity-100"
                                    aria-label="Next slide"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </>
                        )}

                        {/* Simple carousel slides */}
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={`carousel-item-${currentNews.id}`}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={transition}
                                className="w-full"
                            >
                                {/* Image section */}
                                <div className="relative w-full h-[220px] overflow-hidden">
                                    <Image
                                        src={currentNews.gambar || "/placeholder.svg?height=220&width=800&text=Berita+Image"}
                                        alt={currentNews.judul || "Berita"}
                                        fill
                                        style={{ objectFit: "cover" }}
                                        className="transition-transform duration-300 hover:scale-105"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                                </div>

                                {/* Content section */}
                                <div className="bg-[#003366] px-6 py-4 relative">
                                    <div className="text-amber-400 text-xs font-medium mb-2 uppercase tracking-wide">Pendidikan</div>

                                    <h2 className="text-white text-lg font-bold mb-2 line-clamp-1">{currentNews.judul}</h2>

                                    <p className="text-blue-100 text-sm mb-4 line-clamp-2">{truncateText(currentNews.konten, 100)}</p>

                                    <Link
                                        href={getReadMoreUrl(currentNews)}
                                        className="inline-flex items-center text-amber-400 text-sm font-medium hover:text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 px-4 py-2 rounded-md border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300"
                                    >
                                        Baca Selengkapnya
                                        <span className="ml-2">→</span>
                                    </Link>
                                </div>

                                {/* Simple slider indicators */}
                                {berita.length > 1 && (
                                    <div className="flex justify-center py-3 space-x-2 bg-[#003366] border-t border-blue-800/20">
                                        {berita.map((_, index) => (
                                            <button
                                                key={`dot-${index}`}
                                                onClick={() => handleDotClick(index)}
                                                className="relative"
                                                aria-label={`Go to slide ${index + 1}`}
                                            >
                                                <div
                                                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentIndex === index ? "bg-amber-500 scale-110" : "bg-white/40 hover:bg-white/60"
                                                        }`}
                                                />
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    )
}

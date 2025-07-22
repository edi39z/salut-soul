"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react"

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

                        // Start auto-play after data is loaded
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
            setCurrentIndex((prevIndex) => (prevIndex + 1) % berita.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [isAutoPlaying, berita.length])

    // Navigation handlers
    const handlePrev = () => {
        setIsAutoPlaying(false)
        setCurrentIndex((prevIndex) => (prevIndex - 1 + berita.length) % berita.length)
        setTimeout(() => setIsAutoPlaying(true), 8000)
    }

    const handleNext = () => {
        setIsAutoPlaying(false)
        setCurrentIndex((prevIndex) => (prevIndex + 1) % berita.length)
        setTimeout(() => setIsAutoPlaying(true), 8000)
    }

    const handleDotClick = (index: number) => {
        setIsAutoPlaying(false)
        setCurrentIndex(index)
        setTimeout(() => setIsAutoPlaying(true), 8000)
    }

    // Utility functions
    const truncateText = (text: string, maxLength: number) => {
        if (!text) return ""
        if (text.length <= maxLength) return text
        return text.substring(0, maxLength) + "..."
    }

    const formatDate = (dateString: string) => {
        try {
            const date = new Date(dateString)
            return date.toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
            })
        } catch (error) {
            return "Tanggal tidak valid"
        }
    }

    const getReadMoreUrl = (item: Berita) => {
        if (item.linkUrl && item.linkUrl.trim() !== "") {
            return item.linkUrl
        }
        return `/berita/${item.slug}`
    }

    const isExternalLink = (url: string) => {
        return url.startsWith("http://") || url.startsWith("https://")
    }

    // Loading state
    if (loading) {
        return (
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
                            <div className="flex flex-col lg:flex-row">
                                <div className="lg:w-3/5 h-80 bg-gray-200"></div>
                                <div style={{ backgroundColor: "#002F86" }} className="lg:w-2/5 p-8">
                                    <div className="h-4 bg-orange-400 rounded mb-4 w-24"></div>
                                    <div className="h-8 bg-blue-400 rounded mb-4"></div>
                                    <div className="h-4 bg-blue-400 rounded mb-6 w-3/4"></div>
                                    <div className="h-10 bg-orange-400 rounded-full w-32"></div>
                                </div>
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
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto text-center">
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <div className="text-gray-600 text-lg font-medium mb-4">{error || "Tidak ada berita tersedia"}</div>
                            <Button
                                onClick={() => window.location.reload()}
                                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-full"
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
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto text-center">
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <div className="text-gray-600 text-lg">Error: Tidak dapat memuat berita saat ini</div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`news-horizontal-${currentNews.id}`}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="bg-white rounded-2xl shadow-xl overflow-hidden"
                        >
                            <div className="flex flex-col lg:flex-row">
                                {/* Image Section - 60% width */}
                                <div className="lg:w-3/5 relative">
                                    <div className="relative h-80 lg:h-96 overflow-hidden">
                                        <Image
                                            src={currentNews.gambar || "/placeholder.svg?height=384&width=640&text=Berita+Image"}
                                            alt={currentNews.judul || "Berita"}
                                            fill
                                            style={{ objectFit: "cover" }}
                                            className="transition-transform duration-700 hover:scale-105"
                                            priority
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/5"></div>

                                        {/* Navigation Dots - Positioned at bottom center of image */}
                                        {berita.length > 1 && (
                                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                                                {berita.map((_, index) => (
                                                    <button
                                                        key={`dot-${index}`}
                                                        onClick={() => handleDotClick(index)}
                                                        className={`transition-all duration-300 rounded-full ${currentIndex === index ? "bg-orange-500 w-8 h-2" : "bg-white/60 w-2 h-2 hover:bg-white/80"
                                                            }`}
                                                        aria-label={`Go to slide ${index + 1}`}
                                                    />
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Content Section - 40% width with blue background */}
                                <div className="lg:w-2/5 relative" style={{ backgroundColor: "#002F86" }}>
                                    <div className="p-8 h-full flex flex-col justify-center relative">
                                        {/* Category Label */}
                                        <div className="inline-block bg-orange-500 text-white px-3 py-1 rounded-md text-sm font-medium mb-4 w-fit">
                                            Seputar Kampus
                                        </div>

                                        {/* Title - White color as requested */}
                                        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-white leading-tight">
                                            {currentNews.judul}
                                        </h2>

                                        {/* Content */}
                                        <p className="text-blue-100 text-base leading-relaxed mb-6 flex-grow">
                                            {truncateText(currentNews.konten, 120)}
                                        </p>

                                        {/* Read More Button */}
                                        <div className="flex items-center justify-between">
                                            {isExternalLink(getReadMoreUrl(currentNews)) ? (
                                                <Button
                                                    asChild
                                                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                                                >
                                                    <a href={getReadMoreUrl(currentNews)} target="_blank" rel="noopener noreferrer">
                                                        Selengkapnya
                                                        <ArrowUpRight className="ml-2 w-4 h-4" />
                                                    </a>
                                                </Button>
                                            ) : (
                                                <Button
                                                    asChild
                                                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                                                >
                                                    <Link href={getReadMoreUrl(currentNews)}>
                                                        Selengkapnya
                                                        <ArrowUpRight className="ml-2 w-4 h-4" />
                                                    </Link>
                                                </Button>
                                            )}
                                        </div>

                                        {/* Decorative Element - Subtle pattern in bottom right */}
                                        <div className="absolute bottom-8 right-8 opacity-10">
                                            <div className="w-16 h-16 border-2 border-white/20 rounded-full flex items-center justify-center">
                                                <div className="w-10 h-10 border-2 border-white/30 rounded-full flex items-center justify-center">
                                                    <div className="w-4 h-4 border-2 border-white/40 rounded-full"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Arrows - Integrated design */}
                    {berita.length > 1 && (
                        <>
                            {/* Left Arrow - Positioned on left edge */}
                            <button
                                onClick={handlePrev}
                                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
                                aria-label="Previous slide"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>

                            {/* Right Arrow - Positioned on right edge, integrated with design */}
                            <button
                                onClick={handleNext}
                                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
                                aria-label="Next slide"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}

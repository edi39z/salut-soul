/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"

interface Berita {
    id: string
    judul: string
    konten: string
    gambar: string
    slug: string
    linkUrl?: string | null
    jenis: string
    tanggal: string
    aktif: boolean
    tampilDiCarousel: boolean
}

export function HeroCarousel() {
    const [berita, setBerita] = useState<Berita[]>([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [isAutoPlaying, setIsAutoPlaying] = useState(false)
    const [direction, setDirection] = useState(0)

    // Fetch berita data - only carousel items
    useEffect(() => {
        const fetchBerita = async () => {
            try {
                setLoading(true)
                const response = await fetch("/api/berita?carousel=true&limit=10", {
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
                console.log("Carousel: API Response:", data)

                if (data.success && Array.isArray(data.data)) {
                    // Double check the filtering - use the correct field name
                    const carouselBerita = data.data.filter((item: any) => {
                        console.log("Carousel: Filtering item:", {
                            id: item.id,
                            judul: item.judul,
                            aktif: item.aktif,
                            tampilDiCarousel: item.tampilDiCarousel,
                            shouldShow: Boolean(item.aktif) && Boolean(item.tampilDiCarousel),
                        })
                        return Boolean(item.aktif) && Boolean(item.tampilDiCarousel)
                    })

                    console.log("Carousel: Filtered berita count:", carouselBerita.length)

                    if (carouselBerita.length > 0) {
                        setBerita(carouselBerita)
                        setCurrentIndex(0)
                        setError(null)

                        setTimeout(() => {
                            setIsAutoPlaying(true)
                        }, 1000)
                    } else {
                        setError("Tidak ada berita carousel aktif")
                    }
                } else {
                    setError("Format respons API tidak valid")
                }
            } catch (err) {
                console.error("Carousel: Fetch error:", err)
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
    const stripHtmlTags = (html: string) => {
        if (typeof window === "undefined") {
            // Server-side fallback
            return html.replace(/<[^>]*>/g, "")
        }
        const tmp = document.createElement("div")
        tmp.innerHTML = html
        return tmp.textContent || tmp.innerText || ""
    }

    const truncateText = (text: string, maxLength: number) => {
        if (!text) return ""
        const plainText = stripHtmlTags(text)
        if (plainText.length <= maxLength) return plainText
        return plainText.substring(0, maxLength) + "..."
    }

    const getReadMoreUrl = (item: Berita) => {
        // For external news, use linkUrl if available
        if (item.jenis === "eksternal" && item.linkUrl && item.linkUrl.trim() !== "") {
            return item.linkUrl
        }
        // For internal news or external without linkUrl, use slug
        return `/berita/${item.slug}`
    }

    const isExternalLink = (item: Berita) => {
        return item.jenis === "eksternal" && item.linkUrl && item.linkUrl.trim() !== ""
    }

    // Seamless slide animation
    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? "100%" : "-100%",
        }),
        center: {
            x: "0%",
        },
        exit: (direction: number) => ({
            x: direction < 0 ? "100%" : "-100%",
        }),
    }

    const transition = {
        x: {
            type: "spring",
            stiffness: 400,
            damping: 35,
            mass: 0.6,
        },
    }

    // Loading state
    if (loading) {
        return (
            <section className="py-6">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse">
                            <div className="h-[380px] bg-gray-200"></div>
                            <div className="absolute inset-x-0 top-[360px] flex justify-center py-2">
                                <div className="flex space-x-1">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                                </div>
                            </div>
                            <div className="bg-[#003366] p-8">
                                <div className="h-6 bg-gray-200 rounded mb-4"></div>
                                <div className="h-4 bg-gray-200 rounded w-4/5 mb-2"></div>
                                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
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
                            <div className="text-gray-600 text-lg font-medium mb-4">
                                {error || "Tidak ada berita carousel tersedia"}
                            </div>
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
                <div className="max-w-4xl mx-auto relative">
                    <div className="relative w-full overflow-hidden rounded-lg shadow-lg bg-[#003366]">
                        {/* Navigation arrows */}
                        {berita.length > 1 && (
                            <>
                                <button
                                    onClick={handlePrev}
                                    className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-9 h-9 bg-[#FFD700] hover:bg-[#FFA500] text-[#003366] flex items-center justify-center transition-all duration-300 rounded-none"
                                    aria-label="Previous slide"
                                >
                                    <ChevronLeft className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-9 h-9 bg-[#FFD700] hover:bg-[#FFA500] text-[#003366] flex items-center justify-center transition-all duration-300 rounded-none"
                                    aria-label="Next slide"
                                >
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            </>
                        )}

                        {/* Carousel slides */}
                        <div className="relative w-full h-[560px] bg-[#003366]">
                            <AnimatePresence initial={false} custom={direction} mode="popLayout">
                                <motion.div
                                    key={`carousel-item-${currentNews.id}`}
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={transition}
                                    className="absolute inset-0 w-full h-full bg-[#003366]"
                                >
                                    {/* Image section */}
                                    {isExternalLink(currentNews) ? (
                                        <a href={getReadMoreUrl(currentNews)} target="_blank" rel="noopener noreferrer" className="block">
                                            <div className="relative w-full h-[380px] overflow-hidden cursor-pointer group">
                                                <Image
                                                    src={currentNews.gambar || "/placeholder.svg?height=380&width=800&text=Berita+Image"}
                                                    alt={currentNews.judul || "Berita"}
                                                    fill
                                                    style={{
                                                        objectFit: "cover",
                                                        objectPosition: "center",
                                                    }}
                                                    className="transition-transform duration-300 group-hover:scale-105"
                                                    priority
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/30 via-transparent to-transparent group-hover:from-[#003366]/40 transition-all duration-300" />
                                                {/* External link indicator */}
                                                <div className="absolute top-4 right-4 bg-blue-600 text-white p-2 rounded-full shadow-lg">
                                                    <ExternalLink className="w-4 h-4" />
                                                </div>
                                            </div>
                                        </a>
                                    ) : (
                                        <Link href={getReadMoreUrl(currentNews)} className="block">
                                            <div className="relative w-full h-[380px] overflow-hidden cursor-pointer group">
                                                <Image
                                                    src={currentNews.gambar || "/placeholder.svg?height=380&width=800&text=Berita+Image"}
                                                    alt={currentNews.judul || "Berita"}
                                                    fill
                                                    style={{
                                                        objectFit: "cover",
                                                        objectPosition: "center",
                                                    }}
                                                    className="transition-transform duration-300 group-hover:scale-105"
                                                    priority
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/30 via-transparent to-transparent group-hover:from-[#003366]/40 transition-all duration-300" />
                                            </div>
                                        </Link>
                                    )}

                                    {/* Dot indicators */}
                                    {berita.length > 1 && (
                                        <div className="absolute inset-x-0 top-[360px] flex justify-center py-2 z-10">
                                            <div className="flex space-x-1 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
                                                {berita.map((_, index) => (
                                                    <button
                                                        key={`dot-${index}`}
                                                        onClick={() => handleDotClick(index)}
                                                        className="relative"
                                                        aria-label={`Go to slide ${index + 1}`}
                                                    >
                                                        <div
                                                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${currentIndex === index ? "bg-[#FFD700] scale-125" : "bg-white/60 hover:bg-white/80"
                                                                }`}
                                                        />
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Content section */}
                                    <div className="bg-[#003366] px-8 py-6 h-[180px] flex flex-col justify-start">
                                        {isExternalLink(currentNews) ? (
                                            <a
                                                href={getReadMoreUrl(currentNews)}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block group mb-3"
                                            >
                                                <h2 className="text-white text-xl font-bold line-clamp-2 leading-tight group-hover:text-amber-100 transition-colors duration-300 flex items-center gap-2">
                                                    {currentNews.judul}
                                                    <ExternalLink className="w-4 h-4 flex-shrink-0" />
                                                </h2>
                                            </a>
                                        ) : (
                                            <Link href={getReadMoreUrl(currentNews)} className="block group mb-3">
                                                <h2 className="text-white text-xl font-bold line-clamp-2 leading-tight group-hover:text-amber-100 transition-colors duration-300">
                                                    {currentNews.judul}
                                                </h2>
                                            </Link>
                                        )}

                                        <p className="text-blue-100 text-sm line-clamp-3 leading-relaxed">
                                            {currentNews.jenis === "internal"
                                                ? truncateText(currentNews.konten, 200)
                                                : truncateText(currentNews.konten, 180)}
                                        </p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

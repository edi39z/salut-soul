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

    // Seamless slide animation - no white background
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

    // Faster, smoother transition to avoid white gaps
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
                            <div className="h-[240px] bg-gray-200"></div>
                            <div className="absolute inset-x-0 top-[220px] flex justify-center py-2">
                                <div className="flex space-x-1">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                                </div>
                            </div>
                            <div className="bg-[#003366] p-4 mt-4">
                                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                                <div className="h-3 bg-gray-200 rounded w-2/3 mb-3"></div>
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
                <div className="max-w-4xl mx-auto relative">
                    {/* Carousel card with seamless background */}
                    <div className="relative w-full overflow-hidden rounded-lg shadow-lg bg-[#003366]">
                        {/* Arrow positioned at top corners of the card */}
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

                        {/* Carousel slides with seamless transition */}
                        <div className="relative w-full h-[359px] bg-[#003366]">
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
                                    {/* Clickable image section */}
                                    <Link href={getReadMoreUrl(currentNews)} className="block">
                                        <div className="relative w-full h-[240px] overflow-hidden cursor-pointer group">
                                            <Image
                                                src={currentNews.gambar || "/placeholder.svg?height=240&width=800&text=Berita+Image"}
                                                alt={currentNews.judul || "Berita"}
                                                fill
                                                style={{ objectFit: "cover" }}
                                                className="transition-transform duration-300 group-hover:scale-105"
                                                priority
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/30 via-transparent to-transparent group-hover:from-[#003366]/40 transition-all duration-300" />
                                        </div>
                                    </Link>

                                    {/* Small minimalist dot indicators positioned as separator */}
                                    {berita.length > 1 && (
                                        <div className="absolute inset-x-0 top-[220px] flex justify-center py-2 z-10">
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

                                    {/* Content section with better spacing and clickable title */}
                                    <div className="bg-[#003366] px-6 py-4 max-h-[130px] overflow-hidden">
                                        <Link href={getReadMoreUrl(currentNews)} className="block group">
                                            <h2 className="text-white text-base font-bold line-clamp-2 leading-snug group-hover:text-amber-100 transition-colors duration-300">
                                                {currentNews.judul}
                                            </h2>
                                        </Link>
                                        <p className="text-blue-100 text-sm line-clamp-2 mt-1 leading-relaxed">
                                            {truncateText(currentNews.konten, 150)}
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

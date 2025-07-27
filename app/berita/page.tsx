/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useState, useEffect, useCallback } from "react"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Calendar, User, ArrowRight, Newspaper, Loader2 } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

interface Berita {
    id: string
    judul: string
    konten: string
    gambar: string | null
    slug: string
    linkUrl?: string | null
    jenis: string
    excerpt?: string | null
    metaTitle?: string | null
    metaDescription?: string | null
    tags?: string | null
    author?: string | null
    tanggal: string
    aktif: boolean
    createdAt: string
    updatedAt: string
}

interface PaginationInfo {
    currentPage: number
    totalPages: number
    totalCount: number
    pageSize: number
    hasNext: boolean
    hasPrev: boolean
}

export default function BeritaPage() {
    const [berita, setBerita] = useState<Berita[]>([])
    const [loading, setLoading] = useState(true)
    const [searchLoading, setSearchLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")
    const [loadingMore, setLoadingMore] = useState(false)
    const [showAll, setShowAll] = useState(false)
    const [pagination, setPagination] = useState<PaginationInfo>({
        currentPage: 1,
        totalPages: 1,
        totalCount: 0,
        pageSize: 12,
        hasNext: false,
        hasPrev: false,
    })

    // Debounce function with proper type definition
    const debounce = useCallback(
        <T extends (...args: any[]) => void>(func: T, delay: number) => {
            let timeoutId: NodeJS.Timeout
            return (...args: Parameters<T>): void => {
                clearTimeout(timeoutId)
                timeoutId = setTimeout(() => func(...args), delay)
            }
        },
        [], // Empty dependency array since this function doesn't depend on any reactive values
    )

    // Fetch berita function with proper dependencies
    const fetchBerita = useCallback(
        async (search = "", isSearch = false) => {
            try {
                if (isSearch) {
                    setSearchLoading(true)
                } else {
                    setLoading(true)
                }

                const params = new URLSearchParams({
                    page: "1",
                    limit: showAll ? "50" : "12",
                })

                if (search.trim()) {
                    params.append("search", search)
                }

                const response = await fetch(`/api/berita?${params}`)
                const data = await response.json()

                if (data.success) {
                    setBerita(data.data)
                    setPagination(data.pagination)
                }
            } catch (error) {
                console.error("Error fetching berita:", error)
            } finally {
                if (isSearch) {
                    setSearchLoading(false)
                } else {
                    setLoading(false)
                }
            }
        },
        [showAll],
    ) // Only showAll as dependency since it's the only reactive value used

    // Debounced search function with proper dependencies
    const debouncedSearch = useCallback(
        debounce((searchValue: string) => {
            fetchBerita(searchValue, true)
        }, 500),
        [debounce, fetchBerita], // Include both debounce and fetchBerita as dependencies
    )

    // Initial fetch effect
    useEffect(() => {
        fetchBerita()
    }, [fetchBerita])

    // Search effect
    useEffect(() => {
        if (searchTerm.length >= 2 || searchTerm.length === 0) {
            debouncedSearch(searchTerm)
        }
    }, [searchTerm, debouncedSearch])

    const loadMoreNews = async () => {
        if (!pagination.hasNext || loadingMore) return

        try {
            setLoadingMore(true)
            const nextPage = pagination.currentPage + 1
            const params = new URLSearchParams({
                page: nextPage.toString(),
                limit: pagination.pageSize.toString(),
            })

            if (searchTerm.trim()) {
                params.append("search", searchTerm)
            }

            const response = await fetch(`/api/berita?${params}`)
            const data = await response.json()

            if (data.success) {
                setBerita((prev) => [...prev, ...data.data])
                setPagination(data.pagination)
            }
        } catch (error) {
            console.error("Error loading more news:", error)
        } finally {
            setLoadingMore(false)
        }
    }

    const handleShowAll = useCallback(() => {
        setShowAll(true)
        fetchBerita(searchTerm)
    }, [fetchBerita, searchTerm])

    const formatDate = useCallback((dateString: string) => {
        try {
            const date = new Date(dateString)
            return date.toLocaleDateString("id-ID", {
                day: "2-digit",
                month: "short",
                year: "numeric",
            })
        } catch {
            return dateString
        }
    }, [])

    const truncateText = useCallback((text: string, maxLength: number) => {
        if (!text) return ""
        const plainText = text.replace(/<[^>]*>/g, "")
        if (plainText.length <= maxLength) return plainText
        return plainText.substring(0, maxLength) + "..."
    }, [])

    // Function to get excerpt for display - works for both internal and external news
    const getExcerptForDisplay = useCallback(
        (item: Berita) => {
            // If excerpt exists, use it
            if (item.excerpt && item.excerpt.trim()) {
                return truncateText(item.excerpt, 120)
            }

            // If no excerpt, use content (works for both internal and external)
            if (item.konten && item.konten.trim()) {
                return truncateText(item.konten, 120)
            }

            // Fallback
            return "Baca selengkapnya untuk informasi lebih detail..."
        },
        [truncateText],
    )

    const NewsCard = ({ item }: { item: Berita }) => {
        return (
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden bg-white h-full">
                <div className="relative">
                    {item.gambar && (
                        <div className="relative h-40 sm:h-48 overflow-hidden">
                            <Image
                                src={item.gambar || "/placeholder.svg?height=200&width=400"}
                                alt={item.judul}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                            {/* Date overlay */}
                            <div className="absolute bottom-2 left-2 text-white text-xs">
                                <div className="flex items-center gap-1 bg-black/50 rounded-full px-2 py-1">
                                    <Calendar className="w-3 h-3" />
                                    <span className="text-xs">{formatDate(item.tanggal)}</span>
                                </div>
                            </div>


                        </div>
                    )}
                </div>

                <CardContent className="p-4 sm:p-6 flex flex-col flex-1">
                    <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-2 sm:mb-3 line-clamp-2 group-hover:text-[#002F86] transition-colors leading-tight">
                        {item.judul}
                    </h3>

                    {/* Excerpt - tampilkan untuk semua jenis berita */}
                    <p className="text-gray-600 text-sm mb-3 sm:mb-4 line-clamp-3 flex-1 leading-relaxed">
                        {getExcerptForDisplay(item)}
                    </p>

                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                        {item.author && (
                            <div className="flex items-center gap-1 sm:gap-2 text-gray-500 text-xs sm:text-sm">
                                <User className="w-3 h-3 sm:w-4 sm:h-4" />
                                <span className="truncate max-w-24 sm:max-w-none">{item.author}</span>
                            </div>
                        )}
                    </div>

                    {/* Tombol Baca Selengkapnya untuk semua jenis berita */}
                    <Button
                        asChild
                        size="sm"
                        className="w-full bg-[#002F86] hover:bg-[#FFD700] hover:text-[#002F86] text-white transition-all duration-300 text-xs sm:text-sm py-2 sm:py-3"
                    >
                        {item.jenis === "eksternal" && item.linkUrl ? (
                            <a
                                href={item.linkUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2"
                            >
                                Baca Selengkapnya
                                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                            </a>
                        ) : (
                            <Link href={`/berita/${item.slug}`} className="inline-flex items-center justify-center gap-2">
                                Baca Selengkapnya
                                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                            </Link>
                        )}
                    </Button>
                </CardContent>
            </Card>
        )
    }

    const NewsCardSkeleton = () => (
        <Card className="overflow-hidden bg-white h-full">
            <div className="animate-pulse">
                <div className="h-40 sm:h-48 bg-gray-300"></div>
                <div className="p-4 sm:p-6">
                    <div className="h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded mb-4 w-3/4"></div>
                    <div className="h-3 bg-gray-300 rounded mb-1"></div>
                    <div className="h-3 bg-gray-300 rounded mb-1"></div>
                    <div className="h-3 bg-gray-300 rounded w-1/2 mb-4"></div>
                    <div className="h-8 bg-gray-300 rounded"></div>
                </div>
            </div>
        </Card>
    )

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50">
                <Navbar />
                <main className="pt-4 sm:pt-8">
                    <div className="container mx-auto px-4 py-4 sm:py-8">
                        <div className="animate-pulse">
                            {/* Header skeleton */}
                            <div className="text-center mb-8 sm:mb-12">
                                <div className="h-8 sm:h-12 bg-gray-300 rounded mb-4 w-1/2 mx-auto"></div>
                                <div className="h-4 sm:h-6 bg-gray-300 rounded w-1/3 mx-auto"></div>
                            </div>

                            {/* Search skeleton */}
                            <div className="max-w-2xl mx-auto mb-8 sm:mb-12">
                                <div className="h-10 sm:h-12 bg-gray-300 rounded-full"></div>
                            </div>

                            {/* News grid skeleton */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                                {[...Array(6)].map((_, index) => (
                                    <NewsCardSkeleton key={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <main className="pt-4 sm:pt-8">
                {/* Header Section */}
                <section className="py-8 sm:py-12 bg-gradient-to-br from-blue-50 to-indigo-100">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center"
                        >
                            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                                <Newspaper className="w-8 h-8 sm:w-12 sm:h-12 text-[#002F86]" />
                                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                                    Berita & Informasi
                                </h1>
                            </div>
                            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                                Dapatkan informasi terkini seputar Universitas Terbuka dan dunia pendidikan
                            </p>

                            {/* Search */}
                            <div className="max-w-2xl mx-auto">
                                <div className="relative">
                                    <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                                    <Input
                                        type="text"
                                        placeholder="Cari berita... "
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="pl-10 sm:pl-12 pr-4 py-3 sm:py-4 rounded-full border-2 border-blue-200 focus:border-[#002F86] bg-white text-sm sm:text-base"
                                    />
                                    {searchLoading && (
                                        <div className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2">
                                            <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin text-[#002F86]" />
                                        </div>
                                    )}
                                </div>
                                {searchTerm.length > 0 && searchTerm.length < 2 && (
                                    <p className="text-xs sm:text-sm text-gray-500 mt-2">Ketik minimal 2 karakter untuk mencari</p>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* News Grid */}
                <section className="py-8 sm:py-12">
                    <div className="container mx-auto px-4">
                        {searchLoading ? (
                            <>
                                {/* Show existing content while searching */}
                                {berita.length > 0 && (
                                    <div className="mb-6 sm:mb-8">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 sm:gap-8 opacity-50">
                                            {berita.map((item) => (
                                                <NewsCard key={item.id} item={item} />
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Loading overlay */}
                                <div className="text-center py-8">
                                    <Loader2 className="w-8 h-8 animate-spin text-[#002F86] mx-auto mb-4" />
                                    <p className="text-gray-600">Mencari berita...</p>
                                </div>
                            </>
                        ) : berita.length > 0 ? (
                            <>
                                {/* News Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
                                    {berita.map((item, index) => (
                                        <motion.div
                                            key={item.id}
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: index * 0.1 }}
                                        >
                                            <NewsCard item={item} />
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Load More / Show All Buttons */}
                                {!showAll && pagination.hasNext && (
                                    <div className="text-center space-y-3 sm:space-y-4">
                                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                                            <Button
                                                onClick={loadMoreNews}
                                                disabled={loadingMore}
                                                size="lg"
                                                className="w-full sm:w-auto bg-[#002F86] hover:bg-[#FFD700] hover:text-[#002F86] text-white px-6 sm:px-8 py-3"
                                            >
                                                {loadingMore ? (
                                                    <>
                                                        <Loader2 className="w-4 h-4 animate-spin mr-2" />
                                                        Memuat...
                                                    </>
                                                ) : (
                                                    <>
                                                        Muat Lebih Banyak
                                                        <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                                                    </>
                                                )}
                                            </Button>

                                            <Button
                                                onClick={handleShowAll}
                                                variant="outline"
                                                size="lg"
                                                className="w-full sm:w-auto border-[#002F86] text-[#002F86] hover:bg-[#002F86] hover:text-white px-6 sm:px-8 py-3 bg-transparent"
                                            >
                                                Tampilkan Semua Berita
                                            </Button>
                                        </div>
                                    </div>
                                )}

                                {showAll && pagination.hasNext && (
                                    <div className="text-center">
                                        <Button
                                            onClick={loadMoreNews}
                                            disabled={loadingMore}
                                            size="lg"
                                            className="w-full sm:w-auto bg-[#002F86] hover:bg-[#FFD700] hover:text-[#002F86] text-white px-6 sm:px-8 py-3"
                                        >
                                            {loadingMore ? (
                                                <>
                                                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                                                    Memuat...
                                                </>
                                            ) : (
                                                <>
                                                    Muat Lebih Banyak
                                                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                                                </>
                                            )}
                                        </Button>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="text-center py-12 sm:py-16">
                                <Newspaper className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-4" />
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-600 mb-2">Tidak ada berita ditemukan</h3>
                                <p className="text-sm sm:text-base text-gray-500">
                                    {searchTerm ? "Coba ubah kata kunci pencarian" : "Belum ada berita yang tersedia"}
                                </p>
                            </div>
                        )}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}

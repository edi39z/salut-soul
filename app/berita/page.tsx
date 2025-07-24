"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Calendar, User, ExternalLink, ArrowRight, Filter, Newspaper } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

interface Berita {
    id: string
    judul: string
    konten: string
    gambar: string
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
    const [searchTerm, setSearchTerm] = useState("")
    const [jenisFilter, setJenisFilter] = useState("all")
    const [pagination, setPagination] = useState<PaginationInfo>({
        currentPage: 1,
        totalPages: 1,
        totalCount: 0,
        pageSize: 12,
        hasNext: false,
        hasPrev: false,
    })

    useEffect(() => {
        fetchBerita()
    }, [searchTerm, jenisFilter, pagination.currentPage])

    const fetchBerita = async () => {
        try {
            setLoading(true)
            const params = new URLSearchParams({
                page: pagination.currentPage.toString(),
                limit: pagination.pageSize.toString(),
            })

            if (searchTerm) params.append("search", searchTerm)
            if (jenisFilter !== "all") params.append("jenis", jenisFilter)

            const response = await fetch(`/api/berita?${params}`)
            const data = await response.json()

            if (data.success) {
                setBerita(data.data)
                setPagination(data.pagination)
            }
        } catch (error) {
            console.error("Error fetching berita:", error)
        } finally {
            setLoading(false)
        }
    }

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        setPagination((prev) => ({ ...prev, currentPage: 1 }))
        fetchBerita()
    }

    const handlePageChange = (newPage: number) => {
        setPagination((prev) => ({ ...prev, currentPage: newPage }))
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    const formatDate = (dateString: string) => {
        try {
            const date = new Date(dateString)
            return date.toLocaleDateString("id-ID", {
                year: "numeric",
                month: "long",
                day: "numeric",
            })
        } catch {
            return dateString
        }
    }

    const truncateText = (text: string, maxLength: number) => {
        if (text.length <= maxLength) return text
        return text.substring(0, maxLength) + "..."
    }

    const getTags = (tagsString?: string | null) => {
        if (!tagsString) return []
        return tagsString
            .split(",")
            .map((tag) => tag.trim())
            .filter((tag) => tag.length > 0)
    }

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <main className="pt-8">
                {/* Hero Section */}
                <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center"
                        >
                            <div className="flex items-center justify-center gap-3 mb-6">
                                <Newspaper className="w-12 h-12 text-blue-600" />
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">Berita & Informasi</h1>
                            </div>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                                Dapatkan informasi terkini seputar Universitas Terbuka dan dunia pendidikan
                            </p>

                            {/* Search and Filter */}
                            <div className="max-w-4xl mx-auto">
                                <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                                    <form onSubmit={handleSearch} className="flex-1 max-w-md">
                                        <div className="relative">
                                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                            <Input
                                                type="text"
                                                placeholder="Cari berita..."
                                                value={searchTerm}
                                                onChange={(e) => setSearchTerm(e.target.value)}
                                                className="pl-10 pr-4 py-3 rounded-full border-2 border-blue-200 focus:border-blue-500 bg-white"
                                            />
                                        </div>
                                    </form>

                                    <div className="flex items-center gap-2">
                                        <Filter className="w-5 h-5 text-gray-600" />
                                        <Select value={jenisFilter} onValueChange={setJenisFilter}>
                                            <SelectTrigger className="w-48 rounded-full border-2 border-blue-200 bg-white">
                                                <SelectValue placeholder="Filter kategori" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="all">Semua Berita</SelectItem>
                                                <SelectItem value="internal">Berita Internal</SelectItem>
                                                <SelectItem value="eksternal">Berita Eksternal</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* News Grid */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        {loading ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {[...Array(12)].map((_, index) => (
                                    <Card key={index} className="overflow-hidden">
                                        <div className="animate-pulse">
                                            <div className="h-48 bg-gray-300"></div>
                                            <div className="p-6">
                                                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                                                <div className="h-4 bg-gray-300 rounded mb-4 w-3/4"></div>
                                                <div className="h-3 bg-gray-300 rounded mb-1"></div>
                                                <div className="h-3 bg-gray-300 rounded mb-1"></div>
                                                <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                                            </div>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        ) : berita.length > 0 ? (
                            <>
                                {/* Results Info */}
                                <div className="mb-8 text-center">
                                    <p className="text-gray-600">
                                        Menampilkan {berita.length} dari {pagination.totalCount} berita
                                        {searchTerm && ` untuk "${searchTerm}"`}
                                        {jenisFilter !== "all" && ` dalam kategori ${jenisFilter}`}
                                    </p>
                                </div>

                                {/* News Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                                    {berita.map((item, index) => (
                                        <motion.div
                                            key={item.id}
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: index * 0.1 }}
                                        >
                                            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden bg-white h-full">
                                                <div className="relative h-48 overflow-hidden">
                                                    <Image
                                                        src={item.gambar || "/placeholder.svg?height=200&width=400"}
                                                        alt={item.judul}
                                                        fill
                                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                                    {/* Category Badge */}
                                                    <div className="absolute top-4 left-4">
                                                        <Badge
                                                            className={`${item.jenis === "eksternal"
                                                                    ? "bg-gradient-to-r from-pink-500 to-rose-500"
                                                                    : "bg-gradient-to-r from-blue-500 to-indigo-500"
                                                                } text-white px-3 py-1 text-xs font-medium`}
                                                        >
                                                            {item.jenis === "eksternal" ? "Eksternal" : "Internal"}
                                                        </Badge>
                                                    </div>

                                                    {/* Date */}
                                                    <div className="absolute bottom-4 left-4 text-white text-sm">
                                                        <div className="flex items-center gap-1">
                                                            <Calendar className="w-4 h-4" />
                                                            <span>{formatDate(item.tanggal)}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <CardContent className="p-6 flex flex-col flex-1">
                                                    <h3 className="font-bold text-lg text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                                        {item.judul}
                                                    </h3>

                                                    {item.excerpt && (
                                                        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
                                                            {truncateText(item.excerpt, 120)}
                                                        </p>
                                                    )}

                                                    {/* Tags */}
                                                    {item.tags && getTags(item.tags).length > 0 && (
                                                        <div className="flex flex-wrap gap-1 mb-4">
                                                            {getTags(item.tags)
                                                                .slice(0, 2)
                                                                .map((tag, tagIndex) => (
                                                                    <Badge
                                                                        key={tagIndex}
                                                                        variant="outline"
                                                                        className="border-blue-200 text-blue-600 text-xs px-2 py-0.5"
                                                                    >
                                                                        #{tag}
                                                                    </Badge>
                                                                ))}
                                                            {getTags(item.tags).length > 2 && (
                                                                <Badge variant="outline" className="border-gray-200 text-gray-500 text-xs px-2 py-0.5">
                                                                    +{getTags(item.tags).length - 2}
                                                                </Badge>
                                                            )}
                                                        </div>
                                                    )}

                                                    <div className="flex items-center justify-between mt-auto">
                                                        {item.author && (
                                                            <div className="flex items-center gap-1 text-gray-500 text-sm">
                                                                <User className="w-4 h-4" />
                                                                <span>{item.author}</span>
                                                            </div>
                                                        )}

                                                        <Button
                                                            asChild
                                                            variant="ghost"
                                                            size="sm"
                                                            className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-2"
                                                        >
                                                            {item.jenis === "eksternal" && item.linkUrl ? (
                                                                <a href={item.linkUrl} target="_blank" rel="noopener noreferrer">
                                                                    <ExternalLink className="w-4 h-4" />
                                                                </a>
                                                            ) : (
                                                                <Link href={`/berita/${item.slug}`}>
                                                                    <ArrowRight className="w-4 h-4" />
                                                                </Link>
                                                            )}
                                                        </Button>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Pagination */}
                                {pagination.totalPages > 1 && (
                                    <div className="flex justify-center items-center gap-2">
                                        <Button
                                            onClick={() => handlePageChange(pagination.currentPage - 1)}
                                            disabled={!pagination.hasPrev}
                                            variant="outline"
                                            className="rounded-full"
                                        >
                                            Sebelumnya
                                        </Button>

                                        <div className="flex gap-1">
                                            {[...Array(Math.min(5, pagination.totalPages))].map((_, index) => {
                                                const pageNumber = Math.max(1, pagination.currentPage - 2) + index
                                                if (pageNumber > pagination.totalPages) return null

                                                return (
                                                    <Button
                                                        key={pageNumber}
                                                        onClick={() => handlePageChange(pageNumber)}
                                                        variant={pageNumber === pagination.currentPage ? "default" : "outline"}
                                                        className="w-10 h-10 rounded-full"
                                                    >
                                                        {pageNumber}
                                                    </Button>
                                                )
                                            })}
                                        </div>

                                        <Button
                                            onClick={() => handlePageChange(pagination.currentPage + 1)}
                                            disabled={!pagination.hasNext}
                                            variant="outline"
                                            className="rounded-full"
                                        >
                                            Selanjutnya
                                        </Button>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="text-center py-16">
                                <Newspaper className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-gray-600 mb-2">Tidak ada berita ditemukan</h3>
                                <p className="text-gray-500">
                                    {searchTerm || jenisFilter !== "all"
                                        ? "Coba ubah kata kunci pencarian atau filter"
                                        : "Belum ada berita yang tersedia"}
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

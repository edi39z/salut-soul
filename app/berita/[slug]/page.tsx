"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, User, Share2, ExternalLink, Clock, ArrowRight, Tag } from "lucide-react"
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
    isRelated?: boolean
}

export default function BeritaDetailPage() {
    const params = useParams()
    const router = useRouter()
    const [berita, setBerita] = useState<Berita | null>(null)
    const [relatedBerita, setRelatedBerita] = useState<Berita[]>([])
    const [loading, setLoading] = useState(true)
    const [loadingRelated, setLoadingRelated] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        if (params.slug) {
            fetchBerita(params.slug as string)
        }
    }, [params.slug])

    useEffect(() => {
        if (berita) {
            fetchRelatedBerita(berita.id)
        }
    }, [berita])

    const fetchBerita = async (slug: string) => {
        try {
            setLoading(true)
            const response = await fetch(`/api/berita/${slug}`)
            const data = await response.json()

            if (data.success) {
                setBerita(data.data)
            } else {
                setError("Berita tidak ditemukan")
            }
        } catch (err) {
            setError("Error loading berita")
            console.error("Error fetching berita:", err)
        } finally {
            setLoading(false)
        }
    }

    const fetchRelatedBerita = async (beritaId: string) => {
        try {
            setLoadingRelated(true)
            const response = await fetch(`/api/berita/${beritaId}/related?limit=6`)
            const data = await response.json()

            if (data.success) {
                setRelatedBerita(data.data)
            }
        } catch (err) {
            console.error("Error fetching related berita:", err)
        } finally {
            setLoadingRelated(false)
        }
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

    const formatTime = (dateString: string) => {
        try {
            const date = new Date(dateString)
            return date.toLocaleTimeString("id-ID", {
                hour: "2-digit",
                minute: "2-digit",
            })
        } catch {
            return ""
        }
    }

    const handleShare = async () => {
        if (navigator.share && berita) {
            try {
                await navigator.share({
                    title: berita.judul,
                    text: berita.excerpt || berita.judul,
                    url: window.location.href,
                })
            } catch (err) {
                console.log("Error sharing:", err)
            }
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(window.location.href)
            // You could show a toast notification here
        }
    }

    const getTags = (tagsString?: string | null) => {
        if (!tagsString) return []
        return tagsString
            .split(",")
            .map((tag) => tag.trim())
            .filter((tag) => tag.length > 0)
    }

    const truncateText = (text: string, maxLength: number) => {
        if (text.length <= maxLength) return text
        return text.substring(0, maxLength) + "..."
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-white">
                <Navbar />
                <main className="pt-8">
                    <div className="container mx-auto px-4 py-16">
                        <div className="max-w-4xl mx-auto">
                            <div className="animate-pulse">
                                <div className="h-8 bg-gray-300 rounded mb-4 w-32"></div>
                                <div className="h-12 bg-gray-300 rounded mb-6"></div>
                                <div className="h-64 bg-gray-300 rounded mb-8"></div>
                                <div className="space-y-4">
                                    <div className="h-4 bg-gray-300 rounded"></div>
                                    <div className="h-4 bg-gray-300 rounded"></div>
                                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }

    if (error || !berita) {
        return (
            <div className="min-h-screen bg-white">
                <Navbar />
                <main className="pt-8">
                    <div className="container mx-auto px-4 py-16">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="text-red-600 text-lg mb-4">{error || "Berita tidak ditemukan"}</div>
                            <Button onClick={() => router.back()} variant="outline">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Kembali
                            </Button>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <main className="pt-8">
                {/* Article Header */}
                <section className="py-8 bg-gradient-to-br from-slate-50 to-blue-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                                {/* Back Button */}
                                <Button
                                    onClick={() => router.back()}
                                    variant="outline"
                                    className="mb-6 border-2 border-blue-200 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full px-4 py-2"
                                >
                                    <ArrowLeft className="w-4 h-4 mr-2" />
                                    Kembali
                                </Button>

                                {/* Category Badge */}
                                <div className="mb-4">
                                    <Badge
                                        className={`${berita.jenis === "eksternal"
                                                ? "bg-gradient-to-r from-pink-500 to-rose-500"
                                                : "bg-gradient-to-r from-blue-500 to-indigo-500"
                                            } text-white px-4 py-2 text-sm font-medium`}
                                    >
                                        {berita.jenis === "eksternal" ? "Berita Eksternal" : "Berita Internal"}
                                    </Badge>
                                </div>

                                {/* Title */}
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                    {berita.judul}
                                </h1>

                                {/* Meta Information */}
                                <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-5 h-5" />
                                        <span>{formatDate(berita.tanggal)}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-5 h-5" />
                                        <span>{formatTime(berita.createdAt)}</span>
                                    </div>
                                    {berita.author && (
                                        <div className="flex items-center gap-2">
                                            <User className="w-5 h-5" />
                                            <span>{berita.author}</span>
                                        </div>
                                    )}
                                    <Button
                                        onClick={handleShare}
                                        variant="outline"
                                        size="sm"
                                        className="border-gray-300 text-gray-600 hover:bg-gray-100 rounded-full px-3 py-1 bg-transparent"
                                    >
                                        <Share2 className="w-4 h-4 mr-1" />
                                        Bagikan
                                    </Button>
                                </div>

                                {/* Excerpt */}
                                {berita.excerpt && (
                                    <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">{berita.excerpt}</p>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Article Content */}
                <section className="py-12">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                {/* Featured Image */}
                                <div className="relative w-full h-64 md:h-96 mb-12 rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src={berita.gambar || "/placeholder.svg?height=400&width=800"}
                                        alt={berita.judul}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 800px"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                </div>

                                {/* Article Content */}
                                <div className="prose prose-lg max-w-none">
                                    <div
                                        className="text-gray-800 leading-relaxed"
                                        style={{
                                            fontSize: "1.125rem",
                                            lineHeight: "1.75",
                                            whiteSpace: "pre-wrap",
                                        }}
                                        dangerouslySetInnerHTML={{ __html: berita.konten.replace(/\n/g, "<br />") }}
                                    />
                                </div>

                                {/* External Link */}
                                {berita.jenis === "eksternal" && berita.linkUrl && (
                                    <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Baca Artikel Lengkap</h3>
                                        <p className="text-gray-600 mb-4">
                                            Artikel ini berasal dari sumber eksternal. Klik tombol di bawah untuk membaca artikel lengkap.
                                        </p>
                                        <Button
                                            asChild
                                            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                                        >
                                            <a href={berita.linkUrl} target="_blank" rel="noopener noreferrer">
                                                Baca di Sumber Asli
                                                <ExternalLink className="ml-2 w-4 h-4" />
                                            </a>
                                        </Button>
                                    </div>
                                )}

                                {/* Tags */}
                                {berita.tags && getTags(berita.tags).length > 0 && (
                                    <div className="mt-12 pt-8 border-t border-gray-200">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {getTags(berita.tags).map((tag, index) => (
                                                <Badge
                                                    key={index}
                                                    variant="outline"
                                                    className="border-blue-200 text-blue-600 hover:bg-blue-50 px-3 py-1 rounded-full"
                                                >
                                                    #{tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Navigation */}
                                <div className="mt-16 pt-8 border-t border-gray-200">
                                    <div className="flex flex-col sm:flex-row gap-4 justify-between">
                                        <Button
                                            asChild
                                            variant="outline"
                                            className="border-2 border-blue-200 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full px-6 py-3 bg-transparent"
                                        >
                                            <Link href="/berita">
                                                <ArrowLeft className="w-4 h-4 mr-2" />
                                                Kembali ke Berita
                                            </Link>
                                        </Button>
                                        <Button
                                            onClick={handleShare}
                                            variant="outline"
                                            className="border-2 border-gray-200 text-gray-600 hover:bg-gray-100 rounded-full px-6 py-3 bg-transparent"
                                        >
                                            <Share2 className="w-4 h-4 mr-2" />
                                            Bagikan Artikel
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Related News Section */}
                {!loadingRelated && relatedBerita.length > 0 && (
                    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
                        <div className="container mx-auto px-4">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                {/* Section Header */}
                                <div className="text-center mb-12">
                                    <div className="flex items-center justify-center gap-2 mb-4">
                                        <Tag className="w-6 h-6 text-blue-600" />
                                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Berita Terkait</h2>
                                    </div>
                                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                                        Temukan berita lainnya yang mungkin menarik untuk Anda baca
                                    </p>
                                </div>

                                {/* Related News Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                                    {relatedBerita.map((item, index) => (
                                        <motion.div
                                            key={item.id}
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: index * 0.1 }}
                                        >
                                            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden bg-white">
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

                                                    {/* Related Badge */}
                                                    {item.isRelated && (
                                                        <div className="absolute top-4 right-4">
                                                            <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 text-xs font-medium">
                                                                <Tag className="w-3 h-3 mr-1" />
                                                                Terkait
                                                            </Badge>
                                                        </div>
                                                    )}

                                                    {/* Date */}
                                                    <div className="absolute bottom-4 left-4 text-white text-sm">
                                                        <div className="flex items-center gap-1">
                                                            <Calendar className="w-4 h-4" />
                                                            <span>{formatDate(item.tanggal)}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <CardContent className="p-6">
                                                    <h3 className="font-bold text-lg text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                                        {item.judul}
                                                    </h3>

                                                    {item.excerpt && (
                                                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{truncateText(item.excerpt, 120)}</p>
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

                                                    <div className="flex items-center justify-between">
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

                                {/* More News Button */}
                                <div className="text-center">
                                    <Button
                                        asChild
                                        className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                                    >
                                        <Link href="/berita">
                                            Lihat Semua Berita
                                            <ArrowRight className="ml-2 w-5 h-5" />
                                        </Link>
                                    </Button>
                                </div>
                            </motion.div>
                        </div>
                    </section>
                )}

                {/* Loading Related News */}
                {loadingRelated && (
                    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
                        <div className="container mx-auto px-4">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Berita Terkait</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {[...Array(6)].map((_, index) => (
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
                        </div>
                    </section>
                )}
            </main>

            <Footer />
        </div>
    )
}

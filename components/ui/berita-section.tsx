"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Newspaper, ExternalLink } from "lucide-react"
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
    tanggal: string
    aktif: boolean
}

export function BeritaSection() {
    const [berita, setBerita] = useState<Berita[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        fetchBerita()
    }, [])

    const fetchBerita = async () => {
        try {
            setLoading(true)
            const response = await fetch("/api/berita?limit=5")
            const data = await response.json()

            if (data.success) {
                setBerita(data.data)
            } else {
                setError("Failed to fetch news")
            }
        } catch (err) {
            setError("Error loading news")
            console.error("Error fetching berita:", err)
        } finally {
            setLoading(false)
        }
    }



    const truncateText = (text: string, maxLength: number) => {
        if (text.length <= maxLength) return text
        return text.substring(0, maxLength) + "..."
    }

    const getReadMoreUrl = (item: Berita) => {
        // If admin has set a custom linkUrl, use that; otherwise use default slug-based URL
        return item.linkUrl || `/berita/${item.slug}`
    }

    const isExternalLink = (url: string) => {
        return url.startsWith("http://") || url.startsWith("https://")
    }

    if (loading) {
        return (
            <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <Badge className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 text-sm font-medium rounded-full mb-6">
                            <Newspaper className="w-4 h-4 mr-2" />
                            Berita Terkini
                        </Badge>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Kabar Terbaru <span className="text-blue-600">UT</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
                        {[...Array(3)].map((_, index) => (
                            <div key={index} className="animate-pulse">
                                <Card className="border-0 shadow-lg overflow-hidden">
                                    <CardContent className="p-0">
                                        <div className="grid md:grid-cols-5 gap-0">
                                            <div className="md:col-span-2">
                                                <div className="w-full h-64 md:h-full bg-gray-300 rounded-l-xl"></div>
                                            </div>
                                            <div className="md:col-span-3 p-8">
                                                <div className="h-4 bg-gray-300 rounded mb-4"></div>
                                                <div className="h-6 bg-gray-300 rounded mb-4"></div>
                                                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                                                <div className="h-4 bg-gray-300 rounded mb-4"></div>
                                                <div className="h-8 bg-gray-300 rounded w-32"></div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        )
    }

    if (error) {
        return (
            <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <p className="text-red-600 text-lg">{error}</p>
                        <Button onClick={fetchBerita} className="mt-4">
                            Coba Lagi
                        </Button>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <Badge className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 text-sm font-medium rounded-full mb-6">
                        <Newspaper className="w-4 h-4 mr-2" />
                        Berita Terkini
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Kabar Terbaru <span className="text-blue-600">UT</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Ikuti perkembangan terbaru dan berbagai kegiatan menarik di Universitas Terbuka
                    </p>
                </motion.div>

                {/* News List */}
                <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
                    {berita.map((item, index) => {
                        const readMoreUrl = getReadMoreUrl(item)
                        const isExternal = isExternalLink(readMoreUrl)

                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                            >
                                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden bg-white/80 backdrop-blur-sm">
                                    <CardContent className="p-0">
                                        <div className="grid md:grid-cols-5 gap-0">
                                            {/* Image Section */}
                                            <div className="md:col-span-2 relative group">
                                                <div className="relative w-full h-64 md:h-full overflow-hidden">
                                                    <Image
                                                        src={item.gambar || "/placeholder.svg"}
                                                        alt={item.judul}
                                                        fill
                                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                        sizes="(max-width: 768px) 100vw, 40vw"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                    {/* External Link Indicator */}
                                                    {isExternal && (
                                                        <div className="absolute top-4 right-4 bg-blue-600 text-white p-2 rounded-full shadow-lg">
                                                            <ExternalLink className="w-4 h-4" />
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Content Section */}
                                            <div className="md:col-span-3 p-8 flex flex-col justify-between">
                                                <div>


                                                    {/* Title */}
                                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 leading-tight hover:text-blue-600 transition-colors duration-300">
                                                        {item.judul}
                                                    </h3>

                                                    {/* Content Preview */}
                                                    <p className="text-gray-600 leading-relaxed mb-6 text-base">
                                                        {truncateText(item.konten, 150)}
                                                    </p>
                                                </div>

                                                {/* Read More Button */}
                                                <div>
                                                    {isExternal ? (
                                                        <Button
                                                            asChild
                                                            variant="outline"
                                                            className="group border-2 border-blue-200 text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 rounded-full px-6 py-2 bg-transparent"
                                                        >
                                                            <a href={readMoreUrl} target="_blank" rel="noopener noreferrer">
                                                                Baca Selengkapnya
                                                                <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                                            </a>
                                                        </Button>
                                                    ) : (
                                                        <Button
                                                            asChild
                                                            variant="outline"
                                                            className="group border-2 border-blue-200 text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 rounded-full px-6 py-2 bg-transparent"
                                                        >
                                                            <Link href={readMoreUrl}>
                                                                Baca Selengkapnya
                                                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                                            </Link>
                                                        </Button>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        )
                    })}
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-center mt-12"
                >
                    <Button
                        asChild
                        size="lg"
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                    >
                        <Link href="https://www.ut.ac.id/kategori/berita/">
                            Lihat Semua Berita
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}

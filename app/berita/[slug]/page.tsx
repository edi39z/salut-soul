import { notFound, redirect } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar, User, Tag, ArrowLeft } from "lucide-react"

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
    excerpt?: string
    metaTitle?: string
    metaDescription?: string
    tags?: string[]
    author?: string
}

async function getBerita(slug: string): Promise<Berita | null> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3001"}/api/berita/${slug}`, {
            cache: "no-store",
        })

        if (!response.ok) {
            return null
        }

        const data = await response.json()
        return data.success ? data.data : null
    } catch (error) {
        console.error("Error fetching berita:", error)
        return null
    }
}

async function getRelatedBerita(id: string, limit = 6): Promise<Berita[]> {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/berita/${id}/related?limit=${limit}`,
            {
                cache: "no-store",
            },
        )

        if (!response.ok) {
            return []
        }

        const data = await response.json()
        return data.success ? data.data : []
    } catch (error) {
        console.error("Error fetching related berita:", error)
        return []
    }
}

export default async function BeritaDetailPage({ params }: { params: { slug: string } }) {
    const { slug } = await params
    const berita = await getBerita(slug)


    if (!berita) {
        notFound()
    }

    // If this is an external news with linkUrl, redirect to external URL
    if (berita.jenis === "eksternal" && berita.linkUrl && berita.linkUrl.trim() !== "") {
        redirect(berita.linkUrl)
    }

    // Get related berita only for internal news
    const relatedBerita = berita.jenis === "internal" ? await getRelatedBerita(berita.id) : []

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("id-ID", {
            year: "numeric",
            month: "long",
            day: "numeric",
        })
    }

    const truncateText = (text: string, maxLength: number) => {
        if (!text) return ""
        const plainText = text.replace(/<[^>]*>/g, "")
        if (plainText.length <= maxLength) return plainText
        return plainText.substring(0, maxLength) + "..."
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-[#003366] text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <Link
                            href="/berita"
                            className="inline-flex items-center gap-2 text-blue-200 hover:text-white mb-4 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Kembali ke Berita
                        </Link>
                        <h1 className="text-3xl md:text-4xl font-bold leading-tight">{berita.judul}</h1>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    {/* Article Meta */}
                    <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(berita.tanggal)}</span>
                        </div>
                        {berita.author && (
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>{berita.author}</span>
                            </div>
                        )}
                        <Badge variant={berita.jenis === "internal" ? "default" : "secondary"}>
                            {berita.jenis === "internal" ? "Internal" : "Eksternal"}
                        </Badge>
                    </div>

                    {/* Featured Image */}
                    {berita.gambar && (
                        <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src={berita.gambar || "/placeholder.svg"}
                                alt={berita.judul}
                                fill
                                style={{
                                    objectFit: "cover",
                                    objectPosition: "center",
                                }}
                                className="transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                    )}

                    {/* Article Content */}
                    <article className="prose prose-lg max-w-none mb-8">
                        {berita.jenis === "internal" ? (
                            <div dangerouslySetInnerHTML={{ __html: berita.konten }} className="text-gray-800 leading-relaxed" />
                        ) : (
                            <div className="text-center py-12 bg-blue-50 rounded-lg">
                                <ExternalLink className="w-16 h-16 mx-auto text-blue-600 mb-4" />
                                <h3 className="text-xl font-semibold mb-4">Artikel Eksternal</h3>
                                <p className="text-gray-600 mb-6">
                                    Artikel ini tersedia di sumber eksternal. Klik tombol di bawah untuk membaca selengkapnya.
                                </p>
                                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                                    <a
                                        href={berita.linkUrl || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2"
                                    >
                                        Baca di Sumber Asli
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                </Button>
                            </div>
                        )}
                    </article>

                    {/* Tags */}
                    {berita.tags && berita.tags.length > 0 && (
                        <div className="mb-8">
                            <div className="flex items-center gap-2 mb-3">
                                <Tag className="w-4 h-4 text-gray-600" />
                                <span className="text-sm font-medium text-gray-600">Tags:</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {berita.tags.map((tag, index) => (
                                    <Badge key={index} variant="outline" className="text-xs">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Related Articles - Only for internal news */}
                    {berita.jenis === "internal" && relatedBerita.length > 0 && (
                        <div className="border-t pt-8">
                            <h2 className="text-2xl font-bold mb-6 text-gray-800">Berita Terkait</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {relatedBerita.map((related) => (
                                    <Card key={related.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                                        <div className="relative h-48">
                                            <Image
                                                src={related.gambar || "/placeholder.svg?height=200&width=300&text=Berita"}
                                                alt={related.judul}
                                                fill
                                                style={{
                                                    objectFit: "cover",
                                                    objectPosition: "center",
                                                }}
                                                className="transition-transform duration-300 hover:scale-105"
                                            />
                                            <Badge
                                                className="absolute top-2 left-2"
                                                variant={related.jenis === "internal" ? "default" : "secondary"}
                                            >
                                                {related.jenis === "internal" ? "Internal" : "Eksternal"}
                                            </Badge>
                                        </div>
                                        <CardContent className="p-4">
                                            <h3 className="font-semibold text-lg mb-2 line-clamp-2">{related.judul}</h3>
                                            <p className="text-gray-600 text-sm mb-3 line-clamp-3">{truncateText(related.konten, 120)}</p>
                                            <div className="flex items-center justify-between">
                                                <span className="text-xs text-gray-500">{formatDate(related.tanggal)}</span>
                                                {related.jenis === "eksternal" && related.linkUrl ? (
                                                    <Button asChild size="sm" variant="outline">
                                                        <a
                                                            href={related.linkUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-1"
                                                        >
                                                            Baca
                                                            <ExternalLink className="w-3 h-3" />
                                                        </a>
                                                    </Button>
                                                ) : (
                                                    <Button asChild size="sm" variant="outline">
                                                        <Link href={`/berita/${related.slug}`}>Baca Selengkapnya</Link>
                                                    </Button>
                                                )}
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
export async function generateMetadata({ params }: { params: { slug: string } }) {
    const { slug } = await params
    const berita = await getBerita(slug)

    if (!berita) {
        return {
            title: "Berita Tidak Ditemukan",
            description: "Berita yang Anda cari tidak ditemukan.",
        }
    }

    return {
        title: berita.metaTitle || berita.judul,
        description: berita.metaDescription || berita.excerpt || truncateText(berita.konten, 160),
        openGraph: {
            title: berita.judul,
            description: berita.excerpt || truncateText(berita.konten, 160),
            images: berita.gambar ? [berita.gambar] : [],
        },
    }
}

function truncateText(text: string, maxLength: number) {
    if (!text) return ""
    const plainText = text.replace(/<[^>]*>/g, "")
    if (plainText.length <= maxLength) return plainText
    return plainText.substring(0, maxLength) + "..."
}

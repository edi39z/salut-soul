import { notFound, redirect } from "next/navigation"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar, User, ArrowLeft, BookOpen, Grid3X3, Share2 } from "lucide-react"
import { getBeritaBySlug, getRelatedBerita } from "@/lib/data/berita"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"

interface BeritaDetailPageProps {
    params: Promise<{
        slug: string
    }>
}

export default async function BeritaDetailPage({ params }: BeritaDetailPageProps) {
    const { slug } = await params
    const berita = await getBeritaBySlug(slug)

    if (!berita) {
        notFound()
    }

    if (berita.jenis === "eksternal" && berita.linkUrl && berita.linkUrl.trim() !== "") {
        redirect(berita.linkUrl)
    }

    const relatedBerita = berita.jenis === "internal" ? await getRelatedBerita(berita.id) : []

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("id-ID", {
            year: "numeric",
            month: "long",
            day: "numeric",
        })
    }

    const formatDateShort = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("id-ID", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        })
    }

    const formatTimeAgo = (dateString: string) => {
        const now = new Date()
        const date = new Date(dateString)
        const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))
        if (diffInHours < 1) return "Baru saja"
        if (diffInHours < 24) return `${diffInHours} jam yang lalu`
        if (diffInHours < 48) return "1 hari yang lalu"
        return `${Math.floor(diffInHours / 24)} hari yang lalu`
    }

    const truncateText = (text: string, maxLength: number) => {
        if (!text) return ""
        const plainText = text.replace(/<[^>]*>/g, "")
        if (plainText.length <= maxLength) return plainText
        return plainText.substring(0, maxLength) + "..."
    }

    const getTags = (tagsString?: string | null) => {
        if (!tagsString) return []
        return tagsString
            .split(",")
            .map((tag) => tag.trim())
            .filter((tag) => tag.length > 0)
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navbar */}
            <Navbar />

            {/* Main content */}
            <div className="container mx-auto px-4 py-8 sm:py-12 max-w-4xl">
                {/* Breadcrumb */}
                <nav className="mb-8">
                    <Link
                        href="/berita"
                        className="inline-flex items-center gap-2 text-[#002F86] hover:text-[#FFD700] transition-all duration-300 group text-sm font-medium"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Kembali ke Berita
                    </Link>
                </nav>

                {/* Article header - Centered like the reference */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-8 max-w-4xl mx-auto">
                        {berita.judul}
                    </h1>

                    {/* Tags below title */}
                    {berita.tags && getTags(berita.tags).length > 0 && (
                        <div className="flex flex-wrap justify-center gap-3 mb-8">
                            {getTags(berita.tags)
                                .slice(0, 3)
                                .map((tag, index) => (
                                    <Badge
                                        key={index}
                                        className="bg-[#002F86] text-white hover:bg-[#FFD700] hover:text-[#002F86] transition-colors px-4 py-2 text-sm font-medium rounded-full"
                                    >
                                        {tag}
                                    </Badge>
                                ))}
                        </div>
                    )}
                </div>

                {/* Article content */}
                <div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-12">
                    {berita.jenis === "internal" ? (
                        <>
                            {/* Author and meta info section - Similar to reference */}
                            <div className="px-8 sm:px-12 pt-8 sm:pt-12 pb-6">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                                    {/* Left side - Author info */}
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-[#002F86] to-[#FFD700] rounded-full flex items-center justify-center">
                                            <User className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900 text-sm">{berita.author || "SALUT Soul Admin"}</p>
                                            <p className="text-gray-500 text-sm">{formatTimeAgo(berita.tanggal)}</p>
                                        </div>
                                    </div>

                                    {/* Right side - Date only */}
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <Calendar className="w-4 h-4" />
                                        <span>{formatDate(berita.tanggal)}</span>
                                    </div>
                                </div>

                                {/* Article content */}
                                <article className="prose prose-lg prose-gray max-w-none">
                                    <div
                                        dangerouslySetInnerHTML={{ __html: berita.konten }}
                                        className="text-gray-800 leading-relaxed [&>h1]:text-3xl [&>h1]:font-bold [&>h1]:text-[#002F86] [&>h1]:mb-6 [&>h1]:mt-8 [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:text-[#002F86] [&>h2]:mb-4 [&>h2]:mt-8 [&>h3]:text-xl [&>h3]:font-medium [&>h3]:text-[#002F86] [&>h3]:mb-3 [&>h3]:mt-6 [&>p]:mb-6 [&>p]:text-gray-700 [&>p]:leading-relaxed [&>p]:text-lg [&>ul]:mb-6 [&>ol]:mb-6 [&>li]:mb-2 [&>li]:text-gray-700 [&>blockquote]:border-l-4 [&>blockquote]:border-[#FFD700] [&>blockquote]:bg-yellow-50 [&>blockquote]:p-6 [&>blockquote]:italic [&>blockquote]:text-gray-700 [&>blockquote]:rounded-r-lg [&>strong]:text-[#002F86] [&>strong]:font-semibold [&>a]:text-[#002F86] [&>a]:underline [&>a]:decoration-[#FFD700] [&>a]:underline-offset-2 hover:[&>a]:text-[#FFD700]"
                                    />
                                </article>
                            </div>

                            {/* Share section */}
                            <div className="px-8 sm:px-12 pb-8 sm:pb-12">
                                <div className="border-t border-gray-100 pt-8">
                                    <div className="flex items-center gap-3">
                                        <span className="text-gray-600 font-medium">Bagikan artikel:</span>
                                        <Button size="sm" className="bg-[#002F86] hover:bg-[#FFD700] hover:text-[#002F86] text-white">
                                            <Share2 className="w-4 h-4 mr-2" />
                                            Bagikan
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="text-center py-16 px-8">
                            <div className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-2xl p-12 border border-blue-100">
                                <div className="w-20 h-20 bg-gradient-to-br from-[#002F86] to-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-6">
                                    <ExternalLink className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Artikel Eksternal</h3>
                                <p className="text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
                                    Artikel ini tersedia di sumber eksternal. Klik tombol di bawah untuk membaca selengkapnya di situs
                                    asli.
                                </p>
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-[#002F86] hover:bg-[#FFD700] hover:text-[#002F86] text-white shadow-lg"
                                >
                                    <a
                                        href={berita.linkUrl || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3"
                                    >
                                        <BookOpen className="w-5 h-5" />
                                        Baca di Sumber Asli
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                </Button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Action buttons */}
                <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-12">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                            asChild
                            size="lg"
                            className="flex-1 bg-[#002F86] hover:bg-[#FFD700] hover:text-[#002F86] text-white shadow-lg"
                        >
                            <Link href="/berita" className="inline-flex items-center justify-center gap-3">
                                <Grid3X3 className="w-5 h-5" />
                                Semua Berita
                            </Link>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="flex-1 border-[#002F86] text-[#002F86] hover:bg-[#002F86] hover:text-white bg-transparent"
                        >
                            <Share2 className="w-5 h-5 mr-2" />
                            Bagikan Artikel
                        </Button>
                    </div>
                </div>

                {/* Related articles */}
                {berita.jenis === "internal" && relatedBerita.length > 0 && (
                    <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-12">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-gradient-to-br from-[#002F86] to-[#FFD700] rounded-xl flex items-center justify-center">
                                <BookOpen className="w-5 h-5 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">Berita Terkait</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {relatedBerita.map((related) => (
                                <Card
                                    key={related.id}
                                    className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white"
                                >
                                    <CardContent className="p-6">
                                        <h3 className="font-bold text-lg mb-3 line-clamp-2 text-gray-900 group-hover:text-[#002F86] transition-colors">
                                            {related.judul}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                                            {truncateText(related.excerpt || related.konten, 120)}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                                <Calendar className="w-3 h-3" />
                                                <span>{formatDateShort(related.tanggal)}</span>
                                            </div>
                                            {related.jenis === "eksternal" && related.linkUrl ? (
                                                <Button
                                                    asChild
                                                    size="sm"
                                                    variant="outline"
                                                    className="border-[#002F86] text-[#002F86] hover:bg-[#002F86] hover:text-white text-xs bg-transparent"
                                                >
                                                    <a
                                                        href={related.linkUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2"
                                                    >
                                                        Baca
                                                        <ExternalLink className="w-3 h-3" />
                                                    </a>
                                                </Button>
                                            ) : (
                                                <Button
                                                    asChild
                                                    size="sm"
                                                    variant="outline"
                                                    className="border-[#002F86] text-[#002F86] hover:bg-[#002F86] hover:text-white text-xs bg-transparent"
                                                >
                                                    <Link href={`/berita/${related.slug}`}>Baca</Link>
                                                </Button>
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                        <div className="text-center mt-8">
                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="border-[#002F86] text-[#002F86] hover:bg-[#002F86] hover:text-white bg-transparent"
                            >
                                <Link href="/berita" className="inline-flex items-center gap-3">
                                    <Grid3X3 className="w-5 h-5" />
                                    Lihat Semua Berita
                                </Link>
                            </Button>
                        </div>
                    </div>
                )}
            </div>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export async function generateMetadata({ params }: BeritaDetailPageProps) {
    const { slug } = await params
    const berita = await getBeritaBySlug(slug)

    if (!berita) {
        return {
            title: "Berita Tidak Ditemukan",
            description: "Berita yang Anda cari tidak ditemukan.",
        }
    }

    const truncateText = (text: string, maxLength: number) => {
        if (!text) return ""
        const plainText = text.replace(/<[^>]*>/g, "")
        if (plainText.length <= maxLength) return plainText
        return plainText.substring(0, maxLength) + "..."
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

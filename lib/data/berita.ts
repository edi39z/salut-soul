import { prisma } from "@/lib/prisma"

export interface Berita {
    id: string
    judul: string
    slug: string
    konten: string
    excerpt: string | null
    gambar: string | null
    author: string | null
    tanggal: string
    jenis: "internal" | "eksternal"
    linkUrl: string | null
    tags: string | null
    metaTitle: string | null
    metaDescription: string | null
    aktif: boolean
    tampilDiCarousel: boolean
    createdAt: string
    updatedAt: string
}

export async function getAllBerita(): Promise<Berita[]> {
    try {
        const berita = await prisma.berita.findMany({
            where: {
                aktif: true,
            },
            orderBy: {
                tanggal: "desc",
            },
        })

        return berita.map((item) => ({
            id: item.id,
            judul: item.judul,
            slug: item.slug,
            konten: item.konten,
            excerpt: item.excerpt,
            gambar: item.gambar,
            author: item.author,
            tanggal: item.tanggal,
            jenis: item.jenis as "internal" | "eksternal",
            linkUrl: item.linkUrl,
            tags: item.tags,
            metaTitle: item.metaTitle,
            metaDescription: item.metaDescription,
            aktif: item.aktif,
            tampilDiCarousel: item.tampilDiCarousel,
            createdAt: item.createdAt.toISOString(),
            updatedAt: item.updatedAt.toISOString(),
        }))
    } catch (error) {
        console.error("Error fetching berita:", error)
        return []
    }
}

export async function getBeritaBySlug(slug: string): Promise<Berita | null> {
    try {
        const berita = await prisma.berita.findFirst({
            where: {
                slug: slug,
                aktif: true,
            },
        })

        if (!berita) {
            return null
        }

        return {
            id: berita.id,
            judul: berita.judul,
            slug: berita.slug,
            konten: berita.konten,
            excerpt: berita.excerpt,
            gambar: berita.gambar,
            author: berita.author,
            tanggal: berita.tanggal,
            jenis: berita.jenis as "internal" | "eksternal",
            linkUrl: berita.linkUrl,
            tags: berita.tags,
            metaTitle: berita.metaTitle,
            metaDescription: berita.metaDescription,
            aktif: berita.aktif,
            tampilDiCarousel: berita.tampilDiCarousel,
            createdAt: berita.createdAt.toISOString(),
            updatedAt: berita.updatedAt.toISOString(),
        }
    } catch (error) {
        console.error("Error fetching berita by slug:", error)
        return null
    }
}

export async function getRelatedBerita(currentId: string, limit = 6): Promise<Berita[]> {
    try {
        const relatedBerita = await prisma.berita.findMany({
            where: {
                aktif: true,
                jenis: "internal",
                id: {
                    not: currentId,
                },
            },
            orderBy: {
                tanggal: "desc",
            },
            take: limit,
        })

        return relatedBerita.map((item) => ({
            id: item.id,
            judul: item.judul,
            slug: item.slug,
            konten: item.konten,
            excerpt: item.excerpt,
            gambar: item.gambar,
            author: item.author,
            tanggal: item.tanggal,
            jenis: item.jenis as "internal" | "eksternal",
            linkUrl: item.linkUrl,
            tags: item.tags,
            metaTitle: item.metaTitle,
            metaDescription: item.metaDescription,
            aktif: item.aktif,
            tampilDiCarousel: item.tampilDiCarousel,
            createdAt: item.createdAt.toISOString(),
            updatedAt: item.updatedAt.toISOString(),
        }))
    } catch (error) {
        console.error("Error fetching related berita:", error)
        return []
    }
}

export async function getBeritaByTag(tag: string): Promise<Berita[]> {
    try {
        const berita = await prisma.berita.findMany({
            where: {
                aktif: true,
                tags: {
                    contains: tag,
                },
            },
            orderBy: {
                tanggal: "desc",
            },
        })

        return berita.map((item) => ({
            id: item.id,
            judul: item.judul,
            slug: item.slug,
            konten: item.konten,
            excerpt: item.excerpt,
            gambar: item.gambar,
            author: item.author,
            tanggal: item.tanggal,
            jenis: item.jenis as "internal" | "eksternal",
            linkUrl: item.linkUrl,
            tags: item.tags,
            metaTitle: item.metaTitle,
            metaDescription: item.metaDescription,
            aktif: item.aktif,
            tampilDiCarousel: item.tampilDiCarousel,
            createdAt: item.createdAt.toISOString(),
            updatedAt: item.updatedAt.toISOString(),
        }))
    } catch (error) {
        console.error("Error fetching berita by tag:", error)
        return []
    }
}

export async function getFeaturedBerita(limit = 3): Promise<Berita[]> {
    try {
        const featuredBerita = await prisma.berita.findMany({
            where: {
                aktif: true,
                tampilDiCarousel: true,
            },
            orderBy: {
                tanggal: "desc",
            },
            take: limit,
        })

        return featuredBerita.map((item) => ({
            id: item.id,
            judul: item.judul,
            slug: item.slug,
            konten: item.konten,
            excerpt: item.excerpt,
            gambar: item.gambar,
            author: item.author,
            tanggal: item.tanggal,
            jenis: item.jenis as "internal" | "eksternal",
            linkUrl: item.linkUrl,
            tags: item.tags,
            metaTitle: item.metaTitle,
            metaDescription: item.metaDescription,
            aktif: item.aktif,
            tampilDiCarousel: item.tampilDiCarousel,
            createdAt: item.createdAt.toISOString(),
            updatedAt: item.updatedAt.toISOString(),
        }))
    } catch (error) {
        console.error("Error fetching featured berita:", error)
        return []
    }
}

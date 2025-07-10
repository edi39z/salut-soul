import { type NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

/**
 * Ambil ID dari path URL seperti /api/berita/[id]
 */
function extractIdFromUrl(request: NextRequest): string {
    const segments = request.nextUrl.pathname.split("/")
    return segments[segments.length - 1]
}

export async function GET(request: NextRequest) {
    try {
        const id = extractIdFromUrl(request)

        const berita = await prisma.berita.findUnique({
            where: {
                id,
                aktif: true,
            },
        })

        if (!berita) {
            return NextResponse.json(
                { success: false, error: "Berita tidak ditemukan" },
                { status: 404 }
            )
        }

        return NextResponse.json({ success: true, data: berita })
    } catch (error) {
        console.error("Error fetching berita:", error)
        return NextResponse.json(
            { success: false, error: "Gagal mengambil data berita" },
            { status: 500 }
        )
    }
}

export async function PUT(request: NextRequest) {
    try {
        const id = extractIdFromUrl(request)
        const body = await request.json()
        const { judul, konten, gambar, slug, linkUrl, aktif } = body

        const berita = await prisma.berita.update({
            where: { id },
            data: {
                ...(judul && { judul }),
                ...(konten && { konten }),
                ...(gambar && { gambar }),
                ...(slug && { slug }),
                ...(linkUrl !== undefined && { linkUrl }),
                ...(typeof aktif === "boolean" && { aktif }),
            },
        })

        return NextResponse.json({ success: true, data: berita })
    } catch (error) {
        console.error("Error updating berita:", error)
        return NextResponse.json(
            { success: false, error: "Gagal memperbarui data berita" },
            { status: 500 }
        )
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const id = extractIdFromUrl(request)

        await prisma.berita.delete({
            where: { id },
        })

        return NextResponse.json({
            success: true,
            message: "Berita berhasil dihapus",
        })
    } catch (error) {
        console.error("Error deleting berita:", error)
        return NextResponse.json(
            { success: false, error: "Gagal menghapus berita" },
            { status: 500 }
        )
    }
}

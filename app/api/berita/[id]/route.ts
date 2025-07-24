import { type NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        console.log("API: Fetching berita with ID/slug:", params.id)

        const berita = await prisma.berita.findFirst({
            where: {
                OR: [{ id: params.id }, { slug: params.id }],
                aktif: true,
            },
        })

        if (!berita) {
            console.log("API: Berita not found")
            return NextResponse.json(
                {
                    success: false,
                    error: "Berita not found",
                },
                { status: 404 },
            )
        }

        console.log("API: Found berita:", {
            id: berita.id,
            judul: berita.judul,
            jenis: berita.jenis,
            slug: berita.slug,
        })

        return NextResponse.json({
            success: true,
            data: berita,
        })
    } catch (error) {
        console.error("API Error:", error)
        return NextResponse.json(
            {
                success: false,
                error: "Failed to fetch berita",
                details: error instanceof Error ? error.message : "Unknown error",
            },
            { status: 500 },
        )
    }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        const body = await request.json()
        const { judul, konten, gambar, slug, linkUrl, jenis, excerpt, metaTitle, metaDescription, tags, author, aktif } =
            body

        const berita = await prisma.berita.update({
            where: { id: params.id },
            data: {
                judul,
                konten,
                gambar,
                slug,
                linkUrl: linkUrl || null,
                jenis,
                excerpt,
                metaTitle,
                metaDescription,
                tags,
                author,
                aktif,
            },
        })

        return NextResponse.json({
            success: true,
            data: berita,
        })
    } catch (error) {
        console.error("Error updating berita:", error)
        return NextResponse.json(
            {
                success: false,
                error: "Failed to update berita",
                details: error instanceof Error ? error.message : "Unknown error",
            },
            { status: 500 },
        )
    }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        await prisma.berita.delete({
            where: { id: params.id },
        })

        return NextResponse.json({
            success: true,
            message: "Berita deleted successfully",
        })
    } catch (error) {
        console.error("Error deleting berita:", error)
        return NextResponse.json(
            {
                success: false,
                error: "Failed to delete berita",
                details: error instanceof Error ? error.message : "Unknown error",
            },
            { status: 500 },
        )
    }
}

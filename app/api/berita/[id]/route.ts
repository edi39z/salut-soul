import { type NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        const { id } = params

        console.log("API: Fetching berita detail for ID:", id)

        // Try to find by ID first, then by slug
        const berita = await prisma.berita.findFirst({
            where: {
                OR: [{ id: id }, { slug: id }],
                aktif: true,
            },
        })

        if (!berita) {
            console.log("API: Berita not found for ID/slug:", id)
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
            aktif: berita.aktif,
            linkUrl: berita.linkUrl,
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
        const { id } = params
        const body = await request.json()

        const {
            judul,
            konten,
            gambar,
            slug,
            linkUrl,
            jenis,
            excerpt,
            metaTitle,
            metaDescription,
            tags,
            author,
            aktif,
            tampilDiCarousel,
        } = body

        const berita = await prisma.berita.update({
            where: { id },
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
                tampilDiCarousel,
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
        const { id } = params

        await prisma.berita.delete({
            where: { id },
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

import { type NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        const { id } = params

        const berita = await prisma.berita.findUnique({
            where: {
                id: id,
                aktif: true,
            },
        })

        if (!berita) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Berita not found",
                },
                { status: 404 },
            )
        }

        return NextResponse.json({
            success: true,
            data: berita,
        })
    } catch (error) {
        console.error("Error fetching berita:", error)
        return NextResponse.json(
            {
                success: false,
                error: "Failed to fetch berita",
            },
            { status: 500 },
        )
    }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        const { id } = params
        const body = await request.json()
        const { judul, konten, gambar, slug, linkUrl, aktif } = body

        const berita = await prisma.berita.update({
            where: {
                id: id,
            },
            data: {
                ...(judul && { judul }),
                ...(konten && { konten }),
                ...(gambar && { gambar }),
                ...(slug && { slug }),
                ...(linkUrl !== undefined && { linkUrl }),
                ...(typeof aktif === "boolean" && { aktif }),
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
            },
            { status: 500 },
        )
    }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        const { id } = params

        await prisma.berita.delete({
            where: {
                id: id,
            },
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
            },
            { status: 500 },
        )
    }
}

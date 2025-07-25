import { type NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

// Gunakan async context.params (karena saat build dia Promise)
export async function GET(request: NextRequest, context: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await context.params // Ini penting!

        const { searchParams } = new URL(request.url)
        const limit = Number.parseInt(searchParams.get("limit") || "6")

        console.log("API: Fetching related berita for ID:", id, "with limit:", limit)

        const currentBerita = await prisma.berita.findFirst({
            where: {
                OR: [{ id }, { slug: id }],
                aktif: true,
            },
        })

        if (!currentBerita) {
            return NextResponse.json(
                { success: false, error: "Current berita not found" },
                { status: 404 }
            )
        }

        if (!currentBerita.tags || currentBerita.tags.length === 0) {
            return NextResponse.json({ success: true, data: [] })
        }

        const tagList = currentBerita.tags.split(",").map(tag => tag.trim())

        const relatedBerita = await prisma.berita.findMany({
            where: {
                AND: [
                    { aktif: true },
                    { id: { not: currentBerita.id } },
                    {
                        OR: tagList.map(tag => ({
                            tags: {
                                contains: tag,
                            },
                        })),
                    },
                ],
            },
            orderBy: {
                createdAt: "desc",
            },
            take: limit,
        })

        return NextResponse.json({
            success: true,
            data: relatedBerita,
        })
    } catch (error) {
        console.error("API Error:", error)
        return NextResponse.json(
            {
                success: false,
                error: "Failed to fetch related berita",
                details: error instanceof Error ? error.message : "Unknown error",
            },
            { status: 500 }
        )
    }
}

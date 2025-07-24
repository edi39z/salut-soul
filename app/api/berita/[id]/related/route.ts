import { type NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        const { id } = params
        const { searchParams } = new URL(request.url)
        const limit = Number.parseInt(searchParams.get("limit") || "6")

        console.log("API: Fetching related berita for ID:", id, "with limit:", limit)

        // First, get the current berita to extract its tags
        const currentBerita = await prisma.berita.findFirst({
            where: {
                OR: [{ id: id }, { slug: id }],
                aktif: true,
            },
        })

        if (!currentBerita) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Current berita not found",
                },
                { status: 404 },
            )
        }

        console.log("API: Current berita found:", {
            id: currentBerita.id,
            judul: currentBerita.judul,
            tags: currentBerita.tags,
        })

        // If no tags, return empty array
        if (!currentBerita.tags || currentBerita.tags.length === 0) {
            console.log("API: No tags found for current berita")
            return NextResponse.json({
                success: true,
                data: [],
            })
        }

        // Find related berita based on tags
        // Find related berita based on tags
        const tagList = currentBerita.tags.split(",").map((tag) => tag.trim())

        const relatedBerita = await prisma.berita.findMany({
            where: {
                AND: [
                    { aktif: true },
                    { id: { not: currentBerita.id } }, // Exclude current berita
                    {
                        OR: tagList.map((tag) => ({
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


        console.log("API: Found related berita count:", relatedBerita.length)
        console.log(
            "API: Related berita data:",
            relatedBerita.map((b) => ({
                id: b.id,
                judul: b.judul,
                tags: b.tags,
                jenis: b.jenis,
            })),
        )

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
            { status: 500 },
        )
    }
}

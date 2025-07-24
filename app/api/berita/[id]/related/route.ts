/* eslint-disable @typescript-eslint/no-explicit-any */
import { type NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET(request: NextRequest, context: { params: { id: string } }) {
    // ❗ FIXED: Tidak destructuring di parameter function
    const id = context.params.id

    try {
        const { searchParams } = new URL(request.url)
        const limit = Number.parseInt(searchParams.get("limit") || "6")

        // Get the current article
        const currentBerita = await prisma.berita.findFirst({
            where: {
                OR: [{ id }, { slug: id }],
                aktif: true,
            },
        })

        if (!currentBerita) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Berita not found",
                },
                { status: 404 }
            )
        }

        const currentTags = currentBerita.tags
            ? currentBerita.tags
                .split(",")
                .map((tag) => tag.trim())
                .filter((tag) => tag.length > 0)
            : []

        let relatedBerita: any[] = []

        if (currentTags.length > 0) {
            const tagConditions = currentTags.map((tag) => ({
                tags: {
                    contains: tag,
                    mode: "insensitive" as const,
                },
            }))

            relatedBerita = await prisma.berita.findMany({
                where: {
                    AND: [
                        { aktif: true },
                        { id: { not: currentBerita.id } },
                        { OR: tagConditions },
                    ],
                },
                orderBy: {
                    createdAt: "desc",
                },
                take: limit,
            })
        }

        if (relatedBerita.length < limit) {
            const remainingLimit = limit - relatedBerita.length
            const excludeIds = [currentBerita.id, ...relatedBerita.map((b) => b.id)]

            const otherBerita = await prisma.berita.findMany({
                where: {
                    AND: [{ aktif: true }, { id: { notIn: excludeIds } }],
                },
                orderBy: {
                    createdAt: "desc",
                },
                take: remainingLimit,
            })

            relatedBerita = [...relatedBerita, ...otherBerita]
        }

        const result = relatedBerita.map((berita) => {
            const beritaTags = berita.tags
                ? berita.tags
                    .split(",")
                    .map((tag: string) => tag.trim())
                    .filter((tag: string) => tag.length > 0)
                : []

            const hasCommonTags = currentTags.some((tag) =>
                beritaTags.some(
                    (beritaTag: string) =>
                        beritaTag.toLowerCase().includes(tag.toLowerCase()) ||
                        tag.toLowerCase().includes(beritaTag.toLowerCase())
                )
            )

            return {
                ...berita,
                isRelated: hasCommonTags,
            }
        })

        return NextResponse.json({
            success: true,
            data: result,
            currentArticle: {
                id: currentBerita.id,
                judul: currentBerita.judul,
                tags: currentTags,
            },
        })
    } catch (error) {
        console.error("Error fetching related berita:", error)
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

import { type NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)
        const limit = searchParams.get("limit")

        console.log("API: Fetching berita with limit:", limit)

        const berita = await prisma.berita.findMany({
            orderBy: {
                tanggal: "desc",
            },
            ...(limit && { take: Number.parseInt(limit) }),
        })

        console.log("API: Found berita count:", berita.length)
        console.log(
            "API: Berita data:",
            berita.map((b) => ({
                id: b.id,
                judul: b.judul,
                aktif: b.aktif,
                linkUrl: b.linkUrl,
            })),
        )

        return NextResponse.json({
            success: true,
            data: berita,
            count: berita.length,
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

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { judul, konten, gambar, slug, linkUrl, aktif } = body

        const berita = await prisma.berita.create({
            data: {
                judul,
                konten,
                gambar,
                slug,
                linkUrl: linkUrl || null,
                aktif: aktif ?? true,
                tanggal: new Date(),
            },
        })

        return NextResponse.json({
            success: true,
            data: berita,
        })
    } catch (error) {
        console.error("Error creating berita:", error)
        return NextResponse.json({ success: false, error: "Failed to create berita" }, { status: 500 })
    }
}

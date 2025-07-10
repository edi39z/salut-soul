import { type NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)
        const limit = Number.parseInt(searchParams.get("limit") || "10")
        const page = Number.parseInt(searchParams.get("page") || "1")
        const skip = (page - 1) * limit

        const berita = await prisma.berita.findMany({
            where: {
                aktif: true,
            },
            orderBy: {
                tanggal: "desc",
            },
            take: limit,
            skip: skip,
        })

        const total = await prisma.berita.count({
            where: {
                aktif: true,
            },
        })

        return NextResponse.json({
            success: true,
            data: berita,
            pagination: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit),
            },
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

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { judul, konten, gambar, slug, linkUrl } = body

        if (!judul || !konten || !gambar || !slug) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Missing required fields",
                },
                { status: 400 },
            )
        }

        const berita = await prisma.berita.create({
            data: {
                judul,
                konten,
                gambar,
                slug,
                linkUrl: linkUrl || null,
                tanggal: new Date(),
                aktif: true,
            },
        })

        return NextResponse.json({
            success: true,
            data: berita,
        })
    } catch (error) {
        console.error("Error creating berita:", error)
        return NextResponse.json(
            {
                success: false,
                error: "Failed to create berita",
            },
            { status: 500 },
        )
    }
}

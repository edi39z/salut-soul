/* eslint-disable @typescript-eslint/no-explicit-any */
import { type NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)
        const limit = searchParams.get("limit")
        const search = searchParams.get("search")
        const jenis = searchParams.get("jenis") // "internal", "eksternal", or null for all
        const page = searchParams.get("page") || "1"
        const carousel = searchParams.get("carousel") // "true" for carousel items only
        const pageSize = limit ? Number.parseInt(limit) : 10



        // Build where clause
        const whereClause: any = {
            aktif: true,
        }

        // If carousel parameter is true, only show items with tampilDiCarousel = true
        if (carousel === "true") {
            whereClause.tampilDiCarousel = true
        }

        if (search) {
            whereClause.OR = [
                { judul: { contains: search, mode: "insensitive" } },
                { konten: { contains: search, mode: "insensitive" } },
                { excerpt: { contains: search, mode: "insensitive" } },
            ]
        }

        if (jenis) {
            whereClause.jenis = jenis
        }

        // Get total count for pagination
        const totalCount = await prisma.berita.count({
            where: whereClause,
        })

        // Get paginated results
        const skip = (Number.parseInt(page) - 1) * pageSize
        const berita = await prisma.berita.findMany({
            where: whereClause,
            orderBy: {
                createdAt: "desc",
            },
            skip: skip,
            take: pageSize,
        })



        const totalPages = Math.ceil(totalCount / pageSize)

        return NextResponse.json({
            success: true,
            data: berita,
            pagination: {
                currentPage: Number.parseInt(page),
                totalPages,
                totalCount,
                pageSize,
                hasNext: Number.parseInt(page) < totalPages,
                hasPrev: Number.parseInt(page) > 1,
            },
        })
    } catch (error) {

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
        const {
            judul,
            konten,
            gambar,
            slug,
            linkUrl,
            jenis = "internal",
            excerpt,
            metaTitle,
            metaDescription,
            tags,
            author,
            aktif = true,
            tampilDiCarousel = false,
        } = body

        // Generate slug if not provided
        const finalSlug =
            slug ||
            judul
                .toLowerCase()
                .replace(/[^a-z0-9\s-]/g, "")
                .replace(/\s+/g, "-")
                .trim()

        const berita = await prisma.berita.create({
            data: {
                judul,
                konten,
                gambar,
                slug: finalSlug,
                linkUrl: linkUrl || null,
                jenis,
                excerpt,
                metaTitle,
                metaDescription,
                tags,
                author,
                tanggal: new Date().toISOString(),
                aktif,
                tampilDiCarousel,
            },
        })

        return NextResponse.json({
            success: true,
            data: berita,
        })
    } catch (error) {
       
        return NextResponse.json(
            {
                success: false,
                error: "Failed to create berita",
                details: error instanceof Error ? error.message : "Unknown error",
            },
            { status: 500 },
        )
    }
}

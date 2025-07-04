import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET() {
    try {
        console.log("🔍 Fetching fakultas from database...")

        // Get all active fakultas
        const fakultas = await prisma.fakultas.findMany({
            where: { isActive: true },
            orderBy: { nama: "asc" },
            select: {
                id: true,
                nama: true,
                namaLengkap: true,
                akreditasi: true,
            },
        })

        console.log("📋 Found fakultas:", fakultas)

        return NextResponse.json({
            success: true,
            data: fakultas,
            count: fakultas.length,
        })
    } catch (error) {
        console.error("❌ Error fetching fakultas:", error)
        return NextResponse.json(
            {
                success: false,
                message: "Failed to fetch fakultas",
                error: error instanceof Error ? error.message : "Unknown error",
            },
            { status: 500 },
        )
    }
}

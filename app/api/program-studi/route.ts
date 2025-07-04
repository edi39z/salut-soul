import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { Prisma } from "@prisma/client"

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url)
        const fakultas = searchParams.get("fakultas")

        console.log("🔍 Fetching program studi for fakultas:", fakultas)

        const whereClause: Prisma.ProgramStudiWhereInput = { isActive: true }

        if (fakultas) {
            whereClause.fakultas = fakultas
        }

        const programStudi = await prisma.programStudi.findMany({
            where: whereClause,
            orderBy: { nama: "asc" },
            select: {
                id: true,
                nama: true,
                fakultas: true,
                jenjang: true,
                akreditasi: true,
                biayaSemester: true,
            },
        })

        console.log("📋 Found program studi:", programStudi)

        return NextResponse.json({
            success: true,
            data: programStudi,
            count: programStudi.length,
        })
    } catch (error) {
        console.error("❌ Error fetching program studi:", error)
        return NextResponse.json(
            {
                success: false,
                message: "Failed to fetch program studi",
                error: error instanceof Error ? error.message : "Unknown error",
            },
            { status: 500 },
        )
    }
}

import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(request: NextRequest) {
    try {
        const { field, value } = await request.json()

        if (!field || !value) {
            return NextResponse.json({ success: false, message: "Field and value are required" }, { status: 400 })
        }

        // Check for existing data based on field type
        let existingData = null
        let message = ""

        switch (field) {
            case "nik":
                if (value.length === 16) {
                    existingData = await prisma.pendaftaran.findFirst({
                        where: { nik: value },
                        select: { id: true, namaLengkap: true, jalur: true },
                    })
                    if (existingData) {
                        message = `NIK ${value} sudah terdaftar atas nama ${existingData.namaLengkap} (${existingData.jalur.toUpperCase()})`
                    }
                }
                break

            case "nisn":
                if (value.length === 10) {
                    existingData = await prisma.pendaftaran.findFirst({
                        where: { nisn: value },
                        select: { id: true, namaLengkap: true, jalur: true },
                    })
                    if (existingData) {
                        message = `NISN ${value} sudah terdaftar atas nama ${existingData.namaLengkap} (${existingData.jalur.toUpperCase()})`
                    }
                }
                break

            case "email":
                if (value.includes("@")) {
                    existingData = await prisma.pendaftaran.findFirst({
                        where: { email: value },
                        select: { id: true, namaLengkap: true, jalur: true },
                    })
                    if (existingData) {
                        message = `Email ${value} sudah terdaftar atas nama ${existingData.namaLengkap} (${existingData.jalur.toUpperCase()})`
                    }
                }
                break

            default:
                return NextResponse.json({ success: false, message: "Invalid field" }, { status: 400 })
        }

        // Log validation attempt
        await prisma.validasiData.create({
            data: {
                field,
                value,
                isValid: !existingData,
                message: existingData ? message : `${field.toUpperCase()} tersedia`,
                ipAddress: request.ip || request.headers.get("x-forwarded-for") || "unknown",
                userAgent: request.headers.get("user-agent") || "unknown",
            },
        })

        return NextResponse.json({
            success: true,
            isAvailable: !existingData,
            message: existingData ? message : `${field.toUpperCase()} tersedia`,
        })
    } catch (error) {
        console.error("Validation error:", error)
        return NextResponse.json({ success: false, message: "Validation failed" }, { status: 500 })
    }
}

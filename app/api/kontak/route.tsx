import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { z } from "zod"

// Schema validasi
const kontakSchema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter"),
  email: z.string().email("Format email tidak valid"),
  phone: z.string().min(10, "Nomor HP minimal 10 digit"),
  message: z.string().min(10, "Pesan minimal 10 karakter"),
})

export async function POST(request: NextRequest) {
  try {
    console.log("📧 Menerima pesan kontak...")

    const body = await request.json()
    console.log("📋 Data kontak:", body)

    // Validasi data
    const validationResult = kontakSchema.safeParse(body)

    if (!validationResult.success) {
      console.log("❌ Validasi kontak gagal:", validationResult.error.errors)
      return NextResponse.json(
        {
          success: false,
          message: "Data tidak valid",
          errors: validationResult.error.errors,
        },
        { status: 400 },
      )
    }

    const data = validationResult.data

    console.log("💾 Menyimpan pesan kontak ke database...")

    // Simpan ke database
    const kontakPesan = await prisma.kontakPesan.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
        status: "unread",
      },
    })

    console.log("✅ Pesan kontak berhasil disimpan dengan ID:", kontakPesan.id)

    // Response sukses
    return NextResponse.json({
      success: true,
      message: "Pesan Anda telah terkirim! Kami akan segera merespon.",
      data: {
        id: kontakPesan.id,
        name: kontakPesan.name,
        email: kontakPesan.email,
        status: kontakPesan.status,
        messageNumber: `MSG-${kontakPesan.id.slice(-8).toUpperCase()}`,
      },
    })
  } catch (error) {
    console.error("❌ Error saat menyimpan pesan kontak:", error)

    // Handle database errors
    if (error instanceof Error && error.message.includes("connect")) {
      return NextResponse.json(
        { success: false, message: "Gagal terhubung ke database. Silakan coba lagi." },
        { status: 503 },
      )
    }

    return NextResponse.json(
      { success: false, message: "Terjadi kesalahan server. Silakan coba lagi." },
      { status: 500 },
    )
  }
}

// GET method untuk testing
export async function GET() {
  try {
    const count = await prisma.kontakPesan.count()
    const recent = await prisma.kontakPesan.findMany({
      take: 5,
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        status: true,
        createdAt: true,
      },
    })

    return NextResponse.json({
      success: true,
      message: "API Kontak berfungsi",
      stats: {
        totalPesan: count,
        recentMessages: recent,
      },
    })
  } catch (error) {
    console.error("Database connection error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Database connection failed",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}

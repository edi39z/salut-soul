import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { z } from "zod"

// Schema validasi
const pendaftaranSchema = z.object({
  namaLengkap: z.string().min(2, "Nama lengkap minimal 2 karakter"),
  nik: z.string().length(16, "NIK harus 16 digit").regex(/^\d+$/, "NIK harus berupa angka"),
  nisn: z.string().length(10, "NISN harus 10 digit").regex(/^\d+$/, "NISN harus berupa angka"),
  noHp: z.string().min(10, "Nomor HP minimal 10 digit"),
  email: z.string().email("Format email tidak valid"),
  tanggalLahir: z.string().min(1, "Tanggal lahir harus diisi"),
  alamat: z.string().min(1, "Alamat harus diisi"),
  fakultas: z.string().min(1, "Fakultas harus dipilih"),
  programStudi: z.string().min(1, "Program studi harus dipilih"),
})

export async function POST(request: NextRequest) {
  try {
    console.log("📝 [API] Menerima request pendaftaran...")
    console.log("📝 [API] Request headers:", Object.fromEntries(request.headers.entries()))

    const body = await request.json()
    console.log("📋 [API] Data yang diterima:", JSON.stringify(body, null, 2))

    // Validasi data
    const validationResult = pendaftaranSchema.safeParse(body)

    if (!validationResult.success) {
      console.log("❌ Validasi gagal:", validationResult.error.errors)
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

    // Validasi nomor HP format Indonesia
    if (!data.noHp.startsWith("08") && !data.noHp.startsWith("+62")) {
      return NextResponse.json(
        { success: false, message: "Nomor HP harus dimulai dengan 08 atau +62" },
        { status: 400 },
      )
    }

    console.log("🔍 Mengecek duplikasi data...")

    // Cek duplikasi NIK, NISN, dan Email
    const existingData = await prisma.pendaftaran.findFirst({
      where: {
        OR: [{ nik: data.nik }, { nisn: data.nisn }, { email: data.email }],
      },
    })

    if (existingData) {
      let message = "Data sudah terdaftar: "
      if (existingData.nik === data.nik) message += "NIK"
      else if (existingData.nisn === data.nisn) message += "NISN"
      else if (existingData.email === data.email) message += "Email"

      console.log("⚠️ Data duplikat ditemukan:", message)
      return NextResponse.json({ success: false, message }, { status: 409 })
    }

    console.log("💾 Menyimpan data ke database...")

    // Simpan ke database
    const pendaftaran = await prisma.pendaftaran.create({
      data: {
        namaLengkap: data.namaLengkap,
        nik: data.nik,
        nisn: data.nisn,
        noHp: data.noHp,
        email: data.email,
        tanggalLahir: new Date(data.tanggalLahir),
        alamat: data.alamat,
        fakultas: data.fakultas,
        programStudi: data.programStudi,
        status: "pending",
      },
    })

    console.log("✅ [API] Data berhasil disimpan:")
    console.log("   - ID:", pendaftaran.id)
    console.log("   - Nama:", pendaftaran.namaLengkap)
    console.log("   - Email:", pendaftaran.email)
    console.log("   - Fakultas:", pendaftaran.fakultas)
    console.log("   - Program Studi:", pendaftaran.programStudi)

    // Response sukses
    return NextResponse.json({
      success: true,
      message: "Pendaftaran berhasil! Tim kami akan segera menghubungi Anda.",
      data: {
        id: pendaftaran.id,
        namaLengkap: pendaftaran.namaLengkap,
        email: pendaftaran.email,
        fakultas: pendaftaran.fakultas,
        programStudi: pendaftaran.programStudi,
        status: pendaftaran.status,
        registrationNumber: `REG-${pendaftaran.id.slice(-8).toUpperCase()}`,
      },
    })
  } catch (error) {
    console.error("❌ Error saat menyimpan pendaftaran:", error)

    // Handle Prisma errors
    if (error instanceof Error) {
      if (error.message.includes("Unique constraint")) {
        return NextResponse.json(
          { success: false, message: "Data NIK, NISN, atau Email sudah terdaftar" },
          { status: 409 },
        )
      }

      if (error.message.includes("connect")) {
        return NextResponse.json(
          { success: false, message: "Gagal terhubung ke database. Silakan coba lagi." },
          { status: 503 },
        )
      }
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
    const count = await prisma.pendaftaran.count()
    const recent = await prisma.pendaftaran.findMany({
      take: 5,
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        namaLengkap: true,
        email: true,
        fakultas: true,
        programStudi: true,
        status: true,
        createdAt: true,
      },
    })

    return NextResponse.json({
      success: true,
      message: "API Pendaftaran berfungsi",
      stats: {
        totalPendaftaran: count,
        recentRegistrations: recent,
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

import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { z } from "zod"

const pendaftaranSchema = z.object({
  namaLengkap: z.string().min(1, "Nama lengkap harus diisi"),
  nik: z.string().length(16, "NIK harus 16 digit"),
  nisn: z.string().max(10, "NISN maksimal 10 digit").optional(),
  noHp: z.string().max(13, "Nomor HP maksimal 13 digit").startsWith("08", "Nomor HP harus diawali dengan 08"),
  email: z.string().email("Format email tidak valid"),
  tanggalLahir: z.string(),
  alamat: z.string().min(1, "Alamat harus diisi"),
  fakultas: z.string().min(1, "Fakultas harus dipilih"),
  programStudi: z.string().min(1, "Program studi harus dipilih"),
  jenjang: z.string().min(1, "Jenjang harus dipilih"),
  jalur: z.enum(["rpl", "non-rpl"]),
  // Document fields
  pasFoto: z.string().optional(),
  ktp: z.string().optional(),
  ijazah: z.string().optional(),
  formulir: z.string().optional(),
  ijazahSMA: z.string().optional(),
  screenshotPDDIKTI: z.string().optional(),
  skPengangkatan: z.string().optional(),
  skMengajar: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate input
    const validatedData = pendaftaranSchema.parse(body)

    // Check if NIK already exists
    const existingNik = await prisma.pendaftaran.findUnique({
      where: { nik: validatedData.nik },
    })

    if (existingNik) {
      return NextResponse.json({ error: "NIK sudah terdaftar" }, { status: 400 })
    }

    // Check if email already exists
    const existingEmail = await prisma.pendaftaran.findUnique({
      where: { email: validatedData.email },
    })

    if (existingEmail) {
      return NextResponse.json({ error: "Email sudah terdaftar" }, { status: 400 })
    }

    // Check if NISN already exists (if provided)
    if (validatedData.nisn) {
      const existingNisn = await prisma.pendaftaran.findUnique({
        where: { nisn: validatedData.nisn },
      })

      if (existingNisn) {
        return NextResponse.json({ error: "NISN sudah terdaftar" }, { status: 400 })
      }
    }

    // Create pendaftaran
    const pendaftaran = await prisma.pendaftaran.create({
      data: {
        ...validatedData,
        tanggalLahir: new Date(validatedData.tanggalLahir),
      },
    })

    return NextResponse.json({
      success: true,
      message: "Pendaftaran berhasil disimpan",
      data: pendaftaran,
    })
  } catch (error) {
    console.error("Error creating pendaftaran:", error)

    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Data tidak valid", details: error.errors }, { status: 400 })
    }

    return NextResponse.json({ error: "Terjadi kesalahan server" }, { status: 500 })
  }
}

export async function GET() {
  try {
    const pendaftaran = await prisma.pendaftaran.findMany({
      orderBy: { createdAt: "desc" },
    })

    return NextResponse.json({
      success: true,
      data: pendaftaran,
    })
  } catch (error) {
    console.error("Error fetching pendaftaran:", error)
    return NextResponse.json({ error: "Terjadi kesalahan server" }, { status: 500 })
  }
}

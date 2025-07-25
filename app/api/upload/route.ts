/* eslint-disable @typescript-eslint/no-explicit-any */
import { type NextRequest, NextResponse } from "next/server"
import { v2 as cloudinary } from "cloudinary"

// Konfigurasi Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData()
        const file = formData.get("file") as File
        const documentType = formData.get("documentType") as string
        const fakultas = formData.get("fakultas") as string | null

        console.log("📤 Upload request:", { documentType, fakultas, fileType: file?.type, fileName: file?.name })

        if (!file) {
            return NextResponse.json(
                {
                    success: false,
                    error: "No file provided",
                },
                { status: 400 },
            )
        }

        if (!documentType) {
            return NextResponse.json(
                {
                    success: false,
                    error: "documentType is required",
                },
                { status: 400 },
            )
        }

        // Daftar dokumen yang diizinkan
        const allowedDocuments = [
            "pasFoto",
            "ktp",
            "ijazah",
            "formulir",
            "ijazahSMA",
            "screenshotPDDIKTI",
            "skPengangkatan",
            "skMengajar",
        ]

        if (!allowedDocuments.includes(documentType)) {
            return NextResponse.json(
                {
                    success: false,
                    error: `Tipe dokumen '${documentType}' tidak valid. Dokumen yang diizinkan: ${allowedDocuments.join(", ")}`,
                },
                { status: 400 },
            )
        }

        // Validasi khusus FKIP
        const fkipOnlyDocuments = ["skPengangkatan", "skMengajar"]
        if (fkipOnlyDocuments.includes(documentType)) {
            if (!fakultas || fakultas.toUpperCase() !== "FKIP") {
                return NextResponse.json(
                    {
                        success: false,
                        error: `Dokumen ${documentType} hanya berlaku untuk fakultas FKIP`,
                    },
                    { status: 400 },
                )
            }
        }

        // Validasi ukuran file (maksimal 5MB)
        const maxSize = 5 * 1024 * 1024 // 5MB
        if (file.size > maxSize) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Ukuran file terlalu besar. Maksimal 5MB",
                },
                { status: 400 },
            )
        }

        const fileType = file.type

        // Validasi format file berdasarkan jenis dokumen
        if (documentType === "pasFoto") {
            // Untuk pas foto, terima JPG/JPEG/PNG
            const allowedImageTypes = ["image/jpeg", "image/jpg", "image/png"]
            if (!allowedImageTypes.includes(fileType)) {
                return NextResponse.json(
                    {
                        success: false,
                        error: `${documentType} harus berformat JPG, JPEG, atau PNG`,
                    },
                    { status: 400 },
                )
            }
        } else {
            // Untuk dokumen lainnya, harus PDF
            if (fileType !== "application/pdf") {
                return NextResponse.json(
                    {
                        success: false,
                        error: `${documentType} harus berformat PDF`,
                    },
                    { status: 400 },
                )
            }
        }

        // Convert file ke buffer
        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)

        const timestamp = Date.now()
        const randomString = Math.random().toString(36).substring(7)
        const filename = `${documentType}_${timestamp}_${randomString}`

        // Tentukan resource type berdasarkan file type
        let resourceType: "auto" | "image" | "raw" = "auto"
        if (fileType === "application/pdf") {
            resourceType = "raw"
        } else if (fileType.startsWith("image/")) {
            resourceType = "image"
        }

        console.log("☁️ Uploading to Cloudinary:", { filename, resourceType, fileType })

        const result = await new Promise((resolve, reject) => {
            cloudinary.uploader
                .upload_stream(
                    {
                        resource_type: resourceType,
                        public_id: `salut-soul-documents/${filename}`,
                        folder: "salut-soul-documents",
                        use_filename: true,
                        unique_filename: true,
                    },
                    (error, result) => {
                        if (error) {
                            console.error("❌ Cloudinary error:", error)
                            reject(error)
                        } else {
                            console.log("✅ Cloudinary success:", result?.public_id)
                            resolve(result)
                        }
                    },
                )
                .end(buffer)
        })

        const uploadResult = result as any

        return NextResponse.json({
            success: true,
            filename: uploadResult.public_id,
            url: uploadResult.secure_url,
            publicId: uploadResult.public_id,
            message: "File berhasil diupload",
        })
    } catch (error) {
        console.error("❌ Upload error:", error)

        return NextResponse.json(
            {
                success: false,
                error: error instanceof Error ? error.message : "Upload failed",
                message: "Gagal mengupload file. Silakan coba lagi.",
            },
            { status: 500 },
        )
    }
}

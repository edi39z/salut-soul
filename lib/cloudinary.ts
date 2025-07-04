import { v2 as cloudinary } from "cloudinary"

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function uploadToCloudinary(file: File): Promise<string> {
    try {
        // Convert file to base64
        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)
        const base64 = buffer.toString("base64")

        // Determine resource type based on file type
        let resourceType: "auto" | "image" | "video" | "raw" = "auto"

        // For PDF files, use 'raw' resource type to prevent conversion issues
        if (file.type === "application/pdf") {
            resourceType = "raw"
        } else if (file.type.startsWith("image/")) {
            resourceType = "image"
        }

        const dataURI = `data:${file.type};base64,${base64}`

        // Upload to Cloudinary with proper settings for PDF
        const result = await cloudinary.uploader.upload(dataURI, {
            folder: "salut-soul/documents",
            resource_type: resourceType,
            public_id: `doc_${Date.now()}_${Math.random().toString(36).substring(7)}`,
            // For PDF files, don't try to transform or optimize
            ...(file.type === "application/pdf" && {
                format: "pdf",
            }),
            // For images, we can optimize
            ...(file.type.startsWith("image/") && {
                quality: "auto:good",
                fetch_format: "auto",
            }),
        })

        return result.secure_url
    } catch (error) {
        console.error("Cloudinary upload error:", error)
        throw new Error("Failed to upload file")
    }
}

export { cloudinary }

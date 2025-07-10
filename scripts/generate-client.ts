import { execSync } from "child_process"
import { existsSync } from "fs"
import path from "path"

async function generatePrismaClient() {
    console.log("🔄 Generating Prisma Client...")

    try {
        // Check if schema exists
        const schemaPath = path.join(process.cwd(), "prisma", "schema.prisma")
        if (!existsSync(schemaPath)) {
            throw new Error("Prisma schema not found at prisma/schema.prisma")
        }

        // Generate Prisma Client
        execSync("npx prisma generate", { stdio: "inherit" })

        console.log("✅ Prisma Client generated successfully!")

        // Test the client
        const { PrismaClient } = await import("@prisma/client")
        const prisma = new PrismaClient()

        console.log("🧪 Testing database connection...")
        await prisma.$connect()
        console.log("✅ Database connection successful!")

        await prisma.$disconnect()
    } catch (error) {
        console.error("❌ Error generating Prisma Client:", error)
        process.exit(1)
    }
}

generatePrismaClient()

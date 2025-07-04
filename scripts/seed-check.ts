import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function checkDatabase() {
    console.log("🔍 Checking database content...")

    try {
        // Check fakultas
        const fakultasCount = await prisma.fakultas.count()
        console.log(`📊 Fakultas count: ${fakultasCount}`)

        const fakultasList = await prisma.fakultas.findMany()
        console.log("📋 Fakultas data:", fakultasList)

        // Check program studi
        const prodiCount = await prisma.programStudi.count()
        console.log(`📊 Program Studi count: ${prodiCount}`)

        const prodiList = await prisma.programStudi.findMany()
        console.log("📋 Program Studi data:", prodiList)
    } catch (error) {
        console.error("❌ Database error:", error)
    } finally {
        await prisma.$disconnect()
    }
}

checkDatabase()

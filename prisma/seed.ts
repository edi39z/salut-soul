import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
    console.log("🌱 Starting database seeding...")

    // Clear existing data first
    await prisma.programStudi.deleteMany()
    await prisma.fakultas.deleteMany()

    console.log("🗑️ Cleared existing data")

    // Seed Fakultas
    const fakultasList = [
        {
            nama: "FISIP",
            namaLengkap: "Fakultas Ilmu Sosial dan Ilmu Politik",
            deskripsi:
                "Fakultas yang mengembangkan ilmu sosial dan politik untuk membangun masyarakat yang demokratis dan berkeadilan.",
            akreditasi: "A",
        },
        {
            nama: "FKIP",
            namaLengkap: "Fakultas Keguruan dan Ilmu Pendidikan",
            deskripsi: "Fakultas yang mencetak tenaga pendidik profesional untuk berbagai jenjang pendidikan.",
            akreditasi: "A",
        },
        {
            nama: "FMIPA",
            namaLengkap: "Fakultas Matematika dan Ilmu Pengetahuan Alam",
            deskripsi: "Fakultas yang mengembangkan ilmu pengetahuan alam dan matematika untuk kemajuan teknologi.",
            akreditasi: "A",
        },
        {
            nama: "FE",
            namaLengkap: "Fakultas Ekonomi",
            deskripsi: "Fakultas yang mengembangkan ilmu ekonomi dan bisnis untuk pembangunan ekonomi nasional.",
            akreditasi: "A",
        },
        {
            nama: "FHISIP",
            namaLengkap: "Fakultas Hukum, Ilmu Sosial dan Ilmu Politik",
            deskripsi: "Fakultas yang mengintegrasikan ilmu hukum dengan ilmu sosial politik.",
            akreditasi: "B",
        },
    ]

    for (const fakultas of fakultasList) {
        const created = await prisma.fakultas.create({
            data: fakultas,
        })
        console.log(`✅ Created fakultas: ${created.nama}`)
    }

    // Seed Program Studi
    const programStudiList = [
        // FISIP
        { nama: "Administrasi Negara", fakultas: "FISIP", jenjang: "S1", akreditasi: "A", biayaSemester: 1300000 },
        { nama: "Administrasi Niaga", fakultas: "FISIP", jenjang: "S1", akreditasi: "A", biayaSemester: 1300000 },
        { nama: "Ilmu Komunikasi", fakultas: "FISIP", jenjang: "S1", akreditasi: "B", biayaSemester: 1400000 },
        { nama: "Ilmu Perpustakaan", fakultas: "FISIP", jenjang: "S1", akreditasi: "B", biayaSemester: 1300000 },
        { nama: "Sosiologi", fakultas: "FISIP", jenjang: "S1", akreditasi: "B", biayaSemester: 1300000 },
        { nama: "Sastra Inggris", fakultas: "FISIP", jenjang: "S1", akreditasi: "B", biayaSemester: 1300000 },

        // FKIP
        { nama: "Pendidikan Bahasa Indonesia", fakultas: "FKIP", jenjang: "S1", akreditasi: "A", biayaSemester: 1300000 },
        { nama: "Pendidikan Bahasa Inggris", fakultas: "FKIP", jenjang: "S1", akreditasi: "A", biayaSemester: 1300000 },
        { nama: "Pendidikan Matematika", fakultas: "FKIP", jenjang: "S1", akreditasi: "A", biayaSemester: 1300000 },
        { nama: "Pendidikan Biologi", fakultas: "FKIP", jenjang: "S1", akreditasi: "B", biayaSemester: 1300000 },
        { nama: "Pendidikan Fisika", fakultas: "FKIP", jenjang: "S1", akreditasi: "B", biayaSemester: 1300000 },
        { nama: "Pendidikan Kimia", fakultas: "FKIP", jenjang: "S1", akreditasi: "B", biayaSemester: 1300000 },
        {
            nama: "Pendidikan Guru Sekolah Dasar (PGSD)",
            fakultas: "FKIP",
            jenjang: "S1",
            akreditasi: "A",
            biayaSemester: 1300000,
        },
        { nama: "Pendidikan Guru PAUD", fakultas: "FKIP", jenjang: "S1", akreditasi: "B", biayaSemester: 1300000 },

        // FMIPA
        { nama: "Matematika", fakultas: "FMIPA", jenjang: "S1", akreditasi: "A", biayaSemester: 1400000 },
        { nama: "Statistika", fakultas: "FMIPA", jenjang: "S1", akreditasi: "A", biayaSemester: 1400000 },
        { nama: "Biologi", fakultas: "FMIPA", jenjang: "S1", akreditasi: "B", biayaSemester: 1400000 },
        { nama: "Teknologi Pangan", fakultas: "FMIPA", jenjang: "S1", akreditasi: "B", biayaSemester: 1500000 },
        { nama: "Perencanaan Wilayah dan Kota", fakultas: "FMIPA", jenjang: "S1", akreditasi: "B", biayaSemester: 1500000 },
        { nama: "Sistem Informasi", fakultas: "FMIPA", jenjang: "S1", akreditasi: "B", biayaSemester: 1600000 },

        // FE
        { nama: "Manajemen", fakultas: "FE", jenjang: "S1", akreditasi: "A", biayaSemester: 1400000 },
        { nama: "Akuntansi", fakultas: "FE", jenjang: "S1", akreditasi: "A", biayaSemester: 1400000 },
        { nama: "Ekonomi Pembangunan", fakultas: "FE", jenjang: "S1", akreditasi: "A", biayaSemester: 1300000 },
        { nama: "Ekonomi Syariah", fakultas: "FE", jenjang: "S1", akreditasi: "B", biayaSemester: 1300000 },
        { nama: "Pariwisata", fakultas: "FE", jenjang: "S1", akreditasi: "B", biayaSemester: 1400000 },

        // FHISIP
        { nama: "Ilmu Hukum", fakultas: "FHISIP", jenjang: "S1", akreditasi: "B", biayaSemester: 1500000 },
        { nama: "Ilmu Administrasi Publik", fakultas: "FHISIP", jenjang: "S1", akreditasi: "B", biayaSemester: 1300000 },
        { nama: "Ilmu Pemerintahan", fakultas: "FHISIP", jenjang: "S1", akreditasi: "B", biayaSemester: 1300000 },
    ]

    for (const prodi of programStudiList) {
        const created = await prisma.programStudi.create({
            data: prodi,
        })
        console.log(`✅ Created program studi: ${created.nama}`)
    }

    console.log("✅ Database seeding completed!")
    console.log(`📊 Created ${fakultasList.length} fakultas`)
    console.log(`📊 Created ${programStudiList.length} program studi`)
}

main()
    .catch((e) => {
        console.error("❌ Error during seeding:", e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })

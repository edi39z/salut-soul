import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
    console.log("🌱 Starting database seeding...")

    try {
        // Test database connection first
        await prisma.$connect()
        console.log("✅ Database connection successful")

        // Clear existing data (only if tables exist)
        console.log("🧹 Cleaning existing data...")
        try {
            await prisma.pendaftaran.deleteMany()
            await prisma.kontakPesan.deleteMany()
            await prisma.programStudi.deleteMany()
            await prisma.fakultas.deleteMany()
            console.log("✅ Existing data cleaned")
        } catch (error) {
            console.log("ℹ️  No existing data to clean (tables might be empty)")
            console.error(error) // Tambahkan ini untuk menggunakan variabel `error`
        }


        // Seed fakultas
        console.log("📚 Seeding fakultas...")
        const fakultasData = await prisma.fakultas.createMany({
            data: [
                {
                    id: "f1",
                    nama: "FISIP",
                    namaLengkap: "Fakultas Ilmu Sosial dan Ilmu Politik",
                    deskripsi:
                        "Fakultas yang mengembangkan ilmu sosial dan politik untuk membangun masyarakat yang demokratis dan berkeadilan.",
                    akreditasi: "A",
                    isActive: true,
                },
                {
                    id: "f2",
                    nama: "FKIP",
                    namaLengkap: "Fakultas Keguruan dan Ilmu Pendidikan",
                    deskripsi: "Fakultas yang mencetak tenaga pendidik profesional untuk berbagai jenjang pendidikan.",
                    akreditasi: "A",
                    isActive: true,
                },
                {
                    id: "f3",
                    nama: "FMIPA",
                    namaLengkap: "Fakultas Matematika dan Ilmu Pengetahuan Alam",
                    deskripsi: "Fakultas yang mengembangkan ilmu pengetahuan alam dan matematika untuk kemajuan teknologi.",
                    akreditasi: "A",
                    isActive: true,
                },
                {
                    id: "f4",
                    nama: "FE",
                    namaLengkap: "Fakultas Ekonomi",
                    deskripsi: "Fakultas yang mengembangkan ilmu ekonomi dan bisnis untuk pembangunan ekonomi nasional.",
                    akreditasi: "A",
                    isActive: true,
                },
                {
                    id: "f5",
                    nama: "FHISIP",
                    namaLengkap: "Fakultas Hukum, Ilmu Sosial dan Ilmu Politik",
                    deskripsi: "Fakultas yang mengintegrasikan ilmu hukum dengan ilmu sosial politik.",
                    akreditasi: "B",
                    isActive: true,
                },
            ],
        })
        console.log(`✅ Created ${fakultasData.count} fakultas`)

        // Seed program studi
        console.log("🎓 Seeding program studi...")
        const programStudiData = await prisma.programStudi.createMany({
            data: [
                // FISIP Programs
                {
                    id: "p1",
                    nama: "Administrasi Negara",
                    fakultas: "FISIP",
                    jenjang: "S1",
                    akreditasi: "A",
                    biayaSemester: 1300000,
                    deskripsi: "Program studi yang mempelajari administrasi pemerintahan dan pelayanan publik.",
                    isActive: true,
                },
                {
                    id: "p2",
                    nama: "Administrasi Niaga",
                    fakultas: "FISIP",
                    jenjang: "S1",
                    akreditasi: "A",
                    biayaSemester: 1300000,
                    deskripsi: "Program studi yang fokus pada administrasi bisnis dan manajemen perusahaan.",
                    isActive: true,
                },
                {
                    id: "p3",
                    nama: "Ilmu Komunikasi",
                    fakultas: "FISIP",
                    jenjang: "S1",
                    akreditasi: "B",
                    biayaSemester: 1400000,
                    deskripsi: "Program studi yang mempelajari teori dan praktik komunikasi massa dan interpersonal.",
                    isActive: true,
                },
                {
                    id: "p4",
                    nama: "Ilmu Perpustakaan",
                    fakultas: "FISIP",
                    jenjang: "S1",
                    akreditasi: "B",
                    biayaSemester: 1300000,
                    deskripsi: "Program studi yang fokus pada manajemen informasi dan perpustakaan.",
                    isActive: true,
                },
                {
                    id: "p5",
                    nama: "Sosiologi",
                    fakultas: "FISIP",
                    jenjang: "S1",
                    akreditasi: "B",
                    biayaSemester: 1300000,
                    deskripsi: "Program studi yang mempelajari masyarakat dan fenomena sosial.",
                    isActive: true,
                },
                {
                    id: "p6",
                    nama: "Sastra Inggris",
                    fakultas: "FISIP",
                    jenjang: "S1",
                    akreditasi: "B",
                    biayaSemester: 1300000,
                    deskripsi: "Program studi yang mempelajari bahasa, sastra, dan budaya Inggris.",
                    isActive: true,
                },

                // FKIP Programs
                {
                    id: "p7",
                    nama: "Pendidikan Bahasa Indonesia",
                    fakultas: "FKIP",
                    jenjang: "S1",
                    akreditasi: "A",
                    biayaSemester: 1300000,
                    deskripsi: "Program studi untuk mencetak guru bahasa Indonesia yang profesional.",
                    isActive: true,
                },
                {
                    id: "p8",
                    nama: "Pendidikan Bahasa Inggris",
                    fakultas: "FKIP",
                    jenjang: "S1",
                    akreditasi: "A",
                    biayaSemester: 1300000,
                    deskripsi: "Program studi untuk mencetak guru bahasa Inggris yang kompeten.",
                    isActive: true,
                },
                {
                    id: "p9",
                    nama: "Pendidikan Matematika",
                    fakultas: "FKIP",
                    jenjang: "S1",
                    akreditasi: "A",
                    biayaSemester: 1300000,
                    deskripsi: "Program studi untuk mencetak guru matematika yang berkualitas.",
                    isActive: true,
                },
                {
                    id: "p10",
                    nama: "Pendidikan Biologi",
                    fakultas: "FKIP",
                    jenjang: "S1",
                    akreditasi: "B",
                    biayaSemester: 1300000,
                    deskripsi: "Program studi untuk mencetak guru biologi yang profesional.",
                    isActive: true,
                },
                {
                    id: "p11",
                    nama: "Pendidikan Fisika",
                    fakultas: "FKIP",
                    jenjang: "S1",
                    akreditasi: "B",
                    biayaSemester: 1300000,
                    deskripsi: "Program studi untuk mencetak guru fisika yang kompeten.",
                    isActive: true,
                },
                {
                    id: "p12",
                    nama: "Pendidikan Kimia",
                    fakultas: "FKIP",
                    jenjang: "S1",
                    akreditasi: "B",
                    biayaSemester: 1300000,
                    deskripsi: "Program studi untuk mencetak guru kimia yang berkualitas.",
                    isActive: true,
                },
                {
                    id: "p13",
                    nama: "Pendidikan Guru Sekolah Dasar (PGSD)",
                    fakultas: "FKIP",
                    jenjang: "S1",
                    akreditasi: "A",
                    biayaSemester: 1300000,
                    deskripsi: "Program studi untuk mencetak guru sekolah dasar yang profesional.",
                    isActive: true,
                },
                {
                    id: "p14",
                    nama: "Pendidikan Guru PAUD",
                    fakultas: "FKIP",
                    jenjang: "S1",
                    akreditasi: "B",
                    biayaSemester: 1300000,
                    deskripsi: "Program studi untuk mencetak guru pendidikan anak usia dini.",
                    isActive: true,
                },

                // FMIPA Programs
                {
                    id: "p15",
                    nama: "Matematika",
                    fakultas: "FMIPA",
                    jenjang: "S1",
                    akreditasi: "A",
                    biayaSemester: 1400000,
                    deskripsi: "Program studi yang mempelajari matematika murni dan terapan.",
                    isActive: true,
                },
                {
                    id: "p16",
                    nama: "Statistika",
                    fakultas: "FMIPA",
                    jenjang: "S1",
                    akreditasi: "A",
                    biayaSemester: 1400000,
                    deskripsi: "Program studi yang fokus pada analisis data dan statistik.",
                    isActive: true,
                },
                {
                    id: "p17",
                    nama: "Biologi",
                    fakultas: "FMIPA",
                    jenjang: "S1",
                    akreditasi: "B",
                    biayaSemester: 1400000,
                    deskripsi: "Program studi yang mempelajari ilmu kehidupan dan organisme.",
                    isActive: true,
                },
                {
                    id: "p18",
                    nama: "Teknologi Pangan",
                    fakultas: "FMIPA",
                    jenjang: "S1",
                    akreditasi: "B",
                    biayaSemester: 1500000,
                    deskripsi: "Program studi yang fokus pada pengolahan dan keamanan pangan.",
                    isActive: true,
                },
                {
                    id: "p19",
                    nama: "Perencanaan Wilayah dan Kota",
                    fakultas: "FMIPA",
                    jenjang: "S1",
                    akreditasi: "B",
                    biayaSemester: 1500000,
                    deskripsi: "Program studi yang mempelajari perencanaan tata ruang dan pembangunan.",
                    isActive: true,
                },
                {
                    id: "p20",
                    nama: "Sistem Informasi",
                    fakultas: "FMIPA",
                    jenjang: "S1",
                    akreditasi: "B",
                    biayaSemester: 1600000,
                    deskripsi: "Program studi yang fokus pada pengembangan sistem informasi.",
                    isActive: true,
                },

                // FE Programs
                {
                    id: "p21",
                    nama: "Manajemen",
                    fakultas: "FE",
                    jenjang: "S1",
                    akreditasi: "A",
                    biayaSemester: 1400000,
                    deskripsi: "Program studi yang mempelajari manajemen bisnis dan organisasi.",
                    isActive: true,
                },
                {
                    id: "p22",
                    nama: "Akuntansi",
                    fakultas: "FE",
                    jenjang: "S1",
                    akreditasi: "A",
                    biayaSemester: 1400000,
                    deskripsi: "Program studi yang fokus pada akuntansi dan keuangan.",
                    isActive: true,
                },
                {
                    id: "p23",
                    nama: "Ekonomi Pembangunan",
                    fakultas: "FE",
                    jenjang: "S1",
                    akreditasi: "A",
                    biayaSemester: 1300000,
                    deskripsi: "Program studi yang mempelajari ekonomi makro dan pembangunan.",
                    isActive: true,
                },
                {
                    id: "p24",
                    nama: "Ekonomi Syariah",
                    fakultas: "FE",
                    jenjang: "S1",
                    akreditasi: "B",
                    biayaSemester: 1300000,
                    deskripsi: "Program studi yang fokus pada ekonomi berbasis syariah Islam.",
                    isActive: true,
                },
                {
                    id: "p25",
                    nama: "Pariwisata",
                    fakultas: "FE",
                    jenjang: "S1",
                    akreditasi: "B",
                    biayaSemester: 1400000,
                    deskripsi: "Program studi yang mempelajari industri pariwisata dan perhotelan.",
                    isActive: true,
                },

                // FHISIP Programs
                {
                    id: "p26",
                    nama: "Ilmu Hukum",
                    fakultas: "FHISIP",
                    jenjang: "S1",
                    akreditasi: "B",
                    biayaSemester: 1500000,
                    deskripsi: "Program studi yang mempelajari hukum dan sistem peradilan.",
                    isActive: true,
                },
                {
                    id: "p27",
                    nama: "Ilmu Administrasi Publik",
                    fakultas: "FHISIP",
                    jenjang: "S1",
                    akreditasi: "B",
                    biayaSemester: 1300000,
                    deskripsi: "Program studi yang fokus pada administrasi pemerintahan.",
                    isActive: true,
                },
                {
                    id: "p28",
                    nama: "Ilmu Pemerintahan",
                    fakultas: "FHISIP",
                    jenjang: "S1",
                    akreditasi: "B",
                    biayaSemester: 1300000,
                    deskripsi: "Program studi yang mempelajari sistem pemerintahan dan politik.",
                    isActive: true,
                },
            ],
        })
        console.log(`✅ Created ${programStudiData.count} program studi`)

        // Seed sample contact messages
        console.log("📧 Seeding sample contact messages...")
        const kontakData = await prisma.kontakPesan.createMany({
            data: [
                {
                    id: "msg1",
                    name: "Ahmad Wijaya",
                    email: "ahmad.wijaya@email.com",
                    phone: "081234567890",
                    message: "Saya ingin mengetahui lebih lanjut tentang program studi Manajemen di UT.",
                    status: "unread",
                },
                {
                    id: "msg2",
                    name: "Siti Nurhaliza",
                    email: "siti.nurhaliza@email.com",
                    phone: "081234567891",
                    message: "Bagaimana cara mendaftar untuk program PGSD? Apakah ada persyaratan khusus?",
                    status: "read",
                },
                {
                    id: "msg3",
                    name: "Budi Santoso",
                    email: "budi.santoso@email.com",
                    phone: "081234567892",
                    message: "Saya tertarik dengan program Sistem Informasi. Mohon informasi biaya dan jadwal kuliah.",
                    status: "replied",
                },
            ],
        })
        console.log(`✅ Created ${kontakData.count} contact messages`)

        // Seed sample registrations
        console.log("👥 Seeding sample registrations...")
        const pendaftaranData = await prisma.pendaftaran.createMany({
            data: [
                {
                    id: "reg1",
                    namaLengkap: "Andi Pratama",
                    nik: "3201234567890123",
                    nisn: "1234567890",
                    noHp: "081234567893",
                    email: "andi.pratama@email.com",
                    tanggalLahir: new Date("1995-05-15"),
                    alamat: "Jl. Merdeka No. 123, Jakarta Pusat, DKI Jakarta 10110",
                    fakultas: "FE",
                    programStudi: "Manajemen",
                    status: "pending",
                },
                {
                    id: "reg2",
                    namaLengkap: "Maya Sari",
                    nik: "3301234567890124",
                    nisn: "1234567891",
                    noHp: "081234567894",
                    email: "maya.sari@email.com",
                    tanggalLahir: new Date("1992-08-20"),
                    alamat: "Jl. Sudirman No. 456, Bandung, Jawa Barat 40123",
                    fakultas: "FKIP",
                    programStudi: "Pendidikan Bahasa Indonesia",
                    status: "approved",
                },
                {
                    id: "reg3",
                    namaLengkap: "Rizki Firmansyah",
                    nik: "3501234567890125",
                    nisn: "1234567892",
                    noHp: "081234567895",
                    email: "rizki.firmansyah@email.com",
                    tanggalLahir: new Date("1990-12-10"),
                    alamat: "Jl. Diponegoro No. 789, Surabaya, Jawa Timur 60123",
                    fakultas: "FMIPA",
                    programStudi: "Sistem Informasi",
                    status: "pending",
                },
            ],
        })
        console.log(`✅ Created ${pendaftaranData.count} registrations`)

        console.log("\n🎉 Database seeding completed successfully!")
        console.log("📊 Summary:")
        console.log(`   - ${await prisma.fakultas.count()} fakultas created`)
        console.log(`   - ${await prisma.programStudi.count()} program studi created`)
        console.log(`   - ${await prisma.kontakPesan.count()} contact messages created`)
        console.log(`   - ${await prisma.pendaftaran.count()} registrations created`)
    } catch (error) {
        console.error("❌ Error during seeding:", error)
        throw error
    }
}

main()
    .then(async () => {
        await prisma.$disconnect()
        console.log("✅ Database connection closed")
    })
    .catch(async (e) => {
        console.error("❌ Fatal error:", e)
        await prisma.$disconnect()
        process.exit(1)
    })

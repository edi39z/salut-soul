import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
    console.log("🌱 Starting database seeding...")


    // Seed Fakultas
    console.log("🏫 Seeding Fakultas...")
    const fakultasList = [
        {
            nama: "FHISP",
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
            nama: "FST",
            namaLengkap: "Fakultas Matematika dan Ilmu Pengetahuan Alam",
            deskripsi: "Fakultas yang mengembangkan ilmu pengetahuan alam dan matematika untuk kemajuan teknologi.",
            akreditasi: "A",
        },
        {
            nama: "FEB",
            namaLengkap: "Fakultas Ekonomi Bisnis",
            deskripsi: "Fakultas yang mengembangkan ilmu ekonomi dan bisnis untuk pembangunan ekonomi nasional.",
            akreditasi: "A",
        },
        {
            nama: "SPs",
            namaLengkap: "Sekolah Pascasarjana ",
            deskripsi:
                "Unit penyelenggara program Magister (S2) dan Doktor (S3) Universitas Terbuka dengan sistem pembelajaran jarak jauh yang fleksibel dan berkualitas.",
            akreditasi: "A",
        },

    ]

    for (const fakultas of fakultasList) {
        await prisma.fakultas.create({
            data: fakultas,
        })
    }

    // Seed Program Studi
    console.log("📚 Seeding Program Studi...")
    const programStudiList = [
        // Isi seperti sebelumnya, dipersingkat di sini agar tidak terlalu panjang
        { nama: "Kearsipan", fakultas: "FHISP", jenjang: "D4", akreditasi: "B", biayaSemester: 1300000 },
        { nama: "Perpajakan", fakultas: "FHISP", jenjang: "D3", akreditasi: "B", biayaSemester: 1300000 },
        { nama: "Ilmu Administrasi Negara", fakultas: "FHISP", jenjang: "S1", akreditasi: "A", biayaSemester: 1300000 },
        { nama: "Ilmu Administrasi Bisnis", fakultas: "FHISP", jenjang: "S1", akreditasi: "A", biayaSemester: 1300000 },
        { nama: "Ilmu Komunikasi", fakultas: "FHISP", jenjang: "S1", akreditasi: "B", biayaSemester: 1400000 },
        { nama: "Ilmu Perpustakaan", fakultas: "FHISP", jenjang: "S1", akreditasi: "B", biayaSemester: 1300000 },
        { nama: "Sosiologi", fakultas: "FHISP", jenjang: "S1", akreditasi: "A", biayaSemester: 1300000 },
        { nama: "Sastra Inggris", fakultas: "FHISP", jenjang: "S1", akreditasi: "B", biayaSemester: 1300000 },
        { nama: "Ilmu Hukum", fakultas: "FHISP", jenjang: "S1", akreditasi: "B", biayaSemester: 1300000 },
        { nama: "Ilmu Pemerintahan", fakultas: "FHISP", jenjang: "S1", akreditasi: "B", biayaSemester: 1300000 },
        { nama: "Perpajakan", fakultas: "FHISP", jenjang: "S1", akreditasi: "-", biayaSemester: 1300000 },
        { nama: "Pendidikan Bahasa Indonesia", fakultas: "FKIP", jenjang: "S1", akreditasi: "A", biayaSemester: 1300000 },
        { nama: "Pendidikan Pancasila dan Kewarganegaraan   ", fakultas: "FKIP", jenjang: "S1", akreditasi: "B", biayaSemester: 1300000 },
        { nama: "Pendidikan Bahasa Inggris", fakultas: "FKIP", jenjang: "S1", akreditasi: "B", biayaSemester: 1300000 },
        { nama: "Pendidikan Matematika", fakultas: "FKIP", jenjang: "S1", akreditasi: "A", biayaSemester: 1300000 },
        { nama: "Pendidikan Biologi", fakultas: "FKIP", jenjang: "S1", akreditasi: "B", biayaSemester: 1300000 },
        { nama: "Pendidikan Fisika", fakultas: "FKIP", jenjang: "S1", akreditasi: "B", biayaSemester: 1300000 },
        { nama: "Pendidikan Kimia", fakultas: "FKIP", jenjang: "S1", akreditasi: "B", biayaSemester: 1300000 },
        { nama: "Pendidikan Guru Sekolah Dasar (PGSD)", fakultas: "FKIP", jenjang: "S1", akreditasi: "A", biayaSemester: 1300000 },
        { nama: "Pendidikan Guru Pendidikan Anak Usia Dini", fakultas: "FKIP", jenjang: "S1", akreditasi: "A", biayaSemester: 1300000 },
        { nama: "Pendidikan Bahasa dan Sastra Indonesia", fakultas: "FKIP", jenjang: "S1", akreditasi: "B", biayaSemester: 1300000 },
        { nama: "Pendidikan Ekonomi", fakultas: "FKIP", jenjang: "S1", akreditasi: "B", biayaSemester: 1300000 },
        { nama: "Teknologi Pendidikan", fakultas: "FKIP", jenjang: "S1", akreditasi: "B", biayaSemester: 1300000 },
        { nama: "Pendidikan Agama Islam", fakultas: "FKIP", jenjang: "S1", akreditasi: "B", biayaSemester: 1300000 },
        { nama: "Pendidikan Profesi Guru", fakultas: "FKIP", jenjang: "S1", akreditasi: "A", biayaSemester: 1300000 },
        { nama: "Matematika", fakultas: "FST", jenjang: "S1", akreditasi: "B", biayaSemester: 1400000 },
        { nama: "Statistika", fakultas: "FST", jenjang: "S1", akreditasi: "B", biayaSemester: 1400000 },
        { nama: "Biologi", fakultas: "FST", jenjang: "S1", akreditasi: "B", biayaSemester: 1400000 },
        { nama: "Teknologi Pangan", fakultas: "FST", jenjang: "S1", akreditasi: "B", biayaSemester: 1500000 },
        { nama: "Perencanaan Wilayah dan Kota", fakultas: "FST", jenjang: "S1", akreditasi: "B", biayaSemester: 1500000 },
        { nama: "Sistem Informasi", fakultas: "FST", jenjang: "S1", akreditasi: "B", biayaSemester: 1600000 },
        { nama: "Agribisnis", fakultas: "FST", jenjang: "S1", akreditasi: "B", biayaSemester: 1600000 },
        { nama: "Sains Data", fakultas: "FST", jenjang: "S1", akreditasi: "B", biayaSemester: 1600000 },
        { nama: "Manajemen", fakultas: "FEB", jenjang: "S1", akreditasi: "A", biayaSemester: 1400000 },
        { nama: "Akuntansi", fakultas: "FEB", jenjang: "S1", akreditasi: "A", biayaSemester: 1400000 },
        { nama: "Akuntansi Keuangan Publik", fakultas: "FEB", jenjang: "S1", akreditasi: "A", biayaSemester: 1400000 },
        { nama: "Ekonomi Pembangunan", fakultas: "FEB", jenjang: "S1", akreditasi: "A", biayaSemester: 1300000 },
        { nama: "Ekonomi Syariah", fakultas: "FEB", jenjang: "S1", akreditasi: "A", biayaSemester: 1300000 },
        { nama: "Kewirausahaan", fakultas: "FEB", jenjang: "S1", akreditasi: "B", biayaSemester: 1300000 },
        { nama: "PJJ Pariwisata", fakultas: "FEB", jenjang: "S1", akreditasi: "B", biayaSemester: 1400000 },
        { nama: "Hukum", fakultas: "SPs", jenjang: "S2", akreditasi: "B", biayaSemester: 1500000 },
        { nama: "Manajemen", fakultas: "SPs", jenjang: "S2", akreditasi: "A", biayaSemester: 1300000 },
        { nama: "Pendidikan Bahasa Inggris", fakultas: "SPs", jenjang: "S2", akreditasi: "A", biayaSemester: 1300000 },
        { nama: "Pendidikan Matematika", fakultas: "SPs", jenjang: "S2", akreditasi: "A", biayaSemester: 1300000 },
        { nama: "Pendidikan Dasar", fakultas: "SPs", jenjang: "S2", akreditasi: "A", biayaSemester: 1300000 },
        { nama: "Ilmu Administrasi Publik", fakultas: "SPs", jenjang: "S2", akreditasi: "B", biayaSemester: 1300000 },
        { nama: "Studi Lingkungan", fakultas: "SPs", jenjang: "S2", akreditasi: "B", biayaSemester: 1300000 },
        { nama: "Pendidikan Anak Usia Dini", fakultas: "SPs", jenjang: "S2", akreditasi: "B", biayaSemester: 1300000 },
        { nama: "Manajemen Perikanan", fakultas: "SPs", jenjang: "S2", akreditasi: "B", biayaSemester: 1300000 },
        { nama: "Ilmu Manajemen", fakultas: "SPs", jenjang: "S3", akreditasi: "B", biayaSemester: 1300000 },
        { nama: "Ilmu Administrasi Publik", fakultas: "SPs", jenjang: "S3", akreditasi: "B", biayaSemester: 1300000 },

    ]

    for (const prodi of programStudiList) {
        await prisma.programStudi.create({
            data: prodi,
        })
    }

    // Seed Brosur
    console.log("📄 Seeding Brosur...")
    const brosurList = [
        {
            imageUrl: "https://res.cloudinary.com/dqolkqzx8/image/upload/v1720159234/brosur-fkip-2024.jpg",
            linkUrl: "https://www.ut.ac.id/sites/all/files/halo-ut/brosur/Brosur-FKIP-2024.pdf",
            aktif: true,
        }

    ]

    for (const brosur of brosurList) {
        await prisma.brosur.create({
            data: brosur,
        })
    }

    // Seed Aktivitas
    console.log("🎉 Seeding Aktivitas...")
    const aktivitasList = [
        {
            judul: "Webinar Nasional: Inovasi Pembelajaran di Era Digital",
            deskripsi: "Bergabunglah dalam webinar nasional yang membahas berbagai inovasi dalam metode pembelajaran di era digital. Terbuka untuk umum dan gratis!",
            gambar: "https://res.cloudinary.com/dqolkqzx8/image/upload/v1720159234/aktivitas-webinar.jpg",
            tanggal: new Date("2025-08-15T10:00:00Z"),
        },
        {
            judul: "Lomba Menulis Esai Kemerdekaan",
            deskripsi: "Rayakan HUT RI dengan mengikuti lomba menulis esai bertema 'Peran Generasi Muda dalam Membangun Bangsa'. Menangkan hadiah total jutaan rupiah!",
            gambar: "https://res.cloudinary.com/dqolkqzx8/image/upload/v1720159234/aktivitas-lomba-esai.jpg",
            tanggal: new Date("2025-08-10T23:59:00Z"),
        },
        {
            judul: "Pengabdian Masyarakat: Desa Binaan UT",
            deskripsi: "Kegiatan pengabdian masyarakat di desa binaan Universitas Terbuka. Mari berkontribusi untuk kemajuan pendidikan dan ekonomi desa.",
            gambar: "https://res.cloudinary.com/dqolkqzx8/image/upload/v1720159234/aktivitas-pengmas.jpg",
            tanggal: new Date("2025-09-05T08:00:00Z"),
        },
    ]

    for (const aktivitas of aktivitasList) {
        await prisma.aktivitas.create({
            data: aktivitas,
        })
    }

    console.log("✅ Database seeding completed successfully!")
    console.log(`📊 Seeded:`)
    console.log(`   - ${fakultasList.length} Fakultas`)
    console.log(`   - ${programStudiList.length} Program Studi`)
    console.log(`   - ${brosurList.length} Brosur`)
    console.log(`   - ${aktivitasList.length} Aktivitas`)
}

main()
    .catch((e) => {
        console.error("❌ Error during seeding:", e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
    console.log("🌱 Starting database seeding...")

    // Clear existing data
    console.log("🧹 Cleaning existing data...")
    await prisma.berita.deleteMany()
    await prisma.brosur.deleteMany()
    await prisma.fakultas.deleteMany()
    await prisma.programStudi.deleteMany()

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

    // Seed Berita
    console.log("📰 Seeding Berita...")
    const beritaList = [
        {
            judul: "Pendaftaran Mahasiswa Baru Semester 2025.1 Telah Dibuka",
            slug: "pendaftaran-mahasiswa-baru-semester-2025-1",
            konten:
                "Universitas Terbuka Medan membuka pendaftaran mahasiswa baru untuk semester 2025.1. Pendaftaran dapat dilakukan secara online melalui website resmi UT. Tersedia berbagai program studi dari jenjang D3 hingga S2 dengan sistem pembelajaran fleksibel yang memungkinkan mahasiswa belajar kapan saja dan di mana saja. Biaya pendidikan terjangkau dengan fasilitas pembelajaran online yang lengkap dan modern.",
            gambar: "https://res.cloudinary.com/dqolkqzx8/image/upload/v1720159234/berita-pendaftaran.jpg",
            linkUrl: "https://www.ut.ac.id/pendaftaran-mahasiswa-baru",
            tanggal: new Date("2024-12-15"),
            aktif: true,
        },
        {
            judul: "Wisuda Ke-45 UT Medan Luluskan 1.200 Mahasiswa",
            slug: "wisuda-ke-45-ut-medan-luluskan-1200-mahasiswa",
            konten:
                "Universitas Terbuka Medan menggelar wisuda ke-45 yang meluluskan sebanyak 1.200 mahasiswa dari berbagai program studi. Acara wisuda dilaksanakan secara hybrid dengan tetap menerapkan protokol kesehatan. Para lulusan berasal dari berbagai daerah di Sumatera Utara dan sekitarnya. Rektor UT menyampaikan apresiasi kepada para lulusan yang telah berhasil menyelesaikan studi dengan baik.",
            gambar: "https://res.cloudinary.com/dqolkqzx8/image/upload/v1720159234/berita-wisuda.jpg",
            linkUrl: "https://medan.ut.ac.id/wisuda-ke-45-ut-medan",
            tanggal: new Date("2024-12-10"),
            aktif: true,
        },
        {
            judul: "Kerjasama UT Medan dengan Pemkot Medan dalam Pengembangan SDM",
            slug: "kerjasama-ut-medan-dengan-pemkot-medan",
            konten:
                "UT Medan menjalin kerjasama strategis dengan Pemerintah Kota Medan dalam pengembangan sumber daya manusia. Kerjasama ini meliputi program peningkatan kompetensi ASN, program beasiswa untuk masyarakat kurang mampu, dan pengembangan program studi yang sesuai dengan kebutuhan daerah. Walikota Medan menyambut baik kerjasama ini sebagai upaya meningkatkan kualitas SDM di Kota Medan.",
            gambar: "https://res.cloudinary.com/dqolkqzx8/image/upload/v1720159234/berita-kerjasama.jpg",
            linkUrl: "https://medan.ut.ac.id/kerjasama-pemkot-medan",
            tanggal: new Date("2024-12-05"),
            aktif: true,
        },
        {
            judul: "Seminar Nasional Pendidikan Digital Era 5.0",
            slug: "seminar-nasional-pendidikan-digital-era-5-0",
            konten:
                "UT Medan menggelar seminar nasional bertema 'Pendidikan Digital di Era 5.0: Tantangan dan Peluang'. Seminar dihadiri oleh akademisi, praktisi pendidikan, dan mahasiswa dari berbagai universitas. Narasumber utama adalah pakar pendidikan digital dari dalam dan luar negeri. Seminar membahas transformasi pendidikan di era digital dan strategi adaptasi institusi pendidikan tinggi.",
            gambar: "https://res.cloudinary.com/dqolkqzx8/image/upload/v1720159234/berita-seminar.jpg",
            linkUrl: "https://medan.ut.ac.id/seminar-pendidikan-digital",
            tanggal: new Date("2024-11-28"),
            aktif: true,
        },
        {
            judul: "Program Beasiswa Prestasi UT Medan 2025",
            slug: "program-beasiswa-prestasi-ut-medan-2025",
            konten:
                "UT Medan meluncurkan program beasiswa prestasi untuk mahasiswa berprestasi tahun 2025. Beasiswa diberikan kepada mahasiswa yang memiliki IPK minimal 3.5 dan aktif dalam kegiatan kemahasiswaan. Total beasiswa yang disediakan mencapai 500 juta rupiah untuk 100 mahasiswa penerima. Pendaftaran beasiswa dibuka mulai Januari 2025 dengan berbagai kategori beasiswa yang tersedia.",
            gambar: "https://res.cloudinary.com/dqolkqzx8/image/upload/v1720159234/berita-beasiswa.jpg",
            linkUrl: "https://medan.ut.ac.id/beasiswa-prestasi-2025",
            tanggal: new Date("2024-11-20"),
            aktif: true,
        },
        {
            judul: "Launching Aplikasi Mobile UT Learning 2.0",
            slug: "launching-aplikasi-mobile-ut-learning-2-0",
            konten:
                "UT Medan meluncurkan aplikasi mobile UT Learning 2.0 yang memberikan kemudahan akses pembelajaran bagi mahasiswa. Aplikasi ini dilengkapi dengan fitur-fitur terbaru seperti video conference, virtual classroom, digital library, dan sistem penilaian online. Mahasiswa dapat mengakses materi kuliah, mengerjakan tugas, dan berkomunikasi dengan dosen melalui satu platform terintegrasi.",
            gambar: "https://res.cloudinary.com/dqolkqzx8/image/upload/v1720159234/berita-aplikasi.jpg",
            linkUrl: "https://medan.ut.ac.id/ut-learning-app",
            tanggal: new Date("2024-11-15"),
            aktif: true,
        },
        {
            judul: "Pelatihan Digital Marketing untuk UMKM Bersama UT Medan",
            slug: "pelatihan-digital-marketing-umkm-ut-medan",
            konten:
                "UT Medan mengadakan program pengabdian masyarakat berupa pelatihan digital marketing untuk pelaku UMKM di Kota Medan. Pelatihan ini bertujuan membantu UMKM meningkatkan penjualan melalui platform digital. Materi pelatihan meliputi strategi media sosial, e-commerce, dan digital branding. Sebanyak 200 pelaku UMKM mengikuti pelatihan yang dilaksanakan selama 3 hari.",
            gambar: "https://res.cloudinary.com/dqolkqzx8/image/upload/v1720159234/berita-umkm.jpg",
            linkUrl: "https://medan.ut.ac.id/pelatihan-digital-marketing-umkm",
            tanggal: new Date("2024-11-10"),
            aktif: true,
        },
    ]

    for (const berita of beritaList) {
        await prisma.berita.create({
            data: berita,
        })
    }

    console.log("✅ Database seeding completed successfully!")
    console.log(`📊 Seeded:`)
    console.log(`   - ${fakultasList.length} Fakultas`)
    console.log(`   - ${programStudiList.length} Program Studi`)
    console.log(`   - ${brosurList.length} Brosur`)
    console.log(`   - ${beritaList.length} Berita`)
}

main()
    .catch((e) => {
        console.error("❌ Error during seeding:", e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })

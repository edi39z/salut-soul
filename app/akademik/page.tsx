"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, DollarSign, FileText, MapPin, Phone, Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const AnimatedSection = motion.section

export default function AkademikPage() {
    const faculties = [
        {
            id: "fisip",
            name: "FISIP",
            fullName: "Fakultas Ilmu Sosial dan Ilmu Politik",
            description:
                "Fakultas yang mengembangkan ilmu sosial dan politik untuk membangun masyarakat yang demokratis dan berkeadilan.",
            accreditation: "A",
            programs: [
                { name: "Administrasi Negara", level: "S1", accreditation: "A" },
                { name: "Administrasi Niaga", level: "S1", accreditation: "A" },
                { name: "Ilmu Komunikasi", level: "S1", accreditation: "B" },
                { name: "Ilmu Perpustakaan", level: "S1", accreditation: "B" },
                { name: "Sosiologi", level: "S1", accreditation: "B" },
                { name: "Sastra Inggris", level: "S1", accreditation: "B" },
            ],
            color: "bg-blue-50 border-blue-200",
        },
        {
            id: "fkip",
            name: "FKIP",
            fullName: "Fakultas Keguruan dan Ilmu Pendidikan",
            description: "Fakultas yang mencetak tenaga pendidik profesional untuk berbagai jenjang pendidikan.",
            accreditation: "A",
            programs: [
                { name: "Pendidikan Bahasa Indonesia", level: "S1", accreditation: "A" },
                { name: "Pendidikan Bahasa Inggris", level: "S1", accreditation: "A" },
                { name: "Pendidikan Matematika", level: "S1", accreditation: "A" },
                { name: "Pendidikan Biologi", level: "S1", accreditation: "B" },
                { name: "Pendidikan Fisika", level: "S1", accreditation: "B" },
                { name: "Pendidikan Kimia", level: "S1", accreditation: "B" },
                { name: "Pendidikan Guru Sekolah Dasar (PGSD)", level: "S1", accreditation: "A" },
                { name: "Pendidikan Guru PAUD", level: "S1", accreditation: "B" },
            ],
            color: "bg-green-50 border-green-200",
        },
        {
            id: "fmipa",
            name: "FMIPA",
            fullName: "Fakultas Matematika dan Ilmu Pengetahuan Alam",
            description: "Fakultas yang mengembangkan ilmu pengetahuan alam dan matematika untuk kemajuan teknologi.",
            accreditation: "A",
            programs: [
                { name: "Matematika", level: "S1", accreditation: "A" },
                { name: "Statistika", level: "S1", accreditation: "A" },
                { name: "Biologi", level: "S1", accreditation: "B" },
                { name: "Teknologi Pangan", level: "S1", accreditation: "B" },
                { name: "Perencanaan Wilayah dan Kota", level: "S1", accreditation: "B" },
                { name: "Sistem Informasi", level: "S1", accreditation: "B" },
            ],
            color: "bg-purple-50 border-purple-200",
        },
        {
            id: "fe",
            name: "FE",
            fullName: "Fakultas Ekonomi",
            description: "Fakultas yang mengembangkan ilmu ekonomi dan bisnis untuk pembangunan ekonomi nasional.",
            accreditation: "A",
            programs: [
                { name: "Manajemen", level: "S1", accreditation: "A" },
                { name: "Akuntansi", level: "S1", accreditation: "A" },
                { name: "Ekonomi Pembangunan", level: "S1", accreditation: "A" },
                { name: "Ekonomi Syariah", level: "S1", accreditation: "B" },
                { name: "Pariwisata", level: "S1", accreditation: "B" },
            ],
            color: "bg-orange-50 border-orange-200",
        },
        {
            id: "fhisip",
            name: "FHISIP",
            fullName: "Fakultas Hukum, Ilmu Sosial dan Ilmu Politik",
            description: "Fakultas yang mengintegrasikan ilmu hukum dengan ilmu sosial politik.",
            accreditation: "B",
            programs: [
                { name: "Ilmu Hukum", level: "S1", accreditation: "B" },
                { name: "Ilmu Administrasi Publik", level: "S1", accreditation: "B" },
                { name: "Ilmu Pemerintahan", level: "S1", accreditation: "B" },
            ],
            color: "bg-red-50 border-red-200",
        },
    ]

    const requirements = [
        "Lulusan SMA/SMK/MA/Paket C atau sederajat untuk jenjang S1",
        "Lulusan D1/D2/D3 atau sederajat untuk jenjang S1 (dengan penyetaraan)",
        "Memiliki Nomor Induk Siswa Nasional (NISN)",
        "Memiliki Kartu Tanda Penduduk (KTP) yang masih berlaku",
        "Memiliki ijazah dan transkrip nilai yang telah dilegalisir",
        "Pas foto terbaru ukuran 3x4 cm (background merah)",
        "Tidak ada batasan usia untuk mendaftar",
        "Mampu mengoperasikan komputer dan internet dasar",
    ]

    const feeStructure = [
        {
            level: "S1",
            registration: "Rp 150.000",
            semester: "Rp 1.300.000 - Rp 1.800.000",
            note: "Tergantung jumlah SKS yang diambil",
        },
        {
            level: "D3",
            registration: "Rp 150.000",
            semester: "Rp 1.000.000 - Rp 1.400.000",
            note: "Tergantung jumlah SKS yang diambil",
        },
        {
            level: "S2",
            registration: "Rp 200.000",
            semester: "Rp 2.000.000 - Rp 2.500.000",
            note: "Tergantung program studi",
        },
    ]

    return (
        <div className="min-h-screen">
            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">S</span>
                            </div>
                            <span className="font-bold text-xl text-gray-900">SALUT Soul</span>
                        </Link>

                        <div className="hidden md:flex items-center space-x-8">
                            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
                                Beranda
                            </Link>
                            <Link href="/tentang" className="text-gray-700 hover:text-blue-600 font-medium">
                                Tentang Kami
                            </Link>
                            <Link href="/akademik" className="text-blue-600 font-medium">
                                Akademik
                            </Link>
                            <Link href="/kontak" className="text-gray-700 hover:text-blue-600 font-medium">
                                Kontak
                            </Link>
                            <Button asChild>
                                <Link href="/pendaftaran">Daftar Sekarang</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Program <span className="text-blue-600">Akademik</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Jelajahi berbagai fakultas dan program studi berkualitas yang tersedia di Universitas Terbuka
                        </p>
                    </div>
                </div>
            </section>

            {/* Faculties Section */}
            <AnimatedSection
                className="py-16 bg-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Fakultas & Program Studi</h2>

                        <Accordion type="single" collapsible className="space-y-4">
                            {faculties.map((faculty) => (
                                <AccordionItem
                                    key={faculty.id}
                                    value={faculty.id}
                                    className={cn("border-2 rounded-lg", faculty.color, "hover:shadow-md transition-shadow duration-200")}
                                >
                                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                                        <div className="flex items-center justify-between w-full">
                                            <div className="flex items-center space-x-4">
                                                <div className="text-left">
                                                    <h3 className="text-2xl font-bold text-gray-900">{faculty.name}</h3>
                                                    <p className="text-gray-700 font-medium">{faculty.fullName}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Badge variant={faculty.accreditation === "A" ? "default" : "secondary"}>
                                                    Akreditasi {faculty.accreditation}
                                                </Badge>
                                                <GraduationCap className="w-6 h-6 text-blue-600" />
                                            </div>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="px-6 pb-6">
                                        <div className="space-y-6">
                                            <p className="text-gray-600 text-lg">{faculty.description}</p>

                                            <div>
                                                <h4 className="font-bold text-lg text-gray-900 mb-4">Program Studi Tersedia:</h4>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    {faculty.programs.map((program, idx) => (
                                                        <Card
                                                            key={idx}
                                                            className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
                                                        >
                                                            <CardContent className="p-4">
                                                                <div className="flex items-center justify-between">
                                                                    <div>
                                                                        <h5 className="font-semibold text-gray-900">{program.name}</h5>
                                                                        <p className="text-sm text-gray-600">Jenjang {program.level}</p>
                                                                    </div>
                                                                    <Badge variant={program.accreditation === "A" ? "default" : "secondary"}>
                                                                        {program.accreditation}
                                                                    </Badge>
                                                                </div>
                                                            </CardContent>
                                                        </Card>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </AnimatedSection>

            {/* Requirements Section */}
            <AnimatedSection
                className="py-16 bg-gray-50"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Persyaratan Pendaftaran</h2>

                        <Card className="border-0 shadow-lg">
                            <CardHeader>
                                <CardTitle className="flex items-center space-x-2">
                                    <FileText className="w-6 h-6 text-blue-600" />
                                    <span>Persyaratan Umum</span>
                                </CardTitle>
                                <CardDescription>
                                    Dokumen dan persyaratan yang harus dipenuhi untuk mendaftar sebagai mahasiswa UT
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {requirements.map((requirement, index) => (
                                        <div key={index} className="flex items-start space-x-3">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                            <p className="text-gray-700">{requirement}</p>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </AnimatedSection>

            {/* Fee Structure Section */}
            <AnimatedSection
                className="py-16 bg-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Struktur Biaya Kuliah</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            {feeStructure.map((fee, index) => (
                                <Card
                                    key={index}
                                    className="border-2 border-blue-200 shadow-sm hover:shadow-md transition-shadow duration-200"
                                >
                                    <CardHeader>
                                        <CardTitle className="flex items-center space-x-2">
                                            <DollarSign className="w-6 h-6 text-blue-600" />
                                            <span>Jenjang {fee.level}</span>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div>
                                            <p className="font-semibold text-gray-900">Biaya Registrasi:</p>
                                            <p className="text-2xl font-bold text-blue-600">{fee.registration}</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">Biaya per Semester:</p>
                                            <p className="text-2xl font-bold text-green-600">{fee.semester}</p>
                                        </div>
                                        <div className="pt-2 border-t">
                                            <p className="text-sm text-gray-600">{fee.note}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <Card className="bg-yellow-50 border-yellow-200">
                            <CardContent className="p-6">
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-white text-sm font-bold">!</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-yellow-800 mb-2">Catatan Penting:</h4>
                                        <ul className="text-yellow-700 space-y-1">
                                            <li>• Biaya dapat berubah sesuai kebijakan UT pusat</li>
                                            <li>• Biaya semester tergantung jumlah SKS yang diambil (minimal 12 SKS)</li>
                                            <li>• Tersedia program beasiswa untuk mahasiswa berprestasi</li>
                                            <li>• Pembayaran dapat dilakukan secara bertahap</li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </AnimatedSection>

            {/* CTA Section */}
            <section className="py-16 bg-blue-600">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Siap Memulai Pendidikan Anda?</h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Pilih program studi yang sesuai dengan minat Anda dan mulai perjalanan pendidikan tinggi bersama UT
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-3">
                            <Link href="/pendaftaran">Daftar Sekarang</Link>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            asChild
                            className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                        >
                            <Link href="/kontak">Konsultasi Gratis</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">S</span>
                                </div>
                                <span className="font-bold text-xl">SALUT Soul</span>
                            </div>
                            <p className="text-gray-400">
                                Sentra Layanan Universitas Terbuka untuk pendidikan tinggi berkualitas dan terjangkau.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-bold text-lg mb-4">Navigasi</h3>
                            <div className="space-y-2">
                                <Link href="/" className="block text-gray-400 hover:text-white">
                                    Beranda
                                </Link>
                                <Link href="/tentang" className="block text-gray-400 hover:text-white">
                                    Tentang Kami
                                </Link>
                                <Link href="/akademik" className="block text-gray-400 hover:text-white">
                                    Akademik
                                </Link>
                                <Link href="/kontak" className="block text-gray-400 hover:text-white">
                                    Kontak
                                </Link>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-bold text-lg mb-4">Kontak</h3>
                            <div className="space-y-2">
                                <div className="flex items-center space-x-2">
                                    <Phone className="w-4 h-4" />
                                    <span className="text-gray-400">+62 812-3456-7890</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Mail className="w-4 h-4" />
                                    <span className="text-gray-400">info@salutsoul.ac.id</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <MapPin className="w-4 h-4" />
                                    <span className="text-gray-400">Jakarta, Indonesia</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-bold text-lg mb-4">Ikuti Kami</h3>
                            <div className="space-y-2">
                                <a href="#" className="block text-gray-400 hover:text-white">
                                    Facebook
                                </a>
                                <a href="#" className="block text-gray-400 hover:text-white">
                                    Instagram
                                </a>
                                <a href="#" className="block text-gray-400 hover:text-white">
                                    YouTube
                                </a>
                                <a href="#" className="block text-gray-400 hover:text-white">
                                    WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                        <p className="text-gray-400">© {new Date().getFullYear()} SALUT Soul. Semua hak cipta dilindungi.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

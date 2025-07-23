"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
    BookOpen,
    Clock,
    DollarSign,
    ArrowRight,
    GraduationCap,
    FileCheck,
    CheckCircle2,
    Bell,
    UserCheck,
    Calendar,
    AlertCircle,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function RegistrationFlowSection() {
    return (
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <Badge className="inline-flex items-center px-4 py-2 bg-[#002F86] text-white text-sm font-medium rounded-full mb-6">
                            <FileCheck className="w-4 h-4 mr-2" />
                            Alur Pendaftaran
                        </Badge>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Langkah Mudah <span className="text-[#002F86]">Menjadi Mahasiswa UT</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Ikuti 5 langkah sederhana untuk memulai perjalanan pendidikan tinggi Anda bersama Universitas Terbuka
                        </p>
                    </motion.div>

                    {/* Timeline Steps */}
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 via-blue-300 to-blue-400 rounded-full hidden lg:block"></div>

                        <div className="space-y-12">
                            {/* Step 1: Pendaftaran Online */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative"
                            >
                                <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                                    <div className="lg:text-right">
                                        <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white overflow-hidden relative">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-2xl"></div>
                                            <CardHeader className="relative z-10">
                                                <div className="flex items-center justify-between mb-4">
                                                    <div className="w-16 h-16 bg-[#002F86] rounded-2xl flex items-center justify-center shadow-lg">
                                                        <GraduationCap className="w-8 h-8 text-white" />
                                                    </div>
                                                    <Badge className="bg-[#002F86] text-white px-3 py-1 rounded-full text-sm font-semibold">
                                                        Langkah 1
                                                    </Badge>
                                                </div>
                                                <CardTitle className="text-2xl font-bold text-[#002F86] mb-2">Pendaftaran Online</CardTitle>
                                                <CardDescription className="text-gray-600 text-base">
                                                    Mulai perjalanan pendidikan Anda dengan mendaftar secara online
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent className="relative z-10 space-y-4">
                                                {[
                                                    { text: "Pilih jalur RPL atau Non-RPL sesuai latar belakang pendidikan" },
                                                    { text: "Isi data pribadi lengkap (NIK, nama, tempat tanggal lahir)" },
                                                    { text: "Unggah dokumen: scan ijazah, KTP, dan berkas lainnya" },
                                                    { text: "Bayar biaya pendaftaran sesuai petunjuk di website" },
                                                ].map((item, idx) => (
                                                    <div key={idx} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-xl">
                                                        <div className="w-6 h-6 bg-[#002F86] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                            <ArrowRight className="w-3 h-3 text-white" />
                                                        </div>
                                                        <span className="text-[#002F86] text-sm leading-relaxed">{item.text}</span>
                                                    </div>
                                                ))}
                                            </CardContent>
                                        </Card>
                                    </div>
                                    <div className="hidden lg:flex justify-center">
                                        <div className="w-12 h-12 bg-[#002F86] rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                                            <span className="text-white font-bold text-lg">1</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Step 2: Validasi Data */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="relative"
                            >
                                <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                                    <div className="hidden lg:flex justify-center">
                                        <div className="w-12 h-12 bg-[#002F86] rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                                            <span className="text-white font-bold text-lg">2</span>
                                        </div>
                                    </div>
                                    <div>
                                        <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white overflow-hidden relative">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-2xl"></div>
                                            <CardHeader className="relative z-10">
                                                <div className="flex items-center justify-between mb-4">
                                                    <div className="w-16 h-16 bg-[#002F86] rounded-2xl flex items-center justify-center shadow-lg">
                                                        <UserCheck className="w-8 h-8 text-white" />
                                                    </div>
                                                    <Badge className="bg-[#002F86] text-white px-3 py-1 rounded-full text-sm font-semibold">
                                                        Langkah 2
                                                    </Badge>
                                                </div>
                                                <CardTitle className="text-2xl font-bold text-[#002F86] mb-2">Validasi Data</CardTitle>
                                                <CardDescription className="text-gray-600 text-base">
                                                    Tim UT akan memverifikasi data dan dokumen yang Anda kirimkan
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent className="relative z-10 space-y-4">
                                                <div className="bg-gray-50 p-4 rounded-xl">
                                                    <div className="flex items-center space-x-3 mb-3">
                                                        <Clock className="w-5 h-5 text-[#002F86]" />
                                                        <span className="font-semibold text-[#002F86]">Waktu Proses: 3x24 Jam</span>
                                                    </div>
                                                    <p className="text-[#002F86] text-sm leading-relaxed">
                                                        Setelah data divalidasi dan dinyatakan valid, Anda akan mendapatkan:
                                                    </p>
                                                </div>
                                                <div className="grid grid-cols-1 gap-3">
                                                    {[{ text: "Email notifikasi konfirmasi" }, { text: "NIM (Nomor Induk Mahasiswa)" }].map(
                                                        (item, idx) => (
                                                            <div key={idx} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                                                                <div className="w-6 h-6 bg-[#002F86] rounded-full flex items-center justify-center flex-shrink-0">
                                                                    <Bell className="w-3 h-3 text-white" />
                                                                </div>
                                                                <span className="text-[#002F86] text-sm">{item.text}</span>
                                                            </div>
                                                        ),
                                                    )}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Step 3: Registrasi Mata Kuliah */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="relative"
                            >
                                <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                                    <div className="lg:text-right">
                                        <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white overflow-hidden relative">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200/30 to-violet-200/30 rounded-full blur-2xl"></div>
                                            <CardHeader className="relative z-10">
                                                <div className="flex items-center justify-between mb-4">
                                                    <div className="w-16 h-16 bg-[#002F86] rounded-2xl flex items-center justify-center shadow-lg">
                                                        <BookOpen className="w-8 h-8 text-white" />
                                                    </div>
                                                    <Badge className="bg-[#002F86] text-white px-3 py-1 rounded-full text-sm font-semibold">
                                                        Langkah 3
                                                    </Badge>
                                                </div>
                                                <CardTitle className="text-2xl font-bold text-[#002F86] mb-2">Registrasi Mata Kuliah</CardTitle>
                                                <CardDescription className="text-gray-600 text-base">
                                                    Pilih mata kuliah yang akan Anda ambil di semester pertama
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent className="relative z-10 space-y-4">
                                                <div className="bg-gray-50 p-4 rounded-xl">
                                                    <div className="flex items-center space-x-2 mb-2">
                                                        <span className="font-semibold text-[#002F86]">Portal:</span>
                                                        <code className="bg-white text-[#002F86] px-2 py-1 rounded text-sm font-medium">
                                                            sia.ut.ac.id
                                                        </code>
                                                    </div>
                                                </div>
                                                {[
                                                    { text: "Pilih mata kuliah melalui SIPAS atau Non-SIPAS" },
                                                    { text: "Bayar biaya registrasi sesuai paket layanan" },
                                                ].map((item, idx) => (
                                                    <div key={idx} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-xl">
                                                        <div className="w-6 h-6 bg-[#002F86] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                            <CheckCircle2 className="w-3 h-3 text-white" />
                                                        </div>
                                                        <span className="text-[#002F86] text-sm leading-relaxed">{item.text}</span>
                                                    </div>
                                                ))}
                                            </CardContent>
                                        </Card>
                                    </div>
                                    <div className="hidden lg:flex justify-center">
                                        <div className="w-12 h-12 bg-[#002F86] rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                                            <span className="text-white font-bold text-lg">3</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Step 4: Pembayaran */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="relative"
                            >
                                <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                                    <div className="hidden lg:flex justify-center">
                                        <div className="w-12 h-12 bg-[#002F86] rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                                            <span className="text-white font-bold text-lg">4</span>
                                        </div>
                                    </div>
                                    <div>
                                        <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white overflow-hidden relative">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-2xl"></div>
                                            <CardHeader className="relative z-10">
                                                <div className="flex items-center justify-between mb-4">
                                                    <div className="w-16 h-16 bg-[#002F86] rounded-2xl flex items-center justify-center shadow-lg">
                                                        <DollarSign className="w-8 h-8 text-white" />
                                                    </div>
                                                    <Badge className="bg-[#002F86] text-white px-3 py-1 rounded-full text-sm font-semibold">
                                                        Langkah 4
                                                    </Badge>
                                                </div>
                                                <CardTitle className="text-2xl font-bold text-[#002F86] mb-2">Pembayaran</CardTitle>
                                                <CardDescription className="text-gray-600 text-base">
                                                    Lakukan pembayaran melalui berbagai channel yang tersedia
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent className="relative z-10 space-y-4">
                                                <div className="bg-gray-50 p-4 rounded-xl">
                                                    <h4 className="font-semibold text-[#002F86] mb-3">Channel Pembayaran:</h4>
                                                    <div className="grid grid-cols-2 gap-2 text-sm">
                                                        <div className="flex items-center space-x-2">
                                                            <div className="w-2 h-2 bg-[#002F86] rounded-full"></div>
                                                            <span className="text-[#002F86]">Bank BRI</span>
                                                        </div>
                                                        <div className="flex items-center space-x-2">
                                                            <div className="w-2 h-2 bg-[#002F86] rounded-full"></div>
                                                            <span className="text-[#002F86]">Bank BTN</span>
                                                        </div>
                                                        <div className="flex items-center space-x-2">
                                                            <div className="w-2 h-2 bg-[#002F86] rounded-full"></div>
                                                            <span className="text-[#002F86]">Bank Mandiri</span>
                                                        </div>
                                                        <div className="flex items-center space-x-2">
                                                            <div className="w-2 h-2 bg-[#002F86] rounded-full"></div>
                                                            <span className="text-[#002F86]">Bank BNI</span>
                                                        </div>
                                                        <div className="flex items-center space-x-2">
                                                            <div className="w-2 h-2 bg-[#002F86] rounded-full"></div>
                                                            <span className="text-[#002F86]">Alfagroup</span>
                                                        </div>
                                                        <div className="flex items-center space-x-2">
                                                            <div className="w-2 h-2 bg-[#002F86] rounded-full"></div>
                                                            <span className="text-[#002F86]">Indomaret</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-xl">
                                                    <div className="flex items-start space-x-2">
                                                        <AlertCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                                                        <p className="text-yellow-800 text-sm">
                                                            Pastikan pembayaran sesuai dengan Lembar Informasi Pembayaran (LIP)
                                                        </p>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Step 5: Aktivasi Tutorial Online */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                                className="relative"
                            >
                                <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                                    <div className="lg:text-right">
                                        <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white overflow-hidden relative">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-rose-200/30 to-pink-200/30 rounded-full blur-2xl"></div>
                                            <CardHeader className="relative z-10">
                                                <div className="flex items-center justify-between mb-4">
                                                    <div className="w-16 h-16 bg-[#002F86] rounded-2xl flex items-center justify-center shadow-lg">
                                                        <Calendar className="w-8 h-8 text-white" />
                                                    </div>
                                                    <Badge className="bg-[#002F86] text-white px-3 py-1 rounded-full text-sm font-semibold">
                                                        Langkah 5
                                                    </Badge>
                                                </div>
                                                <CardTitle className="text-2xl font-bold text-[#002F86] mb-2">
                                                    Aktivasi Tutorial Online
                                                </CardTitle>
                                                <CardDescription className="text-gray-600 text-base">
                                                    Aktifkan akses pembelajaran online untuk memulai perkuliahan
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent className="relative z-10 space-y-4">
                                                <div className="bg-gray-50 p-4 rounded-xl">
                                                    <div className="flex items-center space-x-2 mb-2">
                                                        <span className="font-semibold text-[#002F86]">Portal E-Learning:</span>
                                                    </div>
                                                    <code className="bg-white text-[#002F86] px-2 py-1 rounded text-sm font-medium">
                                                        elearning.ut.ac.id
                                                    </code>
                                                </div>
                                                <div className="bg-gray-50 p-4 rounded-xl">
                                                    <h4 className="font-semibold text-[#002F86] mb-2">Yang Perlu Dilakukan:</h4>
                                                    <div className="space-y-2">
                                                        <div className="flex items-start space-x-3">
                                                            <CheckCircle2 className="w-4 h-4 text-[#002F86] mt-0.5 flex-shrink-0" />
                                                            <span className="text-[#002F86] text-sm">Aktivasi akun Tutorial Online (Tuton)</span>
                                                        </div>
                                                        <div className="flex items-start space-x-3">
                                                            <CheckCircle2 className="w-4 h-4 text-[#002F86] mt-0.5 flex-shrink-0" />
                                                            <span className="text-[#002F86] text-sm">Isi form kesediaan mengikuti Tuton</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                    <div className="hidden lg:flex justify-center">
                                        <div className="w-12 h-12 bg-[#002F86] rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                                            <span className="text-white font-bold text-lg">5</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="text-center mt-16"
                    >
                        <Card className="border-0 shadow-2xl bg-[#002F86] text-white overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-indigo-400/20"></div>
                            <CardContent className="relative z-10 p-12">
                                <h3 className="text-3xl font-bold mb-4">
                                    <span className="text-[#FFD700]">Siap Memulai Perjalanan Pendidikan?</span>
                                </h3>
                                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                                    Ikuti 5 langkah mudah di atas dan bergabunglah dengan ribuan mahasiswa UT lainnya
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button
                                        size="lg"
                                        className="bg-[#FFD700] text-[#002F86] hover:bg-yellow-400 hover:text-[#002F86] text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
                                        asChild
                                    >
                                        <Link href="/pendaftaran">
                                            Mulai Pendaftaran
                                            <ArrowRight className="ml-2 w-5 h-5" />
                                        </Link>
                                    </Button>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-2 border-white text-white hover:bg-white hover:text-[#002F86] text-lg px-8 py-4 rounded-full transition-all duration-300 bg-transparent font-semibold"
                                        asChild
                                    >
                                        <Link href="/kontak">Butuh Bantuan?</Link>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

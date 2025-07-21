"use client"

import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import BrosurPopup from "@/components/ui/brosur-popup"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
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
  Shield,
  Heart,
  Globe,
  Target,
} from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { YouTubeSection } from "@/components/ui/youtube-section"
import { PricingSection } from "@/components/ui/pricing-section"
import { TargetUtamaSection } from "@/components/ui/target-utama-section"
import { FacultySelection } from "@/components/ui/faculty-selection"
import { BeritaSection } from "@/components/ui/berita-section"
import Link from "next/link"
import { motion } from "framer-motion"
import { HeroCarousel } from "@/components/ui/hero-carousel" // Import the new carousel component

export default function HomePage() {
  const advantages = [
    {
      icon: Clock,
      title: "Pembelajaran Fleksibel",
      description: "Belajar kapan saja, di mana saja sesuai dengan jadwal dan kebutuhan Anda.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
    },
    {
      icon: DollarSign,
      title: "Biaya Terjangkau",
      description: "Investasi pendidikan yang ekonomis dengan kualitas terjamin dan dapat dicicil.",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
    },
    {
      icon: Shield,
      title: "Terakreditasi Nasional",
      description: "Program studi terakreditasi BAN-PT dengan standar kualitas internasional.",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
    },
    {
      icon: Heart,
      title: "Dukungan Akademik",
      description: "Bimbingan dan layanan akademik komprehensif dari tim profesional berpengalaman.",
      color: "from-rose-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-rose-50 to-pink-50",
    },
    {
      icon: Globe,
      title: "Jaringan Nasional",
      description: "Tersebar di seluruh Indonesia dengan standar kualitas yang konsisten.",
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-gradient-to-br from-indigo-50 to-purple-50",
    },
    {
      icon: Target,
      title: "Fokus Karier",
      description: "Program yang dirancang untuk meningkatkan kompetensi dan daya saing karier.",
      color: "from-violet-500 to-purple-500",
      bgColor: "bg-gradient-to-br from-violet-50 to-purple-50",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Carousel Section */}
      <HeroCarousel />

      {/* YouTube Section */}
      <YouTubeSection />

      {/* Enhanced Advantages Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Mengapa Memilih <span className="text-purple-600">Universitas Terbuka?</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Keunggulan yang membuat UT menjadi pilihan terbaik untuk pendidikan tinggi berkualitas
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="group h-full">
                  <div
                    className={`${advantage.bgColor} p-8 rounded-3xl border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 h-full relative overflow-hidden`}
                  >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className={`absolute inset-0 bg-gradient-to-br ${advantage.color} rounded-3xl`}></div>
                    </div>

                    {/* Icon */}
                    <div className="relative z-10 mb-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${advantage.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                      >
                        <advantage.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                        {advantage.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg">{advantage.description}</p>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-6 right-6 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
                    <div className="absolute bottom-6 left-6 w-12 h-12 bg-white/10 rounded-full blur-lg"></div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* Target Utama Section */}
      <TargetUtamaSection />

      {/* Faculty Selection */}
      <FacultySelection />

      {/* Alur Pendaftaran Section */}
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
              <Badge className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 text-sm font-medium rounded-full mb-6">
                <FileCheck className="w-4 h-4 mr-2" />
                Alur Pendaftaran
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Langkah Mudah <span className="text-blue-600">Menjadi Mahasiswa UT</span>
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
                      <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-2xl"></div>
                        <CardHeader className="relative z-10">
                          <div className="flex items-center justify-between mb-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg">
                              <GraduationCap className="w-8 h-8 text-white" />
                            </div>
                            <Badge className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                              Langkah 1
                            </Badge>
                          </div>
                          <CardTitle className="text-2xl font-bold text-gray-900 mb-2">Pendaftaran Online</CardTitle>
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
                            <div key={idx} className="flex items-start space-x-3 p-3 bg-white/60 rounded-xl">
                              <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <ArrowRight className="w-3 h-3 text-white" />
                              </div>
                              <span className="text-gray-700 text-sm leading-relaxed">{item.text}</span>
                            </div>
                          ))}
                        </CardContent>
                      </Card>
                    </div>
                    <div className="hidden lg:flex justify-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
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
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                        <span className="text-white font-bold text-lg">2</span>
                      </div>
                    </div>
                    <div>
                      <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-emerald-50 to-teal-50 overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-2xl"></div>
                        <CardHeader className="relative z-10">
                          <div className="flex items-center justify-between mb-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                              <UserCheck className="w-8 h-8 text-white" />
                            </div>
                            <Badge className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                              Langkah 2
                            </Badge>
                          </div>
                          <CardTitle className="text-2xl font-bold text-gray-900 mb-2">Validasi Data</CardTitle>
                          <CardDescription className="text-gray-600 text-base">
                            Tim UT akan memverifikasi data dan dokumen yang Anda kirimkan
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="relative z-10 space-y-4">
                          <div className="bg-white/60 p-4 rounded-xl">
                            <div className="flex items-center space-x-3 mb-3">
                              <Clock className="w-5 h-5 text-emerald-600" />
                              <span className="font-semibold text-gray-900">Waktu Proses: 3x24 Jam</span>
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed">
                              Setelah data divalidasi dan dinyatakan valid, Anda akan mendapatkan:
                            </p>
                          </div>
                          <div className="grid grid-cols-1 gap-3">
                            {[{ text: "Email notifikasi konfirmasi" }, { text: "NIM (Nomor Induk Mahasiswa)" }].map(
                              (item, idx) => (
                                <div key={idx} className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl">
                                  <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Bell className="w-3 h-3 text-white" />
                                  </div>
                                  <span className="text-gray-700 text-sm">{item.text}</span>
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
                      <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-purple-50 to-violet-50 overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200/30 to-violet-200/30 rounded-full blur-2xl"></div>
                        <CardHeader className="relative z-10">
                          <div className="flex items-center justify-between mb-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center shadow-lg">
                              <BookOpen className="w-8 h-8 text-white" />
                            </div>
                            <Badge className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                              Langkah 3
                            </Badge>
                          </div>
                          <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                            Registrasi Mata Kuliah
                          </CardTitle>
                          <CardDescription className="text-gray-600 text-base">
                            Pilih mata kuliah yang akan Anda ambil di semester pertama
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="relative z-10 space-y-4">
                          <div className="bg-white/60 p-4 rounded-xl">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="font-semibold text-gray-900">Portal:</span>
                              <code className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">
                                sia.ut.ac.id
                              </code>
                            </div>
                          </div>
                          {[
                            { text: "Pilih mata kuliah melalui SIPAS atau Non-SIPAS" },
                            { text: "Bayar biaya registrasi sesuai paket layanan" },
                          ].map((item, idx) => (
                            <div key={idx} className="flex items-start space-x-3 p-3 bg-white/60 rounded-xl">
                              <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-violet-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <CheckCircle2 className="w-3 h-3 text-white" />
                              </div>
                              <span className="text-gray-700 text-sm leading-relaxed">{item.text}</span>
                            </div>
                          ))}
                        </CardContent>
                      </Card>
                    </div>
                    <div className="hidden lg:flex justify-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
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
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                        <span className="text-white font-bold text-lg">4</span>
                      </div>
                    </div>
                    <div>
                      <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-amber-50 to-orange-50 overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-2xl"></div>
                        <CardHeader className="relative z-10">
                          <div className="flex items-center justify-between mb-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                              <DollarSign className="w-8 h-8 text-white" />
                            </div>
                            <Badge className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                              Langkah 4
                            </Badge>
                          </div>
                          <CardTitle className="text-2xl font-bold text-gray-900 mb-2">Pembayaran</CardTitle>
                          <CardDescription className="text-gray-600 text-base">
                            Lakukan pembayaran melalui berbagai channel yang tersedia
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="relative z-10 space-y-4">
                          <div className="bg-white/60 p-4 rounded-xl">
                            <h4 className="font-semibold text-gray-900 mb-3">Channel Pembayaran:</h4>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                                <span>Bank BRI</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                                <span>Bank BTN</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                                <span>Bank Mandiri</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                                <span>Bank BNI</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                                <span>Alfagroup</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                                <span>Indomaret</span>
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
                      <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-rose-50 to-pink-50 overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-rose-200/30 to-pink-200/30 rounded-full blur-2xl"></div>
                        <CardHeader className="relative z-10">
                          <div className="flex items-center justify-between mb-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                              <Calendar className="w-8 h-8 text-white" />
                            </div>
                            <Badge className="bg-rose-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                              Langkah 5
                            </Badge>
                          </div>
                          <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                            Aktivasi Tutorial Online
                          </CardTitle>
                          <CardDescription className="text-gray-600 text-base">
                            Aktifkan akses pembelajaran online untuk memulai perkuliahan
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="relative z-10 space-y-4">
                          <div className="bg-white/60 p-4 rounded-xl">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="font-semibold text-gray-900">Portal E-Learning:</span>
                            </div>
                            <code className="bg-rose-100 text-rose-800 px-2 py-1 rounded text-sm">
                              elearning.ut.ac.id
                            </code>
                          </div>
                          <div className="bg-white/60 p-4 rounded-xl">
                            <h4 className="font-semibold text-gray-900 mb-2">Yang Perlu Dilakukan:</h4>
                            <div className="space-y-2">
                              <div className="flex items-start space-x-3">
                                <CheckCircle2 className="w-4 h-4 text-rose-600 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700 text-sm">Aktivasi akun Tutorial Online (Tuton)</span>
                              </div>
                              <div className="flex items-start space-x-3">
                                <CheckCircle2 className="w-4 h-4 text-rose-600 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700 text-sm">Isi form kesediaan mengikuti Tuton</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="hidden lg:flex justify-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
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
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-indigo-400/20"></div>
                <CardContent className="relative z-10 p-12">
                  <h3 className="text-3xl font-bold mb-4">Siap Memulai Perjalanan Pendidikan?</h3>
                  <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                    Ikuti 5 langkah mudah di atas dan bergabunglah dengan ribuan mahasiswa UT lainnya
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
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
                      className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4 rounded-full transition-all duration-300 bg-transparent"
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

      {/* Berita Section - Now positioned right before Footer */}
      <BeritaSection />
      <BrosurPopup />

      <Footer />
    </div>
  )
}

"use client"

import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Award,
  BookOpen,
  Clock,
  DollarSign,
  CheckCircle,
  ArrowRight,
  GraduationCap,
  Target,
  Shield,
  Globe,
  TrendingUp,
  Heart,
  Star,
  Zap,
  Sparkles,
  FileCheck,
  User,
  CheckCircle2,
  CreditCard,
  Bell,
  Upload,
  UserCheck,
  Calendar,
  AlertCircle,
} from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { motion } from "framer-motion"

export default function HomePage() {
  const statistics = [
    {
      icon: Users,
      title: "600,000+",
      description: "Mahasiswa Aktif",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: Award,
      title: "Akreditasi A",
      description: "BAN-PT",
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
    {
      icon: BookOpen,
      title: "50",
      description: "Program Studi",
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600",
    },
    {
      icon: GraduationCap,
      title: "95%",
      description: "Tingkat Kelulusan",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
  ]

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

  const faculties = [
    {
      name: "FISIP",
      fullName: "Fakultas Ilmu Sosial dan Ilmu Politik",
      programs: ["Administrasi Negara", "Administrasi Niaga", "Ilmu Komunikasi", "Ilmu Perpustakaan"],
      icon: Users,
      students: "45,000+",
      accreditation: "A",
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
    },
    {
      name: "FKIP",
      fullName: "Fakultas Keguruan dan Ilmu Pendidikan",
      programs: ["Pendidikan Bahasa Indonesia", "Pendidikan Matematika", "Pendidikan Biologi", "PGSD"],
      icon: BookOpen,
      students: "120,000+",
      accreditation: "A",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
    },
    {
      name: "FMIPA",
      fullName: "Fakultas MIPA",
      programs: ["Matematika", "Statistika", "Biologi", "Teknologi Pangan"],
      icon: Target,
      students: "35,000+",
      accreditation: "A",
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-violet-50",
    },
    {
      name: "FE",
      fullName: "Fakultas Ekonomi dan Bisnis",
      programs: ["Manajemen", "Akuntansi", "Ekonomi Pembangunan", "Ekonomi Syariah"],
      icon: TrendingUp,
      students: "80,000+",
      accreditation: "A",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Enhanced Hero Section with Subtle Pattern Background */}
      <section className="relative py-24 overflow-hidden">
        {/* Subtle Pattern Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50"></div>

          {/* Subtle Wave Pattern */}
          <div className="absolute inset-0 opacity-30">
            <svg className="absolute bottom-0 left-0 w-full h-64" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
                fill="currentColor"
                className="text-blue-200"
              ></path>
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"
                fill="currentColor"
                className="text-blue-100"
              ></path>
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                fill="currentColor"
                className="text-blue-50"
              ></path>
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <Badge className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-base font-medium rounded-full shadow-lg hover:shadow-xl transition-shadow">
                <Sparkles className="w-4 h-4 mr-2" />
                Pendidikan Tinggi Terdepan
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight"
            >
              Wujudkan Impian
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Pendidikan Tinggi
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Bergabunglah dengan <span className="font-bold text-blue-600">600,000+ mahasiswa</span> yang telah
              merasakan kemudahan kuliah fleksibel, berkualitas, dan terjangkau di{" "}
              <span className="font-bold text-gray-900">Universitas Terbuka</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-lg px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Link href="/pendaftaran">
                  <Zap className="mr-2 w-5 h-5" />
                  Daftar Sekarang
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-10 py-4 rounded-full border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all duration-300 bg-transparent"
              >
                <Link href="/tentang">Pelajari Lebih Lanjut</Link>
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap justify-center items-center gap-8 text-gray-600"
            >
              {[
                { icon: CheckCircle, text: "Terakreditasi A" },
                { icon: Shield, text: "Ijazah Diakui Nasional" },
                { icon: Clock, text: "Pembelajaran Fleksibel" },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <span className="font-semibold text-gray-700 group-hover:text-emerald-600 transition-colors">
                    {item.text}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Statistics Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-20">
              <Badge className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-6">
                <Star className="w-4 h-4 mr-2" />
                Dipercaya & Terpercaya
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Dipercaya <span className="text-blue-600">Ribuan Mahasiswa</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Bergabunglah dengan komunitas besar mahasiswa UT yang telah merasakan kualitas pendidikan terbaik
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="group relative">
                  {/* Card */}
                  <div
                    className={`${stat.bgColor} p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden h-full`}
                  >
                    {/* Background Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
                    ></div>

                    {/* Icon */}
                    <div className="relative z-10 mb-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <stat.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:scale-105 transition-transform duration-300">
                        {stat.title}
                      </div>
                      <p className="text-gray-600 font-medium text-lg">{stat.description}</p>
                    </div>

                    {/* Decorative Element */}
                    <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Advantages Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-20">
              <Badge className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-800 text-sm font-medium rounded-full mb-6">
                <Award className="w-4 h-4 mr-2" />
                Keunggulan Terbaik
              </Badge>
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
                            { icon: ArrowRight, text: "Pilih jalur RPL atau Non-RPL sesuai latar belakang pendidikan" },
                            { icon: User, text: "Isi data pribadi lengkap (NIK, nama, tempat tanggal lahir)" },
                            { icon: Upload, text: "Unggah dokumen: scan ijazah, KTP, dan berkas lainnya" },
                            { icon: CreditCard, text: "Bayar biaya pendaftaran sesuai petunjuk di website" },
                          ].map((item, idx) => (
                            <div key={idx} className="flex items-start space-x-3 p-3 bg-white/60 rounded-xl">
                              <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <item.icon className="w-3 h-3 text-white" />
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
                            {[
                              { icon: Bell, text: "Email notifikasi konfirmasi" },
                              { icon: GraduationCap, text: "NIM (Nomor Induk Mahasiswa)" },
                            ].map((item, idx) => (
                              <div key={idx} className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl">
                                <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                                  <item.icon className="w-3 h-3 text-white" />
                                </div>
                                <span className="text-gray-700 text-sm">{item.text}</span>
                              </div>
                            ))}
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
                            { icon: CheckCircle2, text: "Pilih mata kuliah melalui SIPAS atau Non-SIPAS" },
                            { icon: CreditCard, text: "Bayar biaya registrasi sesuai paket layanan" },
                          ].map((item, idx) => (
                            <div key={idx} className="flex items-start space-x-3 p-3 bg-white/60 rounded-xl">
                              <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-violet-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <item.icon className="w-3 h-3 text-white" />
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
                        Daftar Sekarang
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Faculties Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-20">
              <Badge className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 text-sm font-medium rounded-full mb-6">
                <BookOpen className="w-4 h-4 mr-2" />
                Program Unggulan
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Fakultas & <span className="text-emerald-600">Program Studi</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Pilih program studi yang sesuai dengan minat dan passion Anda dari berbagai fakultas terakreditasi
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {faculties.map((faculty, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="group h-full">
                  <div
                    className={`${faculty.bgColor} p-8 rounded-3xl border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full relative overflow-hidden`}
                  >
                    {/* Background Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${faculty.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
                    ></div>

                    {/* Header */}
                    <div className="flex items-start justify-between mb-8 relative z-10">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-16 h-16 bg-gradient-to-br ${faculty.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          <faculty.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                            {faculty.name}
                          </h3>
                          <p className="text-gray-600 font-medium text-lg">{faculty.fullName}</p>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                          Akreditasi {faculty.accreditation}
                        </Badge>
                        <p className="text-sm text-gray-500 mt-2 font-medium">{faculty.students} Mahasiswa</p>
                      </div>
                    </div>

                    {/* Programs */}
                    <div className="relative z-10">
                      <p className="font-bold text-gray-800 mb-6 text-lg">Program Studi Unggulan:</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {faculty.programs.map((program, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl hover:bg-white/80 transition-colors duration-200"
                          >
                            <div className={`w-2 h-2 bg-gradient-to-br ${faculty.color} rounded-full`}></div>
                            <span className="text-gray-700 font-medium">{program}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-6 right-6 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                    <div className="absolute bottom-6 left-6 w-16 h-16 bg-white/5 rounded-full blur-lg"></div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="text-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-lg px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Link href="/akademik">
                  <BookOpen className="mr-2 w-5 h-5" />
                  Lihat Semua Program Studi
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <Badge className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-white text-base font-medium rounded-full mb-8 border border-white/20">
              <Sparkles className="w-4 h-4 mr-2" />
              Mulai Perjalanan Anda
            </Badge>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Siap Memulai{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                Perjalanan Pendidikan?
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Jangan tunda lagi impian Anda untuk meraih gelar sarjana. Bergabunglah dengan ribuan mahasiswa yang telah
              merasakan kemudahan kuliah di Universitas Terbuka.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white text-lg px-10 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              >
                <Link href="/pendaftaran">
                  <Zap className="mr-2 w-5 h-5" />
                  Daftar Sekarang
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white text-lg px-10 py-4 rounded-full border-2 border-white/30 hover:border-white/50 transition-all duration-300"
              >
                <Link href="/kontak">Konsultasi Gratis</Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { icon: CheckCircle, title: "Proses Mudah & Cepat", desc: "Pendaftaran online 24/7" },
                { icon: Shield, title: "Terjamin & Terpercaya", desc: "Terakreditasi BAN-PT" },
                { icon: Heart, title: "Dukungan Penuh", desc: "Bimbingan akademik lengkap" },
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border border-white/20">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-blue-100">{item.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  )
}

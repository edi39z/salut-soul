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
  Phone,
} from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"
import Link from "next/link"
import { motion } from "framer-motion"

export default function HomePage() {
  const statistics = [
    {
      icon: Users,
      title: "400,000+",
      description: "Mahasiswa Aktif",
      color: "text-blue-700",
    },
    {
      icon: Award,
      title: "Akreditasi A",
      description: "Terakreditasi BAN-PT",
      color: "text-emerald-600",
    },
    {
      icon: BookOpen,
      title: "39",
      description: "Program Studi",
      color: "text-amber-600",
    },
    {
      icon: GraduationCap,
      title: "95%",
      description: "Tingkat Kelulusan",
      color: "text-purple-600",
    },
  ]

  const advantages = [
    {
      icon: Clock,
      title: "Pembelajaran Fleksibel",
      description: "Belajar kapan saja, di mana saja sesuai dengan jadwal dan kebutuhan Anda.",
      color: "text-blue-700",
    },
    {
      icon: DollarSign,
      title: "Biaya Terjangkau",
      description: "Investasi pendidikan yang ekonomis dengan kualitas terjamin dan dapat dicicil.",
      color: "text-emerald-600",
    },
    {
      icon: Shield,
      title: "Terakreditasi Nasional",
      description: "Program studi terakreditasi BAN-PT dengan standar kualitas internasional.",
      color: "text-amber-600",
    },
    {
      icon: Heart,
      title: "Dukungan Akademik",
      description: "Bimbingan dan layanan akademik komprehensif dari tim profesional berpengalaman.",
      color: "text-purple-600",
    },
    {
      icon: Globe,
      title: "Jaringan Nasional",
      description: "Tersebar di seluruh Indonesia dengan standar kualitas yang konsisten.",
      color: "text-red-600",
    },
    {
      icon: Target,
      title: "Fokus Karier",
      description: "Program yang dirancang untuk meningkatkan kompetensi dan daya saing karier.",
      color: "text-indigo-600",
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
    },
    {
      name: "FKIP",
      fullName: "Fakultas Keguruan dan Ilmu Pendidikan",
      programs: ["Pendidikan Bahasa Indonesia", "Pendidikan Matematika", "Pendidikan Biologi", "PGSD"],
      icon: BookOpen,
      students: "120,000+",
      accreditation: "A",
    },
    {
      name: "FMIPA",
      fullName: "Fakultas Matematika dan Ilmu Pengetahuan Alam",
      programs: ["Matematika", "Statistika", "Biologi", "Teknologi Pangan"],
      icon: Target,
      students: "35,000+",
      accreditation: "A",
    },
    {
      name: "FE",
      fullName: "Fakultas Ekonomi",
      programs: ["Manajemen", "Akuntansi.", "Ekonomi Pembangunan", "Ekonomi Syariah"],
      icon: TrendingUp,
      students: "80,000+",
      accreditation: "A",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-academic"></div>

        <div className="container-academic relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >

            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-hero mb-6"
            >
              Pendidikan Tinggi Berkualitas
              <br />
              <span className="text-blue-700">untuk Masa Depan Cerah</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-body-large mb-10 max-w-3xl mx-auto"
            >
              Bergabunglah dengan <span className="font-semibold text-blue-700">Ribuan mahasiswa</span> yang telah
              merasakan kemudahan kuliah fleksibel, berkualitas, dan terjangkau di Universitas Terbuka melalui
              <span className="font-semibold text-slate-900"> SALUT Soul</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Button asChild size="lg" className="btn-primary text-lg px-8 py-4">
                <Link href="/pendaftaran">
                  Daftar Sekarang
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>

              <Button asChild size="lg" className="btn-outline text-lg px-8 py-4">
                <Link href="/tentang">Pelajari Lebih Lanjut</Link>
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap justify-center items-center gap-6 text-slate-600"
            >
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span className="font-medium">Terakreditasi A</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span className="font-medium">Ijazah Diakui Nasional</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span className="font-medium">Pembelajaran Fleksibel</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section-padding bg-white">
        <div className="container-academic">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-display mb-4">Dipercaya Ribuan Mahasiswa</h2>
              <p className="text-body-large max-w-2xl mx-auto">
                Bergabunglah dengan komunitas besar mahasiswa UT yang telah merasakan kualitas pendidikan terbaik
              </p>
            </div>
          </AnimatedSection>

          <div className="grid-academic">
            {statistics.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="card-stats group hover-lift transition-all duration-200">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-50 transition-colors">
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">{stat.title}</div>
                  <p className="text-slate-600 font-medium">{stat.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-academic">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-display mb-4">Mengapa Memilih Universitas Terbuka?</h2>
              <p className="text-body-large max-w-3xl mx-auto">
                Keunggulan yang membuat UT menjadi pilihan terbaik untuk pendidikan tinggi berkualitas
              </p>
            </div>
          </AnimatedSection>

          <div className="grid-academic">
            {advantages.map((advantage, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="card-feature group hover-lift transition-all duration-200">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-50 transition-colors">
                    <advantage.icon className={`w-6 h-6 ${advantage.color}`} />
                  </div>
                  <h3 className="text-heading text-slate-900 mb-3">{advantage.title}</h3>
                  <p className="text-body">{advantage.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Faculties Section */}
      <section className="section-padding bg-white">
        <div className="container-academic">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-display mb-4">Fakultas & Program Studi</h2>
              <p className="text-body-large max-w-3xl mx-auto">
                Pilih program studi yang sesuai dengan minat dan passion Anda dari berbagai fakultas terakreditasi
              </p>
            </div>
          </AnimatedSection>

          <div className="grid-academic-2 mb-12">
            {faculties.map((faculty, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="card-academic p-6 group hover-lift transition-all duration-200">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <faculty.icon className="w-6 h-6 text-blue-700" />
                    </div>
                    <div className="text-right">
                      <Badge className="badge-academic badge-success">Akreditasi {faculty.accreditation}</Badge>
                      <p className="text-sm text-slate-500 mt-1">{faculty.students} Mahasiswa</p>
                    </div>
                  </div>

                  <h3 className="text-heading text-slate-900 mb-2">{faculty.name}</h3>
                  <p className="text-slate-600 font-medium mb-6">{faculty.fullName}</p>

                  <div>
                    <p className="font-semibold text-slate-800 mb-4">Program Studi Unggulan:</p>
                    <div className="space-y-2">
                      {faculty.programs.map((program, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-slate-700">{program}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="text-center">
              <Button asChild size="lg" className="btn-primary text-lg px-8 py-4">
                <Link href="/akademik">
                  Lihat Semua Program Studi
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section - Only on Homepage */}
      <section className="section-padding gradient-hero relative">
        <div className="container-academic text-center">
          <AnimatedSection>
            <h2 className="text-display text-white mb-4">Siap Memulai Perjalanan Pendidikan?</h2>
            <p className="text-body-large text-blue-100 mb-8 max-w-3xl mx-auto">
              Jangan tunda lagi impian Anda untuk meraih gelar sarjana. Bergabunglah dengan ribuan mahasiswa yang telah
              merasakan kemudahan kuliah di Universitas Terbuka.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button asChild size="lg" className="btn-secondary text-lg px-8 py-4">
                <Link href="/pendaftaran">
                  Daftar Sekarang
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-blue-700"
              >
                
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <CheckCircle className="w-8 h-8 text-white mx-auto mb-2" />
                <p className="text-white font-medium">Proses Mudah & Cepat</p>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 text-white mx-auto mb-2" />
                <p className="text-white font-medium">Terjamin & Terpercaya</p>
              </div>
              <div className="text-center">
                <Heart className="w-8 h-8 text-white mx-auto mb-2" />
                <p className="text-white font-medium">Dukungan Penuh</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  )
}

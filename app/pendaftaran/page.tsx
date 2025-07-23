"use client"

import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  Users,
  ArrowRight,
  CheckCircle,
  FileText,
  Award,
  Clock,
  User,
  Shield,
  BookOpen,
} from "lucide-react"
import { motion } from "framer-motion"

export default function PendaftaranPage() {
  const pathways = [
    {
      id: "non-rpl",
      title: "Jalur Non-RPL",
      subtitle: "Pendaftaran Reguler",
      description:
        "Program pendidikan untuk lulusan SMA/SMK/MA sederajat yang memulai perjalanan akademik dari semester pertama dengan kurikulum standar nasional.",
      icon: GraduationCap,
      color: "#002F86",
      hoverColor: "hover:bg-[#001a5c]",
      borderColor: "border-slate-200",
      bgColor: "bg-slate-50",
      textColor: "text-[#002F86]",
      features: [
        "Kurikulum standar semester 1",
        "Untuk lulusan SMA/SMK/MA",
        "Fleksibilitas waktu belajar",
        "Sistem pembelajaran terbuka",
      ],
      requirements: [
        "Pas Foto 4x6 (Format JPG/JPEG/PNG)",
        "Kartu Tanda Penduduk (Format PDF)",
        "Ijazah terakhir yang dilegalisir",
        "Formulir Kebenaran dan Keabsahan Dokumen",
      ],
      href: "/pendaftaran/non-rpl",
    },
    {
      id: "rpl",
      title: "Jalur RPL",
      subtitle: "Rekognisi Pembelajaran Lampau",
      description:
        "Program khusus untuk profesional berpengalaman atau lulusan D3/S1 yang ingin melanjutkan pendidikan dengan pengakuan kredit sebelumnya.",
      icon: Award,
      color: "#002F86",
      hoverColor: "hover:bg-[#001a5c]",
      borderColor: "border-slate-200",
      bgColor: "bg-slate-50",
      textColor: "text-[#002F86]",
      features: [
        "Pengakuan pengalaman profesional",
        "Transfer kredit dari pendidikan sebelumnya",
        "Penyetaraan kompetensi kerja",
        "Durasi studi yang lebih efisien",
      ],
      requirements: [
        "Pas Foto 4x6 (Format JPG/JPEG/PNG)",
        "Kartu Tanda Penduduk (Format PDF)",
        "Ijazah dan Transkrip Nilai lengkap",
        "Formulir Kebenaran dan Keabsahan Dokumen",
        "Ijazah SMA/Sederajat asli",
        "Screenshot Data Pribadi PDDIKTI",
      ],
      href: "/pendaftaran/rpl",
    },
  ]

  const academicInfo = [
    {
      icon: Shield,
      title: "Akreditasi Terjamin",
      description: "Program studi terakreditasi BAN-PT dengan standar kualitas nasional",
    },
    {
      icon: BookOpen,
      title: "Kurikulum Terkini",
      description: "Kurikulum yang selalu diperbarui sesuai kebutuhan industri dan perkembangan ilmu",
    },
    {
      icon: Users,
      title: "Dosen Berkualitas",
      description: "Tenaga pengajar profesional dengan kualifikasi akademik dan pengalaman terbaik",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Badge className="bg-slate-100 text-slate-700 border border-slate-200 mb-6 md:mb-8 px-4 md:px-6 py-2 text-sm md:text-base font-medium">
                Penerimaan Mahasiswa Baru
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 md:mb-6 leading-tight px-2">
                Pilih <span className="text-[#002F86]">Jalur Pendaftaran</span> Akademik
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium px-4">
                Tentukan jalur pendaftaran yang sesuai dengan latar belakang pendidikan dan tujuan akademik Anda untuk
                masa depan yang cemerlang
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Academic Info Cards */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {academicInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="border border-slate-200 bg-white hover:shadow-md transition-all duration-300 h-full">
                    <CardContent className="p-4 md:p-6 text-center">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-[#002F86] rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                        <info.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                      </div>
                      <h3 className="font-bold text-slate-800 mb-2 md:mb-3 text-base md:text-lg">{info.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{info.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pathway Selection */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-3 md:mb-4 px-2">
                Jalur Pendaftaran Tersedia
              </h2>
              <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto px-4">
                Pilih jalur yang paling sesuai dengan profil akademik dan profesional Anda
              </p>
            </motion.div>

            {/* Mobile: Stack vertically, Desktop: Side by side */}
            <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8">
              {pathways.map((pathway, index) => (
                <motion.div
                  key={pathway.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative z-10"
                >
                  <Card className="border-2 border-slate-200 hover:border-[#002F86] hover:shadow-lg transition-all duration-300 bg-white overflow-hidden">
                    <CardHeader className="bg-slate-50 border-b border-slate-200 p-4 md:p-6">
                      <div className="flex items-start md:items-center justify-between mb-3 md:mb-4">
                        <div className="flex items-start md:items-center space-x-3 md:space-x-4 flex-1">
                          <div className="w-12 h-12 md:w-14 md:h-14 bg-[#002F86] rounded-xl flex items-center justify-center flex-shrink-0">
                            <pathway.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <CardTitle className="text-xl md:text-2xl text-slate-800 font-bold leading-tight">
                              {pathway.title}
                            </CardTitle>
                            <CardDescription className="text-[#002F86] font-semibold text-sm md:text-base mt-1">
                              {pathway.subtitle}
                            </CardDescription>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="p-4 md:p-6 lg:p-8">
                      <p className="text-slate-600 text-sm md:text-base mb-6 md:mb-8 leading-relaxed font-medium">
                        {pathway.description}
                      </p>

                      {/* Features */}
                      <div className="mb-6 md:mb-8">
                        <h4 className="font-bold text-slate-800 mb-3 md:mb-4 text-base md:text-lg">
                          Keunggulan Program:
                        </h4>
                        <div className="space-y-2 md:space-y-3">
                          {pathway.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start space-x-3">
                              <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-[#002F86] mt-0.5 flex-shrink-0" />
                              <span className="text-slate-700 font-medium text-sm md:text-base leading-relaxed">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Requirements Preview */}
                      <div className="mb-6 md:mb-8">
                        <h4 className="font-bold text-slate-800 mb-3 md:mb-4 text-base md:text-lg">
                          Persyaratan Dokumen:
                        </h4>
                        <div className="space-y-2">
                          {pathway.requirements.slice(0, 3).map((req, idx) => (
                            <div key={idx} className="flex items-start space-x-3">
                              <FileText className="w-4 h-4 text-slate-500 mt-1 flex-shrink-0" />
                              <span className="text-slate-600 text-sm font-medium leading-relaxed">{req}</span>
                            </div>
                          ))}
                          {pathway.requirements.length > 3 && (
                            <p className="text-slate-500 text-sm italic ml-7">
                              +{pathway.requirements.length - 3} dokumen lainnya
                            </p>
                          )}
                        </div>
                      </div>

                      {/* CTA Button - Fixed positioning for mobile */}
                      <div className="mt-6 md:mt-8">
                        <Button
                          asChild
                          size="lg"
                          className="w-full bg-[#002F86] hover:bg-[#001a5c] text-white font-semibold py-3 md:py-4 text-sm md:text-base relative z-20"
                        >
                          <Link href={pathway.href} className="flex items-center justify-center">
                            Pilih Jalur Ini
                            <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8 md:mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3 md:mb-4 px-2">Informasi Penting</h2>
              <p className="text-base md:text-lg text-slate-600 px-4">
                Hal-hal yang perlu diketahui sebelum memulai pendaftaran
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <Card className="border border-slate-200 hover:shadow-md transition-shadow bg-white">
                <CardContent className="p-4 md:p-6 text-center">
                  <Clock className="w-10 h-10 md:w-12 md:h-12 text-[#002F86] mx-auto mb-3 md:mb-4" />
                  <h3 className="font-bold text-slate-800 mb-2 text-base md:text-lg">Proses Efisien</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Pendaftaran online 24/7 dengan konfirmasi dalam 1x24 jam kerja
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-slate-200 hover:shadow-md transition-shadow bg-white">
                <CardContent className="p-4 md:p-6 text-center">
                  <Users className="w-10 h-10 md:w-12 md:h-12 text-[#002F86] mx-auto mb-3 md:mb-4" />
                  <h3 className="font-bold text-slate-800 mb-2 text-base md:text-lg">Konsultasi Akademik</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Bimbingan profesional untuk memilih program studi yang tepat
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-slate-200 hover:shadow-md transition-shadow bg-white">
                <CardContent className="p-4 md:p-6 text-center">
                  <FileText className="w-10 h-10 md:w-12 md:h-12 text-[#002F86] mx-auto mb-3 md:mb-4" />
                  <h3 className="font-bold text-slate-800 mb-2 text-base md:text-lg">Keamanan Data</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Sistem keamanan berlapis dengan enkripsi dan backup otomatis
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8 md:mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3 md:mb-4 px-2">Pertanyaan Umum</h2>
              <p className="text-base md:text-lg text-slate-600 px-4">
                Informasi yang sering ditanyakan calon mahasiswa
              </p>
            </motion.div>

            <div className="space-y-4 md:space-y-6">
              <Card className="border border-slate-200 bg-white">
                <CardContent className="p-4 md:p-6 lg:p-8">
                  <h3 className="font-bold text-slate-800 mb-2 md:mb-3 text-base md:text-lg">
                    Apa perbedaan jalur RPL dan Non-RPL?
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    Jalur Non-RPL diperuntukkan bagi lulusan SMA/SMK yang memulai dari semester 1. Jalur RPL untuk
                    profesional berpengalaman atau lulusan D3/S1 yang dapat memperoleh pengakuan kredit dengan durasi
                    studi lebih efisien.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-slate-200 bg-white">
                <CardContent className="p-4 md:p-6 lg:p-8">
                  <h3 className="font-bold text-slate-800 mb-2 md:mb-3 text-base md:text-lg">
                    Apakah ada persyaratan khusus untuk FKIP?
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    Ya, untuk Fakultas Keguruan dan Ilmu Pendidikan (FKIP) diperlukan dokumen tambahan berupa SK
                    Pengangkatan Guru dan SK Mengajar dari Kepala Sekolah yang akan diminta saat pengisian formulir.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-slate-200 bg-white">
                <CardContent className="p-4 md:p-6 lg:p-8">
                  <h3 className="font-bold text-slate-800 mb-2 md:mb-3 text-base md:text-lg">
                    Bagaimana prosedur upload dokumen?
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    Semua dokumen dapat diunggah langsung melalui sistem online. Format yang diterima: PDF, JPG, JPEG,
                    PNG dengan ukuran maksimal 5MB per dokumen. Pastikan dokumen jelas dan terbaca.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-12 md:py-16 bg-[#002F86]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4 px-2">
              Butuh Konsultasi Akademik?
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
              Tim akademik kami siap membantu Anda memilih jalur pendaftaran yang tepat sesuai dengan profil dan tujuan
              karier
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
              <Button
                size="lg"
                className="bg-[#FFD700] text-[#002F86] hover:bg-yellow-400 text-base md:text-lg px-6 md:px-8 py-3 font-bold"
                asChild
              >
                <a href="https://wa.me/6282259616782" target="_blank" rel="noreferrer">
                  <User className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  Konsultasi Gratis
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-base md:text-lg px-6 md:px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-[#002F86] bg-transparent font-semibold"
              >
                <Link href="/kontak">Hubungi Kami</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

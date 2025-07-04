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

} from "lucide-react"
import { motion } from "framer-motion"

export default function PendaftaranPage() {
  const pathways = [
    {
      id: "non-rpl",
      title: "Jalur Non-RPL",
      subtitle: "Pendaftaran Reguler",
      description: "Untuk lulusan SMA/SMK/MA sederajat yang ingin memulai perkuliahan dari semester 1",
      icon: GraduationCap,
      color: "bg-blue-600",
      hoverColor: "hover:bg-blue-700",
      borderColor: "border-blue-200",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
      features: [
        "Mulai dari semester 1",
        "Untuk lulusan SMA/SMK/MA",
        "Tidak ada batasan usia",
        "Proses pendaftaran standar",
      ],
      requirements: [
        "Pas Foto 4x6 (Format JPG/JPEG)",
        "Kartu Tanda Penduduk (format JPG)",
        "Scan Ijazah terakhir dilegalisir",
        "Formulir Kebenaran dan Keabsahan Dokumen",
      ],
      href: "/pendaftaran/non-rpl",
    },
    {
      id: "rpl",
      title: "Jalur RPL",
      subtitle: "Rekognisi Pembelajaran Lampau",
      description:
        "Untuk yang memiliki pengalaman kerja/pendidikan non-formal atau lulusan D3/S1 yang ingin alih kredit",
      icon: Award,
      color: "bg-emerald-600",
      hoverColor: "hover:bg-emerald-700",
      borderColor: "border-emerald-200",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-700",
      features: [
        "Pengakuan pengalaman kerja",
        "Alih kredit dari D3/S1",
        "Penyetaraan kredit",
        "Waktu studi lebih singkat",
      ],
      requirements: [
        "Pas Foto 4x6 (Format JPG/JPEG)",
        "Scan Kartu Tanda Penduduk",
        "Scan Ijazah dan Transkrip Nilai",
        "Formulir Kebenaran dan Keabsahan Dokumen",
        "Scan Ijazah SMA/Sederajat Asli",
        "Screenshot Data Pribadi PDDIKTI",
      ],
      href: "/pendaftaran/rpl",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Badge className="badge-academic badge-primary mb-6 px-4 py-2 text-base">
                Pendaftaran Mahasiswa Baru
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Pilih <span className="text-blue-600">Jalur Pendaftaran</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Pilih jalur pendaftaran yang sesuai dengan latar belakang pendidikan dan pengalaman Anda
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pathway Selection */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {pathways.map((pathway, index) => (
                <motion.div
                  key={pathway.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <Card
                    className={`border-2 ${pathway.borderColor} hover:shadow-xl transition-all duration-300 h-full`}
                  >
                    <CardHeader className={`${pathway.bgColor} border-b ${pathway.borderColor}`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 ${pathway.color} rounded-lg flex items-center justify-center`}>
                            <pathway.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-2xl text-gray-900">{pathway.title}</CardTitle>
                            <CardDescription className={`${pathway.textColor} font-medium`}>
                              {pathway.subtitle}
                            </CardDescription>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="p-6 flex flex-col h-full">
                      <p className="text-gray-600 text-lg mb-6 leading-relaxed">{pathway.description}</p>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-4">Keunggulan:</h4>
                        <div className="space-y-2">
                          {pathway.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-3">
                              <CheckCircle className={`w-5 h-5 ${pathway.textColor}`} />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Requirements Preview */}
                      <div className="mb-8">
                        <h4 className="font-semibold text-gray-900 mb-4">Persyaratan Dokumen:</h4>
                        <div className="space-y-2">
                          {pathway.requirements.slice(0, 3).map((req, idx) => (
                            <div key={idx} className="flex items-start space-x-3">
                              <FileText className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                              <span className="text-gray-600 text-sm">{req}</span>
                            </div>
                          ))}
                          {pathway.requirements.length > 3 && (
                            <p className="text-gray-500 text-sm italic">
                              +{pathway.requirements.length - 3} dokumen lainnya
                            </p>
                          )}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="mt-auto">
                        <Button
                          asChild
                          size="lg"
                          className={`w-full ${pathway.color} ${pathway.hoverColor} text-white`}
                        >
                          <Link href={pathway.href}>
                            Pilih Jalur Ini
                            <ArrowRight className="ml-2 w-5 h-5" />
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Informasi Penting</h2>
              <p className="text-xl text-gray-600">Hal-hal yang perlu Anda ketahui sebelum mendaftar</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border border-gray-200 hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Proses Cepat</h3>
                  <p className="text-gray-600 text-sm">
                    Pendaftaran online 24/7. Tim kami akan menghubungi Anda dalam 1x24 jam
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Bimbingan Penuh</h3>
                  <p className="text-gray-600 text-sm">
                    Konsultasi gratis dari tim SALUT Soul untuk memilih program yang tepat
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <FileText className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Dokumen Aman</h3>
                  <p className="text-gray-600 text-sm">
                    Semua dokumen tersimpan aman dengan enkripsi dan backup otomatis
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Pertanyaan Umum</h2>
            </motion.div>

            <div className="space-y-6">
              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Apa perbedaan jalur RPL dan Non-RPL?</h3>
                  <p className="text-gray-600">
                    Jalur Non-RPL untuk lulusan SMA/SMK yang memulai dari semester 1. Jalur RPL untuk yang memiliki
                    pengalaman kerja atau lulusan D3/S1 yang ingin alih kredit dengan waktu studi lebih singkat.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Apakah ada persyaratan khusus untuk FKIP?</h3>
                  <p className="text-gray-600">
                    Ya, untuk FKIP diperlukan dokumen tambahan seperti SK Pengangkatan Guru dan SK Mengajar dari Kepala
                    Sekolah. Dokumen ini akan diminta saat mengisi formulir pendaftaran.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Bagaimana cara upload dokumen?</h3>
                  <p className="text-gray-600">
                    Semua dokumen dapat diupload langsung melalui formulir online. Format yang diterima: PDF, JPG, JPEG,
                    PNG. Maksimal ukuran file 2MB per dokumen.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Butuh Bantuan Memilih?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Tim kami siap membantu Anda memilih jalur pendaftaran yang tepat sesuai dengan latar belakang Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-3">
                <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer">
                  <User className="w-5 h-5 mr-2" />
                  Konsultasi Gratis
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
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

"use client"

import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  DollarSign,
  FileText,
  Star,
  BookOpen,
  Target,
  Sparkles,
  CheckCircle,
  Loader2,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

const AnimatedSection = motion.section

interface ProgramStudi {
  id: string
  nama: string
  fakultas: string
  jenjang: string
  akreditasi: string
  biayaSemester: number
}

interface FacultyWithPrograms {
  id: string
  nama: string
  namaLengkap: string
  akreditasi: string
  programs: ProgramStudi[]
  programsLoaded: boolean
  programsLoading: boolean
  color: string
  bgColor: string
  borderColor: string
  description: string
}

export default function AkademikPage() {
  const { toast } = useToast()

  // Data fakultas statis - tidak perlu fetch
  const staticFaculties = [
    {
      id: "1",
      nama: "FHISP",
      namaLengkap: "Fakultas Hukum, Ilmu Sosial dan Politik",
      akreditasi: "A",
      description:
        "Fakultas yang mengembangkan ilmu sosial dan politik untuk membangun masyarakat yang demokratis dan berkeadilan.",
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
      borderColor: "border-blue-200",
    },
    {
      id: "2",
      nama: "FKIP",
      namaLengkap: "Fakultas Keguruan dan Ilmu Pendidikan",
      akreditasi: "A",
      description: "Fakultas yang mencetak tenaga pendidik profesional untuk berbagai jenjang pendidikan.",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
      borderColor: "border-emerald-200",
    },
    {
      id: "3",
      nama: "FST",
      namaLengkap: "Fakultas Sains dan Teknologi",
      akreditasi: "A",
      description: "Fakultas yang mengembangkan ilmu pengetahuan alam dan matematika untuk kemajuan teknologi.",
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-violet-50",
      borderColor: "border-purple-200",
    },
    {
      id: "4",
      nama: "FEB",
      namaLengkap: "Fakultas Ekonomi dan Bisnis",
      akreditasi: "A",
      description: "Fakultas yang mengembangkan ilmu ekonomi dan bisnis untuk pembangunan ekonomi nasional.",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
      borderColor: "border-amber-200",
    },
    {
      id: "5",
      nama: "SPs",
      namaLengkap: "Sekolah Pascasarjana",
      akreditasi: "A",
      description:
        "Unit penyelenggara program Magister (S2) dan Doktor (S3) Universitas Terbuka dengan sistem pembelajaran jarak jauh yang fleksibel dan berkualitas.",
      color: "from-red-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-red-50 to-pink-50",
      borderColor: "border-red-200",
    },
  ]

  const [faculties, setFaculties] = useState<FacultyWithPrograms[]>(
    staticFaculties.map((faculty) => ({
      ...faculty,
      programs: [],
      programsLoaded: false,
      programsLoading: false,
    })),
  )

  // Function untuk fetch program studi ketika card ditekan
  const fetchProgramStudi = async (fakultasNama: string, fakultasId: string) => {
    // Set loading state untuk fakultas ini
    setFaculties((prev) =>
      prev.map((faculty) => (faculty.id === fakultasId ? { ...faculty, programsLoading: true } : faculty)),
    )

    try {
      console.log("🔍 Fetching program studi for:", fakultasNama)
      const response = await fetch(`/api/program-studi?fakultas=${fakultasNama}`)
      const result = await response.json()

      if (!result.success) {
        throw new Error(result.message || "Failed to fetch program studi")
      }

      console.log("📋 Program Studi loaded:", result.data.length)

      // Update fakultas dengan program studi
      setFaculties((prev) =>
        prev.map((faculty) =>
          faculty.id === fakultasId
            ? {
              ...faculty,
              programs: result.data || [],
              programsLoaded: true,
              programsLoading: false,
            }
            : faculty,
        ),
      )
    } catch (error) {
      console.error("❌ Error fetching program studi:", error)

      // Reset loading state on error
      setFaculties((prev) =>
        prev.map((faculty) => (faculty.id === fakultasId ? { ...faculty, programsLoading: false } : faculty)),
      )

      toast({
        title: "Error",
        description: `Gagal memuat program studi untuk ${fakultasNama}`,
        variant: "destructive",
      })
    }
  }

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
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
    },
    {
      level: "D3",
      registration: "Rp 150.000",
      semester: "Rp 1.000.000 - Rp 1.400.000",
      note: "Tergantung jumlah SKS yang diambil",
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-gradient-to-br from-emerald-50 to-emerald-100",
    },
    {
      level: "S2",
      registration: "Rp 200.000",
      semester: "Rp 2.000.000 - Rp 2.500.000",
      note: "Tergantung program studi",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
    },
  ]

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Enhanced Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
          {/* Geometric Patterns */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-indigo-200/20 to-purple-200/20 rounded-full blur-2xl animate-pulse delay-500"></div>
          {/* Floating Elements */}
          <div className="absolute top-32 right-1/4 animate-bounce delay-300">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg rotate-45 opacity-60"></div>
          </div>
          <div className="absolute bottom-40 left-1/4 animate-bounce delay-700">
            <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-60"></div>
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
              <Badge className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-base font-medium rounded-full shadow-lg">
                <BookOpen className="w-4 h-4 mr-2" />
                Program Akademik
              </Badge>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight"
            >
              Jelajahi Program
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Akademik Terbaik
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            >
              Temukan berbagai fakultas dan program studi berkualitas yang tersedia di{" "}
              <span className="font-bold text-blue-600">Universitas Terbuka</span> untuk masa depan karier yang
              cemerlang
            </motion.p>
          </div>
        </div>
      </section>

      {/* Faculties Section */}
      <AnimatedSection
        className="py-24 bg-white relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
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
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <Badge className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-800 text-sm font-medium rounded-full mb-6">
                <Star className="w-4 h-4 mr-2" />
                Fakultas Unggulan
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Fakultas & <span className="text-purple-600">Program Studi</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Klik pada fakultas untuk melihat program studi yang tersedia
              </p>
            </div>

            <Accordion
              type="single"
              collapsible
              className="space-y-6"
              onValueChange={(value) => {
                if (value) {
                  const faculty = faculties.find((f) => f.id === value)
                  if (faculty && !faculty.programsLoaded && !faculty.programsLoading) {
                    fetchProgramStudi(faculty.nama, faculty.id)
                  }
                }
              }}
            >
              {faculties.map((faculty) => (
                <AccordionItem
                  key={faculty.id}
                  value={faculty.id}
                  className={cn(
                    "border-2 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300",
                    faculty.borderColor,
                    faculty.bgColor,
                  )}
                >
                  <AccordionTrigger className="px-8 py-6 hover:no-underline group">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center space-x-6">
                        <div
                          className={`w-16 h-16 bg-gradient-to-br ${faculty.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          <GraduationCap className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-left">
                          <h3 className="text-3xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                            {faculty.nama}
                          </h3>
                          <p className="text-gray-700 font-medium text-lg">{faculty.namaLengkap}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge
                          className={cn(
                            "px-4 py-2 text-white font-semibold shadow-lg",
                            faculty.akreditasi === "A"
                              ? "bg-gradient-to-r from-emerald-500 to-teal-500"
                              : "bg-gradient-to-r from-amber-500 to-orange-500",
                          )}
                        >
                          Akreditasi {faculty.akreditasi}
                        </Badge>
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${faculty.color} rounded-xl flex items-center justify-center shadow-lg`}
                        >
                          <BookOpen className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-8">
                    <div className="space-y-8">
                      <div className="bg-white/60 p-6 rounded-2xl">
                        <p className="text-gray-700 text-lg leading-relaxed">{faculty.description}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-2xl text-gray-900 mb-6 flex items-center">
                          <Target className="w-6 h-6 mr-3 text-purple-600" />
                          Program Studi Tersedia:
                        </h4>

                        {faculty.programsLoading ? (
                          <div className="flex items-center justify-center py-12">
                            <div className="text-center">
                              <Loader2 className="h-8 w-8 animate-spin text-blue-600 mx-auto mb-4" />
                              <p className="text-gray-600">Memuat program studi...</p>
                            </div>
                          </div>
                        ) : faculty.programs.length === 0 && faculty.programsLoaded ? (
                          <div className="text-center py-8">
                            <p className="text-gray-500">Belum ada program studi yang tersedia untuk fakultas ini.</p>
                          </div>
                        ) : faculty.programs.length === 0 ? (
                          <div className="text-center py-8 bg-blue-50 rounded-xl border-2 border-dashed border-blue-200">
                            <BookOpen className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                            <p className="text-blue-600 font-medium">Klik untuk memuat program studi...</p>
                          </div>
                        ) : (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {faculty.programs.map((program) => (
                              <Card
                                key={program.id}
                                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white/80 backdrop-blur-sm"
                              >
                                <CardContent className="p-6">
                                  <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                      <h5 className="font-bold text-gray-900 text-lg mb-2">{program.nama}</h5>
                                      <div className="space-y-1">
                                        <p className="text-gray-600 font-medium">Jenjang {program.jenjang}</p>
                                        <p className="text-sm text-gray-500">
                                          Biaya: {formatCurrency(program.biayaSemester)}/semester
                                        </p>
                                      </div>
                                    </div>
                                    <Badge
                                      className={cn(
                                        "ml-4 px-3 py-1 text-white font-semibold",
                                        program.akreditasi === "A"
                                          ? "bg-gradient-to-r from-emerald-500 to-teal-500"
                                          : program.akreditasi === "B"
                                            ? "bg-gradient-to-r from-amber-500 to-orange-500"
                                            : "bg-gradient-to-r from-gray-500 to-slate-500",
                                      )}
                                    >
                                      {program.akreditasi === "-" ? "Baru" : program.akreditasi}
                                    </Badge>
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        )}
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
        className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Background Elements */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 text-sm font-medium rounded-full mb-6">
                <FileText className="w-4 h-4 mr-2" />
                Persyaratan
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Persyaratan <span className="text-emerald-600">Pendaftaran</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Dokumen dan persyaratan yang harus dipenuhi untuk menjadi mahasiswa Universitas Terbuka
              </p>
            </div>
            <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-8">
                <CardTitle className="flex items-center space-x-4 text-2xl">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <span>Persyaratan Umum</span>
                </CardTitle>
                <CardDescription className="text-emerald-100 text-lg mt-2">
                  Dokumen dan persyaratan yang harus dipenuhi untuk mendaftar sebagai mahasiswa UT
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {requirements.map((requirement, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl hover:shadow-md transition-shadow duration-200"
                    >
                      <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700 font-medium leading-relaxed">{requirement}</p>
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
        className="py-24 bg-white relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 text-sm font-medium rounded-full mb-6">
                <DollarSign className="w-4 h-4 mr-2" />
                Biaya Kuliah
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Struktur <span className="text-amber-600">Biaya Kuliah</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Investasi pendidikan yang terjangkau dengan kualitas terjamin untuk masa depan yang lebih cerah
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {feeStructure.map((fee, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden relative"
                >
                  <div className={`absolute inset-0 ${fee.bgColor} opacity-60`}></div>
                  <CardHeader className="relative z-10 p-8">
                    <CardTitle className="flex items-center space-x-4 text-2xl">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${fee.color} rounded-2xl flex items-center justify-center shadow-lg`}
                      >
                        <DollarSign className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-gray-900">Jenjang {fee.level}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10 p-8 pt-0 space-y-6">
                    <div className="bg-white/80 p-6 rounded-2xl">
                      <p className="font-bold text-gray-900 text-lg mb-2">Biaya Registrasi:</p>
                      <p className="text-3xl font-bold text-blue-600">{fee.registration}</p>
                    </div>
                    <div className="bg-white/80 p-6 rounded-2xl">
                      <p className="font-bold text-gray-900 text-lg mb-2">Biaya per Semester:</p>
                      <p className="text-3xl font-bold text-emerald-600">{fee.semester}</p>
                    </div>
                    <div className="bg-white/80 p-4 rounded-xl border-l-4 border-amber-400">
                      <p className="text-gray-700 font-medium">{fee.note}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Card className="bg-gradient-to-br from-yellow-50 to-amber-50 border-2 border-yellow-200 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-yellow-800 text-xl mb-4">Catatan Penting:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "Biaya dapat berubah sesuai kebijakan UT pusat",
                        "Biaya semester tergantung jumlah SKS yang diambil (minimal 12 SKS)",
                        "Tersedia program beasiswa untuk mahasiswa berprestasi",
                        "Pembayaran dapat dilakukan secara bertahap",
                      ].map((note, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                          <span className="text-yellow-700 font-medium">{note}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-white text-base font-medium rounded-full mb-8 border border-white/20">
            <Sparkles className="w-4 h-4 mr-2" />
            Mulai Perjalanan Anda
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Siap Memulai{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
              Pendidikan Anda?
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Pilih program studi yang sesuai dengan minat Anda dan mulai perjalanan pendidikan tinggi bersama UT
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white text-lg px-10 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <Link href="/pendaftaran">
                <GraduationCap className="w-5 h-5 mr-2" />
                Daftar Sekarang
              </Link>
            </Button>
            <Button
              size="lg"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white text-lg px-10 py-4 rounded-full border-2 border-white/30 hover:border-white/50 transition-all duration-300"
              asChild
            >
              <Link href="/kontak">Konsultasi Gratis</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

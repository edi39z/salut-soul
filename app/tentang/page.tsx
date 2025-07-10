/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client"
import Image from "next/image"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Eye, Quote, Award, MapPin, Phone, Mail, Clock, Users, BookOpen, Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { Poppins } from "next/font/google"
import { AnimatedSection } from "@/components/ui/animated-section"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const fontHeading = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export default function TentangPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Enhanced Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50"></div>
          {/* Geometric Patterns */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-orange-200/30 to-red-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-yellow-200/20 to-amber-200/20 rounded-full blur-2xl animate-pulse delay-500"></div>
          {/* Floating Elements */}
          <div className="absolute top-32 right-1/4 animate-bounce delay-300">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg rotate-45 opacity-60"></div>
          </div>
          <div className="absolute bottom-40 left-1/4 animate-bounce delay-700">
            <div className="w-6 h-6 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-60"></div>
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
              <Badge className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white text-base font-medium rounded-full shadow-lg">
                <Star className="w-4 h-4 mr-2" />
                Tentang Kami
              </Badge>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={cn("text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight", fontHeading.className)}
            >
              Mengenal{" "}
              <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                SALUT Soul
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            >
              Mitra terpercaya dalam perjalanan pendidikan tinggi Anda menuju masa depan yang lebih cerah
            </motion.p>
          </div>
        </div>
      </section>

      {/* About UT Section */}
      <AnimatedSection>
        <section className="py-20 bg-white relative overflow-hidden">
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
              <div className="text-center mb-16">
                <Badge className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-6">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Universitas Terbuka
                </Badge>
                <h2 className={cn("text-4xl md:text-5xl font-bold text-gray-900 mb-8", fontHeading.className)}>
                  Apa itu <span className="text-blue-600">Universitas Terbuka?</span>
                </h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="prose prose-lg max-w-none text-gray-600">
                    <p className="text-lg leading-relaxed mb-6">
                      <strong className="text-blue-600">Universitas Terbuka (UT)</strong> adalah Perguruan Tinggi Negeri
                      ke-45 di Indonesia yang menerapkan sistem belajar jarak jauh dan terbuka. Didirikan pada tahun
                      1984, UT telah menjadi pionir dalam pendidikan tinggi jarak jauh di Indonesia.
                    </p>
                    <p className="text-lg leading-relaxed mb-6">
                      Dengan sistem pembelajaran yang fleksibel, UT memungkinkan siapa saja untuk mengenyam pendidikan
                      tinggi tanpa terbatas oleh waktu, tempat, usia, tahun ijazah, dan latar belakang pendidikan.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: Users, title: "600,000+", desc: "Mahasiswa Aktif", color: "from-blue-500 to-blue-600" },
                    { icon: Award, title: "Akreditasi A", desc: "BAN-PT", color: "from-emerald-500 to-emerald-600" },
                    { icon: BookOpen, title: "49", desc: "Program Studi", color: "from-amber-500 to-amber-600" },
                    { icon: Target, title: "40+ Tahun", desc: "Pengalaman", color: "from-purple-500 to-purple-600" },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4`}
                      >
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">{stat.title}</div>
                      <div className="text-gray-600 font-medium">{stat.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* About SALUT Section */}
      <AnimatedSection>
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-indigo-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 text-sm font-medium rounded-full mb-8">
                <Target className="w-4 h-4 mr-2" />
                SALUT
              </Badge>
              <h2 className={cn("text-4xl md:text-5xl font-bold text-gray-900 mb-8", fontHeading.className)}>
                Apa itu <span className="text-blue-600">SALUT?</span>
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
                <p className="text-xl leading-relaxed">
                  <strong className="text-blue-600">SALUT (Sentra Layanan Universitas Terbuka)</strong> adalah unit
                  layanan UT yang tersebar di berbagai daerah untuk memberikan dukungan akademik dan administratif
                  kepada mahasiswa UT.
                </p>
                <p className="text-lg leading-relaxed">
                  Melalui SALUT, mahasiswa dapat mengakses berbagai layanan seperti tutorial tatap muka, bimbingan
                  akademik, konsultasi, dan layanan administratif lainnya. Keberadaan SALUT memastikan bahwa mahasiswa
                  UT di seluruh Indonesia mendapatkan dukungan yang optimal.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* About SALUT Soul Section */}
      <AnimatedSection>
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 text-sm font-medium rounded-full mb-8">
                <Star className="w-4 h-4 mr-2" />
                SALUT Soul
              </Badge>
              <h2 className={cn("text-4xl md:text-5xl font-bold text-gray-900 mb-8", fontHeading.className)}>
                <span className="text-amber-600">SALUT Soul:</span> Inovasi Layanan Pendidikan
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
                <p className="text-xl leading-relaxed">
                  <strong className="text-amber-600">SALUT Soul</strong> adalah inovasi terbaru dalam layanan pendidikan
                  tinggi jarak jauh yang menggabungkan teknologi digital dengan pendekatan personal.
                </p>
                <p className="text-lg leading-relaxed">
                  Dengan semangat "Soul" yang berarti jiwa, kami berkomitmen memberikan layanan yang tidak hanya
                  profesional tetapi juga penuh empati dan dedikasi. SALUT Soul menjadi jembatan antara impian
                  pendidikan Anda dengan kenyataan meraih gelar sarjana dari Universitas Terbuka.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Vision Mission Section */}
      <AnimatedSection>
        <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className={cn("text-4xl md:text-5xl font-bold text-gray-900 mb-6", fontHeading.className)}>
                  Visi & <span className="text-emerald-600">Misi SALUT Soul</span>
                </h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-amber-50 to-orange-50 overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-2xl"></div>
                  <CardHeader className="relative z-10 pb-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                        <Eye className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-3xl font-bold text-gray-800">Visi</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="relative z-10 pt-0">
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Menjadi pusat layanan pendidikan tinggi jarak jauh terdepan yang memberikan akses pendidikan
                      berkualitas, terjangkau, dan mudah diakses oleh seluruh masyarakat Indonesia untuk menciptakan
                      generasi yang berdaya saing global.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-emerald-50 to-teal-50 overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-2xl"></div>
                  <CardHeader className="relative z-10 pb-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                        <Target className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-3xl font-bold text-gray-800">Misi</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="relative z-10 pt-0">
                    <div className="space-y-4 text-gray-700">
                      {[
                        "Memberikan layanan pendaftaran dan informasi akademik yang mudah dan terpercaya",
                        "Memfasilitasi akses pendidikan tinggi bagi seluruh lapisan masyarakat",
                        "Memberikan bimbingan dan dukungan akademik yang berkualitas",
                        "Mengembangkan inovasi dalam layanan pendidikan jarak jauh",
                      ].map((mission, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-lg">{mission}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Enhanced Leadership Message */}
      <AnimatedSection>
        <section className="py-24 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-64 h-64 border border-white/20 rounded-full"></div>
            <div className="absolute bottom-20 right-20 w-48 h-48 border border-white/10 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/5 rounded-full"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className={cn("text-4xl md:text-5xl font-bold text-white mb-4", fontHeading.className)}>
                  Kata Sambutan
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full"></div>
              </div>
              <Card className="border-0 shadow-2xl bg-white overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-5">
                    {/* Image Section */}
                    <div className="lg:col-span-2 relative bg-gradient-to-br from-slate-100 to-gray-200 p-8 flex items-center justify-center">
                      <div className="text-center relative">
                        <div className="w-80 mx-auto mb-8 relative">
                          <img
                            src="/images/1.png"
                            alt="Dr. Sanco Simanullang - Ketua SALUT Soul"
                            className="w-full h-auto object-contain rounded-3xl shadow-2xl"
                          />
                        </div>
                        <div className="space-y-4">
                          <div className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-full font-semibold text-lg shadow-lg">
                            Kepala Sentra Layanan Salut Soul
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Content Section */}
                    <div className="lg:col-span-3 p-12 bg-gradient-to-br from-white to-gray-50">
                      <div className="h-full flex flex-col justify-center">
                        <div className="mb-8">
                          <Quote className="w-16 h-16 text-amber-500 opacity-60" />
                        </div>
                        <blockquote className="text-2xl md:text-3xl text-gray-800 leading-relaxed font-medium mb-8 relative">
                          <span className="text-6xl text-amber-500 absolute -top-6 -left-4 font-serif opacity-30">
                            "
                          </span>
                          <span className="relative z-10">
                            Selamat datang di SALUT Soul! Kami berkomitmen untuk menjadi mitra terbaik dalam perjalanan
                            pendidikan Anda. Dengan dukungan teknologi modern dan tim yang berpengalaman, kami siap
                            membantu Anda meraih impian pendidikan tinggi yang berkualitas dan terjangkau.
                          </span>
                        </blockquote>
                        <div className="bg-amber-50 border-l-4 border-amber-400 p-6 mb-8 rounded-r-lg">
                          <p className="text-lg text-gray-700 italic">
                            "Mari bersama-sama membangun masa depan yang lebih cerah melalui pendidikan yang berkualitas
                            dan terjangkau untuk semua."
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Location Section */}
      <AnimatedSection>
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 text-sm font-medium rounded-full mb-6">
                  <MapPin className="w-4 h-4 mr-2" />
                  Lokasi & Kontak
                </Badge>
                <h2 className={cn("text-4xl md:text-5xl font-bold text-gray-900 mb-6", fontHeading.className)}>
                  Kunjungi <span className="text-blue-600">Kantor Kami</span>
                </h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50 overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-2xl"></div>
                  <CardHeader className="relative z-10">
                    <CardTitle className="flex items-center space-x-3 text-2xl">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <span>Alamat Kantor</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10 space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-4 p-4 bg-white/60 rounded-xl">
                        <MapPin className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-bold text-gray-900 text-lg">SALUT Soul Medan</p>
                          <p className="text-gray-600">
                            Jl. Ncole Permai No.18
                            <br />
                            Kemenangan Tani, Kec. Medan Tuntungan
                            <br />
                            Kota Medan, Sumatera Utara 20134
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 p-4 bg-white/60 rounded-xl">
                        <Phone className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                        <div>
                          <p className="font-bold text-gray-900">Telepon</p>
                          <p className="text-gray-600">+62 812-3456-7890</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 p-4 bg-white/60 rounded-xl">
                        <Mail className="w-5 h-5 text-amber-500 flex-shrink-0" />
                        <div>
                          <p className="font-bold text-gray-900">Email</p>
                          <p className="text-gray-600">info@salutsoul.ac.id</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4 p-4 bg-white/60 rounded-xl">
                        <Clock className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-bold text-gray-900 mb-2">Jam Operasional</p>
                          <div className="text-gray-600 space-y-1">
                            <p>Senin - Jumat: 08:00 - 17:00 WIB</p>
                            <p>Sabtu: 08:00 - 14:00 WIB</p>
                            <p>Minggu: Tutup</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-200/30 to-slate-200/30 rounded-full blur-2xl"></div>

                  <CardHeader className="relative z-10 px-6 pt-6">
                    <CardTitle className="text-2xl font-semibold text-gray-900">Peta Lokasi</CardTitle>
                  </CardHeader>

                  <CardContent className="relative z-10 px-6 pb-6 pt-0 space-y-6">
                    {/* Gambar Lokasi */}
                    <div
                      className="w-full h-80 rounded-2xl overflow-hidden cursor-pointer bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
                      onClick={() => window.open("https://maps.app.goo.gl/dUmmZ3b3CvDH35MP6", "_blank")}
                    >
                      <Image
                        src="/images/lokasi.png"
                        alt="Lokasi SALUT Soul"
                        width={1200}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/10 hover:bg-black/20 transition" />
                    </div>

                    {/* Informasi Alamat */}
                    <div className="text-center">
                      <p className="text-gray-600 font-semibold text-lg mb-2">Klik gambar atau tombol untuk membuka Google Maps</p>
                      <p className="text-sm text-gray-500 leading-snug">
                        Jl. Ncole Permai No.18
                        <br />
                        Medan Tuntungan, Medan
                      </p>
                    </div>

                    {/* Tombol */}
                    <Button
                      className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                      onClick={() => window.open("https://maps.app.goo.gl/dUmmZ3b3CvDH35MP6", "_blank")}
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      Buka di Google Maps
                    </Button>
                  </CardContent>
                </Card>


              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <Footer />
    </div>
  )
}

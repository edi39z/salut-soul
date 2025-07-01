import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Eye, Quote, Award } from "lucide-react"
import { cn } from "@/lib/utils"
import { Poppins } from "next/font/google"
import { AnimatedSection } from "@/components/ui/animated-section"
import { MapPin, Phone, Mail } from "lucide-react"

const fontHeading = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export default function TentangPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className={cn("text-4xl md:text-5xl font-bold text-gray-900 mb-6", fontHeading.className)}>
              Tentang <span className="text-amber-600">SALUT Soul</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Mengenal lebih dekat Universitas Terbuka, SALUT, dan SALUT Soul sebagai mitra pendidikan tinggi Anda
            </p>
          </div>
        </div>
      </section>

      {/* About UT Section */}
      <AnimatedSection>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className={cn("text-3xl font-bold text-gray-900 mb-8 text-center", fontHeading.className)}>
                Apa itu Universitas Terbuka?
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="text-lg leading-relaxed mb-6">
                  <strong>Universitas Terbuka (UT)</strong> adalah Perguruan Tinggi Negeri ke-45 di Indonesia yang
                  menerapkan sistem belajar jarak jauh dan terbuka. Didirikan pada tahun 1984, UT telah menjadi pionir
                  dalam pendidikan tinggi jarak jauh di Indonesia dengan komitmen memberikan akses pendidikan tinggi
                  yang berkualitas kepada seluruh masyarakat Indonesia.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Dengan sistem pembelajaran yang fleksibel, UT memungkinkan siapa saja untuk mengenyam pendidikan
                  tinggi tanpa terbatas oleh waktu, tempat, usia, tahun ijazah, dan latar belakang pendidikan. UT telah
                  terakreditasi A (Unggul) oleh BAN-PT dan diakui secara internasional.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* About SALUT Section */}
      <AnimatedSection>
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className={cn("text-3xl font-bold text-gray-900 mb-8 text-center", fontHeading.className)}>
                Apa itu SALUT?
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="text-lg leading-relaxed mb-6">
                  <strong>SALUT (Sentra Layanan Universitas Terbuka)</strong> adalah unit layanan UT yang tersebar di
                  berbagai daerah untuk memberikan dukungan akademik dan administratif kepada mahasiswa UT. SALUT
                  berperan sebagai perpanjangan tangan UT di daerah untuk memfasilitasi kebutuhan mahasiswa dalam proses
                  pembelajaran.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Melalui SALUT, mahasiswa dapat mengakses berbagai layanan seperti tutorial tatap muka, bimbingan
                  akademik, konsultasi, dan layanan administratif lainnya. Keberadaan SALUT memastikan bahwa mahasiswa
                  UT di seluruh Indonesia mendapatkan dukungan yang optimal dalam menyelesaikan studi mereka.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* About SALUT Soul Section */}
      <AnimatedSection>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className={cn("text-3xl font-bold text-gray-900 mb-8 text-center", fontHeading.className)}>
                SALUT Soul: Inovasi Layanan Pendidikan
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="text-lg leading-relaxed mb-6">
                  <strong>SALUT Soul</strong> adalah inovasi terbaru dalam layanan pendidikan tinggi jarak jauh yang
                  menggabungkan teknologi digital dengan pendekatan personal. Kami hadir sebagai mitra terpercaya untuk
                  membantu calon mahasiswa dan mahasiswa UT dalam meraih cita-cita pendidikan mereka.
                </p>
                <p className="text-lg leading-relaxed mb-6">
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
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className={cn("text-3xl font-bold text-gray-900 mb-12 text-center", fontHeading.className)}>
                Visi & Misi SALUT Soul
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border border-gray-200 hover:shadow-xl transition-all duration-300 bg-white">
                  <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <Eye className="w-8 h-8 text-amber-600" />
                      <CardTitle className="text-2xl text-gray-800">Visi</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Menjadi pusat layanan pendidikan tinggi jarak jauh terdepan yang memberikan akses pendidikan
                      berkualitas, terjangkau, dan mudah diakses oleh seluruh masyarakat Indonesia untuk menciptakan
                      generasi yang berdaya saing global.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-gray-200 hover:shadow-xl transition-all duration-300 bg-white">
                  <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <Target className="w-8 h-8 text-emerald-600" />
                      <CardTitle className="text-2xl text-gray-800">Misi</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-3 text-gray-700">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p>Memberikan layanan pendaftaran dan informasi akademik yang mudah dan terpercaya</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p>Memfasilitasi akses pendidikan tinggi bagi seluruh lapisan masyarakat</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p>Memberikan bimbingan dan dukungan akademik yang berkualitas</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p>Mengembangkan inovasi dalam layanan pendidikan jarak jauh</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Enhanced Leadership Message - Elegant & Formal Design */}
      <AnimatedSection>
        <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
          {/* Subtle geometric patterns */}
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
                <p className="text-gray-300 mt-4 text-lg">Pesan dari Pemimpin Kami</p>
              </div>

              <Card className="border-0 shadow-2xl bg-white overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-5">
                    {/* Image Section - Larger & Cleaner */}
                    <div className="lg:col-span-2 relative bg-gradient-to-br from-slate-100 to-gray-200 p-8 flex items-center justify-center">
                      <div className="text-center relative">
                        {/* Large Professional Photo - Fixed Cropping Issue */}
                        <div className="w-80 mx-auto mb-8 relative">
                          <img
                            src="/images/1.png"
                            alt="Dr. Sanco Simanullang - Ketua SALUT Soul"
                            className="w-full h-auto object-contain rounded-3xl shadow-2xl"
                          />
                          {/* Professional Badge */}
                          <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl">
                            <Award className="w-10 h-10 text-white" />
                          </div>
                        </div>

                        {/* Name & Title - Separate from Image */}
                        <div className="space-y-4">
                          <h3 className="text-3xl font-bold text-gray-900">Dr. Sanco Simanullang</h3>
                          <p className="text-xl text-gray-600">S.T., M.T, IPM, ASEAN Eng.</p>
                          <div className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-full font-semibold text-lg shadow-lg">
                            Ketua SALUT Soul
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content Section - Professional Layout */}
                    <div className="lg:col-span-3 p-12 bg-gradient-to-br from-white to-gray-50">
                      <div className="h-full flex flex-col justify-center">
                        {/* Quote Icon */}
                        <div className="mb-8">
                          <Quote className="w-16 h-16 text-amber-500 opacity-60" />
                        </div>

                        {/* Main Quote */}
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

                        {/* Secondary Message */}
                        <div className="bg-amber-50 border-l-4 border-amber-400 p-6 mb-8 rounded-r-lg">
                          <p className="text-lg text-gray-700 italic">
                            "Mari bersama-sama membangun masa depan yang lebih cerah melalui pendidikan yang berkualitas
                            dan terjangkau untuk semua."
                          </p>
                        </div>

                        {/* Professional Details */}
                        <div className="border-t border-gray-200 pt-8">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex items-start space-x-4">
                              <div className="w-3 h-16 bg-gradient-to-b from-amber-400 to-orange-500 rounded-full flex-shrink-0"></div>
                              <div>
                                <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold mb-2">
                                  Pengalaman
                                </p>
                                <p className="text-gray-700">
                                  Lebih dari 15 tahun di bidang pendidikan tinggi dan teknologi pendidikan
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-4">
                              <div className="w-3 h-16 bg-gradient-to-b from-emerald-400 to-teal-500 rounded-full flex-shrink-0"></div>
                              <div>
                                <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold mb-2">
                                  Visi Kepemimpinan
                                </p>
                                <p className="text-gray-700">
                                  Mencerdaskan bangsa melalui akses pendidikan tinggi yang merata dan berkualitas
                                </p>
                              </div>
                            </div>
                          </div>
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
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className={cn("text-3xl font-bold text-gray-900 mb-12 text-center", fontHeading.className)}>
                Lokasi & Kontak
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MapPin className="w-6 h-6 text-amber-600" />
                      <span>Alamat Kantor</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                      <div>
                        <p className="font-medium">SALUT Soul Jakarta</p>
                        <p className="text-gray-600">
                          Jl. Pendidikan No. 123
                          <br />
                          Jakarta Selatan 12345
                          <br />
                          DKI Jakarta, Indonesia
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="font-medium">Telepon</p>
                        <p className="text-gray-600">+62 812-3456-7890</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-gray-600">info@salutsoul.ac.id</p>
                      </div>
                    </div>
                    <div className="pt-4">
                      <p className="font-medium mb-2">Jam Operasional:</p>
                      <p className="text-gray-600">
                        Senin - Jumat: 08:00 - 17:00 WIB
                        <br />
                        Sabtu: 08:00 - 14:00 WIB
                        <br />
                        Minggu: Tutup
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle>Peta Lokasi</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-500">Google Maps akan ditampilkan di sini</p>
                        <p className="text-sm text-gray-400 mt-1">
                          Embed Google Maps dengan koordinat lokasi SALUT Soul
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-slate-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className={cn("text-3xl md:text-4xl font-bold text-white mb-4", fontHeading.className)}>
            Siap Bergabung dengan Kami?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Mulai perjalanan pendidikan Anda bersama SALUT Soul dan raih masa depan yang lebih cerah
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white" asChild>
              <Link href="/pendaftaran">Daftar Sekarang</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-gray-900 bg-transparent transition-colors"
            >
              <Link href="/kontak">Hubungi Kami</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

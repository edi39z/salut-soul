/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client"
import Image from "next/image"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Eye, Quote, Award, MapPin, Phone, Mail, Clock, Users, BookOpen } from "lucide-react"
import { cn } from "@/lib/utils"
import { Poppins } from "next/font/google"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Button } from "@/components/ui/button"

const fontHeading = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export default function TentangPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">



        {/* About UT Section */}
        <AnimatedSection>
          <section className="py-20 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">

                  <h2 className={cn("text-4xl md:text-5xl font-bold text-slate-800 mb-8", fontHeading.className)}>
                    Apa itu <span className="text-[#002F86]">Universitas Terbuka?</span>
                  </h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="prose prose-lg max-w-none text-slate-600">
                      <p className="text-lg leading-relaxed mb-6 font-medium">
                        <strong className="text-[#002F86] font-bold">Universitas Terbuka (UT)</strong> adalah Perguruan
                        Tinggi Negeri ke-45 di Indonesia yang menerapkan sistem belajar jarak jauh dan terbuka.
                        Didirikan pada tahun 1984, UT telah menjadi pionir dalam pendidikan tinggi jarak jauh di
                        Indonesia.
                      </p>
                      <p className="text-lg leading-relaxed mb-6 font-medium">
                        Dengan sistem pembelajaran yang fleksibel, UT memungkinkan siapa saja untuk mengenyam pendidikan
                        tinggi tanpa terbatas oleh waktu, tempat, usia, tahun ijazah, dan latar belakang pendidikan.
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { icon: Users, title: "600,000+", desc: "Mahasiswa Aktif", color: "from-[#002F86] to-blue-600" },
                      { icon: Award, title: "Akreditasi A", desc: "BAN-PT", color: "from-[#FFD700] to-yellow-500" },
                      { icon: BookOpen, title: "49", desc: "Program Studi", color: "from-[#002F86] to-blue-600" },
                      { icon: Target, title: "40+ Tahun", desc: "Pengalaman", color: "from-[#FFD700] to-yellow-500" },
                    ].map((stat, index) => (
                      <div
                        key={index}
                        className="bg-white p-6 rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4`}
                        >
                          <stat.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-2xl font-bold text-slate-800 mb-1">{stat.title}</div>
                        <div className="text-slate-600 font-semibold">{stat.desc}</div>
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
          <section className="py-20 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">

                <h2 className={cn("text-4xl md:text-5xl font-bold text-slate-800 mb-8", fontHeading.className)}>
                  Apa itu <span className="text-[#002F86]">SALUT?</span>
                </h2>
                <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
                  <p className="text-xl leading-relaxed font-medium">
                    <strong className="text-[#002F86] font-bold">SALUT (Sentra Layanan Universitas Terbuka)</strong>{" "}
                    adalah unit layanan UT yang tersebar di berbagai daerah untuk memberikan dukungan akademik dan
                    administratif kepada mahasiswa UT.
                  </p>
                  <p className="text-lg leading-relaxed font-medium">
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

                <h2 className={cn("text-4xl md:text-5xl font-bold text-slate-800 mb-8", fontHeading.className)}>
                  <span className="text-[#002F86]">SALUT Soul:</span> Inovasi Layanan Pendidikan
                </h2>
                <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
                  <p className="text-xl leading-relaxed font-medium">
                    <strong className="text-[#002F86] font-bold">SALUT Soul</strong> adalah inovasi terbaru dalam
                    layanan pendidikan tinggi jarak jauh yang menggabungkan teknologi digital dengan pendekatan
                    personal.
                  </p>
                  <p className="text-lg leading-relaxed font-medium">
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
          <section className="py-20 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className={cn("text-4xl md:text-5xl font-bold text-slate-800 mb-6", fontHeading.className)}>
                    Visi & <span className="text-[#002F86]">Misi SALUT Soul</span>
                  </h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white overflow-hidden relative">
                    <CardHeader className="relative z-10 pb-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-16 h-16 bg-[#002F86] rounded-2xl flex items-center justify-center shadow-lg">
                          <Eye className="w-8 h-8 text-white" />
                        </div>
                        <CardTitle className="text-3xl font-bold text-slate-800">Visi</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="relative z-10 pt-0">
                      <p className="text-slate-600 text-lg leading-relaxed font-medium">
                        Menjadi pusat layanan pendidikan tinggi jarak jauh terdepan yang memberikan akses pendidikan
                        berkualitas, terjangkau, dan mudah diakses oleh seluruh masyarakat Indonesia untuk menciptakan
                        generasi yang berdaya saing global.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white overflow-hidden relative">
                    <CardHeader className="relative z-10 pb-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-16 h-16 bg-[#FFD700] rounded-2xl flex items-center justify-center shadow-lg">
                          <Target className="w-8 h-8 text-[#002F86]" />
                        </div>
                        <CardTitle className="text-3xl font-bold text-slate-800">Misi</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="relative z-10 pt-0">
                      <div className="space-y-4 text-slate-600">
                        {[
                          "Memberikan layanan pendaftaran dan informasi akademik yang mudah dan terpercaya",
                          "Memfasilitasi akses pendidikan tinggi bagi seluruh lapisan masyarakat",
                          "Memberikan bimbingan dan dukungan akademik yang berkualitas",
                          "Mengembangkan inovasi dalam layanan pendidikan jarak jauh",
                        ].map((mission, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-[#002F86] rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-lg font-medium">{mission}</p>
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
          <section className="py-24 bg-[#002F86] relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className={cn("text-4xl md:text-5xl font-bold text-white mb-4", fontHeading.className)}>
                    Kata Sambutan
                  </h2>
                  <div className="w-24 h-1 bg-[#FFD700] mx-auto rounded-full"></div>
                </div>
                <Card className="border-0 shadow-2xl bg-white overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-5">
                      {/* Image Section */}
                      <div className="lg:col-span-2 relative bg-slate-50 p-8 flex items-center justify-center">
                        <div className="text-center relative">
                          <div className="w-80 mx-auto mb-8 relative">
                            <img
                              src="/images/1.png"
                              alt="Dr. Sanco Simanullang - Ketua SALUT Soul"
                              className="w-full h-auto object-contain rounded-3xl shadow-2xl"
                            />
                          </div>
                          <div className="space-y-4">
                            <div className="inline-block bg-[#002F86] text-white px-6 py-2 rounded-full font-semibold text-lg shadow-lg">
                              Kepala Sentra Layanan Salut Soul
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Content Section */}
                      <div className="lg:col-span-3 p-12 bg-white">
                        <div className="h-full flex flex-col justify-center">
                          <div className="mb-8">
                            <Quote className="w-16 h-16 text-[#FFD700] opacity-60" />
                          </div>
                          <blockquote className="text-2xl md:text-3xl text-slate-700 leading-relaxed font-medium mb-8 relative">
                            <span className="text-6xl text-[#FFD700] absolute -top-6 -left-4 font-serif opacity-30">
                              "
                            </span>
                            <span className="relative z-10">
                              Selamat datang di SALUT Soul! Kami berkomitmen untuk menjadi mitra terbaik dalam
                              perjalanan pendidikan Anda. Dengan dukungan teknologi modern dan tim yang berpengalaman,
                              kami siap membantu Anda meraih impian pendidikan tinggi yang berkualitas dan terjangkau.
                            </span>
                          </blockquote>
                          <div className="bg-[#FFD700]/10 border-l-4 border-[#FFD700] p-6 mb-8 rounded-r-lg">
                            <p className="text-lg text-slate-600 italic font-medium">
                              "Mari bersama-sama membangun masa depan yang lebih cerah melalui pendidikan yang
                              berkualitas dan terjangkau untuk semua."
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
          <section className="py-20 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">

                  <h2 className={cn("text-4xl md:text-5xl font-bold text-slate-800 mb-6", fontHeading.className)}>
                    Kunjungi <span className="text-[#002F86]">Kantor Kami</span>
                  </h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white overflow-hidden relative">
                    <CardHeader className="relative z-10">
                      <CardTitle className="flex items-center space-x-3 text-2xl">
                        <div className="w-12 h-12 bg-[#002F86] rounded-xl flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-slate-800">Alamat Kantor</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10 space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-start space-x-4 p-4 bg-slate-50 rounded-xl">
                          <MapPin className="w-5 h-5 text-[#002F86] mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-bold text-slate-800 text-lg">SALUT Soul Medan</p>
                            <p className="text-slate-600 font-medium">
                              Jl. Ncole Permai No.18
                              <br />
                              Kemenangan Tani, Kec. Medan Tuntungan
                              <br />
                              Kota Medan, Sumatera Utara 20134
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-xl">
                          <Phone className="w-5 h-5 text-[#FFD700] flex-shrink-0" />
                          <div>
                            <p className="font-bold text-slate-800">Telepon</p>
                            <p className="text-slate-600 font-medium">+62 822-5961-6782</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-xl">
                          <Mail className="w-5 h-5 text-[#002F86] flex-shrink-0" />
                          <div>
                            <p className="font-bold text-slate-800">Email</p>
                            <p className="text-slate-600 font-medium">salutsoul18@gmail.com</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4 p-4 bg-slate-50 rounded-xl">
                          <Clock className="w-5 h-5 text-[#FFD700] mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-bold text-slate-800 mb-2">Jam Operasional</p>
                            <div className="text-slate-600 space-y-1 font-medium">
                              <p>Senin - Jumat: 08:00 - 17:00 WIB</p>
                              <p>Sabtu: 08:00 - 14:00 WIB</p>
                              <p>Minggu: Tutup</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white overflow-hidden relative">
                    <CardHeader className="relative z-10 px-6 pt-6">
                      <CardTitle className="text-2xl font-semibold text-slate-800">Peta Lokasi</CardTitle>
                    </CardHeader>

                    <CardContent className="relative z-10 px-6 pb-6 pt-0 space-y-6">
                      {/* Gambar Lokasi */}
                      <div
                        className="w-full h-80 rounded-2xl overflow-hidden cursor-pointer bg-slate-50 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
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
                        <p className="text-slate-600 font-semibold text-lg mb-2">
                          Klik gambar atau tombol untuk membuka Google Maps
                        </p>
                        <p className="text-sm text-slate-500 leading-snug font-medium">
                          Jl. Ncole Permai No.18
                          <br />
                          Medan Tuntungan, Medan
                        </p>
                      </div>

                      {/* Tombol */}
                      <Button
                        className="w-full bg-[#002F86] hover:bg-[#FFD700] hover:text-[#002F86] text-white shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
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
      </main>
    </div>
  )
}

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Eye, Users, MapPin, Phone, Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import { Poppins } from "next/font/google"
import { AnimatedSection } from "@/components/ui/animated-section"

const fontHeading = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export default function TentangPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="font-bold text-xl text-gray-900">SALUT Soul</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Beranda
              </Link>
              <Link href="/tentang" className="text-primary font-medium">
                Tentang Kami
              </Link>
              <Link href="/akademik" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Akademik
              </Link>
              <Link href="/kontak" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Kontak
              </Link>
              <Button asChild variant="secondary">
                <Link href="/pendaftaran">Daftar Sekarang</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className={cn("text-4xl md:text-5xl font-bold text-gray-900 mb-6", fontHeading.className)}>
              Tentang <span className="text-primary">SALUT Soul</span>
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
                  Dengan semangat Soul yang berarti jiwa, kami berkomitmen memberikan layanan yang tidak hanya
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
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className={cn("text-3xl font-bold text-gray-900 mb-12 text-center", fontHeading.className)}>
                Visi & Misi SALUT Soul
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-2 border-blue-200 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Eye className="w-8 h-8 text-blue-600" />
                      <CardTitle className="text-2xl text-blue-600">Visi</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Menjadi pusat layanan pendidikan tinggi jarak jauh terdepan yang memberikan akses pendidikan
                      berkualitas, terjangkau, dan mudah diakses oleh seluruh masyarakat Indonesia untuk menciptakan
                      generasi yang berdaya saing global.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-green-200 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Target className="w-8 h-8 text-green-600" />
                      <CardTitle className="text-2xl text-green-600">Misi</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-gray-700">
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p>Memberikan layanan pendaftaran dan informasi akademik yang mudah dan terpercaya</p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p>Memfasilitasi akses pendidikan tinggi bagi seluruh lapisan masyarakat</p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p>Memberikan bimbingan dan dukungan akademik yang berkualitas</p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
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

      {/* Leadership Message */}
      <AnimatedSection>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className={cn("text-3xl font-bold text-gray-900 mb-12 text-center", fontHeading.className)}>
                Kata Sambutan
              </h2>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                    <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-16 h-16 text-gray-400" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <blockquote className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                        Selamat datang di SALUT Soul! Kami berkomitmen untuk menjadi mitra terbaik dalam perjalanan
                        pendidikan Anda. Dengan dukungan teknologi modern dan tim yang berpengalaman, kami siap membantu
                        Anda meraih impian pendidikan tinggi yang berkualitas dan terjangkau. Mari bersama-sama
                        membangun masa depan yang lebih cerah melalui pendidikan.
                      </blockquote>
                      <div>
                        <p className="font-bold text-xl text-gray-900">Dr. Ahmad Wijaya, M.Pd</p>
                        <p className="text-gray-600">Ketua SALUT Soul</p>
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
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MapPin className="w-6 h-6 text-blue-600" />
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

                <Card>
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
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className={cn("text-3xl md:text-4xl font-bold text-white mb-4", fontHeading.className)}>
            Siap Bergabung dengan Kami?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Mulai perjalanan pendidikan Anda bersama SALUT Soul dan raih masa depan yang lebih cerah
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-3">
              <Link href="/pendaftaran">Daftar Sekarang</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary bg-transparent transition-colors"
            >
              <Link href="/kontak">Hubungi Kami</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="font-bold text-xl">SALUT Soul</span>
              </div>
              <p className="text-gray-400">
                Sentra Layanan Universitas Terbuka untuk pendidikan tinggi berkualitas dan terjangkau.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Navigasi</h3>
              <div className="space-y-2">
                <Link href="/" className="block text-gray-400 hover:text-white transition-colors">
                  Beranda
                </Link>
                <Link href="/tentang" className="block text-gray-400 hover:text-white transition-colors">
                  Tentang Kami
                </Link>
                <Link href="/akademik" className="block text-gray-400 hover:text-white transition-colors">
                  Akademik
                </Link>
                <Link href="/kontak" className="block text-gray-400 hover:text-white transition-colors">
                  Kontak
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Kontak</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span className="text-gray-400">+62 812-3456-7890</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span className="text-gray-400">info@salutsoul.ac.id</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-gray-400">Jakarta, Indonesia</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Ikuti Kami</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Facebook
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Instagram
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  YouTube
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© {new Date().getFullYear()} SALUT Soul. Semua hak cipta dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

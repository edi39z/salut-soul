import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, BookOpen, Clock, DollarSign, MapPin, Phone, Mail } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"

export default function HomePage() {
  const statistics = [
    {
      icon: Users,
      title: "400,000+",
      description: "Mahasiswa Aktif",
      color: "text-primary",
    },
    {
      icon: Award,
      title: "Akreditasi A",
      description: "Terakreditasi BAN-PT",
      color: "text-primary",
    },
    {
      icon: BookOpen,
      title: "39",
      description: "Program Studi",
      color: "text-primary",
    },
  ]

  const advantages = [
    {
      icon: Clock,
      title: "Kuliah Fleksibel",
      description: "Belajar kapan saja, di mana saja tanpa batas waktu dan lokasi",
    },
    {
      icon: DollarSign,
      title: "Biaya Terjangkau",
      description: "Biaya kuliah yang ekonomis dan dapat dicicil per semester",
    },
    {
      icon: BookOpen,
      title: "Pembelajaran Digital",
      description: "Sistem pembelajaran modern berbasis teknologi digital",
    },
    {
      icon: Award,
      title: "Terakreditasi",
      description: "Program studi terakreditasi nasional oleh BAN-PT",
    },
    {
      icon: Users,
      title: "Dukungan SALUT",
      description: "Layanan tatap muka dan bimbingan akademik langsung",
    },
    {
      icon: MapPin,
      title: "Jaringan Luas",
      description: "Tersebar di seluruh Indonesia dengan kualitas terjamin",
    },
  ]

  const faculties = [
    {
      name: "FISIP",
      fullName: "Fakultas Ilmu Sosial dan Ilmu Politik",
      programs: ["Administrasi Negara", "Administrasi Niaga", "Ilmu Komunikasi", "Ilmu Perpustakaan"],
      color: "bg-gradient-primary border-primary/20",
    },
    {
      name: "FKIP",
      fullName: "Fakultas Keguruan dan Ilmu Pendidikan",
      programs: ["Pendidikan Bahasa Indonesia", "Pendidikan Matematika", "Pendidikan Biologi", "PGSD"],
      color: "bg-gradient-primary border-primary/20",
    },
    {
      name: "FMIPA",
      fullName: "Fakultas Matematika dan Ilmu Pengetahuan Alam",
      programs: ["Matematika", "Statistika", "Biologi", "Teknologi Pangan"],
      color: "bg-gradient-primary border-primary/20",
    },
    {
      name: "FE",
      fullName: "Fakultas Ekonomi",
      programs: ["Manajemen", "Akuntansi", "Ekonomi Pembangunan", "Ekonomi Syariah"],
      color: "bg-gradient-primary border-primary/20",
    },
  ]

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
              <span className="font-bold text-xl text-neutral-900">SALUT Soul</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-neutral-700 hover:text-primary font-medium transition-colors">
                Beranda
              </Link>
              <Link href="/tentang" className="text-neutral-700 hover:text-primary font-medium transition-colors">
                Tentang Kami
              </Link>
              <Link href="/akademik" className="text-neutral-700 hover:text-primary font-medium transition-colors">
                Akademik
              </Link>
              <Link href="/kontak" className="text-neutral-700 hover:text-primary font-medium transition-colors">
                Kontak
              </Link>
              <Button asChild className="btn-primary">
                <Link href="/pendaftaran">Daftar Sekarang</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-primary py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-neutral-900 mb-6">
                Kuliah Fleksibel, Berkualitas, dan <span className="text-primary">Terjangkau</span>
              </h1>
              <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
                Wujudkan impianmu meraih gelar sarjana bersama Universitas Terbuka & SALUT Soul. Pendidikan tinggi
                berkualitas yang dapat diakses kapan saja, di mana saja.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="text-lg px-8 py-3 btn-primary">
                  <Link href="/pendaftaran">Daftar Sekarang</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg px-8 py-3 btn-outline bg-transparent">
                  <Link href="/tentang">Tentang Kami</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {statistics.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="text-center border-0 shadow-soft card-hover">
                  <CardContent className="pt-6">
                    <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
                    <h3 className="text-3xl font-heading font-bold text-neutral-900 mb-2">{stat.title}</h3>
                    <p className="text-neutral-600">{stat.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
                Mengapa Memilih Universitas Terbuka?
              </h2>
              <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                Keunggulan yang membuat UT menjadi pilihan terbaik untuk pendidikan tinggi Anda
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="card-hover">
                  <CardHeader>
                    <advantage.icon className="w-10 h-10 text-primary mb-2" />
                    <CardTitle className="text-xl text-neutral-900">{advantage.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-neutral-600">{advantage.description}</CardDescription>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Faculties Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
                Fakultas & Program Studi
              </h2>
              <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                Pilih program studi yang sesuai dengan minat dan passion Anda
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {faculties.map((faculty, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className={`${faculty.color} border-2 card-hover`}>
                  <CardHeader>
                    <CardTitle className="text-2xl text-neutral-900">{faculty.name}</CardTitle>
                    <CardDescription className="text-neutral-700 font-medium">{faculty.fullName}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="font-medium text-neutral-800 mb-3">Program Studi:</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {faculty.programs.map((program, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-sm text-neutral-700">{program}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="text-center">
              <Button size="lg" asChild className="btn-primary">
                <Link href="/akademik">Lihat Semua Program Studi</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Siap Memulai Perjalanan Pendidikan Anda?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Bergabunglah dengan ribuan mahasiswa yang telah merasakan kemudahan kuliah di Universitas Terbuka
            </p>
            <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-3 btn-secondary">
              <Link href="/pendaftaran">Daftar Sekarang</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="font-bold text-xl">SALUT Soul</span>
              </div>
              <p className="text-neutral-400">
                Sentra Layanan Universitas Terbuka untuk pendidikan tinggi berkualitas dan terjangkau.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Navigasi</h3>
              <div className="space-y-2">
                <Link href="/" className="block text-neutral-400 hover:text-white transition-colors">
                  Beranda
                </Link>
                <Link href="/tentang" className="block text-neutral-400 hover:text-white transition-colors">
                  Tentang Kami
                </Link>
                <Link href="/akademik" className="block text-neutral-400 hover:text-white transition-colors">
                  Akademik
                </Link>
                <Link href="/kontak" className="block text-neutral-400 hover:text-white transition-colors">
                  Kontak
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Kontak</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span className="text-neutral-400">+62 812-3456-7890</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span className="text-neutral-400">info@salutsoul.ac.id</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-neutral-400">Jakarta, Indonesia</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Ikuti Kami</h3>
              <div className="space-y-2">
                <a href="#" className="block text-neutral-400 hover:text-white transition-colors">
                  Facebook
                </a>
                <a href="#" className="block text-neutral-400 hover:text-white transition-colors">
                  Instagram
                </a>
                <a href="#" className="block text-neutral-400 hover:text-white transition-colors">
                  YouTube
                </a>
                <a href="#" className="block text-neutral-400 hover:text-white transition-colors">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-800 mt-8 pt-8 text-center">
            <p className="text-neutral-400">© {new Date().getFullYear()} SALUT Soul. Semua hak cipta dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

export default function KontakPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const validateForm = () => {
    let isValid = true
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      message: "",
    }

    if (!formData.name.trim()) {
      newErrors.name = "Nama Lengkap wajib diisi"
      isValid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email wajib diisi"
      isValid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format email tidak valid"
      isValid = false
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Nomor HP wajib diisi"
      isValid = false
    } else if (!/^[0-9]+$/.test(formData.phone)) {
      newErrors.phone = "Nomor HP harus berupa angka"
      isValid = false
    }

    if (!formData.message.trim()) {
      newErrors.message = "Pesan wajib diisi"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    setErrors((prev) => ({
      ...prev,
      [name]: "", // Clear error when input changes
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast({
        title: "Pesan Terkirim!",
        description: "Terima kasih atas pesan Anda. Kami akan segera menghubungi Anda kembali.",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      })
      setErrors({
        name: "",
        email: "",
        phone: "",
        message: "",
      })
    } catch (error) {
      toast({
        title: "Gagal Mengirim",
        description: "Terjadi kesalahan. Silakan coba lagi atau hubungi kami langsung.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Telepon",
      content: "+62 812-3456-7890",
      description: "Hubungi kami untuk konsultasi langsung",
      action: "tel:+6281234567890",
      actionText: "Telepon Sekarang",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "+62 812-3456-7890",
      description: "Chat langsung untuk respon cepat",
      action: "https://wa.me/6281234567890",
      actionText: "Chat WhatsApp",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@salutsoul.ac.id",
      description: "Kirim email untuk pertanyaan detail",
      action: "mailto:info@salutsoul.ac.id",
      actionText: "Kirim Email",
    },
    {
      icon: MapPin,
      title: "Alamat",
      content: "Jl. Pendidikan No. 123, Jakarta Selatan 12345",
      description: "Kunjungi kantor kami untuk konsultasi tatap muka",
      action: "#",
      actionText: "Lihat Peta",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Hubungi <span className="text-blue-600">Kami</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kami siap membantu Anda dengan informasi lengkap tentang pendaftaran dan program studi di Universitas
              Terbuka
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-16 text-center">Informasi Kontak</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                  <CardHeader className="text-center">
                    <info.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <CardTitle className="text-xl font-semibold">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <p className="font-medium text-gray-900">{info.content}</p>
                    <p className="text-sm text-gray-600">{info.description}</p>
                    <Button asChild size="sm" className="w-full">
                      <a
                        href={info.action}
                        target={info.title === "WhatsApp" ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                      >
                        {info.actionText}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours & Location */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Office Hours */}
              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="w-6 h-6 text-blue-600" />
                    <span className="font-semibold">Jam Operasional</span>
                  </CardTitle>
                  <CardDescription className="text-gray-600">Waktu layanan konsultasi dan informasi</CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Senin - Jumat</span>
                    <span className="text-blue-600 font-semibold">08:00 - 17:00 WIB</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Sabtu</span>
                    <span className="text-blue-600 font-semibold">08:00 - 14:00 WIB</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-medium text-gray-700">Minggu</span>
                    <span className="text-red-600 font-semibold">Tutup</span>
                  </div>

                  <div className="mt-8 p-5 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-3">Layanan 24/7</h4>
                    <p className="text-blue-700 text-sm">
                      WhatsApp dan email dapat diakses kapan saja. Kami akan merespon dalam 1x24 jam pada hari kerja.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Location Map */}
              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="w-6 h-6 text-blue-600" />
                    <span className="font-semibold">Lokasi Kantor</span>
                  </CardTitle>
                  <CardDescription className="text-gray-600">SALUT Soul Jakarta</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-5">
                    <div>
                      <p className="font-semibold text-gray-900">Alamat Lengkap:</p>
                      <p className="text-gray-600">
                        Jl. Pendidikan No. 123
                        <br />
                        Jakarta Selatan 12345
                        <br />
                        DKI Jakarta, Indonesia
                      </p>
                    </div>

                    {/* Map Placeholder */}
                    <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                        <p className="text-gray-500 font-medium">Google Maps</p>
                        <p className="text-sm text-gray-400">Peta lokasi akan ditampilkan di sini</p>
                      </div>
                    </div>

                    <Button
                      className="w-full bg-transparent hover:bg-blue-50 transition-colors duration-200"
                      variant="outline"
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      Buka di Google Maps
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-5">Kirim Pesan</h2>
              <p className="text-xl text-gray-600">
                Punya pertanyaan? Kirim pesan kepada kami dan tim akan segera merespon
              </p>
            </div>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-10">
                <form onSubmit={handleSubmit} className="space-y-7">
                  <div>
                    <Label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap *
                    </Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Masukkan nama lengkap Anda"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={cn(
                        "w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm",
                        errors.name && "border-red-500",
                      )}
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                  </div>

                  <div>
                    <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="nama@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={cn(
                        "w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm",
                        errors.email && "border-red-500",
                      )}
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                  </div>

                  <div>
                    <Label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Nomor HP *
                    </Label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="08xxxxxxxxxx"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className={cn(
                        "w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm",
                        errors.phone && "border-red-500",
                      )}
                    />
                    {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                  </div>

                  <div>
                    <Label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Pesan *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tuliskan pertanyaan atau pesan Anda di sini..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className={cn(
                        "w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm resize-none",
                        errors.message && "border-red-500",
                      )}
                    />
                    {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span className="ml-3">Mengirim...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Send className="w-4 h-4 mr-2" />
                        Kirim Pesan
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-16 text-center">Pertanyaan yang Sering Diajukan</h2>

            <div className="space-y-8">
              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">
                    Bagaimana cara mendaftar sebagai mahasiswa UT?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Anda dapat mendaftar melalui website kami dengan mengisi formulir pendaftaran online, atau datang
                    langsung ke kantor SALUT Soul untuk konsultasi dan bantuan pendaftaran.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Apakah ada batasan usia untuk kuliah di UT?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Tidak ada batasan usia untuk kuliah di Universitas Terbuka. Siapa saja yang memenuhi persyaratan
                    akademik dapat mendaftar sebagai mahasiswa UT.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Berapa lama waktu studi di UT?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Waktu studi fleksibel sesuai kemampuan mahasiswa. Untuk program S1, minimal 8 semester dan maksimal
                    12 semester. Mahasiswa dapat mengatur sendiri beban studi per semester.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Apakah ijazah UT diakui secara resmi?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Ya, ijazah Universitas Terbuka diakui secara resmi oleh pemerintah Indonesia dan memiliki nilai yang
                    sama dengan ijazah perguruan tinggi konvensional lainnya.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Masih Ada Pertanyaan?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Tim kami siap membantu Anda dengan informasi lengkap dan konsultasi gratis
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-4">
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat WhatsApp
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Link href="/pendaftaran">Daftar Sekarang</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

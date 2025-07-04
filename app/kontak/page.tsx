/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, Star, Sparkles, CheckCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { motion } from "framer-motion"

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
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "+62 812-3456-7890",
      description: "Chat langsung untuk respon cepat",
      action: "https://wa.me/6281234567890",
      actionText: "Chat WhatsApp",
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-gradient-to-br from-emerald-50 to-emerald-100",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@salutsoul.ac.id",
      description: "Kirim email untuk pertanyaan detail",
      action: "mailto:info@salutsoul.ac.id",
      actionText: "Kirim Email",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
    },
    {
      icon: MapPin,
      title: "Alamat",
      content: "Jl. Pendidikan No. 123, Jakarta Selatan 12345",
      description: "Kunjungi kantor kami untuk konsultasi tatap muka",
      action: "#",
      actionText: "Lihat Peta",
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-gradient-to-br from-amber-50 to-amber-100",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
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
                <MessageCircle className="w-4 h-4 mr-2" />
                Hubungi Kami
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight"
            >
              Mari{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Terhubung
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            >
              Kami siap membantu Anda dengan informasi lengkap tentang pendaftaran dan program studi di{" "}
              <span className="font-bold text-blue-600">Universitas Terbuka</span>
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-24 bg-white relative overflow-hidden">
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
              <Badge className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 text-sm font-medium rounded-full mb-6">
                <Star className="w-4 h-4 mr-2" />
                Informasi Kontak
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Berbagai Cara <span className="text-emerald-600">Menghubungi Kami</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Pilih cara yang paling nyaman untuk Anda berkomunikasi dengan tim SALUT Soul
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden relative group"
                >
                  <div className={`absolute inset-0 ${info.bgColor} opacity-60`}></div>
                  <CardHeader className="text-center relative z-10 p-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <info.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-4 relative z-10 p-6 pt-0">
                    <div className="bg-white/80 p-4 rounded-xl">
                      <p className="font-bold text-gray-900 text-lg mb-2">{info.content}</p>
                      <p className="text-gray-600">{info.description}</p>
                    </div>
                    <Button
                      asChild
                      className={`w-full bg-gradient-to-r ${info.color} hover:shadow-lg transition-all duration-300`}
                    >
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
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Office Hours */}
              <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-2xl"></div>
                <CardHeader className="relative z-10 p-8">
                  <CardTitle className="flex items-center space-x-4 text-2xl">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                    <span className="font-bold text-gray-900">Jam Operasional</span>
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-lg mt-2">
                    Waktu layanan konsultasi dan informasi
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 p-8 pt-0 space-y-6">
                  {[
                    { day: "Senin - Jumat", time: "08:00 - 17:00 WIB", color: "text-blue-600" },
                    { day: "Sabtu", time: "08:00 - 14:00 WIB", color: "text-blue-600" },
                    { day: "Minggu", time: "Tutup", color: "text-red-600" },
                  ].map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-4 px-6 bg-white/80 rounded-xl border-l-4 border-blue-400"
                    >
                      <span className="font-bold text-gray-700 text-lg">{schedule.day}</span>
                      <span className={`${schedule.color} font-bold text-lg`}>{schedule.time}</span>
                    </div>
                  ))}

                  <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
                    <h4 className="font-bold text-blue-900 text-xl mb-3 flex items-center">
                      <Sparkles className="w-5 h-5 mr-2" />
                      Layanan 24/7
                    </h4>
                    <p className="text-blue-700 leading-relaxed">
                      WhatsApp dan email dapat diakses kapan saja. Kami akan merespon dalam 1x24 jam pada hari kerja.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Location Map */}
              <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-200/30 to-slate-200/30 rounded-full blur-2xl"></div>
                <CardHeader className="relative z-10 p-8">
                  <CardTitle className="flex items-center space-x-4 text-2xl">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <span className="font-bold text-gray-900">Lokasi Kantor</span>
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-lg mt-2">SALUT Soul</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 p-8 pt-0">
                  <div className="space-y-6">
                    <div className="bg-white/80 p-6 rounded-2xl">
                      <p className="font-bold text-gray-900 text-lg mb-3">Alamat Lengkap:</p>
                      <p className="text-gray-600 leading-relaxed">
                        Jl. Pendidikan No. 123
                        <br />
                        Jakarta Selatan 12345
                        <br />
                        DKI Jakarta, Indonesia
                      </p>
                    </div>

                    {/* Map Placeholder */}
                    <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center shadow-inner">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                          <MapPin className="w-10 h-10 text-white" />
                        </div>
                        <p className="text-gray-600 font-semibold text-lg mb-2">Google Maps</p>
                        <p className="text-sm text-gray-500">
                          Peta lokasi akan ditampilkan di sini
                          <br />
                          untuk memudahkan navigasi
                        </p>
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-300">
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
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-800 text-sm font-medium rounded-full mb-6">
                <Send className="w-4 h-4 mr-2" />
                Kirim Pesan
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Kirim <span className="text-purple-600">Pesan Anda</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Punya pertanyaan? Kirim pesan kepada kami dan tim akan segera merespon
              </p>
            </div>

            <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-purple-50 overflow-hidden">
              <CardContent className="p-12">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <Label htmlFor="name" className="block text-lg font-semibold text-gray-700 mb-3">
                        Nama Lengkap *
                      </Label>
                      <Input type="text" id="name" name="name" />
                    </div>
                    <div>
                      <Label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-3">
                        Email *
                      </Label>
                      <Input type="email" id="email" name="email" />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="block text-lg font-semibold text-gray-700 mb-3">
                        Nomor HP *
                      </Label>
                      <Input type="text" id="phone" name="phone" />
                    </div>
                    <div>
                      <Label htmlFor="message" className="block text-lg font-semibold text-gray-700 mb-3">
                        Pesan *
                      </Label>
                      <Textarea id="message" name="message" rows={4} />
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 mr-2 animate-spin" />
                        Mengirim...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Send className="w-5 h-5 mr-2" />
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

      <Footer />
    </div>
  )
}

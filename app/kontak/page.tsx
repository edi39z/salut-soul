/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import Image from "next/image"
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
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react"
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
      content: "+62 822-5961-6782",
      description: "Hubungi kami untuk konsultasi langsung",
      action: "tel:+6282259616782",
      actionText: "Telepon Sekarang",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "+62 822-5961-6782",
      description: "Chat langsung untuk respon cepat",
      action: "https://wa.me/6282259616782",
      actionText: "Chat WhatsApp",
    },
    {
      icon: Mail,
      title: "Email",
      content: "salutsoul18@gmail.com",
      description: "Kirim email untuk pertanyaan detail",
      action: "mailto:salutsoul18@gmail.com",
      actionText: "Kirim Email",
    },
    {
      icon: MapPin,
      title: "Alamat",
      content: "Jl. Ncole Permai No.18, Medan Tuntungan",
      description: "Kunjungi kantor kami untuk konsultasi langsung",
      action: "https://maps.app.goo.gl/dUmmZ3b3CvDH35MP6",
      actionText: "Buka Maps",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - Minimalist Academic */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>

              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">Konsultasi Akademik</h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Tim akademik kami siap membantu Anda dengan informasi lengkap tentang program studi dan proses
                pendaftaran di <span className="font-semibold text-[#002F86]">Universitas Terbuka</span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information - Clean Grid */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Informasi Kontak</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Pilih cara yang paling sesuai untuk berkomunikasi dengan tim akademik kami
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border border-slate-200 hover:border-[#002F86] transition-all duration-300 hover:shadow-lg bg-white">
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 bg-[#002F86] rounded-xl flex items-center justify-center mx-auto mb-4">
                        <info.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-slate-800">{info.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center space-y-4">
                      <div>
                        <p className="font-semibold text-slate-800 mb-2">{info.content}</p>
                        <p className="text-sm text-slate-600">{info.description}</p>
                      </div>
                      <Button
                        asChild
                        className="w-full bg-[#002F86] hover:bg-[#FFD700] hover:text-[#002F86] transition-all duration-300"
                      >
                        <a
                          href={info.action}
                          target={info.title === "WhatsApp" || info.title === "Alamat" ? "_blank" : "_self"}
                          rel="noopener noreferrer"
                        >
                          {info.actionText}
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours & Location */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Office Hours */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="border border-slate-200 bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-2xl text-slate-800">
                      <div className="w-12 h-12 bg-[#002F86] rounded-xl flex items-center justify-center">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <span>Jam Operasional</span>
                    </CardTitle>
                    <CardDescription className="text-slate-600">Waktu layanan konsultasi akademik</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { day: "Senin - Jumat", time: "08:00 - 17:00 WIB", available: true },
                      { day: "Sabtu", time: "08:00 - 14:00 WIB", available: true },
                      { day: "Minggu", time: "Tutup", available: false },
                    ].map((schedule, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-3 px-4 bg-slate-50 rounded-lg border-l-4 border-[#002F86]"
                      >
                        <span className="font-semibold text-slate-700">{schedule.day}</span>
                        <span className={`font-semibold ${schedule.available ? "text-[#002F86]" : "text-red-600"}`}>
                          {schedule.time}
                        </span>
                      </div>
                    ))}
                    <div className="mt-6 p-4 bg-[#002F86] rounded-lg">
                      <h4 className="font-semibold text-white mb-2">Layanan 24/7</h4>
                      <p className="text-blue-100 text-sm">
                        WhatsApp dan email dapat diakses kapan saja. Kami akan merespon dalam 1x24 jam pada hari kerja.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Location */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="border border-slate-200 bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-2xl text-slate-800">
                      <div className="w-12 h-12 bg-[#002F86] rounded-xl flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <span>Lokasi Kantor</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div
                        className="w-full h-48 rounded-lg overflow-hidden cursor-pointer border border-slate-200 hover:border-[#002F86] transition-colors duration-300"
                        onClick={() => window.open("https://maps.app.goo.gl/dUmmZ3b3CvDH35MP6", "_blank")}
                      >
                        <Image
                          src="/images/lokasi.png"
                          alt="Lokasi SALUT Soul"
                          width={400}
                          height={200}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="text-center">
                        <p className="font-semibold text-slate-800 mb-2">Jl. Ncole Permai No.18</p>
                        <p className="text-slate-600 mb-4">Medan Tuntungan, Medan</p>
                        <Button
                          className="w-full bg-[#002F86] hover:bg-[#FFD700] hover:text-[#002F86] transition-all duration-300"
                          onClick={() => window.open("https://maps.app.goo.gl/dUmmZ3b3CvDH35MP6", "_blank")}
                        >
                          <MapPin className="w-4 h-4 mr-2" />
                          Buka di Google Maps
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>




      <Footer />
    </div>
  )
}

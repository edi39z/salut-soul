"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle, FileText, Upload, User, Mail, Phone, MapPin, GraduationCap } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { FloatingInput } from "@/components/ui/floating-input"
import { FloatingTextarea } from "@/components/ui/floating-textarea"
import { LoadingButton } from "@/components/ui/loading-button"

const formSchema = z.object({
  namaLengkap: z.string().min(2, {
    message: "Nama Lengkap harus lebih dari 2 karakter.",
  }),
  nik: z.string().length(16, {
    message: "NIK harus 16 digit.",
  }),
  nisn: z.string().length(10, {
    message: "NISN harus 10 digit.",
  }),
  noHp: z.string().min(10, {
    message: "Nomor HP tidak valid.",
  }),
  email: z.string().email({
    message: "Email tidak valid.",
  }),
  tanggalLahir: z.string().min(1, {
    message: "Tanggal Lahir harus diisi.",
  }),
  alamat: z.string().min(10, {
    message: "Alamat harus lebih dari 10 karakter.",
  }),
  fakultas: z.string().min(1, {
    message: "Fakultas harus dipilih.",
  }),
  programStudi: z.string().min(1, {
    message: "Program Studi harus dipilih.",
  }),
  dokumen: z.any().optional(),
  agreement: z.boolean().refine((value) => value === true, {
    message: "Anda harus menyetujui syarat dan ketentuan.",
  }),
})

export default function PendaftaranPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      namaLengkap: "",
      nik: "",
      nisn: "",
      noHp: "",
      email: "",
      tanggalLahir: "",
      alamat: "",
      fakultas: "",
      programStudi: "",
      dokumen: null,
      agreement: false,
    },
  })

  const faculties = {
    FISIP: [
      "Administrasi Negara",
      "Administrasi Niaga",
      "Ilmu Komunikasi",
      "Ilmu Perpustakaan",
      "Sosiologi",
      "Sastra Inggris",
    ],
    FKIP: [
      "Pendidikan Bahasa Indonesia",
      "Pendidikan Bahasa Inggris",
      "Pendidikan Matematika",
      "Pendidikan Biologi",
      "Pendidikan Fisika",
      "Pendidikan Kimia",
      "Pendidikan Guru Sekolah Dasar (PGSD)",
      "Pendidikan Guru PAUD",
    ],
    FMIPA: [
      "Matematika",
      "Statistika",
      "Biologi",
      "Teknologi Pangan",
      "Perencanaan Wilayah dan Kota",
      "Sistem Informasi",
    ],
    FE: ["Manajemen", "Akuntansi", "Ekonomi Pembangunan", "Ekonomi Syariah", "Pariwisata"],
    FHISIP: ["Ilmu Hukum", "Ilmu Administrasi Publik", "Ilmu Pemerintahan"],
  }

  const steps = [
    {
      number: 1,
      title: "Persiapan Dokumen",
      description: "Siapkan dokumen yang diperlukan",
    },
    {
      number: 2,
      title: "Isi Data Diri",
      description: "Lengkapi informasi personal",
    },
    {
      number: 3,
      title: "Pilih Program",
      description: "Pilih fakultas dan program studi",
    },
    {
      number: 4,
      title: "Upload Dokumen",
      description: "Upload dokumen pendukung",
    },
    {
      number: 5,
      title: "Konfirmasi",
      description: "Review dan kirim pendaftaran",
    },
  ]

  const handleSelectChange = (name: string, value: string) => {
    setValue(name as keyof z.infer<typeof formSchema>, value)
    if (name === "fakultas") {
      setValue("programStudi" as keyof z.infer<typeof formSchema>, "")
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setValue("dokumen" as keyof z.infer<typeof formSchema>, file)
  }

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true)

    try {
      console.log("🚀 Mengirim data pendaftaran:", data)

      // Kirim data ke API
      const response = await fetch("/api/pendaftaran", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()
      console.log("📥 Response dari API:", result)

      if (!response.ok) {
        throw new Error(result.message || "Gagal mengirim pendaftaran")
      }

      if (result.success) {
        toast({
          title: "Pendaftaran Berhasil!",
          description: `${result.message} Nomor registrasi: ${result.data?.registrationNumber || "N/A"}`,
        })

        // Reset form setelah berhasil
        Object.keys(data).forEach((key) => {
          setValue(key as keyof z.infer<typeof formSchema>, "" as any)
        })
        setValue("agreement", false)
        setCurrentStep(1)
      } else {
        throw new Error(result.message || "Pendaftaran gagal")
      }
    } catch (error) {
      console.error("❌ Error pendaftaran:", error)
      toast({
        title: "Gagal Mendaftar",
        description: error instanceof Error ? error.message : "Terjadi kesalahan. Silakan coba lagi.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="font-bold text-xl text-gray-900">SALUT Soul</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
                Beranda
              </Link>
              <Link href="/tentang" className="text-gray-700 hover:text-blue-600 font-medium">
                Tentang Kami
              </Link>
              <Link href="/akademik" className="text-gray-700 hover:text-blue-600 font-medium">
                Akademik
              </Link>
              <Link href="/kontak" className="text-gray-700 hover:text-blue-600 font-medium">
                Kontak
              </Link>
              <Button asChild variant="outline">
                <Link href="/pendaftaran">Pendaftaran</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pendaftaran <span className="text-blue-600">Mahasiswa Baru</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Mulai perjalanan pendidikan tinggi Anda bersama Universitas Terbuka. Proses pendaftaran mudah dan cepat.
            </p>
          </div>
        </div>
      </section>

      {/* Registration Steps */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Tata Cara Pendaftaran</h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-16">
              {steps.map((step, index) => (
                <div key={step.number} className="text-center">
                  <div
                    className={`w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-lg ${currentStep >= step.number ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
                      }`}
                  >
                    {currentStep > step.number ? <CheckCircle className="w-6 h-6" /> : step.number}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>

            {/* Step Instructions */}
            <Card className="mb-8 bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-blue-900 mb-4">Langkah-langkah Pendaftaran:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-800">
                  <div className="flex items-start space-x-2">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      1
                    </div>
                    <p>Siapkan dokumen: Ijazah, NIK, NISN, KTP, pas foto</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      2
                    </div>
                    <p>Isi formulir pendaftaran dengan lengkap dan benar</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      3
                    </div>
                    <p>Tim SALUT Soul akan menghubungi Anda via WhatsApp/email</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      4
                    </div>
                    <p>Lakukan pembayaran biaya registrasi sesuai panduan</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      5
                    </div>
                    <p>Data Anda diproses ke UT pusat dan Anda menerima NIM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Formulir Pendaftaran Mahasiswa Baru</CardTitle>
                <CardDescription className="text-center">
                  Lengkapi semua informasi dengan benar dan akurat
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                      <User className="w-6 h-6 mr-2 text-blue-600" />
                      Data Pribadi
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <FloatingInput
                          id="namaLengkap"
                          label="Nama Lengkap *"
                          placeholder="Sesuai dengan ijazah"
                          {...register("namaLengkap")}
                          error={errors.namaLengkap?.message}
                        />
                      </div>

                      <div className="space-y-2">
                        <FloatingInput
                          id="nik"
                          label="NIK (16 digit) *"
                          placeholder="1234567890123456"
                          {...register("nik")}
                          error={errors.nik?.message}
                        />
                      </div>

                      <div className="space-y-2">
                        <FloatingInput
                          id="nisn"
                          label="NISN (10 digit) *"
                          placeholder="1234567890"
                          {...register("nisn")}
                          error={errors.nisn?.message}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="tanggalLahir">Tanggal Lahir *</Label>
                        <input
                          type="date"
                          id="tanggalLahir"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          {...register("tanggalLahir")}
                        />
                        {errors.tanggalLahir?.message && (
                          <p className="text-red-500 text-sm">{errors.tanggalLahir.message}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                      <Phone className="w-6 h-6 mr-2 text-blue-600" />
                      Informasi Kontak
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <FloatingInput
                          id="noHp"
                          label="Nomor HP *"
                          placeholder="08xxxxxxxxxx"
                          {...register("noHp")}
                          error={errors.noHp?.message}
                        />
                      </div>

                      <div className="space-y-2">
                        <FloatingInput
                          id="email"
                          label="Email *"
                          placeholder="nama@email.com"
                          {...register("email")}
                          error={errors.email?.message}
                        />
                      </div>
                    </div>

                    <div className="space-y-2 mt-6">
                      <FloatingTextarea
                        id="alamat"
                        label="Alamat Lengkap *"
                        placeholder="Jalan, RT/RW, Kelurahan, Kecamatan, Kota, Provinsi, Kode Pos"
                        {...register("alamat")}
                        error={errors.alamat?.message}
                      />
                    </div>
                  </div>

                  {/* Academic Information */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                      <GraduationCap className="w-6 h-6 mr-2 text-blue-600" />
                      Pilihan Program Studi
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="fakultas">Fakultas *</Label>
                        <Select
                          value={watch("fakultas")}
                          onValueChange={(value) => handleSelectChange("fakultas", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Pilih Fakultas" />
                          </SelectTrigger>
                          <SelectContent>
                            {Object.keys(faculties).map((faculty) => (
                              <SelectItem key={faculty} value={faculty}>
                                {faculty}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.fakultas?.message && <p className="text-red-500 text-sm">{errors.fakultas.message}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="programStudi">Program Studi *</Label>
                        <Select
                          value={watch("programStudi")}
                          onValueChange={(value) => handleSelectChange("programStudi", value)}
                          disabled={!watch("fakultas")}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Pilih Program Studi" />
                          </SelectTrigger>
                          <SelectContent>
                            {watch("fakultas") &&
                              faculties[watch("fakultas") as keyof typeof faculties]?.map((program) => (
                                <SelectItem key={program} value={program}>
                                  {program}
                                </SelectItem>
                              ))}
                          </SelectContent>
                        </Select>
                        {errors.programStudi?.message && (
                          <p className="text-red-500 text-sm">{errors.programStudi.message}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Document Upload */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                      <Upload className="w-6 h-6 mr-2 text-blue-600" />
                      Upload Dokumen
                    </h3>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="dokumen">Upload Dokumen (Opsional)</Label>
                        <input
                          id="dokumen"
                          name="dokumen"
                          type="file"
                          onChange={handleFileChange}
                          accept=".pdf,.jpg,.jpeg,.png"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                        <p className="text-sm text-gray-600">
                          Format: PDF, JPG, PNG. Maksimal 2MB. Dokumen dapat berupa ijazah, KTP, atau pas foto.
                        </p>
                      </div>

                      {watch("dokumen") && (
                        <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                          <p className="text-sm text-green-700 flex items-center">
                            <FileText className="w-4 h-4 mr-2" />
                            File terpilih: {watch("dokumen")?.name}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Agreement */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="agreement"
                        checked={watch("agreement")}
                        onCheckedChange={(checked) => setValue("agreement", checked as boolean)}
                      />
                      <div className="text-sm">
                        <Label htmlFor="agreement" className="cursor-pointer">
                          Saya menyetujui{" "}
                          <Link href="#" className="text-blue-600 hover:underline">
                            syarat dan ketentuan
                          </Link>{" "}
                          serta{" "}
                          <Link href="#" className="text-blue-600 hover:underline">
                            kebijakan privasi
                          </Link>{" "}
                          yang berlaku. Data yang saya berikan adalah benar dan dapat dipertanggungjawabkan.
                        </Label>
                      </div>
                    </div>
                    {errors.agreement?.message && <p className="text-red-500 text-sm">{errors.agreement.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <LoadingButton
                      type="submit"
                      size="lg"
                      className="w-full"
                      isLoading={isSubmitting}
                      disabled={isSubmitting}
                    >
                      <FileText className="w-5 h-5 mr-2" />
                      Kirim Pendaftaran
                    </LoadingButton>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Butuh Bantuan?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Tim kami siap membantu Anda dalam proses pendaftaran. Hubungi kami untuk konsultasi gratis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-3">
              <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer">
                <Phone className="w-5 h-5 mr-2" />
                WhatsApp Support
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
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
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
                <Link href="/" className="block text-gray-400 hover:text-white">
                  Beranda
                </Link>
                <Link href="/tentang" className="block text-gray-400 hover:text-white">
                  Tentang Kami
                </Link>
                <Link href="/akademik" className="block text-gray-400 hover:text-white">
                  Akademik
                </Link>
                <Link href="/kontak" className="block text-gray-400 hover:text-white">
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
                <a href="#" className="block text-gray-400 hover:text-white">
                  Facebook
                </a>
                <a href="#" className="block text-gray-400 hover:text-white">
                  Instagram
                </a>
                <a href="#" className="block text-gray-400 hover:text-white">
                  YouTube
                </a>
                <a href="#" className="block text-gray-400 hover:text-white">
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

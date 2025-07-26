/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { ImageCropper } from "@/components/ui/image-cropper"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import { LoadingButton } from "@/components/ui/loading-button"
import { FileText, User, GraduationCap, AlertCircle, CheckCircle, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface FormData {
    namaLengkap: string
    nik: string
    nisn: string
    noHp: string
    email: string
    tanggalLahir: string
    alamat: string
    fakultas: string
    programStudi: string
    jalur: string
    jenjang: string
}

type FormErrors = Partial<Record<keyof FormData, string>>;

interface Fakultas {
    id: string
    nama: string
    namaLengkap: string
    akreditasi: string
}

interface ProgramStudi {
    id: string
    nama: string
    fakultas: string
    jenjang: string
    akreditasi: string
    biayaSemester: number
}

export default function PendaftaranNonRPLPage() {
    const router = useRouter()
    const { toast } = useToast()
    const [isLoading, setIsLoading] = useState(false)
    const [uploadingFiles, setUploadingFiles] = useState<Record<string, boolean>>({})
    const [fakultasList, setFakultasList] = useState<Fakultas[]>([])
    const [programStudiList, setProgramStudiList] = useState<ProgramStudi[]>([])
    const [loadingFakultas, setLoadingFakultas] = useState(true)
    const [loadingProgramStudi, setLoadingProgramStudi] = useState(false)
    const [agreementChecked, setAgreementChecked] = useState(false)
    const [errors, setErrors] = useState<FormErrors>({})
    const [cropSrc, setCropSrc] = useState<string | null>(null)
  const [cropFile, setCropFile] = useState<File | null>(null)

    const [formData, setFormData] = useState<FormData>({
        namaLengkap: "",
        nik: "",
        nisn: "",
        noHp: "",
        email: "",
        tanggalLahir: "",
        alamat: "",
        fakultas: "",
        programStudi: "",
        jalur: "non-rpl",
        jenjang: "",
    })

    const [uploadedDocuments, setUploadedDocuments] = useState<Record<string, string>>({})

    // Fetch fakultas on component mount
    useEffect(() => {
        const fetchFakultas = async () => {
            try {
                const response = await fetch("/api/fakultas")
                const result = await response.json()


                if (result.success && result.data) {
                    setFakultasList(result.data)
                } else {
                    toast({
                        title: "Error",
                        description: result.message || "Gagal memuat data fakultas",
                        variant: "destructive",
                    })
                }
            } catch (error) {
                console.error("❌ Fetch Error:", error)
                toast({
                    title: "Error",
                    description: "Gagal memuat data fakultas",
                    variant: "destructive",
                })
            } finally {
                setLoadingFakultas(false)
            }
        }

        fetchFakultas()
    }, [toast])

    // Fetch program studi when fakultas changes
    useEffect(() => {
        const fetchProgramStudi = async () => {
            if (!formData.fakultas) {
                setProgramStudiList([])
                return
            }

            setLoadingProgramStudi(true)
            try {
                const response = await fetch(`/api/program-studi?fakultas=${formData.fakultas}`)
                const result = await response.json()


                if (result.success && result.data) {
                    setProgramStudiList(result.data)
                } else {
                    toast({
                        title: "Error",
                        description: result.message || "Gagal memuat data program studi",
                        variant: "destructive",
                    })
                }
            } catch (error) {
                console.error("❌ Program Studi Fetch Error:", error)
                toast({
                    title: "Error",
                    description: "Gagal memuat data program studi",
                    variant: "destructive",
                })
            } finally {
                setLoadingProgramStudi(false)
            }
        }

        fetchProgramStudi()
    }, [formData.fakultas, toast])

    const validateField = (field: keyof FormData, value: string) => {
        let error = ""
        switch (field) {
            case "namaLengkap":
                if (!value) error = "Nama lengkap harus diisi"
                break
            case "nik":
                if (!/^\d{16}$/.test(value)) error = "NIK harus 16 digit angka"
                break
            case "nisn":
                if (!value) {
                    error = "NISN harus diisi"
                } else if (!/^\d{1,10}$/.test(value)) {
                    error = "NISN maksimal 10 digit angka"
                }
                break
            case "noHp":
                if (!/^08\d{8,11}$/.test(value)) error = "Nomor HP harus diawali 08 dan total 10-13 digit"
                break
            case "email":
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = "Format email tidak valid"
                break
            case "alamat":
                if (!value) error = "Alamat harus diisi"
                break
            default:
                break
        }
        setErrors((prev) => ({ ...prev, [field]: error }))
        return error
    }

    const handleInputChange = (field: keyof FormData, value: string) => {
        if (field === "programStudi") {
            const [nama, jenjang] = value.split("|")
            setFormData((prev) => ({
                ...prev,
                programStudi: nama,
                jenjang: jenjang,
            }))
        } else {
            setFormData((prev) => ({ ...prev, [field]: value }))
        }
        validateField(field, value)

        if (field === "fakultas") {
            setFormData((prev) => ({ ...prev, programStudi: "", jenjang: "" }))
        }
    }

    const handleFileChange = async (documentType: string, file: File | null) => {
        if (!file) return

        if (documentType === "pasFoto") {
            setCropFile(file)
            setCropSrc(URL.createObjectURL(file))
        } else {
            uploadFile(documentType, file)
        }
    }

  const handleCropComplete = (croppedImageBlob: Blob) => {
    if (cropFile) {
      const croppedFile = new File([croppedImageBlob], cropFile.name, {
        type: cropFile.type,
        lastModified: Date.now(),
      })
      uploadFile("pasFoto", croppedFile)
    }
    setCropSrc(null)
    setCropFile(null)
  }

    const uploadFile = async (documentType: string, file: File) => {
        setUploadingFiles((prev) => ({ ...prev, [documentType]: true }))

        try {
            const uploadFormData = new FormData()
            uploadFormData.append("file", file)
            uploadFormData.append("documentType", documentType)
            uploadFormData.append("fakultas", formData.fakultas)

            console.log("📤 Uploading:", { documentType, fileName: file.name, fileType: file.type })

            const response = await fetch("/api/upload", {
                method: "POST",
                body: uploadFormData,
            })

            const result = await response.json()
            console.log("📥 Upload response:", result)

            if (result.success) {
                setUploadedDocuments((prev) => ({ ...prev, [documentType]: result.url }))
                toast({
                    title: "Upload berhasil",
                    description: `${getDocumentLabel(documentType)} berhasil diupload`,
                })
            } else {
                throw new Error(result.error || result.message || "Upload failed")
            }
        } catch (error) {
            console.error("Upload error:", error)
            toast({
                title: "Upload gagal",
                description: `Gagal mengupload ${getDocumentLabel(documentType)}: ${error instanceof Error ? error.message : "Unknown error"}`,
                variant: "destructive",
            })
        } finally {
            setUploadingFiles((prev) => ({ ...prev, [documentType]: false }))
        }
    }

  const handleRemoveFile = (documentType: string) => {
    setUploadedDocuments((prev) => {
      const newDocs = { ...prev }
      delete newDocs[documentType]
      return newDocs
    })
    toast({
      title: "File dihapus",
      description: `${getDocumentLabel(documentType)} berhasil dihapus`,
    })
  }

    const getDocumentLabel = (documentType: string) => {
        const labels: Record<string, string> = {
            pasFoto: "Pas Foto 4x6",
            ktp: "Kartu Tanda Penduduk",
            ijazah: "Scan Ijazah Terakhir",
            formulir: "Formulir Kebenaran dan Keabsahan Dokumen",
            skPengangkatan: "SK Pengangkatan Guru",
            skMengajar: "SK Mengajar dari Kepala Sekolah",
        }
        return labels[documentType] || documentType
    }

  const validateForm = () => {
    const newErrors: FormErrors = {}
    let isValid = true

    Object.keys(formData).forEach((key) => {
      const field = key as keyof FormData
      const error = validateField(field, formData[field])
      if (error) {
        newErrors[field] = error
        isValid = false
      }
    })

    if (!formData.fakultas) {
      newErrors.fakultas = "Fakultas harus dipilih"
      isValid = false
    }
    if (!formData.programStudi) {
      newErrors.programStudi = "Program studi harus dipilih"
      isValid = false
    }

    if (!uploadedDocuments.pasFoto) {
      // You might want to add an error to a general error state
      // if you still want to validate the presence of the photo.
      // For now, just marking form as invalid.
      isValid = false
      toast({
        title: "Upload Dokumen",
        description: "Pas foto wajib diunggah.",
        variant: "destructive",
      })
    }

    setErrors(newErrors)
    return isValid
  }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const isFormValid = validateForm()

        if (!agreementChecked) {
            toast({
                title: "Persetujuan diperlukan",
                description: "Silakan centang persetujuan syarat dan ketentuan",
                variant: "destructive",
            })
            return
        }

        if (!isFormValid) {
            toast({
                title: "Form tidak valid",
                description: "Silakan periksa kembali data yang Anda masukkan",
                variant: "destructive",
            })
            return
        }

        setIsLoading(true)

        try {
            const submitData = {
                ...formData,
                ...uploadedDocuments,
            }

            const response = await fetch("/api/pendaftaran", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(submitData),
            })

            const result = await response.json()

            if (response.ok) {
                toast({
                    title: "Pendaftaran berhasil!",
                    description: "Data pendaftaran Anda telah tersimpan",
                })
                router.push("/")
            } else {
                if (result.details) {
                    const errorMessages = Object.entries(result.details)
                        .map(([key, value]) => `- ${key}: ${value}`)
                        .join("\n")

                    toast({
                        title: result.error || "Pendaftaran Gagal",
                        description: (
                            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                                <code className="text-white">{errorMessages}</code>
                            </pre>
                        ),
                        variant: "destructive",
                    })
                } else {
                    throw new Error(result.error || "Terjadi kesalahan yang tidak diketahui")
                }
            }
        } catch (error: any) {
            toast({
                title: "Pendaftaran gagal",
                description: error.message || "Terjadi kesalahan",
                variant: "destructive",
            })
        } finally {
            setIsLoading(false)
        }
    }

    const getRequiredDocuments = () => {
        const baseDocuments = [
            {
                key: "pasFoto",
                label: "Pas Foto 4x6",
                accept: "image/jpeg,image/jpg,image/png",
                description: "Format JPG/JPEG/PNG, maksimal 5MB",
            },
            {
                key: "ktp",
                label: "Kartu Tanda Penduduk",
                accept: "application/pdf",
                description: "Format PDF, maksimal 5MB",
            },
            {
                key: "ijazah",
                label: "Scan Ijazah Terakhir",
                accept: "application/pdf",
                description: "Dilegalisir, Format PDF, maksimal 5MB",
            },
            {
                key: "formulir",
                label: "Formulir Kebenaran dan Keabsahan Dokumen",
                accept: "application/pdf",
                description: "Format PDF, maksimal 5MB",
            },
        ]

        // Add FKIP specific documents
        if (formData.fakultas === "FKIP") {
            baseDocuments.push(
                {
                    key: "skPengangkatan",
                    label: "SK Pengangkatan Guru",
                    accept: "application/pdf",
                    description: "Minimal 1 tahun, Legalisir, Format PDF, maksimal 5MB",
                },
                {
                    key: "skMengajar",
                    label: "SK Mengajar dari Kepala Sekolah",
                    accept: "application/pdf",
                    description: "Terbaru, Format PDF, maksimal 5MB",
                },
            )
        }

        return baseDocuments
    }

    return (
        <div className="min-h-screen bg-blue-50 py-12">
            {cropSrc && (
                <ImageCropper
                    src={cropSrc}
                    onCropComplete={handleCropComplete}
                    onClose={() => {
                        setCropSrc(null)
                        const input = document.getElementById("file-input-pasFoto") as HTMLInputElement | null
                        if (input) {
                            input.value = ""
                        }
                    }}
                />
            )}
            <div className="container mx-auto px-4 max-w-4xl">
                <Card className="shadow-xl">
                    <CardHeader className="text-center bg-blue-600 text-white rounded-t-lg">
                        <CardTitle className="text-2xl font-bold">Pendaftaran Jalur Non-RPL</CardTitle>
                        <CardDescription className="text-blue-100">
                            Pendaftaran Reguler - Silakan lengkapi formulir pendaftaran di bawah ini
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="p-8">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Data Pribadi */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <User className="h-5 w-5 text-blue-600" />
                                    <h3 className="text-lg font-semibold text-gray-800">Data Pribadi</h3>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <Label htmlFor="namaLengkap">Nama Lengkap *</Label>
                                        <Input
                                            id="namaLengkap"
                                            placeholder="Masukkan nama lengkap Anda"
                                            value={formData.namaLengkap}
                                            onChange={(e) => handleInputChange("namaLengkap", e.target.value)}
                                            required
                                        />
                                        {errors.namaLengkap && <p className="text-red-500 text-sm mt-1">{errors.namaLengkap}</p>}
                                    </div>

                                    <div>
                                        <Label htmlFor="nik">NIK *</Label>
                                        <Input
                                            id="nik"
                                            placeholder="Masukkan 16 digit NIK"
                                            value={formData.nik}
                                            onChange={(e) => handleInputChange("nik", e.target.value)}
                                            maxLength={16}
                                            required
                                        />
                                        {errors.nik && <p className="text-red-500 text-sm mt-1">{errors.nik}</p>}
                                    </div>

                                    <div>
                                        <Label htmlFor="nisn">NISN *</Label>
                                        <Input
                                            id="nisn"
                                            placeholder="Masukkan 10 digit NISN"
                                            value={formData.nisn}
                                            onChange={(e) => handleInputChange("nisn", e.target.value)}
                                            maxLength={10}
                                            required
                                        />
                                        {errors.nisn && <p className="text-red-500 text-sm mt-1">{errors.nisn}</p>}
                                    </div>

                                    <div>
                                        <Label htmlFor="noHp">Nomor HP *</Label>
                                        <Input
                                            id="noHp"
                                            placeholder="Contoh: 081234567890"
                                            value={formData.noHp}
                                            onChange={(e) => handleInputChange("noHp", e.target.value)}
                                            maxLength={13}
                                            required
                                        />
                                        {errors.noHp && <p className="text-red-500 text-sm mt-1">{errors.noHp}</p>}
                                    </div>

                                    <div>
                                        <Label htmlFor="email">Email *</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="Contoh: email@domain.com"
                                            value={formData.email}
                                            onChange={(e) => handleInputChange("email", e.target.value)}
                                            required
                                        />
                                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                    </div>

                                    <div>
                                        <Label htmlFor="tanggalLahir">Tanggal Lahir *</Label>
                                        <Input
                                            id="tanggalLahir"
                                            type="date"
                                            value={formData.tanggalLahir}
                                            onChange={(e) => handleInputChange("tanggalLahir", e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <Label htmlFor="alamat">Alamat Lengkap *</Label>
                                    <Textarea
                                        id="alamat"
                                        placeholder="Masukkan alamat lengkap Anda"
                                        value={formData.alamat}
                                        onChange={(e) => handleInputChange("alamat", e.target.value)}
                                        rows={3}
                                        required
                                    />
                                    {errors.alamat && <p className="text-red-500 text-sm mt-1">{errors.alamat}</p>}
                                </div>
                            </div>

                            {/* Data Akademik */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <GraduationCap className="h-5 w-5 text-blue-600" />
                                    <h3 className="text-lg font-semibold text-gray-800">Data Akademik</h3>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <Label htmlFor="fakultas">Fakultas *</Label>
                                        <Select
                                            value={formData.fakultas}
                                            onValueChange={(value) => handleInputChange("fakultas", value)}
                                            disabled={loadingFakultas}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder={loadingFakultas ? "Loading..." : "Pilih Fakultas"} />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {fakultasList.map((fakultas) => (
                                                    <SelectItem key={fakultas.id} value={fakultas.nama}>
                                                        {fakultas.nama} - {fakultas.namaLengkap}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        {errors.fakultas && <p className="text-red-500 text-sm mt-1">{errors.fakultas}</p>}
                                    </div>

                                    <div>
                                        <Label htmlFor="programStudi">Program Studi *</Label>
                                        <Select
                                            value={formData.programStudi ? `${formData.programStudi}|${formData.jenjang}` : ""}
                                            onValueChange={(value) => handleInputChange("programStudi", value)}
                                            disabled={!formData.fakultas || loadingProgramStudi}
                                        >
                                            <SelectTrigger>
                                                <SelectValue
                                                    placeholder={
                                                        !formData.fakultas
                                                            ? "Pilih fakultas terlebih dahulu"
                                                            : loadingProgramStudi
                                                                ? "Loading..."
                                                                : "Pilih Program Studi"
                                                    }
                                                />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {programStudiList.map((prodi) => (
                                                    <SelectItem key={`${prodi.nama}-${prodi.jenjang}`} value={`${prodi.nama}|${prodi.jenjang}`}>
                                                        {prodi.nama} ({prodi.jenjang}) - Akreditasi {prodi.akreditasi}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        {errors.programStudi && <p className="text-red-500 text-sm mt-1">{errors.programStudi}</p>}
                                    </div>
                                </div>

                                {/* FKIP Information */}
                                {formData.fakultas === "FKIP" && (
                                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                                        <div className="flex items-start gap-2">
                                            <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-amber-800 mb-2">Persyaratan Khusus FKIP</h4>
                                                <p className="text-amber-700 text-sm">
                                                    Untuk pendaftaran FKIP, Anda perlu menyiapkan dokumen tambahan:
                                                </p>
                                                <ul className="text-amber-700 text-sm mt-2 space-y-1">
                                                    <li>• SK Pengangkatan Guru (minimal 1 tahun, legalisir)</li>
                                                    <li>• SK Mengajar dari Kepala Sekolah (terbaru)</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Upload Dokumen */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <FileText className="h-5 w-5 text-blue-600" />
                                    <h3 className="text-lg font-semibold text-gray-800">Upload Dokumen</h3>
                                </div>

                                <div className="grid grid-cols-1 gap-6">
                                    {getRequiredDocuments().map((doc) => (
                                        <div key={doc.key} className="space-y-3 p-4 border border-gray-200 rounded-lg">
                                            <Label className="text-base font-medium">
                                                {doc.label} *
                                                {doc.description && (
                                                    <span className="text-sm text-gray-500 font-normal block mt-1">({doc.description})</span>
                                                )}
                                            </Label>

                                            {!uploadedDocuments[doc.key] ? (
                                                <div className="space-y-2">
                                                        <Input
                                                            id={`file-input-${doc.key}`}
                                                            type="file"
                                                            accept={doc.accept}
                                                            onChange={(e) => {
                                                                const selectedFile = e.target.files?.[0] || null
                                                                if (selectedFile) {
                                                                    const maxSize = 5 * 1024 * 1024 // 5MB
                                                                    if (selectedFile.size > maxSize) {
                                                                        toast({
                                                                            title: "Ukuran file terlalu besar",
                                                                            description: `File ${selectedFile.name} melebihi 5MB.`,
                                                                            variant: "destructive",
                                                                        })
                                                                        e.target.value = "" // Clear the input
                                                                    } else {
                                                                        handleFileChange(doc.key, selectedFile)
                                                                    }
                                                                }
                                                            }}
                                                            className="flex-1"
                                                            disabled={uploadingFiles[doc.key]}
                                                        />
                                                    {uploadingFiles[doc.key] && (
                                                        <div className="flex items-center gap-2 text-blue-600 text-sm">
                                                            <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                                                            <span>Mengupload...</span>
                                                        </div>
                                                    )}
                                                </div>
                                            ) : (
                                                <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                                                    <div className="flex items-center gap-2 text-green-700">
                                                        <CheckCircle className="w-5 h-5" />
                                                        <span className="font-medium">File berhasil diupload</span>
                                                        {uploadedDocuments[doc.key] && doc.key === "pasFoto" && (
                                                            <Image
                                                                src={uploadedDocuments[doc.key]}
                                                                alt="Preview"
                                                                width={40}
                                                                height={60}
                                                                className="rounded-md object-cover"
                                                            />
                                                        )}
                                                    </div>
                                                    <Button
                                                        type="button"
                                                        variant="ghost"
                                                        size="sm"
                                                        onClick={() => handleRemoveFile(doc.key)}
                                                        className="text-red-600 hover:text-red-800 hover:bg-red-100"
                                                    >
                                                        <X className="w-4 h-4" />
                                                    </Button>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* Download Link for Formulir */}
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                    <div className="flex items-start gap-2">
                                        <FileText className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-blue-800 mb-2">Download Formulir</h4>
                                            <p className="text-blue-700 text-sm mb-2">
                                                Formulir Kebenaran dan Keabsahan Dokumen dapat didownload di:
                                            </p>
                                            <a
                                                href="http://ut.ac.id/formulir"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:text-blue-800 underline text-sm font-medium"
                                            >
                                                http://ut.ac.id/formulir
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Agreement */}
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <Checkbox
                                        id="agreement"
                                        checked={agreementChecked}
                                        onCheckedChange={(checked) => setAgreementChecked(checked as boolean)}
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
                            </div>

                            <div className="flex justify-end gap-4 pt-6">
                                <Button type="button" variant="outline" onClick={() => router.back()}>
                                    Batal
                                </Button>
                                <LoadingButton type="submit" isLoading={isLoading} className="bg-blue-600 hover:bg-blue-700">
                                    Daftar Sekarang
                                </LoadingButton>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

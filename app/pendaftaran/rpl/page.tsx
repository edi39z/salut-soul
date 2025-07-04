/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import type React from "react"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { LoadingButton } from "@/components/ui/loading-button"
import { FileText, User, GraduationCap, AlertCircle, CheckCircle, X } from "lucide-react"
import Link from "next/link"

interface FormData {
    namaLengkap: string
    nik: string
    noHp: string
    email: string
    tanggalLahir: string
    alamat: string
    fakultas: string
    programStudi: string
    jalur: string
}

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

export default function RPLPendaftaranPage() {
    const router = useRouter()
    const { toast } = useToast()
    const [isLoading, setIsLoading] = useState(false)
    const [uploadingFiles, setUploadingFiles] = useState<Record<string, boolean>>({})
    const [fakultasList, setFakultasList] = useState<Fakultas[]>([])
    const [programStudiList, setProgramStudiList] = useState<ProgramStudi[]>([])
    const [loadingFakultas, setLoadingFakultas] = useState(true)
    const [loadingProgramStudi, setLoadingProgramStudi] = useState(false)
    const [agreementChecked, setAgreementChecked] = useState(false)

    const [formData, setFormData] = useState<FormData>({
        namaLengkap: "",
        nik: "",
        noHp: "",
        email: "",
        tanggalLahir: "",
        alamat: "",
        fakultas: "",
        programStudi: "",
        jalur: "rpl",
    })

    const [uploadedDocuments, setUploadedDocuments] = useState<Record<string, string>>({})

    // Fetch fakultas on component mount
    useEffect(() => {
        const fetchFakultas = async () => {
            try {
                const response = await fetch("/api/fakultas")
                const result = await response.json()

                if (result.success) {
                    setFakultasList(result.data)
                } else {
                    toast({
                        title: "Error",
                        description: "Gagal memuat data fakultas",
                        variant: "destructive",
                    })
                }
            } catch (error) {
                console.error("Error fetching fakultas:", error)
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

                if (result.success) {
                    setProgramStudiList(result.data)
                } else {
                    toast({
                        title: "Error",
                        description: "Gagal memuat data program studi",
                        variant: "destructive",
                    })
                }
            } catch (error) {
                console.error("Error fetching program studi:", error)
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

    const handleInputChange = (field: keyof FormData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }))

        // Reset program studi when fakultas changes
        if (field === "fakultas") {
            setFormData((prev) => ({ ...prev, programStudi: "" }))
        }
    }

    const handleFileChange = async (documentType: string, file: File | null) => {
        if (!file) return

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
            ktp: "Scan Kartu Tanda Penduduk",
            ijazah: "Scan Ijazah dan Transkrip Nilai",
            formulir: "Formulir Kebenaran dan Keabsahan Dokumen",
            ijazahSMA: "Scan Ijazah SMA/Sederajat Asli",
            screenshotPDDIKTI: "Screenshot Data Pribadi PDDIKTI",
            skPengangkatan: "SK Pengangkatan Guru",
            skMengajar: "SK Mengajar dari Kepala Sekolah",
        }
        return labels[documentType] || documentType
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!agreementChecked) {
            toast({
                title: "Persetujuan diperlukan",
                description: "Silakan centang persetujuan syarat dan ketentuan",
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

            console.log("📤 Submitting data:", submitData)

            const response = await fetch("/api/pendaftaran", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(submitData),
            })

            const result = await response.json()

            if (result.success) {
                toast({
                    title: "Pendaftaran berhasil!",
                    description: "Data pendaftaran Anda telah tersimpan",
                })
                router.push("/")
            } else {
                throw new Error(result.error)
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
                label: "Scan Kartu Tanda Penduduk",
                accept: "application/pdf",
                description: "Format PDF, maksimal 5MB",
            },
            {
                key: "ijazah",
                label: "Scan Ijazah dan Transkrip Nilai",
                accept: "application/pdf",
                description: "Dilegalisir, Format PDF, maksimal 5MB",
            },
            {
                key: "formulir",
                label: "Formulir Kebenaran dan Keabsahan Dokumen",
                accept: "application/pdf",
                description: "Format PDF, maksimal 5MB",
            },
            {
                key: "ijazahSMA",
                label: "Scan Ijazah SMA/Sederajat Asli",
                accept: "application/pdf",
                description: "Format PDF, maksimal 5MB",
            },
            {
                key: "screenshotPDDIKTI",
                label: "Screenshot Data Pribadi PDDIKTI",
                accept: "image/jpeg,image/jpg,image/png",
                description: "Format JPG/PNG, maksimal 5MB",
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
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <Card className="shadow-xl">
                    <CardHeader className="text-center bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-t-lg">
                        <CardTitle className="text-2xl font-bold">Pendaftaran Jalur RPL</CardTitle>
                        <CardDescription className="text-emerald-100">
                            Rekognisi Pembelajaran Lampau - Silakan lengkapi formulir pendaftaran di bawah ini
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="p-8">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Data Pribadi */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <User className="h-5 w-5 text-emerald-600" />
                                    <h3 className="text-lg font-semibold text-gray-800">Data Pribadi</h3>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <Label htmlFor="namaLengkap">Nama Lengkap *</Label>
                                        <Input
                                            id="namaLengkap"
                                            value={formData.namaLengkap}
                                            onChange={(e) => handleInputChange("namaLengkap", e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="nik">NIK *</Label>
                                        <Input
                                            id="nik"
                                            value={formData.nik}
                                            onChange={(e) => handleInputChange("nik", e.target.value)}
                                            maxLength={16}
                                            required
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="noHp">Nomor HP *</Label>
                                        <Input
                                            id="noHp"
                                            value={formData.noHp}
                                            onChange={(e) => handleInputChange("noHp", e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="email">Email *</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => handleInputChange("email", e.target.value)}
                                            required
                                        />
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
                                        value={formData.alamat}
                                        onChange={(e) => handleInputChange("alamat", e.target.value)}
                                        rows={3}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Data Akademik */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <GraduationCap className="h-5 w-5 text-emerald-600" />
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
                                    </div>

                                    <div>
                                        <Label htmlFor="programStudi">Program Studi *</Label>
                                        <Select
                                            value={formData.programStudi}
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
                                                    <SelectItem key={prodi.id} value={prodi.nama}>
                                                        {prodi.nama} ({prodi.jenjang}) - Akreditasi {prodi.akreditasi}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
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
                                    <FileText className="h-5 w-5 text-emerald-600" />
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
                                                        type="file"
                                                        accept={doc.accept}
                                                        onChange={(e) => handleFileChange(doc.key, e.target.files?.[0] || null)}
                                                        className="flex-1"
                                                        disabled={uploadingFiles[doc.key]}
                                                    />
                                                    {uploadingFiles[doc.key] && (
                                                        <div className="flex items-center gap-2 text-emerald-600 text-sm">
                                                            <div className="w-4 h-4 border-2 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
                                                            <span>Mengupload...</span>
                                                        </div>
                                                    )}
                                                </div>
                                            ) : (
                                                <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                                                    <div className="flex items-center gap-2 text-green-700">
                                                        <CheckCircle className="w-5 h-5" />
                                                        <span className="font-medium">File berhasil diupload</span>
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

                                {/* Information Boxes */}
                                <div className="space-y-4">
                                    {/* Download Link for Formulir */}
                                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                                        <div className="flex items-start gap-2">
                                            <FileText className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-emerald-800 mb-2">Download Formulir</h4>
                                                <p className="text-emerald-700 text-sm mb-2">
                                                    Formulir Kebenaran dan Keabsahan Dokumen dapat didownload di:
                                                </p>
                                                <a
                                                    href="http://ut.ac.id/formulir"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-emerald-600 hover:text-emerald-800 underline text-sm font-medium"
                                                >
                                                    http://ut.ac.id/formulir
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* PDDIKTI Information */}
                                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                        <div className="flex items-start gap-2">
                                            <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-blue-800 mb-2">Screenshot Data Pribadi PDDIKTI</h4>
                                                <p className="text-blue-700 text-sm mb-2">
                                                    Screenshot data pribadi PDDIKTI mahasiswa dapat diakses di:
                                                </p>
                                                <a
                                                    href="https://pddikti.kemendikbud.go.id"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-600 hover:text-blue-800 underline text-sm font-medium"
                                                >
                                                    https://pddikti.kemendikbud.go.id
                                                </a>
                                            </div>
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
                                            <Link href="#" className="text-emerald-600 hover:underline">
                                                syarat dan ketentuan
                                            </Link>{" "}
                                            serta{" "}
                                            <Link href="#" className="text-emerald-600 hover:underline">
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
                                <LoadingButton type="submit" isLoading={isLoading}>
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

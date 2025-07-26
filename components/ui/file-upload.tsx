/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Upload, X, CheckCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface FileUploadProps {
  onFileUploaded: (fileData: any) => void
  onFileRemoved: () => void
  currentFile?: any
}

export function FileUpload({ onFileUploaded, onFileRemoved, currentFile }: FileUploadProps) {
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const { toast } = useToast()

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    // Validasi client-side
    const allowedTypes = ["application/pdf", "image/jpeg", "image/jpg", "image/png"]
    if (!allowedTypes.includes(file.type)) {
      toast({
        title: "Format File Tidak Didukung",
        description: "Gunakan format PDF, JPG, atau PNG",
        variant: "destructive",
      })
      return
    }

    const maxSize = 2 * 1024 * 1024 // 2MB
    if (file.size > maxSize) {
      toast({
        title: "File Terlalu Besar",
        description: "Ukuran file maksimal 2MB",
        variant: "destructive",
      })
      return
    }

    setIsUploading(true)
    setUploadProgress(0)

    try {
      const formData = new FormData()
      formData.append("dokumen", file)

      // Simulasi progress
      const progressInterval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 90) {
            clearInterval(progressInterval)
            return prev
          }
          return prev + 10
        })
      }, 200)

      const response = await fetch("/api/upload-dokumen", {

        method: "POST",
        body: formData,
      })

      const result = await response.json()

      clearInterval(progressInterval)
      setUploadProgress(100)

      if (result.success) {
        onFileUploaded(result.data)
        console.log("meki")
        toast({
          title: "Upload Berhasil",
          description: "Dokumen berhasil diupload",
        })
      } else {
        throw new Error(result.message)
      }
    } catch (error) {
      console.error("Upload error:", error)
      toast({
        title: "Upload Gagal",
        description: error instanceof Error ? error.message : "Gagal mengupload file",
        variant: "destructive",
      })
    } finally {
      setIsUploading(false)
      setTimeout(() => setUploadProgress(0), 1000)
    }
  }

  const handleRemoveFile = () => {
    onFileRemoved()
    toast({
      title: "File Dihapus",
      description: "Dokumen berhasil dihapus",
    })
  }

  return (
    <div className="space-y-4">
      {!currentFile ? (
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
          <input
            type="file"
            id="file-upload"
            className="hidden"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileUpload}
            disabled={isUploading}
          />
          <label htmlFor="file-upload" className="cursor-pointer">
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-lg font-medium text-gray-700 mb-2">{isUploading ? "Mengupload..." : "Upload Dokumen"}</p>
            <p className="text-sm text-gray-500">Klik untuk memilih file atau drag & drop</p>
            <p className="text-xs text-gray-400 mt-2">PDF, JPG, PNG (Maks. 2MB)</p>
          </label>
        </div>
      ) : (
        <div className="border border-green-200 bg-green-50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <div>
                <p className="font-medium text-green-800">{currentFile.originalName}</p>
                <p className="text-sm text-green-600">{(currentFile.fileSize / 1024 / 1024).toFixed(2)} MB</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleRemoveFile}
              className="text-red-600 hover:text-red-800 hover:bg-red-100"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}

      {isUploading && (
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Mengupload...</span>
            <span className="text-gray-600">{uploadProgress}%</span>
          </div>
          <Progress value={uploadProgress} className="h-2" />
        </div>
      )}
    </div>
  )
}

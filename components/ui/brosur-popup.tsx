"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X } from "lucide-react"

interface Brosur {
  id: string
  imageUrl: string
  linkUrl: string
  aktif: boolean
}

const BrosurPopup = () => {
  const [brosur, setBrosur] = useState<Brosur | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const fetchBrosur = async () => {
      try {
        const res = await fetch("/api/brosur")
        const data = await res.json()
        if (data && data.aktif) {
          setBrosur(data)
          setIsOpen(true)
        }
      } catch (error) {
        console.error("Error fetching brosur:", error)
      }
    }

    fetchBrosur()
  }, [])

  const handleClose = () => {
    setIsOpen(false)
  }

  if (!isOpen || !brosur) {
    return null
  }

  return (
    <div
      onClick={handleClose}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-fit max-w-4xl max-h-[90vh] p-4 bg-white rounded-xl shadow-2xl"
      >
        <button
          onClick={handleClose}
          className="absolute -top-2 -right-2 p-2 text-gray-500 bg-white rounded-full hover:text-gray-800 hover:bg-gray-100 z-10 shadow-lg transition-all duration-200 border border-gray-200"
        >
          <X size={20} />
        </button>
        <a href={brosur.linkUrl} target="_blank" rel="noopener noreferrer" className="block">
          <Image
            src={brosur.imageUrl || "/placeholder.svg"}
            alt="Brosur Universitas Terbuka"
            width={1200}
            height={1400}
            className="object-contain max-h-[80vh] w-auto rounded-lg hover:scale-105 transition-transform duration-300"
            priority
          />
        </a>
        <div className="text-center mt-3">
          <p className="text-sm text-gray-600">Klik gambar untuk membuka brosur lengkap</p>
        </div>
      </div>
    </div>
  )
}

export default BrosurPopup

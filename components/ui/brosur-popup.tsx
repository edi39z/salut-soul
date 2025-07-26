"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X } from "lucide-react"

interface Brosur {
  id: string
  imageUrl: string
  linkUrl: string
  aktif: boolean
}

interface BrosurPopupProps {
  trigger: boolean
}

const BrosurPopup = ({ trigger }: BrosurPopupProps) => {
  const [brosur, setBrosur] = useState<Brosur | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchBrosur = async () => {
      try {
        const res = await fetch("/api/brosur")
        const data = await res.json()
        console.log("✅ Brosur API response:", data)

        if (data && data.aktif) {
          setBrosur(data)
        } else {
          console.log("⚠️ Brosur tidak aktif atau tidak ada.")
        }
      } catch (error) {
        console.error("❌ Error fetching brosur:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchBrosur()
  }, [])

  useEffect(() => {
    if (trigger && brosur && !isLoading) {
      // Start the animation sequence
      setIsVisible(true)
      setTimeout(() => {
        setIsAnimating(true)
      }, 50)
    }
  }, [trigger, brosur, isLoading])

  const handleClose = () => {
    setIsAnimating(false)
    setTimeout(() => {
      setIsVisible(false)
    }, 300)
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  // Don't render if not visible or no brosur
  if (!isVisible || !brosur) {
    return null
  }

  return (
    <div
      onClick={handleOverlayClick}
      className={`fixed inset-0 z-[999] flex items-center justify-center p-4 transition-all duration-500 ease-out ${isAnimating ? "bg-black bg-opacity-70 backdrop-blur-sm" : "bg-black bg-opacity-0 backdrop-blur-none"
        }`}
      style={{
        animation: isAnimating ? "fadeInOverlay 0.5s ease-out forwards" : undefined,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-fit max-w-4xl max-h-[90vh] p-4 bg-white rounded-xl shadow-2xl transition-all duration-500 ease-out ${isAnimating ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-8"
          }`}
        style={{
          animation: isAnimating ? "slideInUp 0.6s ease-out 0.2s both" : undefined,
        }}
      >
        <button
          onClick={handleClose}
          className="absolute -top-2 -right-2 p-2 text-gray-500 bg-white rounded-full hover:text-gray-800 hover:bg-gray-100 z-10 shadow-lg transition-all duration-200 border border-gray-200 hover:scale-110"
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

      <style jsx>{`
        @keyframes fadeInOverlay {
          from {
            background-color: rgba(0, 0, 0, 0);
            backdrop-filter: blur(0px);
          }
          to {
            background-color: rgba(0, 0, 0, 0.7);
            backdrop-filter: blur(4px);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  )
}

export default BrosurPopup

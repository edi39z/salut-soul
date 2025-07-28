"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { PageWrapper } from "@/components/ui/page-wrapper"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, X, Play, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Types
interface Aktivitas {
  id: string
  judul: string
  deskripsi: string
  gambar: string
  tanggal: Date
}

interface GalleryImage {
  src: string
  alt: string
}

interface AktivitasClientPageProps {
  initialAktivitas: Aktivitas[]
  initialYoutubeUrl: string
  initialGalleryImages: GalleryImage[]
}

// Constants
const BRAND_COLOR = "#002F86"
const CAROUSEL_IMAGE_WIDTH = 320
const CAROUSEL_SPACING = 24
const ANIMATION_DURATION = 80000 // 80 seconds
const INITIAL_DISPLAY_COUNT = 6

// Utility functions
const getYoutubeEmbedId = (url: string): string => {
  if (!url) return ""

  try {
    const urlObj = new URL(url)

    if (urlObj.hostname.includes("youtube.com") && urlObj.searchParams.has("v")) {
      return urlObj.searchParams.get("v") || ""
    }

    if (urlObj.hostname === "youtu.be") {
      return urlObj.pathname.slice(1)
    }

    if (urlObj.hostname.includes("youtube.com") && urlObj.pathname.includes("/embed/")) {
      return urlObj.pathname.split("/embed/")[1] || ""
    }
  } catch (error) {
    console.error("Invalid YouTube URL:", error)
  }

  return ""
}

const formatDate = (date: string | Date): string => {
  return new Date(date).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
  })
}

// Components
const HeroSection = ({ youtubeEmbedId }: { youtubeEmbedId: string }) => (
  <div className="relative min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-indigo-50/30 dark:from-gray-800/30 dark:to-gray-900/30" />
    </div>

    <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <AnimatedSection className="text-center mb-12 lg:mb-16">
        <div className="mb-8 lg:mb-12">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-3 sm:mb-4 lg:mb-6 leading-tight"
            style={{ color: BRAND_COLOR }}
          >
            GALERI SALUT SOUL
          </h1>

          <div className="w-16 sm:w-20 lg:w-24 h-1 mx-auto" style={{ backgroundColor: BRAND_COLOR }} />
        </div>


      </AnimatedSection>

      {youtubeEmbedId && (
        <AnimatedSection delay={0.2}>
          <div className="max-w-2xl sm:max-w-4xl lg:max-w-6xl mx-auto">
            <div className="relative group">
              <div
                className="absolute -inset-1 sm:-inset-2 rounded-xl sm:rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"
                style={{ background: `linear-gradient(45deg, ${BRAND_COLOR}, #0066CC)` }}
              />
              <div className="relative bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl border border-gray-200 sm:border-2 sm:border-gray-100 dark:border-gray-700">
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${youtubeEmbedId}?autoplay=0&controls=1&modestbranding=1&rel=0`}
                    title="Video Dokumentasi Aktivitas"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      )}
    </div>
  </div>
)

const SectionHeader = () => (
  <AnimatedSection className="mb-8 sm:mb-12 lg:mb-16">
    <div className="max-w-4xl">
      <h2
        className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6 leading-tight"
        style={{ color: BRAND_COLOR }}
      >
        Dokumentasi Kegiatan
      </h2>
      <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
        Koleksi momen berharga dari berbagai aktivitas dan pencapaian akademik yang menginspirasi perjalanan pendidikan
      </p>
      <div className="w-12 sm:w-16 lg:w-20 h-1 mt-4 sm:mt-6" style={{ backgroundColor: BRAND_COLOR }} />
    </div>
  </AnimatedSection>
)

const ActivityCard = ({ item, index }: { item: Aktivitas; index: number }) => (
  <AnimatedSection key={item.id} delay={index * 0.05}>
    <Card className="group overflow-hidden bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={item.gambar || "/placeholder.svg"}
          alt={item.judul}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 480px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <CardContent className="p-3 sm:p-4">
        <h3 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white line-clamp-2 leading-tight mb-2">
          {item.judul}
        </h3>
        <Badge variant="secondary" className="text-xs text-white" style={{ backgroundColor: BRAND_COLOR }}>
          <Calendar className="h-3 w-3 mr-1" />
          {formatDate(item.tanggal)}
        </Badge>
      </CardContent>
    </Card>
  </AnimatedSection>
)

const ShowMoreButton = ({
  showAllCards,
  setShowAllCards,
  totalCount,
  displayedCount,
}: {
  showAllCards: boolean
  setShowAllCards: (show: boolean) => void
  totalCount: number
  displayedCount: number
}) => {
  const buttonStyle = {
    borderColor: BRAND_COLOR,
    backgroundColor: BRAND_COLOR,
    color: "white",
  }

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = "white"
    e.currentTarget.style.color = BRAND_COLOR
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = BRAND_COLOR
    e.currentTarget.style.color = "white"
  }

  if (totalCount <= displayedCount) return null

  return (
    <div className="text-left">
      <Button
        onClick={() => setShowAllCards(!showAllCards)}
        variant="outline"
        className="px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-medium border-2 text-white hover:bg-white transition-all duration-300 rounded-lg"
        style={buttonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {showAllCards ? "Tampilkan Lebih Sedikit" : `Tampilkan ${totalCount - displayedCount} Foto Lainnya`}
      </Button>
    </div>
  )
}

const CarouselImage = ({
  image,
  index,
  onImageClick,
}: {
  image: GalleryImage
  index: number
  originalLength: number
  onImageClick: (image: GalleryImage) => void
}) => (
  <div
    key={`${index}-${image.src}`}
    className="flex-shrink-0 w-60 h-40 sm:w-72 sm:h-48 lg:w-80 lg:h-56 relative cursor-pointer group"
    onClick={() => onImageClick(image)}
  >
    <Image
      src={image.src || "/placeholder.svg"}
      alt={image.alt}
      fill
      className="object-cover rounded-lg sm:rounded-xl transition-transform duration-300 group-hover:scale-105 shadow-lg"
      sizes="(max-width: 640px) 240px, (max-width: 1024px) 288px, 320px"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg sm:rounded-xl">
      <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
        <span className="text-white text-sm sm:text-base font-semibold block line-clamp-2">{image.alt}</span>
      </div>
    </div>
    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
        <Play className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
      </div>
    </div>
  </div>
)

const NavigationButton = ({
  direction,
  onClick,
}: {
  direction: "left" | "right"
  onClick: () => void
}) => (
  <Button
    onClick={onClick}
    variant="outline"
    size="icon"
    className={`absolute ${direction === "left" ? "left-2 sm:left-4" : "right-2 sm:right-4"} top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white border-0 shadow-lg w-8 h-8 sm:w-10 sm:h-10`}
  >
    {direction === "left" ? (
      <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
    ) : (
      <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
    )}
  </Button>
)

const ImagePopup = ({
  selectedImage,
  onClose,
}: {
  selectedImage: GalleryImage | null
  onClose: () => void
}) => {
  if (!selectedImage) return null

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <div className="relative max-w-full max-h-full w-full sm:max-w-4xl lg:max-w-5xl">
        <button
          onClick={onClose}
          className="absolute -top-8 sm:-top-12 right-0 text-white hover:text-gray-300 transition-colors"
        >
          <X className="h-6 w-6 sm:h-8 sm:w-8" />
        </button>
        <div className="relative">
          <Image
            src={selectedImage.src || "/placeholder.svg"}
            alt={selectedImage.alt}
            width={1000}
            height={700}
            className="max-w-full max-h-[80vh] sm:max-h-[85vh] object-contain rounded-lg"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6 rounded-b-lg">
            <h3 className="text-white text-lg sm:text-xl font-semibold">{selectedImage.alt}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

// Main Component
const AktivitasClientPage = ({
  initialAktivitas,
  initialYoutubeUrl,
  initialGalleryImages,
}: AktivitasClientPageProps) => {
  // State
  const [aktivitas] = useState<Aktivitas[]>(initialAktivitas)
  const [galleryImages] = useState<GalleryImage[]>(initialGalleryImages)
  const [youtubeUrl] = useState(initialYoutubeUrl)
  const [showAllCards, setShowAllCards] = useState(false)
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [carouselTransform, setCarouselTransform] = useState(0)
  const [isAnimationPaused, setIsAnimationPaused] = useState(false)

  // Computed values
  const youtubeEmbedId = getYoutubeEmbedId(youtubeUrl)
  const displayedCards = showAllCards ? aktivitas : aktivitas.slice(0, INITIAL_DISPLAY_COUNT)
  const infiniteGalleryImages = [...galleryImages, ...galleryImages, ...galleryImages]

  // Event handlers
  const openImagePopup = (image: GalleryImage) => {
    setSelectedImage(image)
    setIsPopupOpen(true)
  }

  const closeImagePopup = () => {
    setIsPopupOpen(false)
    setSelectedImage(null)
  }

  const handleCarouselNavigation = (direction: "next" | "prev") => {
    setIsAnimationPaused(true)
    const moveDistance = direction === "next" ? -CAROUSEL_IMAGE_WIDTH : CAROUSEL_IMAGE_WIDTH
    setCarouselTransform((prev) => prev + moveDistance)
    setTimeout(() => setIsAnimationPaused(false), 500)
  }

  const nextSlide = () => handleCarouselNavigation("next")
  const prevSlide = () => handleCarouselNavigation("prev")

  return (
    <PageWrapper>
      <div className="bg-white dark:bg-gray-900">
        <HeroSection youtubeEmbedId={youtubeEmbedId} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <SectionHeader />

          {/* Photo Gallery Grid */}
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12">
            {displayedCards.map((item, index) => (
              <ActivityCard key={item.id} item={item} index={index} />
            ))}
          </div>

          <ShowMoreButton
            showAllCards={showAllCards}
            setShowAllCards={setShowAllCards}
            totalCount={aktivitas.length}
            displayedCount={INITIAL_DISPLAY_COUNT}
          />

          {/* Enhanced Carousel */}
          {galleryImages.length > 0 && (
            <AnimatedSection>
              <div className="mt-12 sm:mt-16 lg:mt-20 bg-gray-50 dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 overflow-hidden">
                <div className="mb-6 sm:mb-8">
                  <h3
                    className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold mb-2 sm:mb-3"
                    style={{ color: BRAND_COLOR }}
                  >
                    Galeri Foto Terbaru
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                    Jelajahi koleksi foto terbaru dari kegiatan akademik kami
                  </p>
                  <div className="w-8 sm:w-12 lg:w-16 h-1" style={{ backgroundColor: BRAND_COLOR }} />
                </div>

                <div className="relative">
                  <NavigationButton direction="left" onClick={prevSlide} />
                  <NavigationButton direction="right" onClick={nextSlide} />

                  <div className="overflow-hidden rounded-lg">
                    <div
                      className={`flex space-x-3 sm:space-x-4 lg:space-x-6 transition-transform duration-500 ${isAnimationPaused ? "" : "animate-infinite-scroll"}`}
                      style={{
                        transform: `translateX(${carouselTransform}px)`,
                        width: `calc(${CAROUSEL_IMAGE_WIDTH + CAROUSEL_SPACING}px * ${infiniteGalleryImages.length})`,
                      }}
                    >
                      {infiniteGalleryImages.map((image, index) => (
                        <CarouselImage
                          key={`${index}-${image.src}`}
                          image={image}
                          index={index}
                          originalLength={galleryImages.length}
                          onImageClick={() => openImagePopup(galleryImages[index % galleryImages.length])}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          )}
        </div>

        <ImagePopup selectedImage={isPopupOpen ? selectedImage : null} onClose={closeImagePopup} />
      </div>

      <style jsx>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll ${ANIMATION_DURATION}ms linear infinite;
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
        
        @media (min-width: 480px) {
          .xs\\:grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
      `}</style>
    </PageWrapper>
  )
}

export default AktivitasClientPage

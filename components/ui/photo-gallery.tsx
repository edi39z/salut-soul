"use client"

import React from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "./button"

interface PhotoGalleryProps {
  images: { src: string; alt: string }[]
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ images }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  // Group images into chunks of 9 for the 3x3 grid
  const imageChunks = React.useMemo(() => {
    const chunks = []
    for (let i = 0; i < images.length; i += 9) {
      chunks.push(images.slice(i, i + 9))
    }
    return chunks
  }, [images])

  return (
    <div className="relative w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {imageChunks.map((chunk, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0">
              <div className="grid grid-cols-3 gap-4 p-1">
                {chunk.map((image, imgIndex) => (
                  <div key={imgIndex} className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                      sizes="(max-width: 768px) 30vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button
        onClick={scrollPrev}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 rounded-full h-12 w-12 p-0 bg-white/50 dark:bg-black/50 backdrop-blur-sm border-white/30 dark:border-black/30 text-gray-800 dark:text-white hover:bg-white/80 dark:hover:bg-black/80 transition-all duration-300 shadow-lg"
        variant="ghost"
      >
        <ArrowLeft className="h-6 w-6" />
      </Button>
      <Button
        onClick={scrollNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 rounded-full h-12 w-12 p-0 bg-white/50 dark:bg-black/50 backdrop-blur-sm border-white/30 dark:border-black/30 text-gray-800 dark:text-white hover:bg-white/80 dark:hover:bg-black/80 transition-all duration-300 shadow-lg"
        variant="ghost"
      >
        <ArrowRight className="h-6 w-6" />
      </Button>
    </div>
  )
}

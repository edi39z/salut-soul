"use client"

import React, { useState, useRef } from "react"
import ReactCrop, { centerCrop, makeAspectCrop, type Crop } from "react-image-crop"
import "react-image-crop/dist/ReactCrop.css"
import { Button } from "@/components/ui/button"

interface ImageCropperProps {
  src: string
  onCropComplete: (croppedImage: Blob) => void
  onClose: () => void
}

export function ImageCropper({ src, onCropComplete, onClose }: ImageCropperProps) {
  const [crop, setCrop] = useState<Crop>({
    unit: "px",
    x: 0,
    y: 0,
    width: 100,
    height: 150, // Default 4:6 ratio (100x150)
  })
  const [aspect] = useState(4 / 6)
  const imgRef = useRef<HTMLImageElement | null>(null)

  const getCroppedImg = (image: HTMLImageElement, crop: Crop): Promise<Blob> => {
    const canvas = document.createElement("canvas")
    const scaleX = image.naturalWidth / image.width
    const scaleY = image.naturalHeight / image.height
    canvas.width = crop.width * scaleX
    canvas.height = crop.height * scaleY
    const ctx = canvas.getContext("2d")

    if (ctx) {
      ctx.drawImage(
        image,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width * scaleX,
        crop.height * scaleY
      )
    }

    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          reject(new Error("Canvas is empty"))
          return
        }
        resolve(blob)
      }, "image/jpeg")
    })
  }

  const handleCrop = async () => {
    if (imgRef.current && crop.width && crop.height) {
      const croppedImageBlob = await getCroppedImg(imgRef.current, crop)
      onCropComplete(croppedImageBlob)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg max-w-lg w-full">
        <h2 className="text-lg font-bold mb-4">Crop Photo</h2>
        <div className="flex justify-center">
          <ReactCrop
            crop={crop}
            onChange={(c) => setCrop(c)}
            aspect={aspect}
            onComplete={(c) => setCrop(c)}
          >
            <img
              ref={imgRef}
              src={src}
              alt="Source"
              style={{ maxHeight: "70vh" }}
              onLoad={(e) => {
                const { width, height } = e.currentTarget
                const newCrop = centerCrop(
                  makeAspectCrop(
                    {
                      unit: "%",
                      width: 90,
                    },
                    aspect,
                    width,
                    height
                  ),
                  width,
                  height
                )
                setCrop(newCrop)
              }}
            />
          </ReactCrop>
        </div>
        <div className="flex justify-end gap-2 mt-4">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleCrop}>Done</Button>
        </div>
      </div>
    </div>
  )
}

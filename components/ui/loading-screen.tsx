"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"

interface LoadingScreenProps {
    onComplete: () => void
}

const phrase = "SENTRA LAYANAN UNIVERSITAS TERBUKA"

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
    const [showLogo, setShowLogo] = useState(false)
    const [showPhrase, setShowPhrase] = useState(false)
    const [fadeOut, setFadeOut] = useState(false)
    const [hideScreen, setHideScreen] = useState(false) // <-- Tambahan

    useEffect(() => {
        const timeouts = [
            setTimeout(() => setShowLogo(true), 800),
            setTimeout(() => setShowPhrase(true), 1800),
            setTimeout(() => {
                setFadeOut(true)
                // Delay unmount agar animasi fade-out sempat berjalan
                setTimeout(() => {
                    setHideScreen(true)
                    onComplete()
                }, 1000)
            }, 70 * phrase.length + 2500),
        ]

        return () => timeouts.forEach(clearTimeout)
    }, [onComplete])

    if (hideScreen) return null // Komponen di-unmount

    return (
        <div
            className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-white to-[#f3f7fc] text-[#002F86] transition-opacity duration-1000 ${fadeOut ? "opacity-0" : "opacity-100"
                }`}
        >
            {/* Logo */}
            <Image
                src="/soul.png"
                alt="Logo"
                width={180}
                height={180}
                className={`transition-all duration-1000 ease-out mb-6 ${showLogo ? "opacity-100 scale-100" : "opacity-0 scale-75"
                    }`}
            />

            {/* Kalimat utama */}
            <div className="flex flex-wrap justify-center text-base sm:text-lg md:text-xl font-medium tracking-wide">
                {phrase.split("").map((char, i) => (
                    <span
                        key={i}
                        className={`opacity-0 ${showPhrase ? "animate-fade-in-up" : ""}`}
                        style={{
                            animationDelay: `${i * 70}ms`,
                            animationFillMode: "forwards",
                            animationDuration: "500ms",
                            animationTimingFunction: "ease-out",
                        }}
                    >
                        {char === " " ? "\u00A0" : char}
                    </span>
                ))}
            </div>
        </div>
    )
}

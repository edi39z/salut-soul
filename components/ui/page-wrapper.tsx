"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { LoadingScreen } from "./loading-screen"

interface PageWrapperProps {
    children: React.ReactNode
}

export function PageWrapper({ children }: PageWrapperProps) {
    const [hideLoading, setHideLoading] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        if (pathname === "/") {
            setHideLoading(false)
        } else {
            setHideLoading(true)
        }
    }, [pathname])

    const handleLoadingComplete = () => {
        // Delay agar bisa transisi keluar
        setTimeout(() => {
            setHideLoading(true)
        }, 300)
    }

    return (
        <div className="relative">
            {/* Overlay loading */}
            {!hideLoading && (
                <div className="fixed inset-0 z-[9999] bg-white">
                    <LoadingScreen onComplete={handleLoadingComplete} />
                </div>
            )}

            {/* Halaman utama */}
            <div
                className={`transition-all duration-1000 ease-in-out ${hideLoading ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
            >
                {children}
            </div>
        </div>
    )
}

"use client"

import type { ReactNode } from "react"

interface PageWrapperProps {
    children: ReactNode
}

export function PageWrapper({ children }: PageWrapperProps) {
    return <div className="min-h-screen bg-white">{children}</div>
}

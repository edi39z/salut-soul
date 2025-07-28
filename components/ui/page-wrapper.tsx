"use client"

import type { ReactNode } from "react"
import { Navbar } from "./navbar"
import { Footer } from "./footer"
import { usePathname } from "next/navigation"

interface PageWrapperProps {
  children: ReactNode
}

export function PageWrapper({ children }: PageWrapperProps) {
  const pathname = usePathname()
  const showImageHeader = pathname === "/"

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
      <Navbar showImageHeader={showImageHeader} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import BrosurPopup from "@/components/ui/brosur-popup"
import { PricingSection } from "@/components/ui/pricing-section"
import { TargetUtamaSection } from "@/components/ui/target-utama-section"
import { BeritaSection } from "@/components/ui/berita-section"
import { HeroCarousel } from "@/components/ui/hero-carousel"
import { AdvantagesSection } from "@/components/ui/advantages-section"
import { RegistrationFlowSection } from "@/components/ui/registration-flow-section"
import { LoadingScreen } from "@/components/ui/loading-screen"

export default function HomePage() {
  const [showLoading, setShowLoading] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const [triggerBrosur, setTriggerBrosur] = useState(false)

  useEffect(() => {
    // Check if this is the first visit to homepage
    const hasVisitedHomepage = sessionStorage.getItem("hasVisitedHomepage")

    if (!hasVisitedHomepage) {
      setShowLoading(true)
      sessionStorage.setItem("hasVisitedHomepage", "true")
    } else {
      setShowContent(true)
      // Trigger brosur immediately for returning visitors
      setTimeout(() => {
        setTriggerBrosur(true)
      }, 500)
    }
  }, [])

  const handleLoadingComplete = () => {
    setShowLoading(false)
    // Smooth transition from loading to content
    setTimeout(() => {
      setShowContent(true)
      // Trigger brosur after content is shown
      setTimeout(() => {
        setTriggerBrosur(true)
      }, 800)
    }, 200)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Loading Screen - only on first visit */}
      {showLoading && (
        <div className="fixed inset-0 z-[9999] bg-white">
          <LoadingScreen onComplete={handleLoadingComplete} />
        </div>
      )}

      {/* Main Content */}
      <div
        className={`transition-all duration-1000 ease-in-out ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
      >
        <Navbar showImageHeader={true} />
        <main>
          <HeroCarousel />
          <AdvantagesSection />
          <PricingSection />
          <TargetUtamaSection />
          <RegistrationFlowSection />
          <BeritaSection />
          <Footer />
        </main>
      </div>

      {/* Brosur Popup - triggered after loading completes */}
      <BrosurPopup trigger={triggerBrosur} />
    </div>
  )
}

"use client"

import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import BrosurPopup from "@/components/ui/brosur-popup"
import { PricingSection } from "@/components/ui/pricing-section"
import { TargetUtamaSection } from "@/components/ui/target-utama-section"
import { BeritaSection } from "@/components/ui/berita-section"
import { HeroCarousel } from "@/components/ui/hero-carousel"
import { AdvantagesSection } from "@/components/ui/advantages-section"
import { RegistrationFlowSection } from "@/components/ui/registration-flow-section"

export default function HomePage() {

  return (
    <div className="min-h-screen bg-white">
      <Navbar showImageHeader={true} />
      <main>
        <HeroCarousel />

        {/* Advantages Section */}
        <AdvantagesSection />

        {/* Pricing Section */}
        <PricingSection />

        {/* Target Utama Section */}
        <TargetUtamaSection />

        {/* Faculty Selection */}

        {/* Registration Flow Section */}
        <RegistrationFlowSection />

        {/* Berita Section */}
        <BeritaSection />

        <BrosurPopup />
        <Footer />
      </main>
    </div>
  )
}

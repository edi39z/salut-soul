"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

interface HeroSectionProps {
  title: string
  subtitle: string
  description: string
  primaryCTA: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  backgroundImage?: string
}

export function HeroSection({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-primary">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-secondary-100 text-secondary-600 rounded-full text-sm font-medium mb-4">
              {subtitle}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-neutral-900 mb-6 leading-tight"
          >
            {title.split(" ").map((word, index) => (
              <span key={index} className={word.includes("Terjangkau") ? "text-gradient" : ""}>
                {word}{" "}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-neutral-600 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button asChild size="lg" className="btn-primary group">
              <Link href={primaryCTA.href}>
                {primaryCTA.text}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            {secondaryCTA && (
              <Button asChild size="lg" variant="outline" className="btn-outline group bg-transparent">
                <Link href={secondaryCTA.href}>
                  <Play className="mr-2 w-5 h-5" />
                  {secondaryCTA.text}
                </Link>
              </Button>
            )}
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-20 h-20 bg-primary-100 rounded-full opacity-60"
      />
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-20 right-10 w-32 h-32 bg-secondary-100 rounded-full opacity-40"
      />
    </section>
  )
}

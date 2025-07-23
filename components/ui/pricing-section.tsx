"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection } from "@/components/ui/animated-section"
import { CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function PricingSection() {
    const pricingPlans = [
        {
            id: "non-sipas",
            name: "Non Paket Semester",
            subtitle: "(Non SIPAS)",
            level: "Diploma/Sarjana",
            description: "Great For Anyone",
            price: "36",
            unit: "Rb-an",
            period: "/SKS",
            isPopular: false,
            features: ["Bahan Ajar Digital", "Layanan Tutorial dan Ujian", "Layanan Pendukung Kesuksesan Belajar Jarak Jauh"],
            buttonText: "Daftar Sekarang",
        },
        {
            id: "sipas",
            name: "Sistem Paket Semester",
            subtitle: "(SIPAS)",
            level: "Diploma/Sarjana",
            description: "Great for Anyone",
            price: "1,3",
            unit: "Juta",
            period: "/Semester",
            isPopular: true,
            features: [
                "Bahan Ajar Cetak & Digital",
                "Layanan Tutorial dan Ujian",
                "Layanan Pendukung Kesuksesan Belajar Jarak Jauh",
            ],
            buttonText: "Daftar Sekarang",
        },
    ]

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <AnimatedSection>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Pilih <span className="text-[#002F86]">Paket Kuliah</span> Sesuai Kebutuhanmu
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Sistem pembayaran fleksibel dengan biaya terjangkau untuk semua kalangan
                        </p>
                    </div>
                </AnimatedSection>

                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {pricingPlans.map((plan, index) => (
                            <AnimatedSection key={plan.id} delay={index * 0.2}>
                                <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }} className="h-full">
                                    <Card
                                        className={`${plan.isPopular
                                                ? "bg-[#002F86] text-white shadow-2xl border-2 border-[#002F86]"
                                                : "bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl"
                                            } transition-all duration-500 h-full overflow-hidden relative group rounded-2xl`}
                                    >
                                        <CardHeader className="relative z-10 text-center pb-6 pt-8">
                                            <div className="mb-6">
                                                <CardTitle
                                                    className={`text-2xl font-bold ${plan.isPopular ? "text-white" : "text-gray-900"} mb-2`}
                                                >
                                                    {plan.name}
                                                </CardTitle>
                                                <p
                                                    className={`${plan.isPopular ? "text-blue-100" : "text-gray-600"} font-medium text-base mb-3`}
                                                >
                                                    {plan.subtitle}
                                                </p>
                                                <div className="mb-3">
                                                    <Badge
                                                        className={`${plan.isPopular
                                                                ? "bg-[#FFD700] text-[#002F86] border-[#FFD700]"
                                                                : "bg-[#002F86] text-white border-[#002F86]"
                                                            } px-3 py-1 rounded-full text-sm border font-semibold`}
                                                    >
                                                        {plan.level}
                                                    </Badge>
                                                </div>
                                                <p className={`${plan.isPopular ? "text-blue-100" : "text-gray-500"} text-sm`}>
                                                    {plan.description}
                                                </p>
                                            </div>
                                            {/* Price Display */}
                                            <div className="mb-8">
                                                <div className="flex items-baseline justify-center space-x-1">
                                                    <span className={`text-2xl font-bold ${plan.isPopular ? "text-white" : "text-gray-900"}`}>
                                                        Rp
                                                    </span>
                                                    <span className={`text-6xl font-bold ${plan.isPopular ? "text-white" : "text-gray-900"}`}>
                                                        {plan.price}
                                                    </span>
                                                    <span
                                                        className={`text-xl font-semibold ${plan.isPopular ? "text-blue-100" : "text-gray-600"}`}
                                                    >
                                                        {plan.unit}
                                                    </span>
                                                </div>
                                                <p className={`${plan.isPopular ? "text-blue-100" : "text-gray-500"} text-lg font-medium mt-2`}>
                                                    {plan.period}
                                                </p>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="relative z-10 pt-0 px-8 pb-8">
                                            {/* Features */}
                                            <div className="space-y-4 mb-8">
                                                {plan.features.map((feature, idx) => (
                                                    <div key={idx} className="flex items-start space-x-3">
                                                        <div
                                                            className={`w-6 h-6 ${plan.isPopular ? "bg-[#FFD700]" : "bg-[#002F86]"
                                                                } rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}
                                                        >
                                                            <CheckCircle className={`w-4 h-4 ${plan.isPopular ? "text-[#002F86]" : "text-white"}`} />
                                                        </div>
                                                        <span
                                                            className={`${plan.isPopular ? "text-blue-50" : "text-gray-700"} text-sm leading-relaxed`}
                                                        >
                                                            {feature}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                            {/* CTA Button */}
                                            <Button
                                                className={`w-full ${plan.isPopular
                                                        ? "bg-white text-[#002F86] hover:bg-[#FFD700] hover:text-[#002F86] shadow-lg"
                                                        : "bg-[#002F86] hover:bg-[#FFD700] hover:text-[#002F86] text-white"
                                                    } text-lg py-4 rounded-xl transition-all duration-300 transform group-hover:scale-105 font-semibold`}
                                                asChild
                                            >
                                                <Link href="/pendaftaran">
                                                    {plan.buttonText}
                                                    <ArrowRight className="ml-2 w-5 h-5" />
                                                </Link>
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

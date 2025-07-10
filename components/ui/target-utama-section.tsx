"use client"

import { AnimatedSection } from "@/components/ui/animated-section"
import Image from "next/image"
import { Rocket, Star, Network, Cpu } from "lucide-react"

export function TargetUtamaSection() {
    const targets = [
        {
            icon: Rocket,
            title: "Menuju 1 Juta",
            description:
                "Target UT memiliki 1 Juta Mahasiswa Aktif dengan tujuan meningkatkan Angka Partisipasi Kasar (APK) Perguruan Tinggi",
            iconColor: "text-blue-500",
            bgColor: "bg-blue-50",
            borderColor: "border-blue-200",
        },
        {
            icon: Star,
            title: "Perguruan Tinggi Berkualitas Dunia",
            description: "UT mempunyai visi menjadi perguruan tinggi berkualitas dunia dengan mengedepankan layanan prima",
            iconColor: "text-blue-600",
            bgColor: "bg-blue-50",
            borderColor: "border-blue-200",
        },
        {
            icon: Network,
            title: "Akses Layanan Terluas",
            description: "Memperluas akses layanan UT hingga manca negara, mahasiswa UT saat ini sudah tersebar di 51 negara",
            iconColor: "text-blue-500",
            bgColor: "bg-blue-50",
            borderColor: "border-blue-200",
        },
        {
            icon: Cpu,
            title: "Infrastruktur Teknologi Termutakhir",
            description: "UT sudah menggunakan infrastruktur IT dengan teknologi termutakhir saat ini",
            iconColor: "text-blue-600",
            bgColor: "bg-blue-50",
            borderColor: "border-blue-200",
        },
    ]

    return (
        <section className="py-16 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <AnimatedSection>
                    {/* Title */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Target Utama UT</h2>
                    </div>

                    {/* Main Content */}
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Left Side - Image */}
                            <div className="order-2 lg:order-1">
                                <div className="relative">
                                    <Image
                                        src="/images/target.png"
                                        alt="Target Utama UT - Dua mahasiswa UT dalam seragam kuning"
                                        width={600}
                                        height={400}
                                        className="w-full h-auto rounded-2xl"
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Right Side - Timeline */}
                            <div className="order-1 lg:order-2">
                                <div className="space-y-8">
                                    {targets.map((target, index) => (
                                        <AnimatedSection key={index} delay={0.1 * (index + 1)}>
                                            <div className="flex items-start space-x-4 group">
                                                {/* Icon Circle */}
                                                <div
                                                    className={`flex-shrink-0 w-12 h-12 ${target.bgColor} ${target.borderColor} border-2 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                                                >
                                                    <target.icon className={`w-6 h-6 ${target.iconColor}`} />
                                                </div>

                                                {/* Content */}
                                                <div className="flex-1 pb-8">
                                                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                                        {target.title}
                                                    </h3>
                                                    <p className="text-gray-600 leading-relaxed">{target.description}</p>
                                                </div>

                                                {/* Connecting Line (except for last item) */}
                                                {index < targets.length - 1 && (
                                                    <div className="absolute left-6 mt-12 w-0.5 h-16 bg-gradient-to-b from-blue-200 to-blue-100"></div>
                                                )}
                                            </div>
                                        </AnimatedSection>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    )
}

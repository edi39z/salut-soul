"use client"

import { AnimatedSection } from "@/components/ui/animated-section"
import { Clock, DollarSign, Shield, Heart, Globe, Target } from "lucide-react"

export function AdvantagesSection() {
    const advantages = [
        {
            icon: Clock,
            title: "Pembelajaran Fleksibel",
            description: "Belajar kapan saja, di mana saja sesuai dengan jadwal dan kebutuhan Anda.",
        },
        {
            icon: DollarSign,
            title: "Biaya Terjangkau",
            description: "Investasi pendidikan yang ekonomis dengan kualitas terjamin dan dapat dicicil.",
        },
        {
            icon: Shield,
            title: "Terakreditasi Nasional",
            description: "Program studi terakreditasi BAN-PT dengan standar kualitas internasional.",
        },
        {
            icon: Heart,
            title: "Dukungan Akademik",
            description: "Bimbingan dan layanan akademik komprehensif dari tim profesional berpengalaman.",
        },
        {
            icon: Globe,
            title: "Jaringan Nasional",
            description: "Tersebar di seluruh Indonesia dengan standar kualitas yang konsisten.",
        },
        {
            icon: Target,
            title: "Fokus Karier",
            description: "Program yang dirancang untuk meningkatkan kompetensi dan daya saing karier.",
        },
    ]

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <AnimatedSection>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#002F86] mb-4">
                            Mengapa Memilih <span className="text-[#FFD700]">Universitas Terbuka?</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Keunggulan yang membuat UT menjadi pilihan terbaik untuk pendidikan tinggi berkualitas
                        </p>
                    </div>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {advantages.map((advantage, index) => (
                        <AnimatedSection key={index} delay={index * 0.1}>
                            <div className="group h-full">
                                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full">
                                    {/* Icon */}
                                    <div className="mb-4">
                                        <div className="w-12 h-12 bg-[#002F86] rounded-lg flex items-center justify-center group-hover:bg-[#FFD700] transition-colors duration-300">
                                            <advantage.icon className="w-6 h-6 text-white group-hover:text-[#002F86]" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div>
                                        <h3 className="text-lg font-bold text-[#002F86] mb-3 group-hover:text-[#002F86] transition-colors">
                                            {advantage.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed text-sm">{advantage.description}</p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    )
}

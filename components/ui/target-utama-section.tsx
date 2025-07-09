"use client"

import { AnimatedSection } from "@/components/ui/animated-section"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Globe, Network, Cpu, TrendingUp } from "lucide-react"

export function TargetUtamaSection() {
    const targets = [
        {
            icon: Users,
            title: "Menuju 1 Juta",
            subtitle: "Mahasiswa Aktif",
            description:
                "Target UT memiliki 1 Juta Mahasiswa Aktif dengan tujuan meningkatkan Angka Partisipasi Kasar (APK) Perguruan Tinggi",
            color: "from-blue-500 to-cyan-500",
            bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
            number: "1M+",
            delay: 0.1,
        },
        {
            icon: Globe,
            title: "Perguruan Tinggi",
            subtitle: "Berkualitas Dunia",
            description: "UT mempunyai visi menjadi perguruan tinggi berkualitas dunia dengan mengedepankan layanan prima",
            color: "from-emerald-500 to-teal-500",
            bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
            number: "World",
            delay: 0.2,
        },
        {
            icon: Network,
            title: "Akses Layanan",
            subtitle: "Terluas",
            description: "Memperluas akses layanan UT hingga manca negara, mahasiswa UT saat ini sudah tersebar di 51 negara",
            color: "from-purple-500 to-violet-500",
            bgColor: "bg-gradient-to-br from-purple-50 to-violet-50",
            number: "51",
            delay: 0.3,
        },
        {
            icon: Cpu,
            title: "Infrastruktur Teknologi",
            subtitle: "Termutakhir",
            description: "UT sudah menggunakan infrastruktur IT dengan teknologi termutakhir saat ini",
            color: "from-amber-500 to-orange-500",
            bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
            number: "Tech",
            delay: 0.4,
        },
    ]

    return (
        <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <AnimatedSection>
                    <div className="text-center mb-20">

                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Visi & Misi <span className="text-blue-600">Universitas Terbuka</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                            Empat target utama yang menjadi fokus pengembangan Universitas Terbuka menuju masa depan
                        </p>
                    </div>
                </AnimatedSection>

                {/* Main Visual Section */}
                <div className="max-w-7xl mx-auto">
                    {/* Central Circle with UT Logo */}

                    {/* Target Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {targets.map((target, index) => (
                            <AnimatedSection key={index} delay={target.delay}>
                                <div className="group h-full">
                                    <Card
                                        className={`${target.bgColor} border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 h-full overflow-hidden relative`}
                                    >
                                        {/* Background Pattern */}
                                        <div className="absolute inset-0 opacity-10">
                                            <div className={`absolute inset-0 bg-gradient-to-br ${target.color} rounded-3xl`}></div>
                                        </div>

                                        <CardContent className="p-8 relative z-10">
                                            {/* Number Badge */}
                                            <div className="flex justify-between items-start mb-6">
                                                <div
                                                    className={`w-16 h-16 bg-gradient-to-br ${target.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                                                >
                                                    <target.icon className="w-8 h-8 text-white" />
                                                </div>
                                                <div className="text-right">
                                                    <div
                                                        className={`text-2xl font-bold bg-gradient-to-r ${target.color} bg-clip-text text-transparent`}
                                                    >
                                                        {target.number}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="space-y-4">
                                                <div>
                                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                                                        {target.title}
                                                    </h3>
                                                    <p className="text-lg font-semibold text-gray-700">{target.subtitle}</p>
                                                </div>
                                                <p className="text-gray-600 leading-relaxed text-sm">{target.description}</p>
                                            </div>

                                            {/* Progress indicator */}
                                            <div className="mt-6 pt-4 border-t border-white/50">
                                                <div className="flex items-center space-x-2">
                                                    <TrendingUp
                                                        className={`w-4 h-4 text-gradient bg-gradient-to-r ${target.color} bg-clip-text`}
                                                    />
                                                    <span className="text-xs font-medium text-gray-500">Target Strategis</span>
                                                </div>
                                            </div>
                                        </CardContent>

                                        {/* Decorative Elements */}
                                        <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
                                        <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full blur-lg"></div>
                                    </Card>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>

                    {/* Bottom Stats */}
                    <AnimatedSection delay={0.6}>
                        <div className="mt-16 text-center">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600 mb-2">600K+</div>
                                    <div className="text-sm text-gray-600">Mahasiswa Aktif</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-emerald-600 mb-2">51</div>
                                    <div className="text-sm text-gray-600">Negara</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-purple-600 mb-2">40+</div>
                                    <div className="text-sm text-gray-600">UPBJJ</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-amber-600 mb-2">A</div>
                                    <div className="text-sm text-gray-600">Akreditasi</div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    )
}

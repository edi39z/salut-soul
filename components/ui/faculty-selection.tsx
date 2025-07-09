"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Users, BookOpen, Target, TrendingUp, ExternalLink } from "lucide-react"
import Link from "next/link"

export function FacultySelection() {
    const faculties = [
        {
            name: "FISIP",
            fullName: "Fakultas Ilmu Sosial dan Ilmu Politik",
            programs: ["Administrasi Negara", "Administrasi Niaga", "Ilmu Komunikasi", "Ilmu Perpustakaan"],
            icon: Users,
            students: "45,000+",
            accreditation: "A",
            color: "from-blue-500 to-indigo-500",
            bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
        },
        {
            name: "FKIP",
            fullName: "Fakultas Keguruan dan Ilmu Pendidikan",
            programs: ["Pendidikan Bahasa Indonesia", "Pendidikan Matematika", "Pendidikan Biologi", "PGSD"],
            icon: BookOpen,
            students: "120,000+",
            accreditation: "A",
            color: "from-emerald-500 to-teal-500",
            bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
        },
        {
            name: "FMIPA",
            fullName: "Fakultas MIPA",
            programs: ["Matematika", "Statistika", "Biologi", "Teknologi Pangan"],
            icon: Target,
            students: "35,000+",
            accreditation: "A",
            color: "from-purple-500 to-violet-500",
            bgColor: "bg-gradient-to-br from-purple-50 to-violet-50",
        },
        {
            name: "FE",
            fullName: "Fakultas Ekonomi dan Bisnis",
            programs: ["Manajemen", "Akuntansi", "Ekonomi Pembangunan", "Ekonomi Syariah"],
            icon: TrendingUp,
            students: "80,000+",
            accreditation: "A",
            color: "from-amber-500 to-orange-500",
            bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
        },
    ]

    return (
        <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-indigo-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10">
                <AnimatedSection>
                    <div className="text-center mb-20">
                        <Badge className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 text-sm font-medium rounded-full mb-6">
                            <BookOpen className="w-4 h-4 mr-2" />
                            Fakultas & Program Studi
                        </Badge>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Pilih <span className="text-indigo-600">Fakultas</span> Sesuai Minatmu
                        </h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                            Berbagai pilihan fakultas dan program studi berkualitas dengan akreditasi terbaik
                        </p>
                    </div>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {faculties.map((faculty, index) => (
                        <AnimatedSection key={index} delay={index * 0.1}>
                            <div className="group h-full">
                                <Card
                                    className={`${faculty.bgColor} border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 h-full overflow-hidden relative`}
                                >
                                    {/* Background Pattern */}
                                    <div className="absolute inset-0 opacity-5">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${faculty.color}`}></div>
                                    </div>
                                    <CardHeader className="relative z-10 pb-4">
                                        <div className="flex items-center justify-between mb-4">
                                            <div
                                                className={`w-16 h-16 bg-gradient-to-br ${faculty.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                                            >
                                                <faculty.icon className="w-8 h-8 text-white" />
                                            </div>
                                            <div className="text-right">
                                                <Badge className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-semibold mb-2">
                                                    Akreditasi {faculty.accreditation}
                                                </Badge>
                                                <p className="text-sm text-gray-600">{faculty.students} Mahasiswa</p>
                                            </div>
                                        </div>
                                        <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                                            {faculty.name}
                                        </CardTitle>
                                        <CardDescription className="text-gray-600 text-base font-medium">
                                            {faculty.fullName}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="relative z-10">
                                        <div className="space-y-3">
                                            <h4 className="font-semibold text-gray-900 mb-3">Program Studi Unggulan:</h4>
                                            <div className="grid grid-cols-1 gap-2">
                                                {faculty.programs.map((program, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl hover:bg-white/80 transition-all duration-300"
                                                    >
                                                        <div className="w-2 h-2 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full"></div>
                                                        <span className="text-gray-700 font-medium">{program}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="mt-6 pt-6 border-t border-white/50">
                                            <Button
                                                className={`w-full bg-gradient-to-r ${faculty.color} text-white hover:shadow-lg transition-all duration-300 rounded-xl`}
                                                asChild
                                            >
                                                <Link href="https://medan.ut.ac.id/program-studi/" target="_blank" rel="noopener noreferrer">
                                                    Lihat Program Studi
                                                    <ExternalLink className="ml-2 w-4 h-4" />
                                                </Link>
                                            </Button>
                                        </div>
                                    </CardContent>
                                    {/* Decorative Elements */}
                                    <div className="absolute top-6 right-6 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                                    <div className="absolute bottom-6 left-6 w-16 h-16 bg-white/5 rounded-full blur-lg"></div>
                                </Card>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

                {/* CTA Section */}
                <AnimatedSection delay={0.6}>
                    <div className="text-center mt-16">
                        <Button
                            size="lg"
                            className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                            asChild
                        >
                            <Link href="https://medan.ut.ac.id/program-studi/" target="_blank" rel="noopener noreferrer">
                                Lihat Semua Program Studi
                                <ExternalLink className="ml-2 w-4 h-4" />
                            </Link>
                        </Button>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    )
}

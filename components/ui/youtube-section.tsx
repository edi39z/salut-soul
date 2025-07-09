"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/ui/animated-section"
import {
    Play,
    Youtube,
    BookOpen,
    GraduationCap,
    Award,
} from "lucide-react"
import { motion } from "framer-motion"

export function YouTubeSection() {
    const [isPlaying, setIsPlaying] = useState(false)

    // Updated video ID and start time
    const videoId = "JZ8i2acz-XE"
    const startTime = 13
    const videoUrl = `https://www.youtube.com/embed/${videoId}?start=${startTime}&autoplay=1&rel=0`
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`



    const features = [
        {
            icon: BookOpen,
            title: "Pembelajaran Fleksibel",
            description: "Belajar kapan saja, dimana saja sesuai jadwal Anda",
        },
        {
            icon: GraduationCap,
            title: "Gelar Terakreditasi",
            description: "Diploma dan Sarjana yang diakui secara nasional",
        },
        {
            icon: Award,
            title: "Kualitas Terjamin",
            description: "Standar pendidikan tinggi berkualitas internasional",
        },
    ]

    return (
        <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10">
                <AnimatedSection>
                    <div className="text-center mb-16">

                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Kenali Lebih Dekat <span className="text-blue-600">Universitas Terbuka</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Tonton video teaser kami untuk memahami lebih dalam tentang sistem pembelajaran dan keunggulan UT
                        </p>
                    </div>
                </AnimatedSection>

                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-12 gap-8 items-start">
                        {/* Video Player */}
                        <div className="lg:col-span-8">
                            <AnimatedSection delay={0.2}>
                                <Card className="border-0 shadow-2xl bg-gradient-to-br from-gray-900 to-black overflow-hidden rounded-3xl">
                                    <CardContent className="p-0 relative">
                                        <div className="relative aspect-video bg-black rounded-3xl overflow-hidden group">
                                            {!isPlaying ? (
                                                <>
                                                    {/* Video Thumbnail */}
                                                    <img
                                                        src={thumbnailUrl || "/placeholder.svg"}
                                                        alt="Video Teaser UT"
                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                        crossOrigin="anonymous"
                                                    />

                                                    {/* Overlay */}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>

                                                    {/* Play Button */}
                                                    <motion.button
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        onClick={() => setIsPlaying(true)}
                                                        className="absolute inset-0 flex items-center justify-center group"
                                                    >
                                                        <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-2xl group-hover:bg-red-700 transition-all duration-300">
                                                            <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                                                        </div>
                                                    </motion.button>

                                                    {/* Video Info Overlay */}
                                                    <div className="absolute bottom-6 left-6 right-6">
                                                        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6">
                                                            <div className="flex items-center space-x-4 mb-4">
                                                                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                                                                    <Youtube className="w-6 h-6 text-white" />
                                                                </div>
                                                                <div>
                                                                    <h3 className="text-white font-bold text-xl">Video Teaser UT</h3>

                                                                </div>
                                                            </div>


                                                        </div>
                                                    </div>
                                                </>
                                            ) : (
                                                <iframe
                                                    src={videoUrl}
                                                    title="Video Teaser UT"
                                                    className="w-full h-full rounded-3xl"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                />
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            </AnimatedSection>
                        </div>

                        {/* Video Information */}
                        <div className="lg:col-span-4">
                            <AnimatedSection delay={0.4}>
                                <div className="space-y-6">
                                    {/* Features */}
                                    {features.map((feature, idx) => (
                                        <Card
                                            key={idx}
                                            className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 rounded-2xl"
                                        >
                                            <CardContent className="p-6">
                                                <div className="flex items-start space-x-4">
                                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                                                        <feature.icon className="w-6 h-6 text-white" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-gray-900 text-lg mb-2">{feature.title}</h4>
                                                        <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}


                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

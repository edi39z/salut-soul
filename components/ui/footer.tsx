"use client"
import QRCodeLokasi from "@/components/QRCodeLokasi"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, MessageCircle } from "lucide-react"

// Custom TikTok Icon Component
const TikTokIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
)

export function Footer() {
    const currentYear = new Date().getFullYear()

    const quickLinks = [
        { href: "/", label: "Beranda" },
        { href: "/tentang", label: "Tentang Kami" },
        { href: "/akademik", label: "Program Studi" },
        { href: "/pendaftaran", label: "Pendaftaran" },
        { href: "/kontak", label: "Kontak" },
    ]

    const programs = [
        { name: "Manajemen", href: "/akademik#manajemen" },
        { name: "Akuntansi", href: "/akademik#akuntansi" },
        { name: "PGSD", href: "/akademik#pgsd" },
        { name: "Sistem Informasi", href: "/akademik#sistem-informasi" },
        { name: "Ilmu Komunikasi", href: "/akademik#ilmu-komunikasi" },
    ]

    const socialLinks = [
        {
            icon: Facebook,
            href: "https://www.facebook.com/share/172nEFAWCP/",
            label: "Facebook",
            color: "hover:text-blue-600",
        },
        {
            icon: Instagram,
            href: "https://www.instagram.com/salut_cfss?igsh=MXd2b3gzazg5Z2xoNg==",
            label: "Instagram",
            color: "hover:text-pink-600",
        },
        { icon: TikTokIcon, href: "https://www.tiktok.com/@salut.soul", label: "TikTok", color: "hover:text-red-600" },
        {
            icon: MessageCircle,
            href: "https://wa.me/62082259616782",
            label: "WhatsApp",
            color: "hover:text-green-600",
        },
    ]

    return (
        <footer className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-100/20 to-indigo-100/20 rounded-full blur-2xl"></div>
                <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-indigo-100/20 to-purple-100/20 rounded-full blur-2xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-blue-50/30 to-indigo-50/30 rounded-full blur-3xl"></div>
            </div>

            {/* Main Footer Content */}
            <div className="relative z-10 py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Brand Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center border border-blue-100/50 shadow-sm">
                                    <Image
                                        src="/Logo_Universitas_Terbuka.ico"
                                        alt="Logo Universitas Terbuka"
                                        width={32}
                                        height={32}
                                        className="w-8 h-8 object-contain"
                                    />
                                </div>
                                <div>
                                    <span className="text-xl font-bold text-gray-900">SALUT Soul</span>
                                    <p className="text-sm text-blue-600">Universitas Terbuka</p>
                                </div>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Sentra Layanan Universitas Terbuka untuk pendidikan tinggi berkualitas, fleksibel, dan terjangkau di
                                seluruh Indonesia.
                            </p>
                            {/* Social Media */}
                            <div className="flex space-x-3">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-10 h-10 bg-white/60 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-600 ${social.color} transition-all duration-300 hover:bg-white/80 hover:shadow-md border border-white/50`}
                                        aria-label={social.label}
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                            <div>
                                <QRCodeLokasi />
                            </div>
                        </motion.div>

                        {/* Quick Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <h3 className="text-lg font-semibold mb-6 text-gray-900">Navigasi</h3>
                            <div className="space-y-3">
                                {quickLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="block text-gray-700 hover:text-blue-600 transition-colors duration-300"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>

                        {/* Popular Programs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h3 className="text-lg font-semibold mb-6 text-gray-900">Program Populer</h3>
                            <div className="space-y-3">
                                {programs.map((program) => (
                                    <Link
                                        key={program.name}
                                        href={program.href}
                                        className="block text-gray-700 hover:text-blue-600 transition-colors duration-300"
                                    >
                                        {program.name}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <h3 className="text-lg font-semibold mb-6 text-gray-900">Hubungi Kami</h3>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <div className="w-8 h-8 bg-blue-100/60 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0 mt-1 border border-blue-200/30">
                                        <MapPin className="w-4 h-4 text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="text-gray-900 font-medium text-sm mb-1">Alamat</p>
                                        <button
                                            onClick={() => window.open("https://maps.app.goo.gl/dUmmZ3b3CvDH35MP6", "_blank")}
                                            className="text-gray-700 text-sm hover:text-blue-600 transition-colors cursor-pointer text-left"
                                        >
                                            Jl. Ncole Permai No.18
                                            <br />
                                            Kemenangan Tani, Kec. Medan Tuntungan
                                            <br />
                                            Kota Medan, Sumatera Utara 20134
                                        </button>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-blue-100/60 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0 border border-blue-200/30">
                                        <Phone className="w-4 h-4 text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="text-gray-900 font-medium text-sm">Telepon</p>
                                        <a
                                            href="https://wa.me/628225961678290"
                                            className="text-gray-700 hover:text-blue-600 transition-colors text-sm"
                                        >
                                            +62 822-5961-6782
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-blue-100/60 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0 border border-blue-200/30">
                                        <Mail className="w-4 h-4 text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="text-gray-900 font-medium text-sm">Email</p>
                                        <a className="text-gray-700 hover:text-blue-600 transition-colors text-sm">salutsoul18@gmail.com</a>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-8 h-8 bg-blue-100/60 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0 mt-1 border border-blue-200/30">
                                        <Clock className="w-4 h-4 text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="text-gray-900 font-medium text-sm">Jam Operasional</p>
                                        <p className="text-gray-700 text-sm">
                                            Senin - Jumat: 08:00 - 17:00
                                            <br />
                                            Sabtu: 08:00 - 14:00
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="relative z-10 border-t border-blue-100/50 py-6 bg-white/40 backdrop-blur-sm">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
                    >
                        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-gray-700 text-sm">
                            <p>© {currentYear} SALUT Soul. Semua hak cipta dilindungi.</p>
                        </div>
                        <div className="text-gray-700 text-sm">
                            Website made by{" "}
                            <a
                                href="https://wa.me/6282161029268"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium hover:text-blue-600 transition-colors"
                            >
                                BarDev
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </footer>
    )
}

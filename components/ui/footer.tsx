"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, MessageCircle, GraduationCap } from "lucide-react"

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
        { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-blue-600" },
        { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-600" },
        { icon: Youtube, href: "#", label: "YouTube", color: "hover:text-red-600" },
        { icon: MessageCircle, href: "https://wa.me/6281234567890", label: "WhatsApp", color: "hover:text-green-600" },
    ]

    return (
        <footer className="bg-slate-900 text-white">
            {/* Main Footer Content */}
            <div className="py-12">
                <div className="container-academic">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Brand Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center space-x-3 mb-6">
                                <Image src="/Logo_Universitas_Terbuka.svg.png" alt="Logo Universitas Terbuka" width={48} height={48} className="h-12 w-auto" />
                                <div>
                                    <span className="text-xl font-bold">SALUT Soul</span>
                                    <p className="text-sm text-slate-300">Universitas Terbuka</p>
                                </div>
                            </div>
                            <p className="text-slate-200 leading-relaxed mb-6">
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
                                        className={`w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-300 ${social.color} transition-colors duration-200 hover:bg-slate-700`}
                                        aria-label={social.label}
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Quick Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <h3 className="text-lg font-semibold mb-6 text-white">Navigasi</h3>
                            <div className="space-y-3">
                                {quickLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="block text-slate-200 hover:text-white transition-colors duration-200"
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
                            <h3 className="text-lg font-semibold mb-6 text-white">Program Populer</h3>
                            <div className="space-y-3">
                                {programs.map((program) => (
                                    <Link
                                        key={program.name}
                                        href={program.href}
                                        className="block text-slate-200 hover:text-white transition-colors duration-200"
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
                            <h3 className="text-lg font-semibold mb-6 text-white">Hubungi Kami</h3>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <MapPin className="w-5 h-5 text-slate-300 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-gray-100 font-medium">Alamat</p>
                                        <p className="text-slate-200 text-sm">
                                            Jl. Pendidikan No. 123
                                            <br />
                                            Jakarta Selatan 12345
                                            <br />
                                            DKI Jakarta
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <Phone className="w-5 h-5 text-slate-300 flex-shrink-0" />
                                    <div>
                                        <p className="text-gray-100 font-medium">Telepon</p>
                                        <a href="tel:+6281234567890" className="text-slate-200 hover:text-white transition-colors">
                                            +62 812-3456-7890
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <Mail className="w-5 h-5 text-slate-300 flex-shrink-0" />
                                    <div>
                                        <p className="text-gray-100 font-medium">Email</p>
                                        <a href="mailto:info@salutsoul.ac.id" className="text-slate-200 hover:text-white transition-colors">
                                            info@salutsoul.ac.id
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <Clock className="w-5 h-5 text-slate-300 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-gray-100 font-medium">Jam Operasional</p>
                                        <p className="text-slate-200 text-sm">
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
            <div className="border-t border-slate-700 py-6">
                <div className="container-academic">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
                    >
                        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-slate-300 text-sm">
                            <p>© {currentYear} SALUT Soul. Semua hak cipta dilindungi.</p>
                            <div className="flex items-center space-x-4">
                                <Link href="#" className="hover:text-white transition-colors">
                                    Kebijakan Privasi
                                </Link>
                                <span>•</span>
                                <Link href="#" className="hover:text-white transition-colors">
                                    Syarat & Ketentuan
                                </Link>
                            </div>
                        </div>

                        <div className="text-slate-300 text-sm">Dibuat untuk pendidikan Indonesia yang lebih baik</div>
                    </motion.div>
                </div>
            </div>
        </footer>
    )
}

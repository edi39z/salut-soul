import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">S</span>
                            </div>
                            <span className="font-bold text-xl">SALUT Soul</span>
                        </div>
                        <p className="text-gray-400">
                            Sentra Layanan Universitas Terbuka untuk pendidikan tinggi berkualitas dan terjangkau.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Navigasi</h3>
                        <div className="space-y-2">
                            <Link href="/" className="block text-gray-400 hover:text-white transition-colors">
                                Beranda
                            </Link>
                            <Link href="/tentang" className="block text-gray-400 hover:text-white transition-colors">
                                Tentang Kami
                            </Link>
                            <Link href="/akademik" className="block text-gray-400 hover:text-white transition-colors">
                                Akademik
                            </Link>
                            <Link href="/kontak" className="block text-gray-400 hover:text-white transition-colors">
                                Kontak
                            </Link>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Kontak</h3>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                                <Phone className="w-4 h-4" />
                                <span className="text-gray-400">+62 812-3456-7890</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Mail className="w-4 h-4" />
                                <span className="text-gray-400">info@salutsoul.ac.id</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <MapPin className="w-4 h-4" />
                                <span className="text-gray-400">Jakarta, Indonesia</span>
                            </div>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Ikuti Kami</h3>
                        <div className="space-y-2">
                            <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                                Facebook
                            </a>
                            <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                                Instagram
                            </a>
                            <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                                YouTube
                            </a>
                            <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                    <p className="text-gray-400">© {new Date().getFullYear()} SALUT Soul. Semua hak cipta dilindungi.</p>
                </div>
            </div>
        </footer>
    )
}

"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface Berita {
  id: string;
  judul: string;
  konten: string;
  gambar: string;
  tanggal: string;
}

export function FeaturedNews() {
  const [featuredNews, setFeaturedNews] = useState<Berita | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchFeaturedNews() {
      try {
        const res = await fetch("/api/berita")
        if (!res.ok) {
          throw new Error("Failed to fetch news")
        }
        const result = await res.json()
        if (result.success && result.data.length > 0) {
          setFeaturedNews(result.data[0])
        }
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchFeaturedNews()
  }, [])

  if (loading) {
    return (
      <section className="container mx-auto px-4 py-12">
        <div className="w-full max-w-4xl mx-auto bg-gray-200 rounded-lg animate-pulse" style={{ height: '500px' }}></div>
      </section>
    )
  }

  if (!featuredNews) {
    return (
        <section className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl font-bold">Berita tidak ditemukan</h2>
                <p>Saat ini belum ada berita yang dapat ditampilkan.</p>
            </div>
        </section>
    )
  }

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl bg-white">
        <div className="relative w-full h-[400px]">
          <Image
            src={featuredNews.gambar}
            alt={featuredNews.judul}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="p-8 bg-[#00205B] text-white">
          <p className="text-sm font-semibold text-blue-300 mb-2">Berita</p>
          <h2 className="text-4xl font-bold mb-3">{featuredNews.judul}</h2>
          <p className="text-lg text-gray-300 mb-6">{featuredNews.konten.substring(0, 100)}...</p>
          <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg px-6 py-3 transition-all duration-300 transform hover:scale-105">
            <Link href={`/berita/${featuredNews.id}`}>
              Selengkapnya
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

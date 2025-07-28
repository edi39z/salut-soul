'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { PageWrapper } from '@/components/ui/page-wrapper';
import { AnimatedSection } from '@/components/ui/animated-section';
import { YoutubeEmbed } from '@/components/ui/youtube-embed';
import { PhotoGallery } from '@/components/ui/photo-gallery';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Video, Camera } from 'lucide-react';

interface Aktivitas {
  id: string;
  judul: string;
  deskripsi: string;
  gambar: string;
  tanggal: string;
}

const AktivitasPage = () => {
  const [aktivitas, setAktivitas] = useState<Aktivitas[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAktivitas = async () => {
      try {
        const response = await fetch('/api/aktivitas');
        if (!response.ok) {
          throw new Error('Gagal memuat data aktivitas');
        }
        const data = await response.json();
        setAktivitas(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Terjadi kesalahan');
      } finally {
        setLoading(false);
      }
    };

    fetchAktivitas();
  }, []);

  const galleryImages = [
    { src: '/images/1.png', alt: 'Dokumentasi 1' },
    { src: '/images/12.png', alt: 'Dokumentasi 2' },
    { src: '/images/talent1.png', alt: 'Dokumentasi 3' },
    { src: '/images/target.png', alt: 'Dokumentasi 4' },
    { src: '/images/test.png', alt: 'Dokumentasi 5' },
    { src: '/images/lokasi.png', alt: 'Dokumentasi 6' },
    { src: '/ut.png', alt: 'Dokumentasi 7' },
    { src: '/ut2.png', alt: 'Dokumentasi 8' },
    { src: '/utmedan.png', alt: 'Dokumentasi 9' },
    { src: '/images/1.png', alt: 'Dokumentasi 10' },
    { src: '/images/12.png', alt: 'Dokumentasi 11' },
    { src: '/images/talent1.png', alt: 'Dokumentasi 12' },
  ];

  return (
    <PageWrapper>
      <div className="bg-gradient-to-b from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-950">
        <div className="container mx-auto px-4 py-16">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-500 dark:to-indigo-600 p-1 rounded-full mb-6">
              <div className="bg-white dark:bg-gray-900 rounded-full px-4 py-1">
                <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">Kegiatan Terbaru</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-900 dark:from-blue-400 dark:to-indigo-300">
              Galeri Aktivitas
            </h1>
            <p className="mt-4 text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Jelajahi momen-momen tak terlupakan dan berbagai kegiatan inspiratif yang telah kami selenggarakan.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full"></div>
            </div>
          </AnimatedSection>

          {loading && (
            <div className="text-center py-20">
              <p className="text-lg">Memuat galeri, mohon tunggu...</p>
            </div>
          )}
          {error && (
            <div className="text-center bg-red-100 text-red-700 p-8 rounded-lg">
              <p className="font-bold">Terjadi Kesalahan</p>
              <p>{error}</p>
            </div>
          )}

          {!loading && !error && (
            <>
              <div className="grid gap-12 md:grid-cols-1 lg:grid-cols-1">
                {aktivitas.map((item, index) => (
                  <AnimatedSection key={item.id} delay={index * 0.1}>
                    <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-white dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:-translate-y-1 group">
                      <div className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}>
                        <div className="md:w-1/2 w-full relative">
                          <div className="relative aspect-video overflow-hidden md:rounded-l-lg md:rounded-r-none">
                            <Image
                              src={item.gambar}
                              alt={item.judul}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-110"
                              sizes="(max-width: 768px) 100vw, 40vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                              <span className="text-white font-medium">Lihat Detail</span>
                            </div>
                          </div>
                        </div>
                        <div className="md:w-1/2 w-full p-8 md:p-12 flex flex-col justify-center">
                          <CardHeader className="p-0">
                            <CardTitle className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                              {item.judul}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="p-0">
                            <Badge variant="secondary" className="mb-4">
                              <Calendar className="h-4 w-4 mr-2" />
                              {new Date(item.tanggal).toLocaleDateString('id-ID', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                              })}
                            </Badge>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                              {item.deskripsi}
                            </p>
                          </CardContent>
                        </div>
                      </div>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>

              <div className="my-24 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>

              <AnimatedSection>
                <div className="relative">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full"></div>
                  <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-10 flex items-center justify-center">
                    <Video className="h-10 w-10 mr-4 text-blue-500 bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full" />
                    Video Dokumentasi
                  </h2>
                  <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
                    <YoutubeEmbed embedId="lZnuD32p6pM" title="Video Dokumentasi Acara" />
                  </div>
                </div>
              </AnimatedSection>

              <div className="my-24 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>

              <AnimatedSection>
                <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-10 flex items-center justify-center">
                  <Camera className="h-10 w-10 mr-4 text-blue-500" />
                  Semua Dokumentasi
                </h2>
                <PhotoGallery images={galleryImages} />
              </AnimatedSection>
            </>
          )}
        </div>
      </div>
    </PageWrapper>
  );
};

export default AktivitasPage;

import { prisma } from '@/lib/prisma';
import AktivitasClientPage from '@/components/ui/aktivitas-client-page';

async function getData() {
  const aktivitas = await prisma.aktivitas.findMany({
    orderBy: {
      tanggal: 'desc',
    },
  });

  const youtube = await prisma.aktivitas.findFirst({
    where: {
      youtubeUrl: {
        not: null,
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
    select: {
      youtubeUrl: true,
    },
  });

  const dokumentasi = await prisma.dokumentasiFoto.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return {
    aktivitas,
    youtubeUrl: youtube?.youtubeUrl || '',
    galleryImages: dokumentasi.map((foto, index) => ({
      src: foto.imageUrl,
      alt: `Dokumentasi ${index + 1}`,
    })),
  };
}

export default async function AktivitasPage() {
  const { aktivitas, youtubeUrl, galleryImages } = await getData();

  return (
    <AktivitasClientPage
      initialAktivitas={aktivitas}
      initialYoutubeUrl={youtubeUrl}
      initialGalleryImages={galleryImages}
    />
  );
}

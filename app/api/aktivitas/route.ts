import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET all activities
export async function GET() {
  try {
    const aktivitas = await prisma.aktivitas.findMany({
      orderBy: {
        tanggal: 'desc',
      },
    });
    return NextResponse.json(aktivitas);
  } catch (error) {
    console.error('[API_AKTIVITAS_GET]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

// POST a new activity
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { judul, deskripsi, gambar, tanggal } = body;

    if (!judul || !deskripsi || !gambar || !tanggal) {
      return new NextResponse('Data tidak lengkap', { status: 400 });
    }

    const newAktivitas = await prisma.aktivitas.create({
      data: {
        judul,
        deskripsi,
        gambar,
        tanggal: new Date(tanggal),
      },
    });

    return NextResponse.json(newAktivitas, { status: 201 });
  } catch (error) {
    console.error('[API_AKTIVITAS_POST]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

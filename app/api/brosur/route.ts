import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const brosur = await prisma.brosur.findFirst({
      where: {
        aktif: true,
      },
    });
    return NextResponse.json(brosur);
  } catch (error) {
    console.error('Error fetching brosur:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

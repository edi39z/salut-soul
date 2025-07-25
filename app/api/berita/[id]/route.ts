// app/api/berita/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
    request: NextRequest,
    context: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await context.params;

        const { searchParams } = new URL(request.url);
        const limit = parseInt(searchParams.get("limit") || "6", 10);

        const currentBerita = await prisma.berita.findFirst({
            where: {
                OR: [{ id }, { slug: id }],
                aktif: true,
            },
        });

        if (!currentBerita) {
            return NextResponse.json(
                { success: false, error: "Berita tidak ditemukan" },
                { status: 404 }
            );
        }

        if (!currentBerita.tags || currentBerita.tags.trim() === "") {
            return NextResponse.json({ success: true, data: [] });
        }

        const tagList = currentBerita.tags
            .split(",")
            .map((tag) => tag.trim())
            .filter((tag) => tag.length > 0);

        const relatedBerita = await prisma.berita.findMany({
            where: {
                AND: [
                    { aktif: true },
                    { id: { not: currentBerita.id } },
                    {
                        OR: tagList.map((tag) => ({
                            tags: { contains: tag },
                        })),
                    },
                ],
            },
            orderBy: { createdAt: "desc" },
            take: limit,
        });

        return NextResponse.json({ success: true, data: relatedBerita });
    } catch (error) {
        return NextResponse.json(
            { success: false, error: "Internal Server Error", message: error instanceof Error ? error.message : "Unknown error" },
            { status: 500 }
        );
    }
}

export async function PUT(
    request: NextRequest,
    context: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await context.params;
        const body = await request.json();

        const updated = await prisma.berita.update({
            where: { id },
            data: body,
        });

        return NextResponse.json({ success: true, data: updated });
    } catch (error) {
        return NextResponse.json(
            { success: false, error: "Gagal update", message: error instanceof Error ? error.message : "Unknown error" },
            { status: 500 }
        );
    }
}

export async function DELETE(
    request: NextRequest,
    context: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await context.params;

        await prisma.berita.delete({
            where: { id },
        });

        return NextResponse.json({ success: true, message: "Berita berhasil dihapus" });
    } catch (error) {
        return NextResponse.json(
            { success: false, error: "Gagal hapus", message: error instanceof Error ? error.message : "Unknown error" },
            { status: 500 }
        );
    }
}

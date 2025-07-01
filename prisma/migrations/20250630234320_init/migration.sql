-- CreateTable
CREATE TABLE "pendaftaran" (
    "id" TEXT NOT NULL,
    "namaLengkap" TEXT NOT NULL,
    "nik" TEXT NOT NULL,
    "nisn" TEXT NOT NULL,
    "noHp" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "tanggalLahir" TIMESTAMP(3) NOT NULL,
    "alamat" TEXT NOT NULL,
    "fakultas" TEXT NOT NULL,
    "programStudi" TEXT NOT NULL,
    "dokumenPath" TEXT,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pendaftaran_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kontak_pesan" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'unread',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "kontak_pesan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "program_studi" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "fakultas" TEXT NOT NULL,
    "jenjang" TEXT NOT NULL,
    "akreditasi" TEXT NOT NULL,
    "biayaSemester" INTEGER NOT NULL,
    "deskripsi" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "program_studi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fakultas" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "namaLengkap" TEXT NOT NULL,
    "deskripsi" TEXT,
    "akreditasi" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "fakultas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "pendaftaran_nik_key" ON "pendaftaran"("nik");

-- CreateIndex
CREATE UNIQUE INDEX "pendaftaran_nisn_key" ON "pendaftaran"("nisn");

-- CreateIndex
CREATE UNIQUE INDEX "pendaftaran_email_key" ON "pendaftaran"("email");

-- CreateIndex
CREATE UNIQUE INDEX "fakultas_nama_key" ON "fakultas"("nama");

-- CreateTable
CREATE TABLE "pendaftaran" (
    "id" TEXT NOT NULL,
    "namaLengkap" TEXT NOT NULL,
    "nik" TEXT NOT NULL,
    "nisn" TEXT,
    "noHp" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "tanggalLahir" TIMESTAMP(3) NOT NULL,
    "alamat" TEXT NOT NULL,
    "fakultas" TEXT NOT NULL,
    "programStudi" TEXT NOT NULL,
    "jalur" TEXT NOT NULL,
    "pasFoto" TEXT,
    "ktp" TEXT,
    "ijazah" TEXT,
    "formulir" TEXT,
    "ijazahSMA" TEXT,
    "screenshotPDDIKTI" TEXT,
    "skPengangkatan" TEXT,
    "skMengajar" TEXT,
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

-- CreateTable
CREATE TABLE "dokumen_pendaftaran" (
    "id" TEXT NOT NULL,
    "pendaftaranId" TEXT NOT NULL,
    "namaFile" TEXT NOT NULL,
    "jenisFile" TEXT NOT NULL,
    "urlCloudinary" TEXT NOT NULL,
    "publicId" TEXT NOT NULL,
    "ukuranFile" INTEGER NOT NULL,
    "tipeFile" TEXT NOT NULL,
    "statusVerifikasi" TEXT NOT NULL DEFAULT 'pending',
    "catatanVerifikasi" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "dokumen_pendaftaran_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "validasi_data" (
    "id" TEXT NOT NULL,
    "field" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "isValid" BOOLEAN NOT NULL,
    "message" TEXT,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "validasi_data_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "audit_log" (
    "id" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "table" TEXT NOT NULL,
    "recordId" TEXT NOT NULL,
    "oldData" JSONB,
    "newData" JSONB,
    "userId" TEXT,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "audit_log_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "pendaftaran_nik_key" ON "pendaftaran"("nik");

-- CreateIndex
CREATE UNIQUE INDEX "pendaftaran_nisn_key" ON "pendaftaran"("nisn");

-- CreateIndex
CREATE UNIQUE INDEX "pendaftaran_email_key" ON "pendaftaran"("email");

-- CreateIndex
CREATE UNIQUE INDEX "fakultas_nama_key" ON "fakultas"("nama");

-- Setup database tables and initial data
-- This script will create the necessary tables if they don't exist

-- Create tables (these should match your Prisma schema)
CREATE TABLE
IF NOT EXISTS "Fakultas"
(
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "deskripsi" TEXT,
    "createdAt" TIMESTAMP
(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP
(3) NOT NULL,

    CONSTRAINT "Fakultas_pkey" PRIMARY KEY
("id")
);

CREATE TABLE
IF NOT EXISTS "ProgramStudi"
(
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "kode" TEXT NOT NULL,
    "fakultasId" INTEGER NOT NULL,
    "jenjang" TEXT NOT NULL,
    "deskripsi" TEXT,
    "createdAt" TIMESTAMP
(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP
(3) NOT NULL,

    CONSTRAINT "ProgramStudi_pkey" PRIMARY KEY
("id")
);

CREATE TABLE
IF NOT EXISTS "Berita"
(
    "id" SERIAL NOT NULL,
    "judul" TEXT NOT NULL,
    "konten" TEXT NOT NULL,
    "gambar" TEXT,
    "tanggal" TIMESTAMP
(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP
(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP
(3) NOT NULL,

    CONSTRAINT "Berita_pkey" PRIMARY KEY
("id")
);

-- Create unique constraints
CREATE UNIQUE INDEX
IF NOT EXISTS "ProgramStudi_kode_key" ON "ProgramStudi"
("kode");

-- Add foreign key constraints
ALTER TABLE "ProgramStudi" ADD CONSTRAINT "ProgramStudi_fakultasId_fkey" FOREIGN KEY ("fakultasId") REFERENCES "Fakultas"("id")
ON DELETE RESTRICT ON
UPDATE CASCADE;

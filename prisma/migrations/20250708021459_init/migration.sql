/*
  Warnings:

  - Added the required column `jenjang` to the `pendaftaran` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "pendaftaran" ADD COLUMN     "jenjang" TEXT NOT NULL;

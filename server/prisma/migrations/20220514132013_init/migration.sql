/*
  Warnings:

  - You are about to alter the column `title` on the `Diem` table. The data in that column could be lost. The data in that column will be cast from `VarChar(50)` to `VarChar(30)`.

*/
-- AlterTable
ALTER TABLE "Diem" ALTER COLUMN "title" SET DATA TYPE VARCHAR(30);

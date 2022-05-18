/*
  Warnings:

  - You are about to drop the column `city` on the `Diem` table. All the data in the column will be lost.
  - Added the required column `createdAt` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Diem" DROP COLUMN "city",
ADD COLUMN     "map" TEXT;

-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "createdAt" INTEGER NOT NULL;

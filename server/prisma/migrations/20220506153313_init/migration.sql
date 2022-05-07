/*
  Warnings:

  - You are about to drop the column `content` on the `Diem` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Diem" DROP COLUMN "content",
ADD COLUMN     "events" TEXT[];

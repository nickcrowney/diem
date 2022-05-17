/*
  Warnings:

  - You are about to drop the column `diemId` on the `Message` table. All the data in the column will be lost.
  - Added the required column `timestamp` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Message" DROP COLUMN "diemId",
ADD COLUMN     "metaDiemId" INTEGER,
ADD COLUMN     "timestamp" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_metaDiemId_fkey" FOREIGN KEY ("metaDiemId") REFERENCES "Diem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

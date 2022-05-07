/*
  Warnings:

  - You are about to drop the column `userId` on the `Diem` table. All the data in the column will be lost.
  - Added the required column `authorId` to the `Diem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Diem" DROP CONSTRAINT "Diem_userId_fkey";

-- AlterTable
ALTER TABLE "Diem" DROP COLUMN "userId",
ADD COLUMN     "authorId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Diem" ADD CONSTRAINT "Diem_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

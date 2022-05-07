/*
  Warnings:

  - You are about to drop the column `users` on the `Diem` table. All the data in the column will be lost.
  - You are about to drop the column `diems` on the `User` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Diem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Diem" DROP COLUMN "users",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "diems";

-- AddForeignKey
ALTER TABLE "Diem" ADD CONSTRAINT "Diem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

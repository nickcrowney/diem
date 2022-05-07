/*
  Warnings:

  - You are about to drop the column `authorId` on the `Diem` table. All the data in the column will be lost.
  - You are about to drop the `IncludedUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Diem" DROP CONSTRAINT "Diem_authorId_fkey";

-- DropForeignKey
ALTER TABLE "IncludedUser" DROP CONSTRAINT "IncludedUser_diemId_fkey";

-- DropForeignKey
ALTER TABLE "IncludedUser" DROP CONSTRAINT "IncludedUser_includedUsersId_fkey";

-- AlterTable
ALTER TABLE "Diem" DROP COLUMN "authorId";

-- DropTable
DROP TABLE "IncludedUser";

-- CreateTable
CREATE TABLE "UserDiem" (
    "id" SERIAL NOT NULL,
    "diemId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "UserDiem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserDiem" ADD CONSTRAINT "UserDiem_diemId_fkey" FOREIGN KEY ("diemId") REFERENCES "Diem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserDiem" ADD CONSTRAINT "UserDiem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

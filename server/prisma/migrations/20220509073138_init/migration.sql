/*
  Warnings:

  - You are about to drop the `_DiemToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_DiemToUser" DROP CONSTRAINT "_DiemToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_DiemToUser" DROP CONSTRAINT "_DiemToUser_B_fkey";

-- DropTable
DROP TABLE "_DiemToUser";

-- CreateTable
CREATE TABLE "Pivot" (
    "diemId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Pivot_pkey" PRIMARY KEY ("userId","diemId")
);

-- AddForeignKey
ALTER TABLE "Pivot" ADD CONSTRAINT "Pivot_diemId_fkey" FOREIGN KEY ("diemId") REFERENCES "Diem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pivot" ADD CONSTRAINT "Pivot_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

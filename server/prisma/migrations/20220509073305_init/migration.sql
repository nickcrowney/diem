/*
  Warnings:

  - You are about to drop the `Pivot` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Pivot" DROP CONSTRAINT "Pivot_diemId_fkey";

-- DropForeignKey
ALTER TABLE "Pivot" DROP CONSTRAINT "Pivot_userId_fkey";

-- DropTable
DROP TABLE "Pivot";

-- CreateTable
CREATE TABLE "_DiemToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_DiemToUser_AB_unique" ON "_DiemToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_DiemToUser_B_index" ON "_DiemToUser"("B");

-- AddForeignKey
ALTER TABLE "_DiemToUser" ADD CONSTRAINT "_DiemToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Diem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DiemToUser" ADD CONSTRAINT "_DiemToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

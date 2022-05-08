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
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_metaDiemId_fkey" FOREIGN KEY ("metaDiemId") REFERENCES "Diem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DiemToUser" ADD CONSTRAINT "_DiemToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Diem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DiemToUser" ADD CONSTRAINT "_DiemToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

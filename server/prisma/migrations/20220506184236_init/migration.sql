-- CreateTable
CREATE TABLE "IncludedUser" (
    "id" SERIAL NOT NULL,
    "diemId" INTEGER NOT NULL,
    "includedUsersId" INTEGER NOT NULL,

    CONSTRAINT "IncludedUser_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "IncludedUser" ADD CONSTRAINT "IncludedUser_diemId_fkey" FOREIGN KEY ("diemId") REFERENCES "Diem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IncludedUser" ADD CONSTRAINT "IncludedUser_includedUsersId_fkey" FOREIGN KEY ("includedUsersId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

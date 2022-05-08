-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "status" VARCHAR(255),
    "userId" INTEGER NOT NULL,
    "userPhoto" TEXT,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

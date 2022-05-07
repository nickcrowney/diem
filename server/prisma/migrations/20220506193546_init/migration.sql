/*
  Warnings:

  - Added the required column `extraQuality` to the `IncludedUser` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "IncludedUser" ADD COLUMN     "extraQuality" TEXT NOT NULL;

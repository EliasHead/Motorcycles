/*
  Warnings:

  - You are about to drop the column `hashedPassaword` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "hashedPassaword",
ADD COLUMN     "hashedPassword" TEXT;

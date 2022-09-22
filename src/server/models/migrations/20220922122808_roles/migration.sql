/*
  Warnings:

  - You are about to drop the `Test` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('CS_SUPPORT', 'SUPER_ADMIN', 'ADMIN', 'EDITOR', 'WRITER', 'VIEWER');

-- DropTable
DROP TABLE "Test";

-- CreateTable
CREATE TABLE "Organization" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Organization_pkey" PRIMARY KEY ("id")
);

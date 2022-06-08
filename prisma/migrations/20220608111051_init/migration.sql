/*
  Warnings:

  - You are about to drop the column `created_at` on the `hotel_facilities` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `hotel_facilities` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `hotels` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `hotels` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `point_of_interests` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `point_of_interests` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `reviews` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `reviews` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `room_facilities` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `room_facilities` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `hotel_facilities` DROP COLUMN `created_at`,
    DROP COLUMN `updated_at`;

-- AlterTable
ALTER TABLE `hotels` DROP COLUMN `created_at`,
    DROP COLUMN `updated_at`;

-- AlterTable
ALTER TABLE `point_of_interests` DROP COLUMN `created_at`,
    DROP COLUMN `updated_at`;

-- AlterTable
ALTER TABLE `reviews` DROP COLUMN `created_at`,
    DROP COLUMN `updated_at`;

-- AlterTable
ALTER TABLE `room_facilities` DROP COLUMN `created_at`,
    DROP COLUMN `updated_at`;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `created_at`,
    DROP COLUMN `updated_at`;

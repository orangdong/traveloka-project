/*
  Warnings:

  - The primary key for the `hotels` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `city` to the `hotels` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `hotels` table without a default value. This is not possible if the table is not empty.
  - Added the required column `latitude` to the `hotels` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitude` to the `hotels` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `hotels` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `hotels` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `reviews` DROP FOREIGN KEY `reviews_hotel_id_fkey`;

-- AlterTable
ALTER TABLE `hotels` DROP PRIMARY KEY,
    ADD COLUMN `city` VARCHAR(191) NOT NULL,
    ADD COLUMN `country` VARCHAR(191) NOT NULL,
    ADD COLUMN `latitude` DOUBLE NOT NULL,
    ADD COLUMN `longitude` DOUBLE NOT NULL,
    ADD COLUMN `state` VARCHAR(191) NOT NULL,
    ADD COLUMN `type` VARCHAR(191) NOT NULL,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `reviews` MODIFY `hotel_id` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `point_of_interests` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `hotel_id` VARCHAR(191) NOT NULL,
    `interest` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `room_facilities` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `hotel_id` VARCHAR(191) NOT NULL,
    `facility` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `hotel_facilities` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `hotel_id` VARCHAR(191) NOT NULL,
    `facility` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `point_of_interests` ADD CONSTRAINT `point_of_interests_hotel_id_fkey` FOREIGN KEY (`hotel_id`) REFERENCES `hotels`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `room_facilities` ADD CONSTRAINT `room_facilities_hotel_id_fkey` FOREIGN KEY (`hotel_id`) REFERENCES `hotels`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `hotel_facilities` ADD CONSTRAINT `hotel_facilities_hotel_id_fkey` FOREIGN KEY (`hotel_id`) REFERENCES `hotels`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reviews` ADD CONSTRAINT `reviews_hotel_id_fkey` FOREIGN KEY (`hotel_id`) REFERENCES `hotels`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE `Cliente` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombreCliente` VARCHAR(191) NOT NULL,
    `tipoIdentificacion` VARCHAR(191) NOT NULL,
    `numeroIdentificacion` VARCHAR(191) NOT NULL,
    `observaciones` VARCHAR(191) NULL,

    UNIQUE INDEX `Cliente_nombreCliente_key`(`nombreCliente`),
    UNIQUE INDEX `Cliente_numeroIdentificacion_key`(`numeroIdentificacion`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Factura` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fecha` DATETIME(3) NOT NULL,
    `nombreProducto` VARCHAR(191) NOT NULL,
    `precio` DOUBLE NOT NULL,
    `idCliente` INTEGER NOT NULL,
    `total` DOUBLE NOT NULL,
    `valorDescuento` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Factura` ADD CONSTRAINT `Factura_idCliente_fkey` FOREIGN KEY (`idCliente`) REFERENCES `Cliente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - A unique constraint covering the columns `[nombreCliente]` on the table `Cliente` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[numeroIdentificacion]` on the table `Cliente` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Cliente_nombreCliente_key` ON `Cliente`(`nombreCliente`);

-- CreateIndex
CREATE UNIQUE INDEX `Cliente_numeroIdentificacion_key` ON `Cliente`(`numeroIdentificacion`);

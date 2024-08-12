# App-facturacion-prueba
prueba tecnica de desarrollador full stack mern

[text](backend-api/prisma/schema.prisma) 

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql" // Cambia esto a "sqlserver" si usas SQL Server
  url      = env("DATABASE_URL")
}

model Cliente {
  id                   Int      @id @default(autoincrement())
  nombreCliente        String   @unique
  tipoIdentificacion   String
  numeroIdentificacion String   @unique
  observaciones        String?
  facturas             Factura[] // Relación uno a muchos con Factura
}

model Factura {
  id              Int     @id @default(autoincrement())
  fecha           DateTime
  nombreProducto  String
  precio          Float
  descuento       Float
  idCliente       Int
  total           Float
  valorDescuento  Float
  cliente         Cliente  @relation(fields: [idCliente], references: [id])
}

DATABASE_URL="mysql://root:@localhost:3306/facturacion"
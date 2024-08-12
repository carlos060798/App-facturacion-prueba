import { IsNotEmpty, IsNumber, IsString, IsDate } from 'class-validator';

/**
 * Represents the data transfer object for creating a factura.
 */
export class CreateFacturaDto {
  @IsNotEmpty()
  @IsNumber()
  idCliente: number;

  @IsNotEmpty()
  @IsDate()
  fecha: Date;

  @IsNotEmpty()
  @IsString()
  nombreProducto: string;

  @IsNotEmpty()
  @IsNumber()
  precio: number;

  @IsNotEmpty()
  @IsNumber()
  descuento: number;

  @IsNotEmpty()
  @IsNumber()
  total: number;

  @IsNotEmpty()
  @IsNumber()
  valorDescuento: number;
}

import { IsNotEmpty, IsNumber, IsString, IsDateString } from 'class-validator';

export class CreateFacturaDto {
  @IsNotEmpty()
  @IsNumber()
  idCliente: number;

  @IsNotEmpty()
  @IsDateString()
  fecha: string;

  @IsNotEmpty()
  @IsString()
  nombreProducto: string;

  @IsNotEmpty()
  @IsNumber()
  precio: number;

  @IsNotEmpty()
  @IsNumber()
  valorDescuento: number;

  @IsNotEmpty()
  @IsNumber()
  iva: number;

  @IsNotEmpty()
  @IsNumber()
  valorTotal: number;
}
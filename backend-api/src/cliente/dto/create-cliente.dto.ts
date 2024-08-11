
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateClienteDto {
  @IsNotEmpty()
  @IsString()
  nombreCliente: string;

  @IsNotEmpty()
  @IsString()
  tipoIdentificacion: string;

  @IsNotEmpty()
  @IsString()
  numeroIdentificacion: string;

  @IsOptional()
  @IsString()
  observaciones?: string;
}
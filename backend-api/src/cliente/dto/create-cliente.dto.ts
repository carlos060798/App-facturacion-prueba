
import { IsNotEmpty, IsOptional, IsString ,MinLength} from 'class-validator';

export class CreateClienteDto {
  @IsNotEmpty()
  @IsString()
  nombreCliente: string;

  @IsNotEmpty()
  @IsString()
  tipoIdentificacion: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(9)
  numeroIdentificacion: string;

  @IsOptional()
  @IsString()
  observaciones?: string;
}
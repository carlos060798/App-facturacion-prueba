
import { Injectable, Logger, BadRequestException,InternalServerErrorException
  
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class ClienteService {
  private readonly logger = new Logger(
    'ClienteService'
  )
  constructor(private prisma: PrismaService) {}

  async create(createClienteDto: CreateClienteDto) {
    try{
    const cliente= await this.prisma.cliente.create({
      data: createClienteDto,
    })
     return cliente;
    }
    catch (error){
      this.logger.error(error.message);
      throw new InternalServerErrorException('Error al crear el cliente  revise los logs del servidor');
    }
  }

  async findAll() {
    try{
    const clients = await  this.prisma.cliente.findMany();
      return clients

    }catch (error){
      this.logger.error(error.message);
      throw new InternalServerErrorException('Error en el servidor revise los logs');
    }
   
  }

  
  }


  
  

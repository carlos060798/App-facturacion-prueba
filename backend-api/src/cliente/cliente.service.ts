
import { Injectable, Logger, BadRequestException,InternalServerErrorException
  
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { Prisma } from '@prisma/client';

/**
 * Service responsible for handling client-related operations.
 */
@Injectable()
export class ClienteService {
  private readonly logger = new Logger(
    'ClienteService'
  )
  constructor(private prisma: PrismaService) {}

  /**
   * Creates a new cliente.
   *
   * @param createClienteDto - The data for creating the cliente.
   * @returns The created cliente.
   * @throws InternalServerErrorException if there is an error creating the cliente.
   */
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

  /**
   * Retrieves all clients from the database.
   *
   * @returns {Promise<Client[]>} A promise that resolves to an array of clients.
   * @throws {InternalServerErrorException} If there is an error in the server, an internal server error exception is thrown.
   */
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


  
  

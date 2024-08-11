
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateClienteDto } from './dto/create-cliente.dto';

@Injectable()
export class ClienteService {
  constructor(private prisma: PrismaService) {}

  async create(createClienteDto: CreateClienteDto) {
    return this.prisma.cliente.create({
      data: createClienteDto,
    });
  }

  async findAll() {
    return this.prisma.cliente.findMany();
  }

  async findOne(id: number) {
    return this.prisma.cliente.findUnique({
      where: { id },
    });
  }

 
  }

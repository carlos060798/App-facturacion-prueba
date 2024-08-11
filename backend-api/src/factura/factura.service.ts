import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateFacturaDto } from './dto/create-factura.dto';

@Injectable()
export class FacturaService {
  constructor(private prisma: PrismaService) {}

  async create(createFacturaDto: CreateFacturaDto) {
    return this.prisma.factura.create({
      data: createFacturaDto,
    });
  }

  async findAll(
    page: number = 1,
    limit: number = 10,
    from?: Date,
    to?: Date,
    idCliente?: number
  ) {
    const skip = (page - 1) * limit;
    
    const where = {};
    if (from && to) {
      where['fecha'] = {
        gte: from,
        lte: to,
      };
    }
    if (idCliente) {
      where['idCliente'] = idCliente;
    }

    const [facturas, total] = await Promise.all([
      this.prisma.factura.findMany({
        skip,
        take: limit,
        where,
        include: {
          cliente: true,
        },
        orderBy: {
          fecha: 'desc',
        },
      }),
      this.prisma.factura.count({ where }),
    ]);

    return {
      data: facturas,
      meta: {
        total,
        page,
        limit,
      },
    };
  }

  async findOne(id: number) {
    return this.prisma.factura.findUnique({
      where: { id },
      include: {
        cliente: true,
      },
    });
  }
}
import { Injectable, Logger, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateFacturaDto } from './dto/create-factura.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class FacturaService {
  private readonly logger = new Logger('FacturaService');

  constructor(private prisma: PrismaService) {}

  /**
   * Creates a new factura.
   *
   * @param createFacturaDto - The data for creating the factura.
   * @returns The created factura.
   * @throws BadRequestException if a factura with the same data already exists.
   * @throws InternalServerErrorException if there is an error creating the factura.
   */
  async create(createFacturaDto: CreateFacturaDto) {
    try {
      const factura = await this.prisma.factura.create({
        data: createFacturaDto,
      });
      return factura;
    } catch (error) {
      this.logger.error(`Error al crear la factura: ${error.message}`);
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
        throw new BadRequestException('Ya existe una factura con los mismos datos');
      }
      throw new InternalServerErrorException('Error al crear la factura, revise los logs del servidor');
    }
  }

 
  /**
   * Retrieves a list of invoices based on the provided filters.
   *
   * @param from - The start date of the invoice range.
   * @param to - The end date of the invoice range.
   * @param idCliente - The ID of the client.
   * @param page - The page number of the results.
   * @param limit - The maximum number of invoices to retrieve per page.
   * @returns An object containing the retrieved invoices, total count, current page, and limit.
   * @throws If there is an error fetching the invoices.
   */
  async getInvoices({ from, to, idCliente, page, limit }: { from: string, to: string, idCliente: number, page: number, limit: number }) {
    const skip = (page - 1) * limit;

    try {
      const [result, total] = await Promise.all([
        this.prisma.factura.findMany({
          where: {
            idCliente: parseInt(idCliente.toString()),  // Asegúrate de que `idCliente` sea un número
            fecha: {  // Reemplaza 'fecha' por el nombre correcto de tu campo de fecha
              gte: new Date(from),
              lte: new Date(to),
            },
          },
          skip: skip,
          take: parseInt(limit.toString()),  // Asegúrate de que `limit` sea un número
        }),
        this.prisma.factura.count({
          where: {
            idCliente: parseInt(idCliente.toString()),  // Asegúrate de que `idCliente` sea un número
            fecha: {  // Reemplaza 'fecha' por el nombre correcto de tu campo de fecha
              gte: new Date(from),
              lte: new Date(to),
            },
          },
        }),
      ]);

      return {
        data: result,
        count: total,
        page,
        limit,
      };
    } catch (error) {
      console.error('Error fetching invoices:', error);
      throw error;
    }
  }

}
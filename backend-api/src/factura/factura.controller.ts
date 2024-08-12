import { Controller, Get, Post, Body,Query } from '@nestjs/common';
import { FacturaService } from './factura.service';
import { CreateFacturaDto } from './dto/create-factura.dto';


@Controller('factura')
export class FacturaController {
  constructor(private readonly facturaService: FacturaService) {}

  @Post()
  create(@Body() createFacturaDto: CreateFacturaDto) {
    return this.facturaService.create(createFacturaDto);
  }

  @Get()
  async getInvoices(
    @Query('from') from: string,
    @Query('to') to: string,
    @Query('idCliente') idCliente: number,
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10
  ) {
    return await this.facturaService.getInvoices({ from, to, idCliente, page, limit });
  }

}

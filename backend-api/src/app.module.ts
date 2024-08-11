import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ClienteModule } from './cliente/cliente.module';
import { FacturaModule } from './factura/factura.module';

@Module({
  imports: [
    PrismaModule,
    ClienteModule,
    FacturaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

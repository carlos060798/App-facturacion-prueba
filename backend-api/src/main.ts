import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Habilitar CORS de forma predeterminada
  app.enableCors();

  // Habilitar CORS con opciones personalizadas
  app.enableCors({
    origin: 'http://localhost:5173', // Permitir solo este origen
    methods: 'GET,POST,PUT,DELETE', // Métodos permitidos
    allowedHeaders: 'Content-Type, Authorization', // Encabezados permitidos
  });
  app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();

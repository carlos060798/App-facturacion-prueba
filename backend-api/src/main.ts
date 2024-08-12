import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


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

  // Use DocumentBuilder to create a new Swagger document configuration
  const config = new DocumentBuilder()
    .setTitle('Api de Facruracion') // Set the title of the API
    .setDescription('Api para la creacion de clientes y facturas') // Set the description of the API
    .setVersion('0.1') // Set the version of the API
    .build(); // Build the document

  // Create a Swagger document using the application instance and the document configuration
  const document = SwaggerModule.createDocument(app, config);

  // Setup Swagger module with the application instance and the Swagger document
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();

markdown
Copiar código
# Proyecto Prueba de Minisistema de Facturación

## Descripción del Proyecto

Este proyecto es una aplicación web que gestiona clientes y facturas. Permite:

- Capturar datos de clientes a través de un formulario.
- Registrar facturas asociadas a clientes mediante otro formulario.
- Calcular automáticamente el IVA del 19% sobre el precio del producto.
- Aplicar descuentos que van desde el 0% hasta el 50%.
- Mostrar el valor total de la factura, considerando IVA y descuento.
- Almacenar y visualizar los datos ingresados en una tabla.

La aplicación facilita la gestión eficiente de información de clientes y facturas, realizando cálculos precisos y permitiendo un registro organizado de los datos.

## Tecnologías

El proyecto se desarrolló con las siguientes tecnologías:
- Node.js
- NestJS
- React
- MySQL

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/carlos060798/App-facturacion-prueba.git
Navega a la carpeta del proyecto:

bash
Copiar código
cd App-facturacion-prueba
Instala las dependencias:

bash
Copiar código
npm install
Navega a la carpeta del frontend:

bash
Copiar código
cd frontend
Instala las dependencias del frontend:

bash
Copiar código
npm install
Ejecución
Para ejecutar el proyecto, sigue estos pasos:

Inicia el servidor de la API:

Abre una terminal.
Ubica la carpeta raíz del proyecto.
Ejecuta el comando:
bash
Copiar código
npm run start:dev
Inicia el servidor del cliente:

Abre una terminal.
Ubica la carpeta frontend del proyecto.
Ejecuta el comando:
bash
Copiar código
npm start
Abre un navegador web y accede a la dirección:

arduino
Copiar código
http://localhost:5173/
## Documentación
Para ver la documentación de la API, accede a la siguiente URL:

bash
Copiar código
http://localhost:3000/api
La documentación está creada con Swagger.

## Documentación de Endpoints
Esta sección detalla los endpoints disponibles en la API del proyecto para la gestión de clientes y facturas.

### Endpoints para Clientes
Obtener Todos los Clientes
Método: GET
Ruta: /api/clientes
Descripción: Obtiene la lista de todos los clientes registrados en el sistema.
Respuesta:
json

[
  {
    "id": 1,
    "nombreCliente": "Nombre del Cliente"
  }
  // Más clientes...
]
### Crear un Nuevo Cliente
Método: POST
Ruta: /api/clientes
Descripción: Crea un nuevo cliente con la información proporcionada.
Cuerpo de la Solicitud:
json
Copiar código
{
  "nombreCliente": "Nombre del Cliente"
}
Respuesta:
json
Copiar código
{
  "id": 1,
  "nombreCliente": "Nombre del Cliente"
}
### Endpoints para Facturas
Obtener Todas las Facturas
Método: GET
Ruta: /api/factura
Descripción: Obtiene una lista de facturas según los filtros proporcionados (paginación, fechas, ID de cliente).
Parámetros de Consulta:
page: Número de página para la paginación.
limit: Número de facturas por página.
from: Fecha de inicio del rango de fechas.
to: Fecha de fin del rango de fechas.
idCliente: ID del cliente para filtrar las facturas.
Respuesta:
json
Copiar código
{
  "data": [
    {
      "id": 1,
      "fecha": "2024-08-11T00:00:00.000Z",
      "nombreProducto": "Nombre del Producto",
      "precio": 100.0,
      "descuento": 10,
      "idCliente": 1,
      "total": 90.0,
      "valorDescuento": 10.0
    }
    // Más facturas...
  ],
  "count": 100
}
### Crear una Nueva Factura
Método: POST
Ruta: /api/factura
Descripción: Crea una nueva factura con la información proporcionada.
Cuerpo de la Solicitud:
json

{
  "fecha": "2024-08-11",
  "nombreProducto": "Nombre del Producto",
  "precio": 100.0,
  "descuento": 10,
  "idCliente": 1,
  "total": 90.0,
  "valorDescuento": 10.0
}
Respuesta:
json

{
  "id": 1,
  "fecha": "2024-08-11T00:00:00.000Z",
  "nombreProducto": "Nombre del Producto",
  "precio": 100.0,
  "descuento": 10,
  "idCliente": 1,
  "total": 90.0,
  "valorDescuento": 10.0
}
Interfaz Factura
typescript
Copiar código
export interface Factura {
  id?: number;
  fecha: Date;
  nombreProducto: string;
  precio: number;
  descuento: number;
  idCliente: number;
  total: number;
  valorDescuento: number;
}






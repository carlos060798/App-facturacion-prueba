export interface Factura {
    id: string;
    idCliente: string;
    fecha: string;
    nombreProducto: string;
    precio: number;
    valorDescuento: number;
    iva: number;
    valorTotal: number;
  }
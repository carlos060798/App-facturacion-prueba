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
import { Factura } from '../interface/Factura-interface';

export const calculateIVA = (precio: number): number => {
  return precio * 0.19;
};

export const calculateDiscountValue = (precio: number, descuento: number): number => {
  return (precio * descuento) / 100;
};

export const calculateTotal = (precio: number, descuento: number, iva: number): number => {
  const discountValue = calculateDiscountValue(precio, descuento);
  return precio + iva - discountValue;
};

export const formatFacturaData = (data: Factura, total: number, watch: any): Factura => {
  return {
    ...data,
    idCliente: parseInt(data.idCliente.toString(), 10),
    precio: parseFloat(data.precio.toString()),
    descuento: parseFloat(data.descuento.toString()),
    total: total,
    valorDescuento: calculateDiscountValue(parseFloat(watch('precio')?.toString() || "0"), parseFloat(watch('descuento')?.toString() || "0")),
    fecha: new Date(data.fecha).toISOString().split('T')[0],
  };
};

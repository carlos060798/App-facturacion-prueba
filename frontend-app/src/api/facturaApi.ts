import axios from 'axios';
import { Factura } from '../interface/Factura-interface';



const urlfactura = 'http://localhost:3000/api/factura';


export const addFactura = async (factura: Factura) => {
    try {
        // Formatear la fecha al formato ISO-8601
        const facturaFormateada = {
            idCliente: factura.idCliente,
            fecha: new Date(factura.fecha).toISOString(), // Convertir la fecha al formato ISO-8601
            nombreProducto: factura.nombreProducto,
            precio: factura.precio,
            valorDescuento: factura.descuento, // Ajustar el nombre del campo
            total: factura.total // Ajustar el nombre del campo
        };

       

        // Enviar los datos formateados a la API
        const response = await axios.post(urlfactura, facturaFormateada);
       
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return Promise.reject(error);
        } else {
            throw new Error('Error desconocido');
        }
    }
};

export const getFacturas = async (page, limit, from, to, idCliente) => {
  const response = await axios.get(urlfactura, {
    params: {
      from,
      to,
      idCliente,
      page,
      limit,
    },
  });

  return {
    facturas: response.data.data,
    totalPages: Math.ceil(response.data.count / limit),
  };
};
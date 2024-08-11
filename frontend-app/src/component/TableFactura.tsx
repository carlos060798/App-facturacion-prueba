import { Factura } from '../interface/Factura-interface';

interface FacturaProps {
  facturas: Factura[];
}

function FacturasTable({ facturas }: FacturaProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-indigo-600 text-white">
          <tr>
            <th className="py-3 px-4 text-left">ID Cliente</th>
            <th className="py-3 px-4 text-left">Fecha</th>
            <th className="py-3 px-4 text-left">Nombre Producto</th>
            <th className="py-3 px-4 text-left">Precio</th>
            <th className="py-3 px-4 text-left">Valor Descuento</th>
            <th className="py-3 px-4 text-left">IVA</th>
            <th className="py-3 px-4 text-left">Valor Total</th>
          </tr>
        </thead>
        <tbody>
          {facturas.map((factura) => (
            <tr key={factura.id} className="border-b hover:bg-indigo-50">
              <td className="py-3 px-4">{factura.idCliente}</td>
              <td className="py-3 px-4">{factura.fecha}</td>
              <td className="py-3 px-4">{factura.nombreProducto}</td>
              <td className="py-3 px-4">{factura.precio}</td>
              <td className="py-3 px-4">{factura.valorDescuento}</td>
              <td className="py-3 px-4">{factura.iva}</td>
              <td className="py-3 px-4">{factura.valorTotal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FacturasTable;
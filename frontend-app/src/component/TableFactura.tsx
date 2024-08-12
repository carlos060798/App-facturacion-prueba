import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import LoadingSpinner from './Loading'; // Asegúrate de tener un componente de carga

interface Factura {
  id: number;
  idCliente: number;
  fecha: string;
  nombreProducto: string;
  precio: number;
  valorDescuento: number;
  iva: number;
  total: number;
}

interface FacturasResponse {
  data: Factura[];
  count: number;
}

const fetchFacturas = async (
  page: number,
  limit: number,
  from: string,
  to: string,
  idCliente: string
): Promise<FacturasResponse> => {
  const response = await axios.get('http://localhost:3000/api/factura', {
    params: { from, to, idCliente, page, limit },
  });
  return response.data;
};

function FacturasTable() {
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [from, setFrom] = useState<string>('');
  const [to, setTo] = useState<string>('');
  const [idCliente, setIdCliente] = useState<string>('');


  const { data, isLoading, isError, refetch } = useQuery<FacturasResponse>({
    queryKey: ['facturas', page, limit, from, to, idCliente],
    queryFn: () => fetchFacturas(page, limit, from, to, idCliente),
    enabled: false, // No ejecutar la consulta automáticamente
  });

  const handleFilterChange = () => {
    refetch(); // Disparar la consulta manualmente
  };

  const handlePageChange = (newPage: number) => {
    if (newPage > 0) {
      setPage(newPage);
    }
  };

  useEffect(() => {
    setPage(1);
  }, [limit]);

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <p>Error al cargar los datos</p>;

  const facturas = data?.data || [];
  const totalPages = Math.ceil(data?.count / limit) || 1;

  return (
    <div className="p-4">
      <div className="mb-4 grid grid-cols-3 gap-4">
        <div>
          <label htmlFor="from" className="block text-sm font-medium text-gray-700">
            Fecha desde
          </label>
          <input
            type="date"
            id="from"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label htmlFor="to" className="block text-sm font-medium text-gray-700">
            Fecha hasta
          </label>
          <input
            type="date"
            id="to"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label htmlFor="idCliente" className="block text-sm font-medium text-gray-700">
            ID Cliente
          </label>
          <input
            type="number"
            id="idCliente"
            value={idCliente}
            onChange={(e) => setIdCliente(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
      </div>
      <button
        onClick={handleFilterChange}
        className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
      >
        Aplicar Filtros
      </button>

      <div className="overflow-x-auto mt-4">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className='bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors'>
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
                <td className="py-3 px-4">{new Date(factura.fecha).toLocaleDateString()}</td>
                <td className="py-3 px-4">{factura.nombreProducto}</td>
                <td className="py-3 px-4">{factura.precio}</td>
                <td className="py-3 px-4">{factura.valorDescuento}</td>
                <td className="py-3 px-4">{factura.iva}</td>
                <td className="py-3 px-4">{factura.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between mt-4">
          <button
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg"
          >
            Anterior
          </button>
          <span>Página {page} de {totalPages}</span>
          <button
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg"
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
}

export default FacturasTable;

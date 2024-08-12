

import { useQuery } from '@tanstack/react-query';
import { getClientes } from '../api/clienteApi';
import { Cliente } from '../interface/Cliente-interface';
import LoadingSpinner from './Loading';

function ClientesTable() {
  const { data: clientes, isLoading, isError } = useQuery({
    queryKey: ['clientes'],
    queryFn: getClientes,
    retry: false,
  });

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <p>Error al cargar los datos</p>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead  className='bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors'>
          <tr>
            <th className="w-1/6 py-3 px-4 text-left">Id</th>
            <th className="w-1/6 py-3 px-4 text-left">Nombre</th>
            <th className="w-1/6 py-3 px-4 text-left">Tipo de Identificación</th>
            <th className="w-1/6 py-3 px-4 text-left">Número de Identificación</th>
            <th className="w-1/3 py-3 px-4 text-left">Observaciones</th>
          </tr>
        </thead>
        <tbody>
          {clientes?.map((cliente: Cliente) => (
            <tr key={cliente.id} className="border-b hover:bg-purple-50">
              <td className="py-3 px-4">{cliente.id}</td>
              <td className="py-3 px-4">{cliente.nombreCliente}</td>
              <td className="py-3 px-4">{cliente.tipoIdentificacion}</td>
              <td className="py-3 px-4">{cliente.numeroIdentificacion}</td>
              <td className="py-3 px-4">{cliente.observaciones}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClientesTable;
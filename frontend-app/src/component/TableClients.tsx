import { Cliente } from '../interface/Cliente-interface';
interface ClientesTableProps {
  clientes: Cliente[];
}

function ClientesTable({ clientes }: ClientesTableProps) 
{
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="w-1/6 py-3 px-4 text-left">Nombre</th>
              <th className="w-1/6 py-3 px-4 text-left">Tipo de Identificación</th>
              <th className="w-1/6 py-3 px-4 text-left">Número de Identificación</th>
              <th className="w-1/3 py-3 px-4 text-left">Observaciones</th>
              <th className="w-1/6 py-3 px-4 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <tr key={cliente.id} className="border-b hover:bg-indigo-50">
                <td className="py-3 px-4">{cliente.nombre}</td>
                <td className="py-3 px-4">{cliente.tipoIdentificacion}</td>
                <td className="py-3 px-4">{cliente.numeroIdentificacion}</td>
                <td className="py-3 px-4">{cliente.observaciones}</td>
                <td className="py-3 px-4">
                  <button className="text-indigo-600 hover:text-indigo-900">Ver</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default ClientesTable;
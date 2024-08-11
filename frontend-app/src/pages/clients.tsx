
/*import ClientesForm from "../component/ClienteForm";
import ClientesTable from "../component/TableClients";

function ClientHome(){
const clientes = [
    { id: '1', nombre: 'Juan Pérez', tipoIdentificacion: 'Cédula', numeroIdentificacion: '123456789', observaciones: 'Cliente regular' },
    { id: '2', nombre: 'María García', tipoIdentificacion: 'NIT', numeroIdentificacion: '987654321', observaciones: 'Cliente VIP' },
    // Agrega más clientes aquí para pruebas
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-12 gap-6">
        {/* Formulario de Cliente (ocupa 5 columnas) 
        <div className="col-span-12 md:col-span-5 bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Añadir Cliente</h2>
          <ClientesForm />
        </div>

        {/* Tabla de Clientes (ocupa 7 columnas) 
        <div className="col-span-12 md:col-span-7 bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Listado de Clientes</h2>
          <ClientesTable clientes={clientes} />
        </div>
      </div>
    </div>
  );
};

export default ClientHome;*/

import ClientesForm from "../component/ClienteForm";
import ClientesTable from "../component/TableClients";

function ClientHome(){
  return (
    <div className="container mx-auto p-6 bg-purple-50">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-4">
          <ClientesForm />
        </div>
        <div className="col-span-12 md:col-span-8 bg-white p-6 rounded shadow">
         
          <ClientesTable />
        </div>
      </div>
    </div>
  );
};

export default ClientHome;
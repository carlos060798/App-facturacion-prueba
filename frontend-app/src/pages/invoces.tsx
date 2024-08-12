import FacturaForm from "../component/FacturasForm";
import FacturasTable from "../component/TableFactura";


function FacturaHome() {
 

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-12 gap-6">
        {/* Formulario de Factura (ocupa 5 columnas) */}
        <div className="col-span-12 md:col-span-5 bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Añadir Factura</h2>
          <FacturaForm />
        </div>

        {/* Tabla de Facturas (ocupa 7 columnas) */}
        <div className="col-span-12 md:col-span-7 bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Listado de Facturas</h2>
          < FacturasTable/>
        </div>
      </div>
    </div>
  );
}

export default FacturaHome;
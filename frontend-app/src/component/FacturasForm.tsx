import React, { useState } from 'react';

function FacturaForm () {
  const [total, setTotal] = useState(0);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Facturas</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Cliente</label>
          <select className="mt-1 block w-full p-2 bg-gray-100 border border-gray-300 rounded-md">
            <option>Seleccionar cliente</option>
            {/* Añade más opciones aquí */}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Fecha</label>
          <input
            type="date"
            className="mt-1 block w-full p-2 bg-gray-100 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Nombre del producto</label>
          <input
            type="text"
            placeholder="Escribe nombre de producto"
            className="mt-1 block w-full p-2 bg-gray-100 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Precio</label>
          <input
            type="text"
            placeholder="Escribe precio"
            className="mt-1 block w-full p-2 bg-gray-100 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Valor de descuento</label>
          <input
            type="text"
            placeholder="Porcentaje"
            className="mt-1 block w-full p-2 bg-gray-100 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700">IVA</label>
          <input
            type="text"
            value="19%"
            readOnly
            className="mt-1 block w-full p-2 bg-gray-100 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-6">
          <p className="text-lg">Valor total de la factura: <span className="font-bold">{total}</span></p>
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
        >
          Enviar factura
        </button>
      </form>
    </div>
  );
};

export default FacturaForm;
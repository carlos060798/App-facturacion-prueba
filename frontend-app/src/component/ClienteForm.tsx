
function  ClientesForm(){

    return (
        <div className="container mx-auto mt-8 p-4">
          <h2 className="text-2xl font-bold mb-4">Clientes</h2>
          <form >
            <div className="mb-4">
              <label className="block mb-2">Nombre del Cliente</label>
              <input
                type="text"
                
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Escribe el nombre del cliente"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Tipo de Identificación</label>
              <select
              
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="">Selecciona</option>
                <option value="CC">Cédula de Ciudadanía</option>
                <option value="NIT">NIT</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2">Número de Identificación</label>
              <input
                type="text"
                
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Escribe número de identificación"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Observaciones</label>
              <textarea
               
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Escribe observaciones"
              ></textarea>
            </div>
            <button type="submit" className="bg-purple-500 text-white px-4 py-2 rounded">
              Guardar cliente
            </button>
          </form>
        </div>
      );
}

export default ClientesForm;

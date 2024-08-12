
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { addFactura } from "../api/facturaApi";
import { getClientes } from "../api/clienteApi";
import { Factura } from "../interface/Factura-interface";
import {
  calculateDiscountValue,
  calculateIVA,
  calculateTotal,
  formatFacturaData,
} from "../helpers/facturahelpers";
import { Cliente } from "../interface/Cliente-interface";

function FacturaForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Factura>();
  const queryClient = useQueryClient();

  const [total, setTotal] = useState<number>(0);
  const [iva, setIva] = useState<number>(0);

  const { data: clientes, isLoading, isError } = useQuery({
    queryKey: ["clientes"],
    queryFn: getClientes,
  });

  const handleCalculateTotal = () => {
    const precioStr = watch("precio")?.toString() || "0";
    const descuentoStr = watch("descuento")?.toString() || "0";

    const precio = parseFloat(precioStr);
    const descuento = parseFloat(descuentoStr);

    const ivaAmount = calculateIVA(precio);
    setIva(ivaAmount);

    const totalFactura = calculateTotal(precio, descuento, ivaAmount);
    setTotal(totalFactura);
  };

  const { mutate,reset} = useMutation({
    mutationFn: addFactura,
    onError: (err: unknown) => {
      toast.error(
        err instanceof Error
          ? "Error al crear la factura. Revisa los datos ingresados."
          : "Error al crear la factura, comunícate con el administrador."
      );
    },
    onSuccess: () => {
      toast.success("Factura creada correctamente");
      reset();
      queryClient.invalidateQueries({ queryKey: ["facturas"] });
    },
  });

  const onSubmit = (data: Factura) => {
    const facturaData = formatFacturaData(data, total, watch);
    mutate(facturaData);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Crear Factura</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Cliente Input */}
        <div className="mb-4">
          <label className="block text-gray-700">Cliente</label>
          {isLoading ? (
            <p>Cargando clientes...</p>
          ) : isError ? (
            <p>Error al cargar clientes.</p>
          ) : (
            <select
              {...register("idCliente", { required: "Selecciona un cliente" })}
              className="mt-1 block w-full p-2 bg-gray-100 border border-gray-300 rounded-md"
            >
              <option value="">Seleccionar cliente</option>
              {Array.isArray(clientes) &&
                clientes.map((cliente: Cliente) => (
                  <option key={cliente.id} value={cliente.id}>
                    {cliente.nombreCliente}
                  </option>
                ))}
            </select>
          )}
          {errors.idCliente && (
            <p className="text-red-500 text-sm mt-2">
              {errors.idCliente.message}
            </p>
          )}
        </div>

        {/* Fecha Input */}
        <div className="mb-4">
          <label className="block text-gray-700">Fecha</label>
          <input
            type="date"
            {...register("fecha", { required: "La fecha es obligatoria" })}
            className="mt-1 block w-full p-2 bg-gray-100 border border-gray-300 rounded-md"
          />
          {errors.fecha && (
            <p className="text-red-500 text-sm mt-2">{errors.fecha.message}</p>
          )}
        </div>

        {/* Nombre del Producto Input */}
        <div className="mb-4">
          <label className="block text-gray-700">Nombre del producto</label>
          <input
            type="text"
            {...register("nombreProducto", {
              required: "El nombre del producto es obligatorio",
            })}
            placeholder="Escribe el nombre del producto"
            className="mt-1 block w-full p-2 bg-gray-100 border border-gray-300 rounded-md"
          />
          {errors.nombreProducto && (
            <p className="text-red-500 text-sm mt-2">
              {errors.nombreProducto.message}
            </p>
          )}
        </div>

        {/* Precio Input */}
        <div className="mb-4">
          <label className="block text-gray-700">Precio</label>
          <input
            type="number"
            {...register("precio", { required: "El precio es obligatorio" })}
            placeholder="Escribe el precio"
            className="mt-1 block w-full p-2 bg-gray-100 border border-gray-300 rounded-md"
            onChange={handleCalculateTotal}
          />
          {errors.precio && (
            <p className="text-red-500 text-sm mt-2">{errors.precio.message}</p>
          )}
        </div>

        {/* Descuento Input */}
        <div className="mb-4">
          <label className="block text-gray-700">Descuento</label>
          <input
            type="number"
            {...register("descuento", {
              required: "El descuento es obligatorio",
              max: {
                value: 50,
                message: "El descuento no puede ser mayor a 50%",
              },
            })}
            placeholder="Escribe el descuento"
            className="mt-1 block w-full p-2 bg-gray-100 border border-gray-300 rounded-md"
            onChange={handleCalculateTotal}
          />
          {errors.descuento && (
            <p className="text-red-500 text-sm mt-2">
              {errors.descuento.message}
            </p>
          )}
        </div>

        {/* Descuento, IVA y Total */}
        <div className="mb-6">
          <p className="text-lg">
            Valor del descuento:
            <span className="font-bold">
              $
              {calculateDiscountValue(
                parseFloat(watch("precio")?.toString() || "0"),
                parseFloat(watch("descuento")?.toString() || "0")
              ).toFixed(2)}
            </span>
          </p>
        </div>

        <div className="mb-6">
          <p className="text-lg">
            IVA (19%): <span className="font-bold">${iva.toFixed(2)}</span>
          </p>
        </div>

        <div className="mb-6">
          <p className="text-lg">
            Valor total de la factura:{" "}
            <span className="font-bold">${total.toFixed(2)}</span>
          </p>
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
}

export default FacturaForm;

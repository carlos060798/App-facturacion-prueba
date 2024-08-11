/*
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { addCliente } from '../api/clienteApi';
import { Cliente } from '../interface/Cliente-interface';

function ClientesForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<Cliente>();
    const { mutate } = useMutation({
      mutationFn: addCliente,
      onError: (err: unknown) => {
          if (err instanceof Error) {
            
              toast.error("Error al crear el cliente. Recuerda que no puedes repetir los campos de nombre y número de identificación");
          } else {
              toast.error("Error al crear el cliente comuniquese con el administrador");
          }
      },
      onSuccess: () => {
          toast.success("Cliente creado correctamente");
          reset(); 
      }
  });

    const onSubmit = (data: Cliente) => {
        mutate(data);
    };

    return (
        <div className="container mx-auto mt-8 p-4">
            <h2 className="text-2xl font-bold mb-4">Clientes</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label className="block mb-2">Nombre del Cliente</label>
                    <input
                        type="text"
                        {...register('nombreCliente', { required: 'El nombre del cliente es obligatorio' })}
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Escribe el nombre del cliente"
                    />
                    {errors.nombreCliente && <p className="text-red-500 text-sm mt-2">{errors.nombreCliente.message}</p>}
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Tipo de Identificación</label>
                    <select
                        {...register('tipoIdentificacion', { required: 'El tipo de identificación es obligatorio' })}
                        className="w-full p-2 border border-gray-300 rounded"
                    >
                        <option value="">Selecciona</option>
                        <option value="CC">Cédula de Ciudadanía</option>
                        <option value="NIT">NIT</option>
                    </select>
                    {errors.tipoIdentificacion && <p className="text-red-500 text-sm mt-2">{errors.tipoIdentificacion.message}</p>}
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Número de Identificación</label>
                    <input
                        type="text"
                        {...register('numeroIdentificacion', { required: 'El número de identificación es obligatorio' })}
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Escribe número de identificación"
                    />
                    {errors.numeroIdentificacion && <p className="text-red-500 text-sm mt-2">{errors.numeroIdentificacion.message}</p>}
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Observaciones</label>
                    <textarea
                        {...register('observaciones')}
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

export default ClientesForm;import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { addCliente } from '../api/clienteApi';
import { Cliente } from '../interface/Cliente-interface';

function ClientesForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<Cliente>();
    const { mutate } = useMutation({
      mutationFn: addCliente,
      onError: (err: unknown) => {
          if (err instanceof Error) {
            
              toast.error("Error al crear el cliente. Recuerda que no puedes repetir los campos de nombre y número de identificación");
          } else {
              toast.error("Error al crear el cliente comuniquese con el administrador");
          }
      },
      onSuccess: () => {
          toast.success("Cliente creado correctamente");
          reset(); 
      }
  });

    const onSubmit = (data: Cliente) => {
        mutate(data);
    };

    return (
        <div className="container mx-auto mt-8 p-4">
            <h2 className="text-2xl font-bold mb-4">Clientes</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label className="block mb-2">Nombre del Cliente</label>
                    <input
                        type="text"
                        {...register('nombreCliente', { required: 'El nombre del cliente es obligatorio' })}
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Escribe el nombre del cliente"
                    />
                    {errors.nombreCliente && <p className="text-red-500 text-sm mt-2">{errors.nombreCliente.message}</p>}
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Tipo de Identificación</label>
                    <select
                        {...register('tipoIdentificacion', { required: 'El tipo de identificación es obligatorio' })}
                        className="w-full p-2 border border-gray-300 rounded"
                    >
                        <option value="">Selecciona</option>
                        <option value="CC">Cédula de Ciudadanía</option>
                        <option value="NIT">NIT</option>
                    </select>
                    {errors.tipoIdentificacion && <p className="text-red-500 text-sm mt-2">{errors.tipoIdentificacion.message}</p>}
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Número de Identificación</label>
                    <input
                        type="text"
                        {...register('numeroIdentificacion', { required: 'El número de identificación es obligatorio' })}
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Escribe número de identificación"
                    />
                    {errors.numeroIdentificacion && <p className="text-red-500 text-sm mt-2">{errors.numeroIdentificacion.message}</p>}
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Observaciones</label>
                    <textarea
                        {...register('observaciones')}
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

*/


import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { addCliente } from '../api/clienteApi';
import { Cliente } from '../interface/Cliente-interface';

function ClientesForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<Cliente>();
    const queryClient = useQueryClient(); // Obtener el queryClient para invalidar queries
    const { mutate } = useMutation({
      mutationFn: addCliente,
      onError: (err: unknown) => {
          if (err instanceof Error) {
              toast.error("Error al crear el cliente. Recuerda que no puedes repetir los campos de nombre y número de identificación");
          } else {
              toast.error("Error al crear el cliente, comuníquese con el administrador");
          }
      },
      onSuccess: () => {
          toast.success("Cliente creado correctamente");
          reset(); 
          queryClient.invalidateQueries('clientes'); 
      }
  });

    const onSubmit = (data: Cliente) => {
        mutate(data);
    };

    return (
        <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-bold mb-4 "> Clientes</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label className="block mb-2 font-medium">Nombre del Cliente</label>
                    <input
                        type="text"
                        {...register('nombreCliente', { required: 'El nombre del cliente es obligatorio' })}
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Escribe el nombre del cliente"
                    />
                    {errors.nombreCliente && <p className="text-red-500 text-sm mt-2">{errors.nombreCliente.message}</p>}
                </div>
                <div className="mb-4">
                    <label className="block mb-2 font-medium">Tipo de Identificación</label>
                    <select
                        {...register('tipoIdentificacion', { required: 'El tipo de identificación es obligatorio' })}
                        className="w-full p-2 border border-gray-300 rounded"
                    >
                        <option value="">Selecciona</option>
                        <option value="CC">Cédula de Ciudadanía</option>
                        <option value="NIT">NIT</option>
                    </select>
                    {errors.tipoIdentificacion && <p className="text-red-500 text-sm mt-2">{errors.tipoIdentificacion.message}</p>}
                </div>
                <div className="mb-4">
                    <label className="block mb-2 font-medium">Número de Identificación</label>
                    <input
                        type="text"
                        {...register('numeroIdentificacion', { required: 'El número de identificación es obligatorio' })}
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Escribe número de identificación"
                    />
                    {errors.numeroIdentificacion && <p className="text-red-500 text-sm mt-2">{errors.numeroIdentificacion.message}</p>}
                </div>
                <div className="mb-4">
                    <label className="block mb-2 font-medium">Observaciones</label>
                    <textarea
                        {...register('observaciones')}
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Escribe observaciones"
                    ></textarea>
                </div>
                <button type="submit" className="bg-slate-500 text-white px-4 py-2 rounded">
                    Guardar cliente
                </button>
            </form>
        </div>
    );
}

export default ClientesForm;
import axios from 'axios';
import { isAxiosError } from "axios";
import  { Cliente } from '../interface/Cliente-interface';


const URL = 'http://localhost:3000/api/clientes'; 

export const getClientes = async () => {
    try {
        const response = await axios.get(URL);
        return response.data;
    } catch (error) {
        if (isAxiosError(error)) {
            return error.response?.data
        }
    }
};

/*
export const addCliente = async (cliente: Cliente) => {
    try {
        const response = await axios.post(URL, cliente);
        return response.data;
    } catch (error) {
        if (isAxiosError(error)) {
            return error.response?.data
        }
    }
};
*/

export const addCliente = async (cliente: Cliente) => {
    try {
        const response = await axios.post(URL, cliente);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            // Rechaza la promesa para que useMutation pueda manejar el error
            return Promise.reject(error);
        } else {
            // Lanza un error genérico si no es un error de Axios
            throw new Error('Error desconocido');
        }
    }
};
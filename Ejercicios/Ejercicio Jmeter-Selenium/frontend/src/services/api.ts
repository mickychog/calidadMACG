// src/services/api.ts
import axios from 'axios';

const API_URL = 'http://localhost:3001/personas';

export const getPersonas = async () => {
    return axios.get(API_URL);
};

export const createPersona = async (personaData: any) => {
    console.log("Enviando datos al backend:", personaData);
    return axios.post(API_URL, personaData);
};

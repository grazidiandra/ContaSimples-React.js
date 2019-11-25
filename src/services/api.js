import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:8000/'
})

export const login = async (email, password) => {
  try {
    const response = await api.post('/login', { email, password });
    return response.data;
  } catch (error) {
    return error;
  }
 
};


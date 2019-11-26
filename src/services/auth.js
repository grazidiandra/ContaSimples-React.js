import { api } from './api';
import jwtDecode from "jwt-decode";
const TOKEN_KEY = 'basic-auth';


export const isAuthenticated = () => {
  const token = localStorage.getItem(TOKEN_KEY);
  if (token !== null) {
    const tokenPayload = jwtDecode(token);
    return tokenPayload
  } else {
    return false;
  }
};

export const setToken = token => localStorage.setItem(TOKEN_KEY, token);

export const login = async (email, password) => {
  try {
    const response = await api.post('/login', { email, password });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};
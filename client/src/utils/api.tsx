import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const api = axios.create({
    baseURL: `${process.env.API_URL}/api`,
    // 'http://localhost:8080/api',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['x-auth-token'] = token;
    }
    return config;
  });
  
  export default api;
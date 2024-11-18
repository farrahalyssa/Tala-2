import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5003/api',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // Retrieve token from localStorage
  if (token) {
    config.headers['x-auth-token'] = token;  }
  return config;
}, (error) => {
  return Promise.reject(error);
});
  export default api;
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://tala-2.vercel.app/api',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  
  api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token'); // Retrieve token from localStorage
        if (token) {
            config.headers['Authorization'] = token; // Attach token
        }
        return config;
    },
    (error) => Promise.reject(error) // Handle request errors
);


  export default api;
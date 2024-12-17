// import axios from 'axios';

// const api = axios.create({
//   baseURL: 'http://localhost:8080/api', // Replace with your backend base URL
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// export default api;
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api', // Replace with your backend base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include the token in all requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;

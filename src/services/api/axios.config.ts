import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL || 'https://VEVE.blog.webportal.com';

const axiosInstance = axios.create({
    baseURL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Handle unauthorized access
            // e.g., redirect to login
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;

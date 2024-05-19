/* eslint-disable indent */
import axios, { AxiosInstance } from 'axios';
import { getCookie } from 'cookies-next';

const ErrorCodeMessages: { [key: number]: string } = {
    401: 'Invalid credentials',
    403: 'Access Forbidden',
    404: 'Resource or page not found',
};

function HttpClient(): AxiosInstance {
    const httpClient = axios.create({
        baseURL: import.meta.env.VITE_BACKEND_URL,
        // timeout: 6000,
        // headers: {
        //     "Access-Control-Allow-Origin": "*",
        //     "Content-Type": "application/json",
        // },
    });

    // Add interceptor to include Authorization header with token
    httpClient.interceptors.request.use((config) => {
        const token = getCookie('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    });

    // Add response error handler
    httpClient.interceptors.response.use(
        (response) => response,
        (error) => {
            const status = error?.response?.status;
            const errorMessage =
                status && ErrorCodeMessages[status]
                    ? ErrorCodeMessages[status]
                    : error.response?.data?.message || error.message || 'Unknown error';
            return Promise.reject(errorMessage);
        }
    );

    return httpClient;
}

export default HttpClient();
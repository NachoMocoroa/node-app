import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import AuthService from './auth/authServices';
import { BASE_URL } from './constants';

const axiosClient: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        Accept: 'application/json', 
        'Content-Type': 'application/json'
    }
});

axiosClient.interceptors.request.use((config: AxiosRequestConfig) => {
    const token: string = AuthService.getToken() || null;
    token && (config.headers!.Authorization = `Bearer ${token}`);
    return config;
}, async (error: AxiosError) => {
    console.log('error: ', error);
    return await Promise.reject(error);
});

axiosClient.interceptors.response.use((response: AxiosResponse) => {
    return response.data;
}, async (error: AxiosError) => {
    console.log('error: ', error);
    return await Promise.reject(error);
});

export default axiosClient;

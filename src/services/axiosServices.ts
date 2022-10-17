import axiosClient from "./axiosClient";

export const axiosGetRequest = async (request: string): Promise<any> => {
    try {
        return await axiosClient.get(request);
    } catch (error: any) {
        return error?.response?.statusText + ': ' + error?.message;
    }
};

export const axiosPostRequest = async (request: string, params: any): Promise<any> => {
    try {
        return await axiosClient.post(request, params);
    } catch (error: any) {
        return error?.response?.statusText + ': ' + error?.message;
    }
};

export const axiosPatchRequest = async (request: string, params: any): Promise<any> => {
    try {
        return await axiosClient.patch(request, params);
    } catch (error: any) {
        return error?.response?.statusText + ': ' + error?.message;
    }
};

export const axiosDeleteRequest = async (request: string): Promise<any> => {
    try {
        await axiosClient.delete(request);
    } catch (error: any) {
        return error?.response?.statusText + ': ' + error?.message;
    }
};

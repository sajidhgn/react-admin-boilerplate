import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import config from "@/config";
import { getCookie } from "cookies-next";

const withToken: AxiosInstance = axios.create({
  baseURL: config.API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
  },
});

withToken.interceptors.request.use((config: any) => {
  const authToken = getCookie("token");

  config.headers["Content-Type"] = "application/json; charset=utf-8";

  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken}`;
  }

  return config;
});

type AxiosMethod = (url: string, data?: any) => Promise<AxiosResponse<any>>;

interface WithToken {
  [key: string]: AxiosMethod;
}

const withTokenMethods: WithToken = {
  get: withToken.get,
  post: withToken.post,
  update: withToken.put,
  delete: withToken.delete,
  put: withToken.put,
};

const makeApiRequest = async (
  method: AxiosMethod,
  endpoint: string,
  data: any,
) => {
  try {
    const response = await method(endpoint, data);
    return response;
  } catch (error) {
    // Handle AxiosError and rethrow if needed
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      throw axiosError.response?.data || axiosError.message;
    } else {
      throw error;
    }
  }
};

export const withTokenApiRequest = async (
  method: string,
  endpoint: string,
  data: any,
) => {
  const apiMethod = withTokenMethods[method];

  if (!apiMethod) {
    throw new Error(`Unsupported API method: ${method}`);
  }

  return makeApiRequest(apiMethod, endpoint, data);
};

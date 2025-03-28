import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
  RawAxiosRequestHeaders,
} from 'axios';

export interface CommonHeader {
  common: {
    Authorization?: string;
  };
}

export type AxiosHeader = RawAxiosRequestHeaders & CommonHeader;

export const instance = axios.create({
  baseURL: 'http://localhost:3000/',
});

instance.interceptors.response.use(
  async (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

instance.interceptors.request.use(
  async (request: InternalAxiosRequestConfig) => {
    return request;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

export const HTTP = {
  get: <ResponseType>(
    url: string,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<ResponseType>> => instance.get(url, options),
  post: <ParamType, ResponseType>(
    url: string,
    param?: ParamType,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<ResponseType>> => instance.post(url, param, options),
  put: <ParamType, ResponseType>(
    url: string,
    param?: ParamType,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<ResponseType>> => instance.put(url, param, options),
};

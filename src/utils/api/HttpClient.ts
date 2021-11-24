import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

const baseURL: string = "https://vidqjclbhmef.herokuapp.com";

export abstract class HttpClient {
  protected readonly instance: AxiosInstance;

  public constructor() {
    this.instance = axios.create({ baseURL });
    this.initializeResponseInterceptor();
  }

  private initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(this.handleResponse, this.handleError);
  };

  private handleResponse = ({ data }: AxiosResponse) => data;

  protected handleError = (error: AxiosError) => Promise.reject(error);
}

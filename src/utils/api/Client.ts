import { HttpClient } from "./HttpClient";
import { Credentials, User } from "constants/types";
import { AxiosRequestConfig } from "axios";
import { getToken } from "utils/helpers/token";

export class Client extends HttpClient {
  private static instance: Client;

  private constructor() {
    super();
    this.initializeRequestInterceptor();
  }

  public static getInstance() {
    if (!this.instance) {
      this.instance = new Client();
    }
    return this.instance;
  }

  private initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use(this.handleRequest, this.handleError);
  };

  private handleRequest = async (config: AxiosRequestConfig) => {
    const accessToken = await getToken("accessToken").catch(e => console.log(e));
    config.headers["Authorization"] = `Bearer ${accessToken}`;
    return config;
  };

  public getCredentials = async (params: object): Promise<Credentials> =>
    this.instance.post<Credentials>("/credentials", params);

  public getUser = async (): Promise<User> => this.instance.get<User>("/user");
}

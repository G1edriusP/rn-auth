import { AxiosRequestConfig } from "axios";
import { Credentials } from "constants/types";
import { HttpClient } from "./HttpClient";

export class Client extends HttpClient {
  private static instance: Client;

  private constructor() {
    super();
  }

  public static getInstance() {
    if (!this.instance) {
      this.instance = new Client();
    }
    return this.instance;
  }

  public getCredentials = (params: object) =>
    this.instance.post<Credentials>("/credentials", params);
}

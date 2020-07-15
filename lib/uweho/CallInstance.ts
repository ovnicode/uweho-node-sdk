import UwehoInstance from "./UwehoInstance";
import { AxiosRequestConfig } from "axios";
import { ICall } from "../interfaces";

export default class CallInstance {
  uweho: UwehoInstance;

  constructor(uweho: UwehoInstance) {
    this.uweho = uweho;
  }

  /**
   * Get a call by ID
   * @param id call ID
   * @param axiosRequestConfig axios request config
   */
  async call(id: string, axiosRequestConfig?: AxiosRequestConfig) {
    return this.uweho.axios.get<ICall>(
      `/api/${this.uweho.apiVersion}/calls/${id}`,
      axiosRequestConfig
    );
  }
}

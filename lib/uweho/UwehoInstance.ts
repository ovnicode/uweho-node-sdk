import Axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { IProjectUsage, IProject } from "../interfaces";
import TaskInstance from "./TaskInstance";
import CallInstance from "./CallInstance";

export default class UwehoInstance {
  baseUrl: string;
  apiKey: string;
  apiVersion: string;
  axios: AxiosInstance;

  constructor(init: { baseUrl: string; apiKey: string; apiVersion: "v1" }) {
    // initialize local key
    this.apiKey = init.apiKey;
    this.baseUrl = init.baseUrl;
    this.apiVersion = init.apiVersion;

    // initialize axios instance
    this.axios = Axios.create({
      baseURL: init.baseUrl,
      headers: {
        "X-Api-Key": init.apiKey,
      },
    });
  }

  /**
   * Get project usage
   * @param axiosRequestConfig axios request config
   */
  async usage(axiosRequestConfig?: AxiosRequestConfig) {
    return this.axios.get<IProjectUsage>(
      `api/${this.apiVersion}/project/usage`,
      axiosRequestConfig
    );
  }

  /**
   * Get project details
   * @param axiosRequestConfig axios request config
   */
  async details(axiosRequestConfig?: AxiosRequestConfig) {
    return this.axios.get<IProject>(
      `api/${this.apiVersion}/project/details`,
      axiosRequestConfig
    );
  }

  /**
   * Update a project
   * @param axiosRequestConfig axios request config
   */
  async update(axiosRequestConfig?: AxiosRequestConfig) {
    return this.axios.get<IProject>(
      `api/${this.apiVersion}/project/update`,
      axiosRequestConfig
    );
  }

  /**
   * Manage tasks
   * create, edit, get details, delete
   */
  tasks = new TaskInstance(this);

  /**
   * Manage calls
   * get call details
   */
  calls = new CallInstance(this);
}

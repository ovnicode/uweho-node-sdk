import { AxiosRequestConfig } from "axios";
import { ITask, IListResponse } from "../interfaces";
import UwehoInstance from "./UwehoInstance";

export default class TaskInstance {
  uweho: UwehoInstance;

  constructor(uweho: UwehoInstance) {
    this.uweho = uweho;
  }

  /**
   * Get all tasks
   * @param pagination pagination params
   * @param axiosRequestConfig axios request config
   */
  async list(
    pagination?: { page?: number; limit?: number },
    axiosRequestConfig?: AxiosRequestConfig
  ) {
    // axios config
    let config: AxiosRequestConfig = {};

    if (axiosRequestConfig) {
      // setup params
      const { params, ...configRest } = axiosRequestConfig;

      // extended params
      const extendedParams = params ?? {};

      // inject list params
      if (pagination) {
        if (pagination.page) extendedParams["page"] = pagination.page;
        if (pagination.limit) extendedParams["limit"] = pagination.limit;
      }

      // config
      config = {
        params: {
          ...pagination,
        },
        ...config,
        ...configRest,
      };
    }

    return this.uweho.axios.get<IListResponse<ITask>>(
      `/api/${this.uweho.apiVersion}/tasks`,
      config
    );
  }

  /**
   * Schedule a new task
   * @param data task data
   * @param axiosRequestConfig axios request config
   */
  async create(
    data: Omit<
      ITask,
      | "lastCallDate"
      | "nextCallDate"
      | "attemts"
      | "busy"
      | "lastNotificationAt"
      | "createdAt"
      | "updatedAt"
      | "cancelledAt"
      | "deletedAt"
      | "callTimelines"
    >,
    axiosRequestConfig?: AxiosRequestConfig
  ) {
    return this.uweho.axios.post<ITask>(
      `/api/${this.uweho.apiVersion}/tasks/schedule`,
      data,
      axiosRequestConfig
    );
  }

  /**
   * Get a task details
   * @param id task ID
   * @param axiosRequestConfig axios request config
   */
  async get(id: string, axiosRequestConfig?: AxiosRequestConfig) {
    return this.uweho.axios.get<ITask>(
      `/api/${this.uweho.apiVersion}/tasks/${id}`,
      axiosRequestConfig
    );
  }

  /**
   * Edit a task
   * @param taskId task ID
   * @param data updates
   * @param axiosRequestConfig axios request config
   */
  async edit(
    taskId: string,
    data: Omit<
      ITask,
      | "lastCallDate"
      | "nextCallDate"
      | "attemts"
      | "busy"
      | "lastNotificationAt"
      | "createdAt"
      | "updatedAt"
      | "cancelledAt"
      | "deletedAt"
      | "callTimelines"
    >,
    axiosRequestConfig?: AxiosRequestConfig
  ) {
    return this.uweho.axios.put<ITask>(
      `/api/${this.uweho.apiVersion}/tasks/${taskId}`,
      data,
      axiosRequestConfig
    );
  }

  /**
   * Delete a task
   * @param id task ID
   * @param axiosRequestConfig axios request config
   */
  async remove(id: string, axiosRequestConfig?: AxiosRequestConfig) {
    return this.uweho.axios.delete(
      `/api/${this.uweho.apiVersion}/tasks/${id}`,
      axiosRequestConfig
    );
  }

  /**
   * Get task calls
   * @param taskId task id
   * @param pagination pagination params
   * @param axiosRequestConfig axios request config
   */
  async calls(
    taskId: string,
    pagination?: { page?: number; limit?: number },
    axiosRequestConfig?: AxiosRequestConfig
  ) {
    // axios config
    let config: AxiosRequestConfig = {};

    if (axiosRequestConfig) {
      // setup params
      const { params, ...configRest } = axiosRequestConfig;

      // extended params
      const extendedParams = params ?? {};

      // inject list params
      if (pagination) {
        if (pagination.page) extendedParams["page"] = pagination.page;
        if (pagination.limit) extendedParams["limit"] = pagination.limit;
      }

      // config
      config = {
        params: {
          ...pagination,
        },
        ...config,
        ...configRest,
      };
    }

    return this.uweho.axios.get<IListResponse<ITask>>(
      `/api/${this.uweho.apiVersion}/tasks/${taskId}/calls`,
      config
    );
  }
}

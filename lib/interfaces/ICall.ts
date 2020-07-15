import { ITask } from "./ITask";

export default interface ICall {
  id: string;
  _id: string;
  __v: number;
  task: ITask;
  calledAt: Date;
  responseHttpStatus: number;
  success: boolean;
  isJsonResponse: boolean;
  responseData: any;
  deletedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

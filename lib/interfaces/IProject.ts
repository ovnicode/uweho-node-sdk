
import IUser from "./IUser";
import IProjectUsage from "./IProjectUsage";

export default interface IProject {
  name: string;
  description: string;
  user: string | IUser;
  apiKey: string;
  website: string;
  webhookHash: string;
  taskExecutionAttemptsLimit: number;
  activeTasksLimit: number;
  montlyExecutionsLimit: number;
  logResponses: boolean;
  notifyOnExecutionFail: boolean;
  notificationEmail: string;
  executionLimitReached: boolean;
  createdAt: Date;
  updatedAt: Date;
}

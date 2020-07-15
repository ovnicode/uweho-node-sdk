import IProject from "./IProject";

export default interface IProjectUsage {
  project: IProject;
  month: string;
  tasks: number;
  successfulCalls: number;
  failedCalls: number;
  calls: number;
  createdAt: Date;
  updatedAt: Date;
  incrementSuccessfulCalls: () => Promise<void>;
  incrementFailedCalls: () => Promise<void>;
  incrementTasks: () => Promise<void>;
}

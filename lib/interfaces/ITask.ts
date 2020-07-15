import IProject from "./IProject";
import ICallTimeline from "./ICallTimeline";

export default interface ITask {
  project: IProject;
  callbackUrl: string;
  callHttpMethod:
    | "POST"
    | "PUT"
    | "DELETE"
    | "GET"
    | "get"
    | "delete"
    | "head"
    | "HEAD"
    | "options"
    | "OPTIONS"
    | "post"
    | "put"
    | "patch"
    | "PATCH"
    | "link"
    | "LINK"
    | "unlink"
    | "UNLINK";
  targetedHttpStatus?: number;
  payload?: any;
  params?: any;
  headers?: any;
  callTimelines: ICallTimeline[];
  cron: string;
  runAt: Date;
  lastCallDate?: Date;
  nextCallDate: Date;
  attempts: number;
  busy: boolean;
  /**
   * When a task execution fail, a notification message is sent to the email related to the project. After sending notification, the lastNotificationAt attribute is initialized.
   * After been initialized, only the a success call can remove the previous value. It means that the project owner has to fix error before being notified again.
   */
  lastNotificationAt?: Date;
  createdAt: Date;
  executedAt: Date | undefined;
  cancelledAt: Date | undefined;
  updatedAt: Date | undefined;
  deletedAt: Date | undefined;
}

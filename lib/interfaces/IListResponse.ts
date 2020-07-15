import { ITask } from ".";

export default interface IListResponse<T> {
  docs: T[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}

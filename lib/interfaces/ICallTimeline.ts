export default interface ICallTimeline {
  period: number; // default 0
  iterations: number; // default 1
  nextCallDate?: Date; // default task's run at date
}

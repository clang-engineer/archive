export interface IJobExecution {
  id?: number;
  jobName?: string;
  status?: string;
  startTime?: string;
  endTime?: string;
  exitCode?: string;
  exitDescription?: string;
  lastUpdated?: string;
}

export const defaultValue: Readonly<IJobExecution> = {};
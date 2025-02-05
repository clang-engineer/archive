import React from 'react';
import {IJobExecution} from "../../shared/model/job-execution.model";

interface IJobExecutionProps {
  jobExecution: IJobExecution;
}

const JobExecution = (props: IJobExecutionProps) => {
  const {jobExecution} = props;

  return (
      <div className={`job-execution ${jobExecution.status.toLowerCase()}`}
           data-id={jobExecution.id}>
        <div>id: {jobExecution.id}</div>
        <div>jobName: {jobExecution.jobName}</div>
        <div>status: {jobExecution.status}</div>
        <div>startTime: {jobExecution.startTime}</div>
        <div>endTime: {jobExecution.endTime}</div>
        <div>exitCode: {jobExecution.exitCode}</div>
        <div>exitDescription: {jobExecution.exitDescription}</div>
        <div>lastUpdated: {jobExecution.lastUpdated}</div>
        <div className="button-group">
          <button className="stop-button"
                  onClick={() => fetch(`api/job/executions/${jobExecution.id}/stop`, {method: 'POST'})}>Stop
          </button>
          <button className="restart-button"
                  onClick={() => fetch(`api/job/executions/${jobExecution.id}/restart`, {method: 'POST'})}
          >Restart
          </button>
          <button className="delete-button">Delete</button>
        </div>
      </div>
  );
};

export default JobExecution;
import React from 'react';
import { IJobExecution } from "../../shared/model/job-execution.model";
import Button from "../../shared/component/button/gradient-button";

interface IJobExecutionProps {
  jobExecution: IJobExecution;
}

const JobExecution = (props: IJobExecutionProps) => {
  const {jobExecution} = props;

  return (
      <div className="p-4" data-id={jobExecution.id}>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gray-100 p-4">
            <h3 className="text-lg font-semibold">{jobExecution.jobName}</h3>
          </div>
          <div className="p-4">
            <p className="text-sm text-gray-500">id: {jobExecution.id}</p>
            <p className="text-sm text-gray-500">jobName: {jobExecution.jobName}</p>
            <p className="text-sm text-gray-500">status: {jobExecution.status}</p>
            <p className="text-sm text-gray-500">startTime: {jobExecution.startTime}</p>
            <p className="text-sm text-gray-500">endTime: {jobExecution.endTime}</p>
            <p className="text-sm text-gray-500">exitCode: {jobExecution.exitCode}</p>
            <p className="text-sm text-gray-500">exitDescription: {jobExecution.exitDescription}</p>
            <p className="text-sm text-gray-500">lastUpdated: {jobExecution.lastUpdated}</p>
          </div>
          <div className="bg-gray-100 p-4 flex justify-content-end">
            <Button
                onClick={() => fetch(`api/job/executions/${jobExecution.id}/stop`, {method: 'POST'})}
            > Stop </Button>
            <Button
                onClick={() => fetch(`api/job/executions/${jobExecution.id}/restart`, {method: 'POST'})}
            > Restart </Button>
            <Button> Delete </Button>
          </div>
        </div>
      </div>
  );
};

export default JobExecution;

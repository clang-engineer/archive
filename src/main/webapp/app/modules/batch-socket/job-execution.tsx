import React from 'react';
import {IJobExecution} from "../../shared/model/job-execution.model";
import Button from "../../shared/component/button";

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
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 mr-1"
                onClick={() => fetch(`api/job/executions/${jobExecution.id}/stop`, {method: 'POST'})}
            > Stop </Button>
            <Button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mr-1"
                onClick={() => fetch(`api/job/executions/${jobExecution.id}/restart`, {method: 'POST'})}
            > Restart </Button>
            <Button className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600">
              Delete
            </Button>
          </div>
        </div>
      </div>
  );
};

export default JobExecution;

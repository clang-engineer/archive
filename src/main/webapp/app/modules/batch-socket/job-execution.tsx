import React from 'react';
import {IJobExecution} from "../../shared/model/job-execution.model";

import {Button, Card, Grid} from "tabler-react";


interface IJobExecutionProps {
  jobExecution: IJobExecution;
}

const JobExecution = (props: IJobExecutionProps) => {
  const {jobExecution} = props;

  return (
      <Grid.Col md={3} data-id={jobExecution.id}>
        <Card>
          <Card.Header>
            <Card.Title>{jobExecution.jobName}</Card.Title>
          </Card.Header>
          <Card.Body>
            <div>id: {jobExecution.id}</div>
            <div>jobName: {jobExecution.jobName}</div>
            <div>status: {jobExecution.status}</div>
            <div>startTime: {jobExecution.startTime}</div>
            <div>endTime: {jobExecution.endTime}</div>
            <div>exitCode: {jobExecution.exitCode}</div>
            <div>exitDescription: {jobExecution.exitDescription}</div>
            <div>lastUpdated: {jobExecution.lastUpdated}</div>
          </Card.Body>
          <Card.Footer>
            <Button.List>
              <Button className="stop-button"
                      onClick={() => fetch(`api/job/executions/${jobExecution.id}/stop`, {method: 'POST'})}>Stop
              </Button>
              <Button className="restart-button"
                      onClick={() => fetch(`api/job/executions/${jobExecution.id}/restart`, {method: 'POST'})}
              >Restart
              </Button>
              <Button className="delete-button">Delete</Button>
            </Button.List>
          </Card.Footer>
        </Card>
      </Grid.Col>
  );
};

export default JobExecution;
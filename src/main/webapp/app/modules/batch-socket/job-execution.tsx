import React from 'react';
import {IJobExecution} from "../../shared/model/job-execution.model";

import {Button, Card, Grid, Text} from "tabler-react";


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
            <Text.Small>id: {jobExecution.id}</Text.Small><br/>
            <Text.Small>jobName: {jobExecution.jobName}</Text.Small><br/>
            <Text.Small>status: {jobExecution.status}</Text.Small><br/>
            <Text.Small>startTime: {jobExecution.startTime}</Text.Small><br/>
            <Text.Small>endTime: {jobExecution.endTime}</Text.Small><br/>
            <Text.Small>exitCode: {jobExecution.exitCode}</Text.Small><br/>
            <Text.Small>exitDescription: {jobExecution.exitDescription}</Text.Small><br/>
            <Text.Small>lastUpdated: {jobExecution.lastUpdated}</Text.Small><br/>
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
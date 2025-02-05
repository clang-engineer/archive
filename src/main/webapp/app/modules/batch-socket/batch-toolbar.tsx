import React from 'react';

import {Button, Form, Grid} from "tabler-react";


const BatchToolbar = React.forwardRef((props, ref) => {
  const [jobName, setJobName] = React.useState<string>('');
  const [query, setQuery] = React.useState<string>('');
  const [cronExpression, setCronExpression] = React.useState('0/5 * * * * ?');

  const onSubmit = (e) => {
    e.preventDefault();

    if (!jobName || !query || !cronExpression) {
      alert(`Please fill in all fields : jobName=${jobName}, query=${query}, cronExpression=${cronExpression}`);
      return;
    }

    fetch('api/quartz/schedule', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jobName,
        query,
        cronExpression,
      }),
    })
    .then(response => {
      if (!response.ok) {  // 2xx 범위 외의 상태 코드가 올 경우
        return Promise.reject('Error scheduling job');
      }
      return response
    })
    .then(() => {
      setJobName('');
      setQuery('');
      setCronExpression('0/5 * * * * ?');

      alert('Job scheduled');
    })
    .catch((error) => {
      alert(error || 'Error scheduling job');
    });
  }

  return <Grid.Row>
    <Grid.Col>
      <Form>
        <Grid.Row>
          <Grid.Col>
            <Form.Input type="text" id="job-name" placeholder="job name"
                        value={jobName}
                        onChange={(e) => setJobName(e.target.value)}
            />
          </Grid.Col>
          <Grid.Col>
            <Form.Input type="text" id="query" placeholder="query"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
            />
          </Grid.Col>
          <Grid.Col>
            <Form.Input type="text" id="cron-expression" placeholder="cron expression"
                        value="0/5 * * * * ?"
                        onChange={(e) => setCronExpression(e.target.value)}
            />
          </Grid.Col>
        </Grid.Row>
      </Form>
    </Grid.Col>
    <Grid.Col>
      <Button.List>
        <Button color="primary"
                onClick={() => onSubmit(event)}>
          schedule
        </Button>
        <Button color="secondary" onClick={() => {
          fetch('api/quartz/pause', {method: 'POST'})
        }}>
          Pause all
        </Button>
        <Button color="warnging" onClick={() => {
          fetch('api/quartz/resume', {method: 'POST'})
        }}>
          Resume all
        </Button>
      </Button.List>
    </Grid.Col>
  </Grid.Row>

});

export default BatchToolbar;
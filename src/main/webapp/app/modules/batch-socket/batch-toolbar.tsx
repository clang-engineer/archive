import React from 'react';

import {Form, Grid, Button} from "tabler-react";


const BatchToolbar = React.forwardRef((props, ref) => {
  const [cronExpression, setCronExpression] = React.useState('0/5 * * * * ?');

  const onSubmit = (e) => {
    e.preventDefault();
    fetch('api/quartz/schedule', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cronExpression,
        jobDataMap: {
          key1: 'value1',
          key2: 'value2',
        },
      }),
    })
  }

  return <Grid.Row>
    <Grid.Col>
      <Form>
        <Grid.Row>
          <Grid.Col>
            <Form.Input type="text" id="job-name" placeholder="job name"/>
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
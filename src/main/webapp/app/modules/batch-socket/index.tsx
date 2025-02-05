import React, {useEffect, useState} from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'webstomp-client';
import JobExecution from "./job-execution";
import {IJobExecution} from "../../shared/model/job-execution.model";

const BatchSocket = () => {
  const [jobExecutions, setJobExecutions] = useState<IJobExecution[]>([]);

  useEffect(() => {
    fetch('api/job/executions')
    .then(response => response.json())
    .then(data => {
      setJobExecutions(data);
    })
    .then(() => {
      connectStomp();
    });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    fetch('api/quartz/schedule', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cronExpression: (document.getElementById('cron-expression') as HTMLInputElement).value,
        jobDataMap: {
          key1: 'value1',
          key2: 'value2',
        },
      }),
    })
  }

  const connectStomp = () => {
    const socket = new SockJS('/websocket/tracker');
    const stompClient = Stomp.over(socket);

    stompClient.connect({}, function (frame) {
      stompClient.subscribe('/topic/batch-status', function (message) {
        const jobExecution = JSON.parse(message.body) as IJobExecution

        setJobExecutions((prevJobExecutions) => {
          const founded = prevJobExecutions.find((execution) => execution.id === jobExecution.id);

          if (founded) {
            const index = prevJobExecutions.indexOf(founded);
            return [...prevJobExecutions.slice(0, index), jobExecution, ...prevJobExecutions.slice(index + 1)];
          } else {
            return [...prevJobExecutions, jobExecution];
          }
        });
      });
    });
  }
  return (
      <>
        <form>
          <input type="text" id="job-name" placeholder="job name"/>
          <input type="text" id="cron-expression" placeholder="cron expression"
                 value="0/5 * * * * ?"/>
          <button onClick={() => onSubmit(event)}>
            schedule
          </button>
          <button type="button" onClick={() => {
            fetch('api/quartz/pause', {method: 'POST'})
          }}>
            pause all
          </button>
          <button type="button" onClick={() => {
            fetch('api/quartz/resume', {method: 'POST'})
          }}>
            resume all
          </button>
        </form>
        <div>
          <div>title: job execution list</div>
          <div id="job-executions" className="row">
            {jobExecutions.map((jobExecution) => (
                <JobExecution jobExecution={jobExecution} key={jobExecution.id}/>
            ))}
          </div>
        </div>
      </>
  );
}

export default BatchSocket;
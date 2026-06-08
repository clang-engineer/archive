import React, {useEffect, useState} from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'webstomp-client';
import JobExecution from "./job-execution";
import {IJobExecution} from "../../shared/model/job-execution.model";
import BatchToolbar from "./batch-toolbar";
import Divider from "../../shared/component/divider";
import Loader from "../../shared/component/Loader";

const BatchSocket = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [jobExecutions, setJobExecutions] = useState<IJobExecution[]>([]);

  useEffect(() => {
    setLoading(true);
    fetch('api/job/executions')
    .then(response => response.json())
    .then(data => {
      setJobExecutions(data);
    })
    .then(() => {
      connectStomp();
    })
    .finally(() => {
      setLoading(false);
    });
  }, []);

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
        <BatchToolbar/>
        <Divider/>
        {loading && <Loader/>}
        <div className="grid grid-cols-4 gap-4">
          {
              !loading && jobExecutions.length === 0 &&
              <div>
                <p>No job executions
                </p>
              </div>
          }
          {jobExecutions.map((jobExecution) => (
              <JobExecution jobExecution={jobExecution} key={jobExecution.id}/>
          ))}
        </div>
      </>
  );
}

export default BatchSocket;
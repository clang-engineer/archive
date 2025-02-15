import React from 'react';
import Button from "../../shared/component/Button";

const InputField = ({label, id, placeholder, value, onChange}) => (
    <div>
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900">
        {label}
      </label>
      <input
          type="text"
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
    </div>
);

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

  return <div className=" grid grid-cols-3 gap-4">
    <InputField label=" Job name" id=" job-name" placeholder=" job name" value={jobName}
                onChange={(e) => setJobName(e.target.value)}/>
    <InputField label=" Query" id=" query" placeholder=" query" value={query}
                onChange={(e) => setQuery(e.target.value)}/>
    <InputField label=" Cron expression" id=" cron-expression" placeholder=" cron expression"
                value={cronExpression} onChange={(e) => setCronExpression(e.target.value)}/>
    <div>
      <Button className=" bg-green-500 hover:bg-green-500 active:bg-green-700 mr-2"
              onClick={(e) => {
                onSubmit(e);
              }}> Schedule</Button>
      <Button className=" bg-blue-500 hover:bg-blue-600 active:bg-blue-700 mr-2"
              onClick={() => fetch('api/quartz/pause', {method: 'POST'})}>Pause all</Button>
      <Button
          className=" bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700"
          onClick={() => fetch('api/quartz/resume', {method: 'POST'})}>Resume all</Button>
    </div>
  </div>
});

export default BatchToolbar;
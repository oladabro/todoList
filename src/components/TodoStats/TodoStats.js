import React from 'react';
import { useRecoilValue } from 'recoil';
import { tasksCompletionState, thresholdState } from '../../shared/globalState';
import { Section } from './TodoStatsStyle';

export default function TodoStats() {
  const status = useRecoilValue(tasksCompletionState);
  const message = useRecoilValue(thresholdState);

  console.log(message);

  return (
    <Section>
      <h3>Here are your statistics:</h3>
      <p>Total task: {status.all} </p>
      <p>Tasks completed: {status.completed} </p>
      <p>Tasks to be done: {status.notFinished}</p>
      <p>{`Percent completed: ${status.percent.toFixed(0)}%`}</p>
      {message}
    </Section>
  );
}

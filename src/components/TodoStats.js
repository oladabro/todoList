import React from 'react';
import { useRecoilValue } from 'recoil';
import { tasksCompletionState } from '../shared/globalState';

export default function TodoStats() {
  const status = useRecoilValue(tasksCompletionState);

  return (
    <section>
      <p>Total task: {status.all} </p>
      <p>Tasks completed: {status.completed} </p>
      <p>Tasks to be done: {status.notFinished}</p>
      <p>{`Percent completed: ${status.percent.toFixed(0)}%`}</p>
    </section>
  );
}

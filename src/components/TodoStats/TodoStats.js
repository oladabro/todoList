import React from 'react';
import { useRecoilValue } from 'recoil';
import { tasksCompletionState, thresholdState } from '../../state/globalState';
import { Section } from './TodoStatsStyle';

export default function TodoStats() {
  const status = useRecoilValue(tasksCompletionState);
  const message = useRecoilValue(thresholdState);

  // console.log(message);

  return (
    <Section>
      <img
        src={require(`../../images/tasks.jpg`).default}
        alt='tasks_photo'
        height='150px'
      />
      {/* <div> */}
      <h3>Here are your statistics:</h3>
      <p>
        Total tasks: <strong>{status.all} </strong>
      </p>
      <p>
        Tasks completed: <strong>{status.completed} </strong>
      </p>
      <p>
        Tasks to be done: <strong>{status.notFinished}</strong>
      </p>
      <p>
        Percent completed: <strong>{status.percent.toFixed(0)}%</strong>
      </p>
      {/* </div> */}
      {message}
    </Section>
  );
}

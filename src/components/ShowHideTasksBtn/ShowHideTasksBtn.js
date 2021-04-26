import React from 'react';
import { useRecoilState } from 'recoil';
import { doneTasksBtnState } from '../../state/globalState';

export default function ShowHideTasksBtn() {
  const [btnState, setBtnState] = useRecoilState(doneTasksBtnState);
  return (
    <div>
      {btnState ? (
        <button onClick={() => setBtnState(!btnState)}>Show all tasks</button>
      ) : (
        <button onClick={() => setBtnState(!btnState)}>
          Hide finished tasks
        </button>
      )}
    </div>
  );
}

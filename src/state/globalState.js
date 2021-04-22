import { atom, selector } from 'recoil';

export const todoListState = atom({
  key: 'todoListState',
  default: [],
});

export const inputTextState = atom({
  key: 'inputTextState',
  default: 0,
});

export const tasksCompletionState = selector({
  key: 'tasksCompletedState',
  get: ({ get }) => {
    const tasks = get(todoListState);
    const tasksCompletedArray = tasks.filter((task) => task.isDone === true);
    const tasksCompleted = tasksCompletedArray.length;
    const percentCompleted =
      tasks.length === 0 ? 0 : (tasksCompleted / tasks.length) * 100;

    return {
      completed: tasksCompleted,
      notFinished: tasks.length - tasksCompleted,
      all: tasks.length,
      percent: percentCompleted,
    };
  },
});

export const doneTasksBtnState = atom({
  key: 'hideDoneTasks',
  default: false,
});

export const filteredTasksState = selector({
  key: 'filteredTasksState',
  get: ({ get }) => {
    const btnStatus = get(doneTasksBtnState);
    const taskList = get(todoListState);

    if (btnStatus) {
      return taskList.filter((task) => !task.isDone);
    } else if (!btnStatus) {
      return taskList;
    }
  },
});

export const searchTermState = atom({
  key: 'searchTermState',
  default: '',
});

export const thresholdState = selector({
  key: 'thresholdState',
  get: ({ get }) => {
    const percent = get(tasksCompletionState);

    const threshold = {
      0: 'The hardest thing is to start',
      10: 'Uuuu you are a bit lazy',
      20: 'Not in the mood for work today?',
      30: 'Go get yourself a cup of coffee, you are on a good track',
      40: 'Nice, you are warming up!',
      50: 'Well done! you are half way through!',
      60: 'You are getting closer. Do not give up!',
      70: 'Not many left',
      80: 'You are almost there!',
      90: 'Well done! you are a doer!',
      100: 'Level pro achieved',
    };

    if (percent == 100) {
      return <div>Level pro achieved</div>;
    }
  },
});

export const priorityState = atom({
  key: 'priorityState',
  default: 'low',
});
